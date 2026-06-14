"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Image, { IImage } from "../database/models/image.model";
import { redirect } from "next/navigation";
import { v2 as cloudinary } from "cloudinary";
import { currentUser } from "@clerk/nextjs/server";
import User from "../database/models/user.model";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

function toPlainObject<T>(doc: T): T {
  return JSON.parse(JSON.stringify(doc));
}

// ADD IMAGE
export async function addImage({ image, userId, path }: AddImageParams & { userId: string }) {
  try {
    await connectToDatabase();

    const author = await User.findById(userId);
    if (!author) throw new Error("User not found");

    const newImage = await Image.create({ ...image, author: author._id });
    revalidatePath(path);
    return toPlainObject(newImage);
  } catch (error) {
    handleError(error);
  }
}

// UPDATE IMAGE
export async function updateImage({ image, userId, path }: UpdateImageParams & { userId: string }) {
  try {
    await connectToDatabase();

    const clerkUser = await currentUser();
    const imageToUpdate = await Image.findById(image._id).populate("author");

    if (!imageToUpdate) throw new Error("Image not found");
    if ((imageToUpdate.author as { clerkId: string }).clerkId !== clerkUser?.id) {
      throw new Error("Unauthorized");
    }

    const updatedImage = await Image.findByIdAndUpdate(imageToUpdate._id, image, { new: true });
    revalidatePath(path);
    return toPlainObject(updatedImage);
  } catch (error) {
    handleError(error);
  }
}

// DELETE IMAGE
export async function deleteImage(imageId: string) {
  try {
    await connectToDatabase();

    const clerkUser = await currentUser();
    const image = await Image.findById(imageId).populate("author");

    if (!image) throw new Error("Image not found");
    if ((image.author as { clerkId: string }).clerkId !== clerkUser?.id) {
      throw new Error("Unauthorized");
    }

    await Image.findByIdAndDelete(imageId);
  } catch (error) {
    handleError(error);
  } finally {
    redirect("/main");
  }
}

// GET IMAGE
export async function getImageById(imageId: string): Promise<IImage | undefined> {
  try {
    await connectToDatabase();
    const image = await Image.findById(imageId).populate("author");
    if (!image) throw new Error("Image not found");
    return toPlainObject(image) as IImage;
  } catch (error) {
    handleError(error);
  }
}

// GET ALL IMAGES (with optional search)
export async function getAllImages({
  limit = 9,
  page = 1,
  searchQuery = "",
}: {
  limit?: number;
  page: number;
  searchQuery?: string;
}) {
  try {
    await connectToDatabase();

    let query: Record<string, unknown> = {};

    if (searchQuery) {
      const { resources } = await cloudinary.search
        .expression(`folder=Snapsavvy AND ${searchQuery}`)
        .execute();

      const resourceIds = resources.map(
        (resource: { public_id: string }) => resource.public_id
      );
      query = { publicId: { $in: resourceIds } };
    }

    const skipAmount = (Number(page) - 1) * limit;

    const [images, totalImages, savedImages] = await Promise.all([
      Image.find(query).sort({ updatedAt: -1 }).skip(skipAmount).limit(limit).lean(),
      Image.countDocuments(query),
      Image.countDocuments(),
    ]);

    return {
      data: toPlainObject(images),
      totalPage: Math.ceil(totalImages / limit),
      savedImages,
    };
  } catch (error) {
    handleError(error);
  }
}

// GET IMAGES BY USER
export async function getUserImages({
  limit = 9,
  page = 1,
  userId,
}: {
  limit?: number;
  page: number;
  userId: string;
}) {
  try {
    await connectToDatabase();

    const skipAmount = (Number(page) - 1) * limit;

    const [images, totalImages] = await Promise.all([
      Image.find({ author: userId })
        .sort({ updatedAt: -1 })
        .skip(skipAmount)
        .limit(limit)
        .lean(),
      Image.countDocuments({ author: userId }),
    ]);

    return {
      data: toPlainObject(images),
      totalPages: Math.ceil(totalImages / limit),
    };
  } catch (error) {
    handleError(error);
  }
}

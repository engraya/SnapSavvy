import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import Header from "@src/components/shared/Header";
import TransformedImage from "@src/components/shared/TransformedImage";
import { Button } from "@/components/ui/button";
import { getImageById } from "@src/lib/actions/image.actions";
import { getImageSize } from "@src/lib/utils";
import { DeleteConfirmation } from "@src/components/shared/DeleteConfirmation";

const ImageDetails = async ({ params: { id } }: SearchParamProps) => {
  const user = await currentUser();
  const userId = user?.id;

  const image = await getImageById(id);

  if (!image) redirect("/main");

  return (
    <>
      <Header title={image.title} />

      <section className="mt-5">
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Type", value: image.transformationType },
            image.prompt ? { label: "Prompt", value: image.prompt } : null,
            image.color ? { label: "Color", value: image.color } : null,
            image.aspectRatio ? { label: "Ratio", value: image.aspectRatio } : null,
          ].filter(Boolean).map((meta) => (
            <div key={meta!.label} className="chip-purple">
              <span className="text-slate-500 dark:text-slate-400 text-xs">{meta!.label}:</span>
              <span className="font-semibold capitalize">{meta!.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 border-t border-dark-400/15">
        <div className="transformation-grid">
          <div className="flex flex-col gap-4">
            <h3 className="h3-bold gradient-accent-text">
              Original Image
            </h3>
            <Image
              width={getImageSize(image.transformationType, image, "width")}
              height={getImageSize(image.transformationType, image, "height")}
              src={image.secureURL}
              alt="image"
              className="transformation-original_image"
            />
          </div>

          <TransformedImage
            image={image as unknown as UploadedImage}
            type={image.transformationType}
            title={image.title}
            isTransforming={false}
            transformationConfig={image.config as Transformations}
            hasDownload={true}
          />
        </div>

        {userId && (
          <div className="mt-4 space-y-4">
            <Button asChild type="button" className="submit-button capitalize">
              <Link href={`/transformations/${image._id}/update`}>
                Update Image
              </Link>
            </Button>

            <DeleteConfirmation imageId={image._id} />
          </div>
        )}
      </section>
    </>
  );
};

export default ImageDetails;

import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import Header from "@src/components/shared/Header";
import TransformationForm from "@src/components/shared/TransformationForm";
import { getImageById } from "@src/lib/actions/image.actions";
import { getUserById } from "@src/lib/actions/user.actions";

const UpdateTransformationPage = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();

  if (!clerkUser) redirect("/sign-in");

  const [dbUser, image] = await Promise.all([
    getUserById(clerkUser.id),
    getImageById(id),
  ]);

  if (!image) redirect("/main");

  const authorClerkId =
    typeof image.author === "object" && "clerkId" in image.author
      ? image.author.clerkId
      : null;

  if (authorClerkId !== clerkUser.id) {
    redirect(`/transformations/${id}`);
  }

  return (
    <>
      <Header title={`Update: ${image.title}`} />

      <section className="mt-10">
        <TransformationForm
          action="Update"
          userId={dbUser._id}
          type={image.transformationType as TransformationTypeKey}
          creditBalance={dbUser.creditBalance}
          data={image}
          config={image.config as Transformations}
        />
      </section>
    </>
  );
};

export default UpdateTransformationPage;

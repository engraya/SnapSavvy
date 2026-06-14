import Header from "@src/components/shared/Header";
import TransformationForm from "@src/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@src/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const clerkUser = await currentUser();

  if (!clerkUser) redirect("/sign-in");

  const dbUser = await getUserById(clerkUser.id);
  const transformation = transformationTypes[type];

  return (
    <>
      <Header
        title={transformation.title}
        subtitle={transformation.subTitle}
      />

      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={dbUser._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={dbUser.creditBalance}
        />
      </section>
    </>
  );
};

export default AddTransformationTypePage;

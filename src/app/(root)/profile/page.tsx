import Image from "next/image";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import { Collection } from "@src/components/shared/Collection";
import Header from "@src/components/shared/Header";
import { getUserImages } from "@src/lib/actions/image.actions";
import { getUserById } from "@src/lib/actions/user.actions";
import { IImage } from "@src/lib/database/models/image.model";

const Profile = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const clerkUser = await currentUser();

  if (!clerkUser?.id) redirect("/sign-in");

  const dbUser = await getUserById(clerkUser.id);
  const images = await getUserImages({ page, userId: dbUser._id });

  return (
    <>
      <Header title="Profile" />

      <section className="profile">
        <div className="profile-balance">
          <p className="p-14-medium md:p-16-medium text-teal-800 dark:text-teal-200">Available Credits</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/credits.svg"
              alt="credits"
              width={50}
              height={50}
              className="size-9 md:size-12 dark:brightness-150"
            />
            <h2 className="h2-bold text-slate-900 dark:text-white">{dbUser.creditBalance}</h2>
          </div>
        </div>

        <div className="profile-image-manipulation">
          <p className="p-14-medium md:p-16-medium text-violet-800 dark:text-violet-200">Enhanced Images</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/images.svg"
              alt="images"
              width={50}
              height={50}
              className="size-9 md:size-12 dark:brightness-150"
            />
            <h2 className="h2-bold text-slate-900 dark:text-white">{images?.data.length ?? 0}</h2>
          </div>
        </div>
      </section>

      <section className="mt-8 md:mt-14">
        <Collection
          images={(images?.data ?? []) as IImage[]}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>
    </>
  );
};

export default Profile;

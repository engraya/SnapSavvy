import { Collection } from "@src/components/shared/Collection";
import { getAllImages } from "@src/lib/actions/image.actions";
import { IImage } from "@src/lib/database/models/image.model";

const Main = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });

  return (
    <section className="sm:mt-12">
      <Collection
        hasSearch={true}
        images={(images?.data ?? []) as IImage[]}
        totalPages={images?.totalPage}
        page={page}
      />
    </section>
  );
};

export default Main;

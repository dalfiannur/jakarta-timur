import { findBulletinById } from "@/app/actions/get-bulletin";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { data } = await findBulletinById(params.id);

  return (
    <div className="px-4">
      <div className="mt-12 flex flex-col gap-16 lg:flex-row">
        <div className="flex-1">
          <h2 className="font-plus-jakarta-sans text-xl font-bold lg:text-3xl">
            {data.title}
          </h2>

          <div className="mt-6 flex justify-center lg:mt-12">
            <iframe
              src={data.frame}
              className="aspect-[257/225] w-full lg:w-[1024px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

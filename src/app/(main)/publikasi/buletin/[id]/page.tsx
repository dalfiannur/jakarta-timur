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
    <div>
      <div className="mt-12 flex gap-16">
        <div className="flex-1">
          <h2 className="font-bold text-4xl font-plus-jakarta-sans">
            {data.title}
          </h2>

          <div className="mt-12 flex justify-center">
            <iframe src={data.frame} width={1024} height={900}></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

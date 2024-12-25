"use client";
import { useGetBulletinByIdQuery } from "@/services/api/bulletin";
import { useParams } from "next/navigation";

export const Content = () => {
  const params = useParams();
  const id = params.id as string;
  const { data } = useGetBulletinByIdQuery(id);

  return data ? (
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
  ) : (
    <div className="mx-auto aspect-[257/225] w-full animate-pulse bg-gray-200 lg:w-[1024px]" />
  );
};

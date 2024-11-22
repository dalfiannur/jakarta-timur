import { Icon } from "@/app/icons";
import { SectionTitle } from "../../SectionTitle";
import { getData } from "./actions";
import { List } from "./List";
import { Suspense } from "react";
import { SelectKecamatan } from "./SelectKecamatan";

export const experimental_ppr = true;

type PageProps = {
  params: Promise<{
    area: string;
  }>;
  searchParams: Promise<{
    kecamatan?: string;
  }>;
};

export default async function Page(props: PageProps) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const options: {
    area: string;
    filters: { by: string; value: string }[];
  } = {
    area: params.area,
    filters: [],
  };

  if (searchParams.kecamatan) {
    options.filters.push({
      by: "kecamatan",
      value: searchParams.kecamatan,
    });
  }

  const data = getData(options);

  return (
    <div className="grid gap-8">
      <SectionTitle>{params.area}</SectionTitle>
      <div className="flex border rounded-xl focus-within:border-pink-500/40 overflow-hidden">
        <div className="p-4 text-gray-500">
          <Icon name="Search" className="w-6 h-6" />
        </div>
        <input className="py-4 flex-1 focus:outline-none" />
      </div>
      {params.area === "kelurahan" && (
        <Suspense fallback={"..."}>
          <SelectKecamatan />
        </Suspense>
      )}
      <div className="grid grid-cols-2 gap-6">
        <List getData={data} params={params} />
      </div>
    </div>
  );
}

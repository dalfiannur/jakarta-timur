import { SectionTitle } from "../SectionTitle";
import { Icon } from "@/app/icons";
import { PrestasiItem } from "./PrestasiItem";
import { Filter } from "./Filter";
import { ViewButton } from "./ViewButton";

type PageProps = {
  searchParams: Promise<{
    sort?: string;
    years?: string;
    view?: string;
  }>;
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default async function Page(props: PageProps) {
  const { sort, years, view = "grid" } = await props.searchParams;

  return (
    <div>
      <SectionTitle>Prestasi</SectionTitle>
      <div className="mt-8">
        <div className="border rounded-xl overflow-hidden flex pl-4 items-center focus-within:border-pink-400">
          <Icon name="Search" size={24} />
          <input
            className="py-4 px-6 flex-1 focus:outline-none"
            placeholder="Cari Nama Dokumen"
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <Filter />
          <ViewButton />
        </div>
        <div
          data-view={view}
          className="mt-8 data-[view=grid]:grid data-[view=grid]:grid-cols-3 data-[view=list]:flex data-[view=list]:flex-col gap-8"
        >
          {data.map((_, index) => (
            <PrestasiItem key={index} view={view} />
          ))}
        </div>
      </div>
    </div>
  );
}

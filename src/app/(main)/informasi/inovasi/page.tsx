import { PageTitle } from "@/app/components/PageTitle";
import { CardItem } from "./_components/CardItem";
import { Pagination } from "@/app/components/Pagination";

export default function Page() {
  return (
    <div>
      <PageTitle
        title="INFORMASI INOVASI"
        image="/img/kantor-walikota-jaktim.png"
        subtitle="Ketahui inovasi yang telah dilakukan pemerintah Jakarta Timur"
        rounded={false}
        topSpacer
      />
      <div className="container mx-auto px-4 py-6 lg:py-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
        <div className="mt-12 flex justify-center">
          <Pagination total={10} color="blue" />
        </div>
      </div>
    </div>
  );
}

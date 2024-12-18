import { PageTitle } from "@/app/components/PageTitle";
import { CardItem } from "./CardItem";
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
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-4 gap-x-6 gap-y-12">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
        <div className="flex justify-center mt-12">
          <Pagination total={10} color="blue" />
        </div>
      </div>
    </div>
  );
}

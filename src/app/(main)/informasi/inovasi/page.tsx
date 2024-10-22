import { PageTitle } from "@/app/components/PageTitle";
import { CardItem } from "./CardItem";

export default function Page() {
  return (
    <div>
      <PageTitle
        title="INFORMASI INOVASI"
        image="/img/kantor-walikota-jaktim.png"
        subtitle="Ketahui inovasi yang telah dilakukan pemerintah Jakarta Timur"
        rounded={false}
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
      </div>
    </div>
  );
}

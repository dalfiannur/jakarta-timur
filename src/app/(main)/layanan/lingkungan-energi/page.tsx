import { PageTitle } from "@/app/components/PageTitle";
import { Content } from "./components/Content";

export default function Page() {
  return (
    <div className="bg-gray-100">
      <PageTitle
        title="Lingkungan Energi"
        subtitle="Informasi ramah lingkungan di wilayah provinsi DKI Jakarta"
        image="/img/kantor-walikota-jaktim.png"
        topSpacer
      />
      <div className="container mx-auto px-4 py-12">
        <Content />
      </div>
    </div>
  );
}

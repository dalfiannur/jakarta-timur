import { PageTitle } from "@/app/components/PageTitle";
import { SectionBox } from "@/app/components/SectionBox";
import { Content } from "./Content";

export default function Page() {
  return (
    <div>
      <PageTitle
        title="INFORMASI RPTRA"
        image="/img/kantor-walikota-jaktim.png"
        subtitle="Informasi Ruang Publik Terpadu Ramah Anak di wilayah Jakarta Timur"
        rounded={false}
        topSpacer
      />
      <div className="container mx-auto py-10">
        <SectionBox
          title="Fasilitas Ramah Anak di Jakarta Timur"
          subtitle="Jelajahi ruang publik terintegrasi yang dirancang untuk memberikan lingkungan yang aman dan edukatif di wilayah Jakarta Timur"
        >
          <Content />
        </SectionBox>
      </div>
    </div>
  );
}

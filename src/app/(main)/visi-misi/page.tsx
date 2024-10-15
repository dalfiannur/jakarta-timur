import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { PageTitle } from "@/app/components/PageTitle";

export default function Page() {
  return (
    <div>
      <PageTitle
        image="/img/event-1.png"
        title="Tentang Jakarta Timur"
        subtitle="Temukan penjelasan lengkap tentang visi dan misi kami dalam menyediakan pelayanan"
      />
      <div className="relative z-10 -mt-28 container mx-auto bg-white rounded-4xl p-8 drop-shadow-xl">
        <Breadcrumbs data={[1,2,3]} />
        <div className="mt-4">Content</div>
      </div>
    </div>
  );
}

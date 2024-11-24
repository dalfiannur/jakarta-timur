"use client";
import { PageTitle } from "@/app/components/PageTitle";
import { Tabs } from "./_components/Tabs";
import { HeaderSection } from "./_sections/HeaderSection";
import { ImageSlider } from "./_features/ImageSlider";

export default function Page() {
  return (
    <div>
      <PageTitle
        title="INFORMASI PARIWISATA"
        subtitle="Informasi destinasi wisata unik dan memikat yang tersebar di wilayah Jakarta Timur"
        image="/img/kantor-walikota-jaktim.png"
      />
      <div className="py-10">
        <div className="container mx-auto px-4">
          <HeaderSection />

          <div className="mt-10">
            <Tabs />

            <div className="mt-6">
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

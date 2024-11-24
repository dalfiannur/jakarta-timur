"use client";
import { PageTitle } from "@/app/components/PageTitle";
import { ImageSlider } from "./_features/ImageSlider";

export default function Page() {
  return (
    <div>
      <PageTitle
        title="INFORMASI KEBUDAYAAN"
        subtitle="Informasi kebudayaan unik dan memikat yang tersebar di wilayah Jakarta Timur"
        image="/img/kantor-walikota-jaktim.png"
      />
      <div className="py-10">
        <div className="container mx-auto">
          <div className="px-4 text-center">
            <h3 className="text-xl font-bold lg:text-3xl">
              Menelusuri Tradisi dan Budaya Khas di Jakarta Timur
            </h3>
            <div className="mt-2 text-sm font-semibold text-gray-800 lg:text-2xl">
              <p>
                Mengenal Lebih Dekat Tradisi dan Warisan Budaya yang Membentuk
                Jakarta Timur
              </p>
            </div>
          </div>

          <div className="mt-10">
            <ImageSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

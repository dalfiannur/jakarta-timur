import { Icon } from "@/app/icons";
import Image from "next/image";

const content =
  "<p>Jakarta Timur, (21/12/2023) - Pemerintah Kota Administrasi Jakarta Timur menerima gelar penganugerahan Keterbukaan Informasi Publik dalam kategori Pemerintah Kota dan Kabupaten Kota dengan predikat Informatif.</p><p>Penghargaan Anugeran Keterbukaan Informasi Publik yang diserahkan Ketua Komisi Informasi DKI Jakarta, Harry Ara Hutabarat, diterima langsung Walikota Administrasi Jakarta Timur, M. Anwar, di Balai Agung, Balaikota, Jakarta Pusat, Kamis (21/12/2023).</p>";

export default function Page() {
  return (
    <div>
      <div className="mt-12 flex gap-16">
        <div className="flex-1">
          <div className="grid gap-4">
            <div className="text-sm text-gray-500 uppercase">Pemerintah</div>
            <h2 className="font-bold text-4xl">
              400 Peserta Ikuti Kejuaraan Bulutangkis Antar OPD dan BUMD DKI
              Jakarta di GOR Otista
            </h2>
            <div className="flex gap-4 text-sm font-medium">
              <div className="flex gap-2 items-center">
                <div className="text-pink-500">
                  <Icon name="Calendar" size={16} />
                </div>
                <div>18 Juli 2024</div>
              </div>
              <div className="border-l" />
              <div className="flex gap-2 items-center">
                <div className="text-pink-500">
                  <Icon name="QuillWrite" size={16} />
                </div>
                <div>Sudin Komunikasi</div>
              </div>
              <div className="border-l" />
              <div className="flex gap-2 items-center">
                <div className="text-pink-500">
                  <Icon name="Camera" size={16} />
                </div>
                <div>KIP</div>
              </div>
            </div>
          </div>

          <div className="mt-12 relative aspect-[16/8]">
            <Image
              src="/img/kantor-walikota-jaktim.png"
              alt="#"
              fill
              className="rounded-xl"
            />
          </div>

          <div
            className="grid gap-4 text-gray-600 mt-12 text-justify"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div className="w-[437px]">s</div>
      </div>
    </div>
  );
}

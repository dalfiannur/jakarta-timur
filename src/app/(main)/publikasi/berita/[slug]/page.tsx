import { Icon } from "@/app/icons";
import Image from "next/image";
import { LatestNewsWidget } from "../../LatestNewsWidget";
import { BulletinWidget } from "../../BulletinWidget";

const content =
  "<p>Jakarta Timur, (21/12/2023) - Pemerintah Kota Administrasi Jakarta Timur menerima gelar penganugerahan Keterbukaan Informasi Publik dalam kategori Pemerintah Kota dan Kabupaten Kota dengan predikat Informatif.</p><p>Penghargaan Anugeran Keterbukaan Informasi Publik yang diserahkan Ketua Komisi Informasi DKI Jakarta, Harry Ara Hutabarat, diterima langsung Walikota Administrasi Jakarta Timur, M. Anwar, di Balai Agung, Balaikota, Jakarta Pusat, Kamis (21/12/2023).</p><p>Walikota menjelaskan, anugerah tersebut sebagai tolak ukur Pemerintah Kota Administrasi Jakarta Timur dalam menjalankan Undang-undang (UU) Keterbukaan Informasi Publik No. 14 tahun 2008. Pemerintah Kota Administrasi Jakarta Timur sendiri sudah menerapkan keterbukaan informasi publik dalam keseharian, salah satunya inovasi informasi digital yang mempermudah masyarakat mendapatkan informasi segala kegiatan ataupun program Pemerintah Kota Administrasi Jakarta Timur.</p><p>“Mudah-mudahan ke depannya dengan pemberian ini kita bisa semakin mengevaluasi jajaran yang ada di tingkat Kota Jakarta Timur. Tentunya tergantung perkembangan zaman, kita membuat inovasi tuntutan pelayanan bagaimana kita buat inovasi tersebut untuk memudahkan pelayanan keterbukaan informasi publik kepada masyarakat, supaya masyarakat bisa lebih merasakan betul-betul haknya diberikan dengan baik,” jelasnya.</p><p>Selain itu, beberapa perangkat lainnya mendapatkan penganugerahan keterbukaan informasi publik dalam kategori Rumah Sakit Umum Daerah (RSUD) tipe A, B, dan C. Penghargaan diterima RSUD Pasar Rebo dengan kategori Informatif.</p><p>Untuk kategori kecamatan, penghargaan diterima Kecamatan Cakung, Kecamatan Duren Sawit, Kecamatan Ciracas dengan predikat Informatif. Sementara Kecamatan Matraman dan Kecamatan Makasar dengan predikat Cukup Informatif.</p><p>Keberhasilan Jakarta Timur jadi bagian dari seluruh penerima penghargaan Anugerah Keterbukaan Informasi Publik dari Komisi Informasi DKI Jakarta. Tercatat 33 badan public meraih predikat ‘Informatif’, 22 badan publik mendapatkan predikat ‘Menuju Informatif’ dan 15 badan publik dengan predikat ‘Cukup Informatif’. (AD)</p>";

export default function Page() {
  return (
    <div>
      <div className="mt-12 flex gap-16">
        <div className="flex-1">
          <div className="grid gap-4">
            <div className="text-sm text-gray-500 uppercase">Pemerintah</div>
            <h2 className="font-bold text-3xl">
              Pemkot Jakarta Timur Raih Anugerah Keterbukaan Informasi Predikat
              Informatif
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
        <div className="w-[437px] flex flex-col gap-8">
          <LatestNewsWidget />
          <BulletinWidget />
        </div>
      </div>
    </div>
  );
}

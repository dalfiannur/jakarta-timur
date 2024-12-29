import { NumberListItem } from "@/app/components/NumberListItem";
import { PageTitle } from "@/app/components/PageTitle";

const list = [
  "JAKI (Jakarta Kini)",
  "Twitter @DKIJakarta",
  "Facebook Pemprov DKI Jakarta",
  "surat elektronik dki@jakarta.go.id",
  "Media Sosial Gubernur",
  "SMS 08111272206",
  "Web jakarta.go.id",
  "Qlue",
  "Kantor Kelurahan",
  "Kantor Kecamatan",
  "Kantor Wali Kota",
  "Pendopo Balai Kota",
  "Kantor Inspektorat",
  "LAPOR 1708",
];

export default function Page() {
  return (
    <div className="bg-gray-100">
      <PageTitle
        title="Kanal Aduan"
        subtitle="Informasi kanal aduan resmi provinsi DKI Jakarta"
        image="/img/kantor-walikota-jaktim.png"
        topSpacer
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-xl bg-white p-8">
            <h2 className="text-2xl font-bold text-pink-500">
              Cepat Respon Masyarakat (CRM)
            </h2>
            <div className="mt-6 flex flex-col gap-4 font-roboto text-lg text-gray-950">
              <p>
                Mendukung partisipasi masyarakat dan opximalisasi kinerja
                pemerintah, Pemprov DKI Jakarta menyediakan kanal-kanal
                pengaduan resmi yang terintegrasi dengan citizen relations
                management dan dikenal dengan Cepat Respon Masyarakat (CRM).
                Sebagai jembatan pengaduan antara masyarakat dan pemerintah, CRM
                dapat menjadi muara penyelesaian segala masalah non-darurat yang
                di Jakarta.
              </p>
              <h6 className="font-plus-jakarta-sans font-medium">
                Bagaimana Cepat Respon Masyarakat Bekerja?
              </h6>
              <p>
                Selayaknya sebuah sistem, Cepat Respon Masyarakat memiliki alur
                kerja tersendiri. Dalam Cepat Respon Masyarakat, data mengenai
                permasalahan non-darurat yang ditemukan masyarakat masuk melalui
                kanal pengaduan resmi yang saat ini berjumlah 13 kanal.
                Selanjutnya, dengan bantuan teknologi informasi dan komunikasi,
                laporan tersebut diintegrasikan melalui citizen relations
                management kemudian disampaikan ke kelurahan atau dinas terkait.
                Proses sederhana seperti ini membuat waktu koordinasi dan
                penyelesaian masalah menjadi lebih efisien dengan hasil yang
                efektif.
              </p>
              <p>
                Proses tindak lanjut laporan yang disampaikan pun dapat dipantau
                langsung oleh masyarakat. Hal ini sebagai bukti transparansi
                pekerjaan Organisasi Perangkat Daerah (OPD) dalam menyelesaikan
                laporan. Masyarakat dapat mengikuti perkembangan laporannya
                melalui sistem pelacakan pada situs web Pengaduan Warga. Ketika
                laporan sudah selesai ditangani oleh OPD, bukti berupa foto akan
                diunggah oleh petugas dan dapat diakses oleh masyarakat luas.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-white p-8">
            <h2 className="text-2xl font-bold text-pink-500">
              Kanal Pengaduan Resmi Provinsi DKI Jakarta
            </h2>
            <div className="mt-6 flex flex-col gap-4 font-roboto text-gray-950">
              <p className="text-lg">
                Saat ini, Pemerintah Provinsi DKI Jakarta memiliki 14 kanal
                pengaduan resmi yang terbagi dalam tiga kategori: kanal berbasis
                geo-tagging, kanal berbasis media sosial, dan kanal tatap muka.
                Kanal-kanal yang dapat dipakai masyarakat antara lain:
              </p>

              <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                {list.map((item, index) => (
                  <NumberListItem key={index} no={index + 1}>
                    {item}
                  </NumberListItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { PageTitle } from "@/app/components/PageTitle";
import Image from "next/image";
import { Accordion } from "./_components/Accordion";
import { Icon } from "@/app/icons";

export default function Page() {
  return (
    <div className="bg-gray-100">
      <PageTitle
        title="Perizinan Terpadu"
        subtitle="Informasi pelayanan dan perizinan oleh DPMPTSP Provinsi DKI Jakarta"
        image="/img/kantor-walikota-jaktim.png"
        topSpacer
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              alt="Perizinan Terpadu"
              src="/img/perizinan-terpadu.png"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-lg">
              Penjabaran informasi terkait pelayanan dan perizinan yang diproses
              Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP)
              Provinsi DKI Jakarta di antaranya
            </p>
            <div className="mt-8 flex flex-col gap-8">
              <Accordion label="Jenis perizinan yang bisa diurus di DPMTSP">
                <ul className="grid grid-cols-2 gap-2 text-lg">
                  {[
                    "Kegiatan Badan Usaha",
                    "Kelaikan Usaha",
                    "Pembangunan",
                    "Kegiatan Perorangan",
                    "Ketataruangan",
                    "Perorangan (Praktik/Lisensi)",
                    "Kelaikan Fungsi Bangunan",
                    "Lingkungan",
                    "Usaha",
                  ].map((item, liIndex) => (
                    <li key={liIndex}>
                      <div className="flex items-center gap-4">
                        <Icon
                          name="CheckOne"
                          className="h-4 w-4 text-pink-500"
                        />
                        <div>{item}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Accordion>

              <Accordion label="Layanan antar jemput izin bermotor">
                <div className="flex flex-col gap-8 text-lg">
                  <p>
                    Layanan Antar Jemput Izin Bermotor (AJIB) merupakan inovasi
                    layanan antar jemput perizinan oleh DPMPTSP DKI Jakarta yang
                    terintegrasi dengan Jakevo. Layanan AJIB diciptakan untuk
                    dapat memudahkan masyarakat dalam proses antar jemput berkas
                    perizinan. Layanan ini gratis dan dapat digunakan dengan
                    menghubungi nomor WhatsApp (0818-0886-3147), atau dapat
                    langsung mengunjungi link dibawah ini
                  </p>
                  <p>dpmptsp-jkt.com</p>
                </div>
              </Accordion>

              <Accordion label="Layanan Jakevo">
                <div className="flex flex-col gap-8 text-lg">
                  <p>
                    Jakevo adalah aplikasi online untuk mengelola perizinan
                    maupun non-perizinan dari DPMPTSP DKI Jakarta. Layanan ini
                    mengoptimalkan sistem teknologi informasi untuk perizinan
                    Surat Izin Usaha Perdagangan (SIUP) dan Tanda Daftar
                    Perusahaan (TDP), agar lebih mudah diakses oleh masyarakat.
                    Jakevo dapat digunakan melalui tiga langkah mudah:
                  </p>
                  <ol className="ml-6 list-outside list-decimal">
                    <li>Upload dokumen;</li>
                    <li>Tagging lokasi;</li>
                    <li>Disclaimer.</li>
                  </ol>
                  <div>
                    <p>
                      Aplikasi Jakevo dapat digunakan dengan mengunjungi situs
                      resmi Jakevo di sini atau menggunakan aplikasi JAKI yang
                      dapat diunduh melalui Google Play Store maupun App Store.
                    </p>
                    <p>
                      Info lebih lanjut dan kanal pertanyaan seputar Dinas
                      Penanaman Modal dan Pelayanan Terpadu Satu Pintu Provinsi
                      DKI Jakarta bisa diakses melalui media sosial Twitter di
                      @layananjakarta.
                    </p>
                  </div>
                </div>
              </Accordion>

              <Accordion label="Kelengkapan dokumen yang diperlukan">
                <div className="flex flex-col gap-8 text-lg">
                  <div>
                    <p>
                      Untuk mendaftar/memperoleh akun perusahaan/badan usaha,
                      siapkan dokumen/data:
                    </p>
                    <ol className="ml-6 list-outside list-decimal">
                      <li>Nomor NPWP Perusahaan;</li>
                      <li>Nama Perusahaan/Badan Usaha;</li>
                      <li>Alamat Email Perusahan/Pemilik Perusahaan;</li>
                      <li>Nomor Telepon Perusahaan/Pemilik Perusahaan.</li>
                    </ol>
                  </div>
                  <div>
                    <p>
                      Untuk mendaftar/memperoleh akun perorangan, siapkan
                      dokumen/data:
                    </p>
                    <ol className="ml-6 list-outside list-decimal">
                      <li>Nomor Induk Kependudukan (NIK);</li>
                      <li>Nomor Kartu Keluarga (KK);</li>
                      <li>Nama pemohon;</li>
                      <li>Alamat email pemohon;</li>
                      <li>Nomor telepon pemohon.</li>
                    </ol>
                  </div>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

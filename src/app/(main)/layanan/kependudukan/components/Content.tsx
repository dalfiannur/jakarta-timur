"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const list = [
  {
    title: "Kartu Tanda Penduduk (KTP)",
    image: "/img/kartu-tanda-penduduk.png",
    content: (
      <div className="flex flex-col gap-4 font-roboto text-lg">
        <p>
          Kartu Tanda Penduduk (KTP-el) adalah kartu identitas yang dilengkapi
          dengan cip dan merupakan identitas resmi penduduk sebagai bukti diri
          yang diterbitkan oleh Dinas Kependudukan dan Pencatatan Sipil.
        </p>
        <p>
          Sejak tahun 2011, KTP lebih dikenal dengan KTP Elektronik atau KTP-el
          yang berisikan informasi seperti nama lengkap, tempat dan tanggal
          lahir, alamat, foto diri, tanda tangan, hingga biometrik penduduk.
        </p>
        <div>
          <p>
            Secara nasional, urusan KTP-el merupakan kewenangan Kementerian
            Dalam Negeri Republik Indonesia yang diatur oleh Undang-Undang Nomor
            24 Tahun 2013 tentang Adminstrasi Kependudukan.
          </p>
          <p>
            Tiap wilayah diberikan kewenangan untuk menerbitkan KTP-el. Di
            Jakarta, KTP diterbitkan oleh Dinas Kependudukan dan Pencatatan
            Sipil Provinsi DKI Jakarta.
          </p>
        </div>
        <h6 className="font-plus-jakarta-sans font-bold">
          Informasi Pembuatan
        </h6>
        <div>
          <p>
            Lokasi Pelayanan : Kantor kelurahan tiap domisili di seluruh wilayah
            Provinsi DKI Jakarta
          </p>
          <p>
            Syarat : Penduduk Sudah berusia 17 tahun/sudah kawin dan Fotokopi
            Kartu Keluarga/KK
          </p>
          <p>Tarif Pembuatan : Gratis</p>
        </div>
      </div>
    ),
  },
  {
    title: "Kartu Identitas Anak (KIA)",
    image: "/img/kartu-identitas-anak.png",
    content: (
      <div className="flex flex-col gap-4 font-roboto text-lg">
        <p>
          Kartu Identitas Anak merupakan identitas resmi khusus bagi anak yang
          berlaku secara nasonal. Kartu Identitas Anak (KIA) terbagi menjadi dua
          jenis, yaitu untuk anak berusia 0-5 tahun dan anak berusia 5-17 tahun,
          dengan masa berlaku sesuai dengan usia anak pemilik KIA.
        </p>
        <p>
          Pendataan dan pembuatan KIA di Jakarta merupakan kewenangan Dinas
          Kependudukan dan Pencatatan Sipil Provinsi DKI Jakarta. Adapun
          kegunaan KIA adalah untuk melindungi pemenuhan hak anak akan akses
          sarana umum.
        </p>
        <p>
          KIA sudah diberlakukan secara nasional sejak tahun 2016 dan
          berlandaskan Peraturan Menteri Dalam Negeri Nomor 2 Tahun 2016. Adapun
          tujuan dari diberlakukannya KIA adalah untuk meningkatkan pendataan,
          perlindungan dan pelayanan publik, serta sebagai upaya memberikan
          perlindungan dan pemenuhan hak konstitusional anak sebagai warga
          negara.
        </p>
        <h6 className="font-plus-jakarta-sans font-bold">
          Informasi Pembuatan
        </h6>
        <div>
          <p>
            Lokasi Pelayanan : Kantor Kelurahan sesuai dengan domisi KTP-el
            Orang Tua.
          </p>
          <p>
            Syarat : KTP-el asli kedua orangtua, Kartu Keluarga, Salinan Kutipan
            Akta Kelahiran anak dan menunjukkan aslinya
          </p>
          <p>Tarif Pembuatan : Gratis</p>
        </div>
      </div>
    ),
  },
  {
    title: "Kartu Keluarga (KK)",
    image: "/img/kartu-keluarga.png",
    content: (
      <div className="flex flex-col gap-4 font-roboto text-lg">
        <p>
          Kartu Keluarga (KK) adalah kartu identitas keluarga yang memuat data
          tentang nama, susunan dan hubungan dalam keluarga, serta identitas
          anggota keluarga.
        </p>
        <p>
          Layanan pembuatan atau pengurusan KK di Jakarta bisa dilakukan secara
          langsung dengan mengunjungi kelurahan atau secara daring melalui
          aplikasi Alpukat Betawi.
        </p>
        <h6 className="font-plus-jakarta-sans font-bold">
          Informasi Pembuatan
        </h6>
        <div>
          <p>Lokasi Pelayanan : Kantor Kelurahan</p>
          <p>
            Syarat : Penerbitan KK membutuhkan dokumen persyaratan yang berbeda
            tergantung dari status pemohon dan tujuan pembuatan KK. Penerbitan
            KK terdiri atas: Penerbitan KK Baru, Penerbitan KK karena Perubahan
            Data, dan Penerbitan KK karena hilang atau rusak.
          </p>
          <p>Tarif Pembuatan : Gratis</p>
        </div>
      </div>
    ),
  },
  {
    title: "Akta Kelahiran",
    image: "/img/akta-kelahiran.png",
    content: (
      <div className="flex flex-col gap-4 font-roboto text-lg">
        <p>
          Akta Kelahiran adalah dokumen resmi yang mencatat informasi tentang
          kelahiran seorang bayi atau anak. Akta kelahiran juga menjadi bukti
          resmi bahwa seorang bayi atau anak lahir dan merupakan bagian dari
          catatan resmi negara.
        </p>
        <p>
          Dengan Akta Kelahiran, seseorang atau anak akan terbantu untuk
          memperoleh berbagai haknya seperti hak pendidikan, hak kesehatan,
          hingga hak memilih.
        </p>
        <div>
          <p>
            Secara nasional, pemberlakuan Akta Kelahiran sesuai dengan
            Undang-Undang Nomor 24 tahun 2013 tentang Perubahan atas
            Undang-Undang Nomor 23 Tahun 2006 tentang Administrasi Kependudukan.
          </p>
          <p>
            Di Jakarta, pelayanan Akta Kelahiran merupakan kewenangan dari Dinas
            Kependudukan dan Catatan Sipil (Disdukcapil) Provinsi DKI Jakarta.
          </p>
        </div>
        <h6 className="font-plus-jakarta-sans font-bold">
          Informasi Pembuatan
        </h6>
        <div>
          <p>
            Lokasi Pelayanan : Kantor Kelurahan tiap domisili di seluruh wilayah
            Provinsi DKI Jakarta
          </p>
          <p>Syarat Dokumen yang dibutuhkan untuk pembuatan Akta Kelahiran:</p>
          <ol className="ml-6 list-outside list-decimal">
            <li>
              Salinan Surat Keterangan Kelahiran dari Puskesmas/Bidan/Rumah
              Sakit/Penolong Kelahiran/Kelurahan atau Surat Permohonan Tanggung
              Jawab Mutlak (SPTJM);
            </li>
            <li>
              Salinan Buku Nikah/Kutipan Akta Perkawinan/bukti lain yang sah;
            </li>
            <li>Salinan Kartu Keluarga;</li>
            <li>
              Berita Acara dari Kepolisian (Khusus bagi anak yang tidak
              diketahui asal/keberadaan orang tuanya);
            </li>
            <li>
              SPTJM kebenaran sebagai pasangan suami istri (Hanya jika tidak
              memenuhi persyaratan Fotokopi Buku Nikah/Kutipan Akta
              Perkawinan/bukti lain yang sah)
            </li>
          </ol>
          <p>Tarif Pembuatan : Gratis</p>
        </div>
      </div>
    ),
  },
  {
    title: "Akta Kematian",
    image: "/img/akta-kematian.png",
    content: (
      <div className="flex flex-col gap-4 font-roboto text-lg">
        <p>
          Setiap penduduk yang meninggal dunia wajib untuk dilaporkan peristiwa
          kematiannya dan diterbitkan akta kematian dari Dinas Kependudukan dan
          Pencatatan Sipil (Disdukcapil) setempat.
        </p>
        <p>
          Akta Kematian merupakan bukti sah berupa akta otentik yang dibuat dan
          diterbitkan oleh Dinas Kependudukan dan Pencatatan Sipil, sebagai
          bukti tertulis terkait pencatatan kematian seseorang.
        </p>
        <p>
          Mengingat bahwa kematian adalah salah satu peristiwa yang pasti akan
          dialami oleh setiap orang, maka Pencatatan Kematian memiliki peranan
          yang sangat vital untuk dilakukan dan dikukuhkan oleh Negara dalam
          bentuk Akta Kematian.
        </p>
        <h6 className="font-plus-jakarta-sans font-bold">
          Manfaat Akta Kematian
        </h6>
        <div>
          <p>
            Akta Kematian memberikan manfaat yang penting bagi pemerintah. Akta
            Kematian berguna untuk validasi data kependudukan sehingga
            pemerintah memiliki data akurat terkait jumlah penduduk.
          </p>
          <p>
            Di sisi lain, beberapa manfaat dari Akta Kematian, di antaranya
            adalah: (i) sebagai penetapan status janda atau duda yang akan
            diperlukan sebagai syarat untuk menikah lagi; (ii) sebagai
            persyaratan pengurusan pembagian waris (Peralihan Hak Atas Tanah),
            baik bagi isteri atau suami maupun anak; (iii) sebagai persyaratan
            untuk mengurus pensiun bagi para ahli warisnya, serta (iv) sebagai
            persyaratan untuk mengurus uang duka, tunjangan kecelakaan,
            asuransi, dan perbankan.
          </p>
        </div>
        <div>
          <p>Dokumen Persyaratan Pelayanan Pencatatan Kematian :</p>
          <ol className="list-lower-alpha ml-6 list-outside">
            <li>
              Surat Keterangan Kematian dari rumah sakit/puskesmas/dokter; atau
            </li>
            <li>Surat Keterangan Kematian dari lurah; atau</li>
            <li>
              Surat Keterangan dari Kepolisian (jenazah tidak diketahui
              identitasnya); atau
            </li>
            <li>
              Salinan Penetapan Pengadilan (jenazah tidak diketahui
              keberadaannya karena hilang/mati tetapi tidak ditemukan
              jenazahnya); atau
            </li>
            <li>
              Surat Pernyataan Kematian dari Maskapai (jenazah tidak jelas
              keberadaannya karena hilang/mati tetapi tidak ditemukan
              jenazahnya)
            </li>
            <li>
              Kartu Tanda Penduduk (KTP) dan/atau Kartu Keluarga (KK) dari
              jenazah;
            </li>
            <li>KTP pelapor; dan</li>
            <li>KTP 2 (dua) orang saksi</li>
            <li>
              Dokumen Perjalanan (Paspor/Visa Kunjungan/Kartu Izin Tinggal
              Tetap/Kartu Izin Tinggal Sementara) bagi jenazah Warga Negara
              Asing
            </li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    title: "Akta Perkawinan",
    image: "/img/akta-perkawinan.png",
    content: (
      <div className="flex flex-col gap-4 font-roboto text-lg">
        <p>
          Akta Perkawinan adalah dokumen resmi yang diterbitkan oleh Dinas
          Kependudukan dan Pencatatan Sipil atau Kantor Urusan Agama setelah
          seorang pria dan seorang wanita melangsungkan perkawinan secara sah.
        </p>
        <p>
          Dokumen ini berisi informasi tentang identitas pria dan wanita yang
          melangsungkan perkawinan, tempat dan tanggal perkawinan, serta nama
          pemuka agama atau penghayat kepercayaan yang memberkati perkawinan.
        </p>
        <div>
          <p>
            Dinas Kependudukan dan Catatan Sipil Provinsi DKI Jakarta melayani
            Pencatatan Perkawinan bagi pasangan yang telah melangsungkan
            perkawinan menurut hukum dan tata cara agama selain agama Islam.
          </p>
          <p>
            Adapun berdasarkan Undang-Undang Nomor UU Nomor 16 Tahun 2019
            Perubahan atas Undang-undang Nomor 1 Tahun 1974 tentang Perkawinan,
            perkawinan dapat dilangsungkan apabila pihak pria maupun pihak
            perempuan sudah mencapai usia 19 tahun.
          </p>
        </div>
        <h6 className="font-plus-jakarta-sans font-bold">
          Informasi Pembuatan
        </h6>
        <div>
          <p>
            Lokasi Pelayanan: Kantor Dinas Kependudukan dan Catatan Sipil
            Provinsi, Kantor Suku Dinas Kependudukan dan Catatan Sipil Kota atau
            Kabupaten, dan Kantor Kecamatan (Loket Sektor Dukcapil Kecamatan).
          </p>
          <p>Tarif Pembuatan : Gratis</p>
        </div>
      </div>
    ),
  },
  {
    title: "Akta Perceraian",
    image: "/img/akta-perceraian.png",
    content: (
      <div className="flex flex-col gap-4 font-roboto text-lg">
        <p>
          Akta Perceraian adalah dokumen resmi yang diterbitkan oleh Dinas
          Kependudukan dan Pencatatan Sipil setelah pasangan suami dan istri
          memperoleh salinan putusan penetapan perceraian dari pengadilan
          negeri.
        </p>
        <p>
          Dokumen Akta Perceraian digunakan sebagai bukti sah putusnya
          perkawinan dan perubahan status sebagai duda atau janda cerai hidup
          tercatat. Selain itu, Akta Perceraian juga dipakai untuk mengurus hak
          tunjangan anak dari suami istri, pembagian harta gono-gini, dan
          perkawinan setelah perceraian.
        </p>
        <p>
          Dinas Kependudukan dan Catatan Sipil Provinsi DKI Jakarta melayani
          Pencatatan Perceraian bagi pasangan yang telah melangsungkan
          perkawinan menurut hukum dan tata cara agama selain agama Islam dan
          telah memperoleh salinan putusan penetapan perceraian dari pengadilan
          negeri yang telah berkekuatan hukum tetap.
        </p>
        <h6 className="font-plus-jakarta-sans font-bold">
          Informasi Pembuatan
        </h6>
        <div>
          <p>
            Lokasi Pelayanan: Kantor Dinas Kependudukan dan Catatan Sipil
            Provinsi DKI Jakarta, Kantor Suku Dinas Kependudukan dan Catatan
            Sipil Kota dan Kabupaten, Kantor Kecamatan (Loket Sektor Dukcapil
            Kecamatan).
          </p>
          <p>Tarif Pembuatan : Gratis</p>
        </div>
      </div>
    ),
  },
];

export const Content = () => {
  const [active, setActive] = useState(0);
  const detail = list[active];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10">
      <div className="rounded-xl bg-white p-8">
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <button
                data-active={active === index ? true : undefined}
                className="w-full border-b py-4 text-left text-2xl font-bold data-[active]:text-pink-500"
                onClick={() => setActive(index)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        <div className="rounded-xl bg-white p-8">
          <motion.div
            key={`img-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="relative mb-8 aspect-video">
              <Image
                src={detail.image}
                alt={detail.title}
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            key={`content-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {detail.content}
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

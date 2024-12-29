"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const list = [
  {
    title: "Kartu Prakerja Jakarta",
    image: "/img/kartu-prakerja-jakarta.png",
    content: (
      <div className="flex flex-col gap-4 font-roboto text-lg">
        <p>
          Kartu Pekerja Jakarta (KPJ) merupakan program kebijakan Pemerintah
          Provinsi DKI Jakarta dalam rangka peningkatan kesejahteraan pekerja
          atau buruh dengan meringankan biaya transportasi, pangan, dan
          pendidikan bagi anak pekerja DKI Jakarta.
        </p>
        <p>
          Sejak tahun 2011, KTP lebih dikenal dengan KTP Elektronik atau KTP-el
          yang berisikan informasi seperti nama lengkap, tempat dan tanggal
          lahir, alamat, foto diri, tanda tangan, hingga biometrik penduduk.
        </p>
        <h6 className="font-plus-jakarta-sans font-bold">
          Syarat pendaftaran administrasi yang harus disiapkan oleh pekerja
          sebagai berikut: 
        </h6>
        <ol className="list-inside list-decimal">
          <li>Fotokopi kartu tanda penduduk (KTP)</li>
          <li>Fotokopi kartu keluarga (KK)</li>
          <li>Fotokopi nomor pokok wajib pajak (NPWP)</li>
          <li>Fotokopi slip gaji</li>
          <li>Surat keterangan aktif bekerja dari perusahaan</li>
        </ol>
        <p>
          Unduh format soft file di bit.ly/formatkpj, isi secara lengkap dan
          kirim ke email hikesja.nakertrans@jakarta.go.id kemudian cc ke
        </p>
      </div>
    ),
  },
  {
    title: "Kartu Penyandang Disabilitas Jakarta (KPDJ)",
    image: "/img/kartu-penyandang-disabilitas.png",
    content: (
      <div className="flex flex-col gap-4 font-roboto text-lg">
        <p>
          Kartu Penyandang Disabilitas Jakarta atau KPDJ adalah salah satu
          program bantuan sosial dari Dinas Sosial Provinsi DKI Jakarta dengan
          tujuan mencegah kerentanan sosial serta upaya mendukung pemenuhan
          berbagai kebutuhan dasar dan kesejahteraan sosial bagi para penyandang
          disabilitas.
        </p>
        <p>
          Pendataan dan pembuatan KIA di Jakarta merupakan kewenangan Dinas
          Kependudukan dan Pencatatan Sipil Provinsi DKI Jakarta. Adapun
          kegunaan KIA adalah untuk melindungi pemenuhan hak anak akan akses
          sarana umum.
        </p>
        <p>
          Sejak diluncurkan pada 28 Agustus 2019, program ini telah dirasakan
          oleh ribuan penerima di seluruh wilayah DKI Jakarta. Program ini
          mengusung nilai inklusivitas dan kesetaraan. KPDJ merupakan komitmen
          dari Pemerintah Provinsi DKI Jakarta mewujudkan akses yang lebih luas
          bagi para penyandang disabilitas baik dari aspek sosial maupun
          ekonomi.
        </p>
        <p>
          Penerima manfaat KPDJ akan menerima dana sebesar Rp300.000 tiap
          bulannya melalui Bank DKI.
        </p>
      </div>
    ),
  },
  {
    title: "Kartu Lansia Jakarta (KLJ)",
    image: "/img/kartu-lansia-jakarta.png",
    content: (
      <div className="flex flex-col gap-4 font-roboto text-lg">
        <p>
          Dengan semangat mewujudkan kota yang maju dan warga yang dapat hidup
          dengan nyaman, Pemerintah Provinsi (Pemprov) DKI Jakarta meluncurkan
          program Kartu Lansia Jakarta (KLJ) untuk menunjang pemenuhan kebutuhan
          dasar bagi warga lanjut usia yang kurang mampu. Tujuan dari program
          ini adalah untuk peningkatan kesejahteraan lanjut usia dan pengentasan
          kemiskinan.
        </p>
        <p>
          Warga usia lanjut akan mendapatkan bantuan sebesar Rp600.000 per
          bulan, jika memenuhi kriteria dan persyaratan yang telah ditetapkan.
          Kartu Lansia Jakarta berbentuk kartu ATM Bank DKI yang dapat
          dipergunakan untuk kebutuhan transaksi oleh pemegang kartu. Dana KLJ
          dicairkan setiap tanggal 5 per bulan. Jika penerima KLJ tidak dapat
          hadir dalam pengambilan dana bantuan sosial, maka dapat diwakilkan
          oleh pihak keluarga dan atau tenaga pendamping lansia, dengan
          menuliskan surat kuasa dari lansia yang bersangkutan.
        </p>
        <p>
          Sasaran dari program Kartu Lansia Jakarta adalah lansia yang tidak
          memiliki penghasilan tetap atau penghasilannya sangat kecil, sehingga
          tidak dapat memenuhi kebutuhan dasar sehari-hari. Kemudian, lansia
          yang sakit menahun dan hanya bisa terbaring di tempat tidur, juga
          warga
        </p>
      </div>
    ),
  },
  {
    title: "Kartu Anak Jakarta",
    image: "/img/kartu-prakerja-jakarta.png",
    content: (
      <div className="flex flex-col gap-4 font-roboto text-lg">
        <p>
          Kartu Anak Jakarta (KAJ) adalah program bantuan yang diperuntukkan
          bagi anak dari keluarga prasejahtera berusia 0-6 tahun. Program ini
          merupakan bentuk dukungan pemerintah terhadap perkembangan anak usia
          dini. KAJ telah diluncurkan secara simbolis pada 26 Maret 2021,
          sebagai program kerja sama antara Pemprov DKI Jakarta dengan Bank DKI.
        </p>
        <h6 className="font-plus-jakarta-sans font-bold">
          Manfaat Kartu Anak Jakarta
        </h6>
        <p>
          Berdasarkan Peraturan Gubernur Nomor 96 Tahun 2019 tentang Pemberian
          Bantuan Sosial untuk Pemenuhan Kebutuhan Dasar bagi Anak, setiap anak
          berhak atas kehidupan yang sejahtera dan mendapatkan perlindungan dari
          lingkungan tempat ia tumbuh. Karena itu, Pemprov DKI Jakarta
          memberikan bantuan sosial untuk anak melalui Kartu Anak Jakarta (KAJ).
          KAJ diharapkan dapat memenuhi kebutuhan dasar anak seperti susu,
          makanan bergizi, dan keperluan penunjang lain yang mendukung tumbuh
          kembang anak. KAJ diberikan dalam bentuk uang sebesar Rp300 ribu per
          bulan selama satu tahun dan dapat dicairkan melalui ATM Bank DKI.
          Selain dana tunai, manfaat lain yang didapatkan penerima KAJ adalah
          akses gratis naik Transjakarta, kemudahan membeli pangan bersubsidi,
          hingga terdaftar secara otomatis sebagai anggota JakGrosir.
        </p>
        <p>
          Kriteria Penerima KAJ Penerima KAJ ditetapkan melalui musyawarah
          kelurahan di wilayah masing-masing yang kemudian diverifikasi dan
          divalidasi oleh Pusdatin Jamsos Dinas Sosial Provinsi DKI Jakarta.
          Berikut ini kriteria penerima KAJ berdasarkan Peraturan Gubernur Nomor
          96 Tahun 2019:
        </p>
        <ol className="ml-6 list-outside list-decimal">
          <li>Anak Usia Dini berusia 0 (nol) sampai dengan 6 (enam) tahun;</li>
          <li>
            Memiliki NIK daerah serta bertempat tinggal/berdomisili di Jakarta;
          </li>
          <li>
            Terdaftar dan ditetapkan dalam Data Terpadu Fakir Miskin dan Orang
            Tidak Mampu; dan
          </li>
          <li>Berada di luar Panti Sosial Pemerintah dan Pemerintah Daerah.</li>
        </ol>
      </div>
    ),
  },
  {
    title: "Program Keluarga Harapan (PKH)",
    image: "/img/program-keluarga-harapan.png",
    content: (
      <div className="flex flex-col gap-4 font-roboto text-lg">
        <p>
          Program Keluarga Harapan (PKH) adalah program pemberian bantuan sosial
          bersyarat kepada keluarga miskin (KM). Program ini telah dilaksanakan
          sejak 2007 di bawah naungan Kementerian Sosial dan diarahkan untuk
          menjadi episentrum serta center of excellence penanggulangan
          kemiskinan yang mensinergikan berbagai program perlindungan dan
          pemberdayaan sosial nasional.
        </p>
        <p>
          Sebagai program bantuan sosial bersyarat dengan misi besar untuk
          menurunkan kemiskinan, PKH membuka akses bagi keluarga miskin,
          terutama dalam meningkatkan kesehatan keluarga, pendidikan anak, serta
          mengurangi beban keluarga dan meningkatkan pendapatan mereka. Dengan
          bantuan PKH, keluarga miskin dapat memiliki akses dan pemanfaatan
          pelayanan sosial dasar kesehatan, pendidikan, pangan dan gizi,
          perawatan, pendampingan, dan perlindungan sosial lainnya.
        </p>
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

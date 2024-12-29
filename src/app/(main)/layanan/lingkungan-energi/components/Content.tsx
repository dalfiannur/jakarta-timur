"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const list = [
  {
    title: "Hari Bebas Kendaraan Bermotor",
    image: "/img/hari-bebas-kendaraan-bermotor.png",
    content: (
      <div className="flex flex-col gap-4 font-roboto text-lg">
        <p>
          Untuk mensosialisasikan hidup nyaman tanpa kendaraan bermotor dan
          sebagai upaya mengurangi polusi udara, Pemerintah Provinsi DKI Jakarta
          menyelenggarakan Hari Bebas Kendaraan Bermotor (HBKB) atau yang juga
          dikenal dengan car free day. HBKB merupakan hari dalam periode
          tertentu di mana kendaraan bermotor (kecuali Bus Transjakarta yang
          menggunakan bahan bakar gas) tidak boleh melintasi kawasan/ruas jalan
          yang sudah ditetapkan sebagai lokasi pelaksanaan.
        </p>
        <p>
          HBKB mengusung tema penting terkait kepedulian terhadap lingkungan.
          Hal ini senada dengan Peraturan Daerah Nomor 1 Tahun 2005 tentang
          Pengendalian Pencemaran Udara dan instruksi Gubernur Nomor 78 tahun
          2011 tentang pelaksanaan Hari Bebas Kendaraan Bermotor (HBKB).
        </p>
        <p>
          Kegiatan utama yang dilakukan dalam HBKB, di antaranya adalah
          penutupan jalan, pengukuran kualitas udara, dan kegiatan penunjang
          lainnya.
        </p>
        <p>
          Lokasi <br />
          Jl. Pemuda (Persimpangan Arion s.d. Persimpangan Jl.Pemuda - Jl.
          Bekasi Raya)
        </p>
        <p>
          Di lokasi-lokasi tersebut, umumnya masyarakat Jakarta melakukan
          berbagai kegiatan seperti berolahraga, kumpul komunitas, hingga
          berbelanja. Terdapat Pedagang Kaki Lima (PKL) di kawasan tertentu yang
          ditata menjadi tiga zona, yaitu zona hijau (boleh berdagang), zona
          kuning (boleh berdagang di trotoar), dan zona merah (dilarang
          berdagang).
        </p>
      </div>
    ),
  },
  {
    title: "e-Uji Emisi",
    image: "/img/kartu-penyandang-disabilitas.png",
    content: (
      <div className="flex flex-col gap-4 font-roboto text-lg">
        <p>
          Berdasarkan Peraturan Daerah Nomor 2 Tahun 2005 tentang Pengendalian
          Pencemaran Udara, khususnya Pasal 19, menyebutkan bahwa kendaraan
          bermotor wajib memenuhi ambang batas emisi gas buang kendaran. Menurut
          data Dinas Lingkungan Hidup Provinsi DKI Jakarta, per Juni 2019, baru
          sekitar 5,5% atau 193,417 mobil pribadi di Jakarta yang telah
          melakukan uji emisi.
        </p>
        <p>
          Uji Emisi Sebagai Langkah Perbaikan Kualitas Udara Uji Emisi bertujuan
          untuk meminimalisasi gas rumah kaca dan udara berbahaya di Ibu Kota
          yang dihasilkan dari mesin kendaraan bermotor. Rendahnya emisi gas
          buang yang dihasilkan kendaraan akan mempengaruhi kualitas udara di
          Jakarta. Pengujian emisi pada kendaraan bermotor dapat dilakukan di
          bengkel-bengkel yang sudah difasilitasi dengan alat uji emisi.
        </p>
        <p>
          Saat ini, sudah banyak bengkel kendaraan yang dilengkapi dengan alat
          uji emisi. Selain itu, untuk memfasilitasi pengujian, Pemprov DKI
          Jakarta juga sering mengadakan uji emisi di kantor-kantor pemerintahan
          maupun di pusat keramaian atau wisata. Masyarakat hanya diminta untuk
          mencari titik pengujian terdekat dan membawa kendaraan bermotornya.
        </p>
        <p>
          Secara garis besar, pengujian emisi gas buang dilakukan dengan
          memasangkan alat pendeteksi gas pada knalpot kendaraan. Kendaraan yang
          diuji pun harus berada pada posisi hidup namun tidak menyalakan alat
          elektronik dalam kendaraan seperti radio, pendingin udara, atau lampu.
          Pengujian akan dilakukan setidaknya 5-7 menit dan ketika selesai,
          kadar dan kandungan zat pada asap kendaraan akan dicatat. Adapun zat
          yang dideteksi adalah CO (Karbon Monoksida), HC (Hidrokarbon), CO2
          (Karbon Dioksida), O2 (Oksigen), dan NO (Nitrogen Oksida). Dinas
          Lingkungan Hidup Provinsi DKI Jakarta juga akan memberikan sertifikat
          lulus uji emisi kepada masyarakat yang telah melaksanakan uji emisi.
        </p>
      </div>
    ),
  },
  {
    title: "Ganjil Genap",
    image: "/img/ganjil-genap.png",
    content: (
      <div className="flex flex-col gap-4 font-roboto text-lg">
        <p>
          Ganjil Genap di Jakarta adalah sebuah kebijakan pembatasan kendaraan
          bermotor berdasarkan plat nomor. Kebijakan ini diberlakukan sesuai
          dengan Peraturan Gubernur Nomor 88 Tahun 2019 tentang Perubahan Atas
          Peraturan Nomor 155 Tahun 2018 tentang Pembatasan Lalu Lintas dengan
          Sistem Ganjil Genap.
        </p>
        <p>
          Tidak hanya untuk membatasi penggunaan transportasi pribadi, kebijakan
          Ganjil Genap di Jakarta adalah komitmen Pemerintah Provinsi DKI
          Jakarta menurunkan tingkat emisi karbon di Jakarta.
        </p>
        <div>
          <h6 className="font-bold">
            Penerapan Kebiijakan Ganjil Genap di Jakarta
          </h6>
          <ul className="list-inside list-disc">
            <li>Hari: Senin - Jum`at (Terkecuali hari libur nasional)</li>
            <li>Jam: Pukul 06.00 - 10.00 WIB dan 16.00 - 21.00 WIB.</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold">Lokasi Ganjil Genap Jakarta Timur</h6>
          <ol className="list-inside list-decimal">
            <li>Jalan MT Haryono</li>
            <li>Jalan D.I Pandjaitan</li>
            <li>Jalan Jenderal Ahmad Yani</li>
            <li>Jalan Pramuka</li>
          </ol>
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

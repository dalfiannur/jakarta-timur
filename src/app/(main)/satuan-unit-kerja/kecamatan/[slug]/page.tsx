import Image from 'next/image';
import Link from 'next/link';
import {Icon} from '@/app/icons';
import {Accordion} from "./Accordion";

export default function Page() {
    return (
        <div className="mt-32 container mx-auto py-12 flex flex-col gap-24">
            <div className="flex gap-52">
                <div className="flex-1 grid gap-20">
                    <div className="flex flex-col justify-center gap-6">
                        <h2 className="uppercase font-extrabold text-4xl">Sejarah Wilayah pasar rebo</h2>
                        <p className="text-2xl text-black/80">
                            Tahun 1746, setelah membeli sebidang tanah yang disebut Tandjong dan mengambil alih
                            tanah-tanah
                            milik kapiten der Chinezen Ni Hoe Kong, Pieter van den Velde -- saat itu menjabat konsul
                            luar
                            biasa Dewan Hindia -- meminta izin membangun rumah pedesaan dan menyelenggarakan pasar
                            seminggu
                            sekali di Dregterland dan Tandjong, di sisi timur Sungai Ciliwung. Tahun 1760, Van den Velde
                            memulai pembangunan rumah yang kini dikenal sebagai Groneveld Tandjoeng Oost1
                        </p>
                        <Link href="#"
                              className="bg-pink-500 text-white text-lg rounded-xl px-20 py-4 w-fit font-semibold">Baca
                            Sejarah Selengkapnya</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="font-medium text-lg">
                            <p>Jam Oprasional</p>
                            <p>Senin sd Kamis 07.30 - 16.00 WIB</p>
                            <p>Jumat 07.30 - 16.30 WIB</p>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2 text-gray-500 text-lg">
                                <Icon name="Mail" size={24}/>
                                <div>kecamatan_pasarrebo@jakarta.go.id</div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-lg">
                                <Icon name="Phone" size={24}/>
                                <div>( 021 ) 4800487</div>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <Icon name="FacebookColored" size={24}/>
                            <Icon name="XColored" size={24}/>
                            <Icon name="WhatsappColored" size={24}/>
                        </div>
                    </div>
                </div>
                <div className="w-[700px] h-[790px] relative">
                    <Image src="/img/kantor-matraman.png" alt="Matraman" fill className="object-cover rounded-xl"/>
                </div>
            </div>

            <div className="flex">
                <div className="w-[624px]">
                    <div className="w-[624px] h-[464px] relative">
                        <Image src="/img/map.png" alt={"map"} fill className={"object-cover rounded-xl"}/>
                    </div>
                    <div className="mt-4 text-2xl">
                        Jl. Raya Jakarta-Bogor No.KM 72, RT.1/RW.4, Pekayon, Kec. Ps. Rebo, Kota Jakarta Timur, Daerah
                        Khusus Ibukota Jakarta 13710
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-10">
                    <Accordion label="Batas Wilayah">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h5 className="text-2xl font-bold">Utara</h5>
                                <p className="mt-4">
                                    Jalan Tengah, Jalan Balai Rakyat, Jalan Condet, Jalan H.Nasih,Jalan Mandor
                                    Baning,Jalan H.Taiman Timur, Jalan Trikora II.
                                </p>
                            </div>
                            <div>
                                <h5 className="text-2xl font-bold">Selatan</h5>
                                <p className="mt-4">
                                    Setu Tipar Desa Mekar Sari, Pilar Batas DKI dengan Provinsi Jawa Barat, PT.
                                    Panasonic Desa Tugu/Palsi Gunung,Setu Arman / Desa Rumbut, Kecamatan Cimanggis
                                    Kotamadya Depok Provinsi Jawa Barat
                                </p>
                            </div>
                            <div>
                                <h5 className="text-2xl font-bold">Barat</h5>
                                <p className="mt-4">
                                    Kali Ciliwung, Kecamatan Pasar Minggu Jakarta Selatan.
                                </p>
                            </div>
                            <div>
                                <h5 className="text-2xl font-bold">Timur</h5>
                                <p className="mt-4">
                                    Kali Cipinang,Jalan Raya Bogor Kecamatan Ciracas.
                                </p>
                            </div>
                        </div>
                    </Accordion>
                    <Accordion label="Kondisi Wilayah">
                        <p className="text-2xl">
                            Kecamatan Pasar Rebo memiliki 53 Rukun Warga dan 525 Rukun Tetangga dengan luas wilayah
                            sebesar 1.297,34 Ha.
                        </p>
                    </Accordion>
                    <Accordion label="Potensi Wilayah">
                        <ul className="list-disc px-6 text-xl grid grid-cols-2 gap-y-6 gap-x-20">
                            <li>Taman Delonix</li>
                            <li>Taman Kopi</li>
                            <li>Jalan R. Fadillah</li>
                            <li>Stadion Mini</li>
                            <li>GOR Gongseng</li>
                            <li>Taman Surilang</li>
                            <li>RPTRA Kopi Gandaria</li>
                            <li>Situ Pendongkelan</li>
                            <li>RPTRA Kaca Piring</li>
                            <li>RPTRA Trikora</li>
                            <li>Jalan Condet Raya</li>
                            <li>Mal Cijantung</li>
                            <li>Jalan Haji Hasan</li>
                            <li>Jalan Kalisari II</li>
                            <li>Universitas Indraprasta PGRI (Unindra)</li>
                            <li>Jalan Tengah</li>
                            <li>Kompleks Kopassus</li>
                        </ul>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
import {Modal, ModalRef} from "@/app/components/Modal"
import {Icon} from "@/app/icons"
import {forwardRef, useImperativeHandle, useRef, useState} from "react"
import Image from 'next/image';

interface Data {
    image: string;
    areaName: string;
}

export interface DetailModalRef {
    open: (data: Data) => void
}

export const DetailModal = forwardRef<DetailModalRef>(function DetailModal(props, ref) {
    const modalRef = useRef<ModalRef>(null)
    const [data, setData] = useState<Data>()

    useImperativeHandle(ref, () => ({
        open(data: Data) {
            setData(data)
            modalRef.current?.open()
        }
    }), [modalRef])

    return (
        <Modal ref={modalRef}>
            <div className="relative">
                <button className="absolute top-2 right-2" onClick={() => modalRef.current?.close()}>
                    <Icon name="XGrey" size={40}/>
                </button>
                {data && (
                    <div className="p-8">
                        <div className="flex justify-center">
                            <div className="relative w-[600px] aspect-[4/2]">
                                <Image src={data.image} alt="#" fill className="object-cover rounded-xl"/>
                            </div>
                        </div>
                        <h4 className="font-bold text-2xl text-center mt-6">Sejarah Wilayah {data.areaName}</h4>
                        <p className="mt-2 line-clamp-6">
                            Tahun 1746, setelah membeli sebidang tanah yang disebut Tandjong dan mengambil alih
                            tanah-tanah
                            milik kapiten der Chinezen Ni Hoe Kong, Pieter van den Velde -- saat itu menjabat konsul
                            luar
                            biasa Dewan Hindia -- meminta izin membangun rumah pedesaan dan menyelenggarakan pasar
                            seminggu
                            sekali di Dregterland dan Tandjong, di sisi timur Sungai Ciliwung. Tahun 1760, Van den Velde
                            memulai pembangunan rumah yang kini dikenal sebagai Groneveld Tandjoeng Oost1.
                            Andries Tesseire, salah satu tuan tanah Ommelanden yang sering blusukan ke tanah-tanah
                            partikelir, menuliskan kesan kunjungannya ke Groneveld Tandjoeng Oost tahun 1792. "Tandjoeng
                            Oost memiliki tempat tinggal yang luas dan sebuah pasar yang diadakan setiap hari Rabu2."
                            Dua informasi di atas telah cukup untuk menggambarkan bagaimana Pasar Rebo, salah satu
                            kecamatan
                            di Jakarta Timur, terbentuk. Namun, tidak ada informasi kapan Van den Velde membangun dan
                            membuka pasar itu setiap hari Rabu? Lainnya, apakah nama pertama lokasi aktivitas niaga itu
                            bernama Pasar Rebo.
                            Akhir Matua Harahap -- dalam tulisannya di poestahadepok.blogspot.com 18 Juni 2019 --
                            mengutip
                            Aardrijkskundig en statistisch woordenboek van Nederlandsch Indie yang terbit tahun 1869
                            untuk
                            memastikan Pasar Rebo dibangun tahun 1762. Lebih jelasnya, dalam terbitan itu terdapat
                            kalimat
                            De marktplaats te Tandjong Oost werd reeds den 2 Julij 1762 opgerigtâ€™, artinya Pasar di
                            Tandjoeng Oost didirikan 2 Juli 17623.
                            Penduduk kulit putih menyebutnya Pasar Tandjoeng Oost. Sedangkan penduduk lokal, terutama
                            mereka
                            yang mengangkut hasil bumi dari tanah partikelir di sekitarnya, menyebutnya Pasar Rebo
                            karena
                            pasar hanya dibuka pada hari Rabu. Rebo adalah dialek lokal untuk menyebut hari Rabu.
                            Entah sejak kapan nama Pasar Rebo diterima secara resmi menggantikan Pasar Tandjoeng Oost.
                            Akhir
                            Matua Harahap, dalam tulisan yang sama, mengatakan nama Pasar Rebo kali pertama muncul di
                            koran
                            Bataviaasch nieuwsblad edisi 10 April 1899. Pertanyaannya, pers Hindia-Belanda menyebut
                            Pasar
                            Rebo sebagai apa; pasar atau entitas lain?
                            Topographische Kaart der Residentie Batavia 1866 tidak mencantumkan Pasar Rebo4. Sedangkan
                            peta
                            Batavia en Omstreken 1925 dan Garnizoenskaart Batavaia en Omstreken 19345 mencantumkan Pasar
                            Rebo â€“ tertulis di dua peta itu Pasarrebo â€“ dengan keterangan â€˜permukimanâ€™, bukan
                            pasar.
                            Nasib Pasar Minggu mungkin sedikit lebih baik. Setelah sekian lama menjadi pasar, Pasar
                            Minggu
                            tercatat dalam peta setelah berdiri halte kereta api Batavia-Buitenzorg 1873. Permukiman di
                            Pasar Minggu saat itu relatif kecil, tapi sebagai aktivitas transaksi Pasar Minggu relatif
                            sejajar dengan Pasar Rebo.
                            Bertransformasi
                            Tidak ada cerita bagaimana Pasar Tandjoeng Oost, atau Pasar Rebo, bertransformasi dari pasar
                            menjadi permukiman. Sebagai pasar, Pasar Rebo dipastikan berkembang dari tahun ke tahun,
                            dengan
                            aktivitas niaga melebar ke tanah-tanah di sekelilingnya.
                            Pembentukan kampung, dengan pemukim dari luar tanah partikelir Tandjoeng Oost, diperkirakan
                            terjadi sebelum VOC bangkrut di penghujung abad ke-18. Saat itu, College van Heemraden â€“
                            atau
                            dewan pengurus Ommelanden â€“ cenderung tutup mata terhadap kedatangan orang-orang dari luar
                            dan
                            membentuk permukiman baru selama tidak menimbulkan masalah keamanan.
                            Pieter Joan Bangeman dan Adriaan Jubbels, mantan kepala pedagang VOC dan guru di rumah yatim
                            piatu yang mengambil alih Tandjoeng Oost dari Keluarga Van den Velde, seolah tidak acuh
                            dengan
                            perkembangan pasar. Keduanya, seperti dinarasikan Dr I van de Wall dalam Oude Hollandsche
                            Buitenplaatsen van Batavia, lebih suka sibuk membangun dua kandang besar untuk sapi-sapi,
                            pabrik
                            gula, dan menambah bangunan Groneveld Tandjoeng Oost.
                            Van de Wall juga tidak menyinggung sedikit pun bagaimana perkembangan Pasar Tandjoeng Oost
                            ketika tanah partikelir berpindah dari satu ke lain tangan landheer sampai dekade kedua abad
                            ke-20. Kisah Tandjoeng Oost, dengan rumah pedesaan mewah dan indah, hanya tentang
                            orang-orang
                            kaya dan terhormat yang datang dan pergi.
                            Perkembangan permukiman di sekitarnya, serta 400 budak di dalam tanah partikelir â€“ yang
                            kerap
                            diperjual-belikan saat tanah partikelir berpindah tangan â€“ mungkin hanya menjadi catatan
                            properti yang tak terceritakan. Ketika administrasi Batavia mendata kembali kampung-kampung
                            di
                            Ommelanden, barulah Pasar Rebo masuk dalam daftar.
                            Bevolkingstatistiek van Java 1870 yang disusun Peter Bleeker hanya menyebut pemukim
                            Tandjoeng
                            Oost. Disebutkan, Tandjoeng Oost membentang 19 pal, memiliki 30 kampung, dengan total
                            penduduk
                            6.456, terdiri dari lima orang Eropa, 307 Tionghoa, dan lainnya pribumi6.
                            Sebagai permukiman, dan juga pasar, Pasar Rebo terus berkembang. Di masa dekolonisasi,
                            ketika
                            Belanda berupaya mencengkeram kembali tanah jajahannya, Pasar Rebo menjadi onderdistrik di
                            bawah
                            Distrik Kramat Jati, Residentie Ommelanden van Batavia yang berpusat di Depok berdasarkan
                            Bestuurorganisatie Batavia en Ommelanden tahun 1949.
                            Usai Konferensi Meja Bundar (KMB) dan penyerakan kedaulatan, Pasar Rebo berubah menjadi
                            kecamatan dengan luas wilayah mencapai Cipayung dan Ciracas. Pertimbangan pemerintah kota
                            Jakarta saat itu adalah jumlah penduduk di wilayah sekelilingnya masih jarang. Saat itu
                            Pasar
                            Rebo adalah kecamatan gemuk dengan 18 kelurahan.
                        </p>
                    </div>
                )}
            </div>
        </Modal>
    )
})
import {SectionTitle} from "./SectionTitle"
import {Icon} from "@/app/icons";
import {Pagination} from "@/app/components/Pagination";

const items = [
    {
        title: "Inspektur Pembantu Kota Administrasi Jakarta Timur",
        name: "A Dasuki"
    },
    {
        title: "Suku Badan Perencanaan Pembangunan Daerah Kota Administrasi Jakarta Timur",
        name: "Tulus Ludiyo Setiawan"
    },
    {
        title: "Satuan Polisi Pamong Praja Kota Administrasi Jakarta Timur",
        name: "Budhy Novian"
    },
    {
        title: "Suku Dinas Tenaga Kerja, Transmigrasi dan Energi",
        name: "Galuh Prasiwi W SH MM"
    },
    {
        title: "Suku Dinas Pemberdayaan Perlindungan Anak dan Pengendalian Penduduk",
        name: "Hary Sutanto"
    },
    {
        title: "Suku Dinas Bina Marga",
        name: "Benhard Hutajulu"
    },
    {
        title: "Suku Dinas Ketahanan Pangan, Kelautan dan Pertanian",
        name: "Iwan Indriyanto"
    },
    {
        title: "Suku Dinas Komunikasi, Informatika dan Statistik",
        name: "Nuruning Septarida"
    },
    {
        title: "Unit Pengelola Gelanggang Remaja Kota Administrasi Jakarta Timur",
        name: "Wisnu Dewanto, MM"
    }
]
export const UKPDSection = () => {
    return (
        <div className="grid gap-6">
            <SectionTitle>Unit Kerja Perangkat Daerah</SectionTitle>
            <p className="font-semibold">Menampilkan 1-9 dari 10 Data</p>
            <div className="grid grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <div key={index} className="bg-[#F4F9FC] rounded py-4 px-6 flex flex-col justify-between gap-4">
                        <h5 className="text-2xl font-semibold line-clamp-2">{item.title}</h5>
                        <div className="flex items-center gap-4">
                            <Icon name="UserRoundedBoldDuotone" size={24}/>
                            <h6 className="text-xl text-gray-500">{item.name}</h6>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-2 flex justify-center">
                <Pagination total={2} color="blue"/>
            </div>
        </div>
    )
}
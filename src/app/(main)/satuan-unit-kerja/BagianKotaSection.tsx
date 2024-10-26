import {SectionTitle} from "./SectionTitle"
import {Icon} from "@/app/icons";

const items = [
    {
        title: "Kepala Bagian Tata Pemerintahan",
        name: "Eka Darmawan"
    },
    {
        title: "Kepala Bagian Hukum",
        name: "Eka Darmawan"
    },
    {
        title: "Kepala Bagian Kesejahteraan Rakyat",
        name: "Eka Darmawan"
    },
    {
        title: "Kepala Bagian Kepegawaian, Tatalaksana dan Pelayanan",
        name: "Eka Darmawan"
    },
    {
        title: "Kepala Bagian Penataan Kota & Lingkungan Hidup",
        name: "Eka Darmawan"
    },
    {
        title: "Kepala Bagian Perekonomian",
        name: "Eka Darmawan"
    },
    {
        title: "Kepala Bagian Keuangan",
        name: "Eka Darmawan"
    },
    {
        title: "Kepala Bagian Umum dan Protokol",
        name: "Eka Darmawan"
    }
]
export const BagianKotaSection = () => {
    return (
        <div className="grid gap-8">
            <SectionTitle>Bagian Kota</SectionTitle>
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
        </div>
    )
}
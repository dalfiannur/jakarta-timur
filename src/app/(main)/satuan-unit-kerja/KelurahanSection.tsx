import {Icon} from '@/app/icons';
import {SectionTitle} from './SectionTitle';
import Image from 'next/image'
import {SelectKecamatan} from './SelectKecamatan';

const items = [
    {
        image: '/img/kantor-matraman.png',
        areaName: 'Kebon Manggis',
        personName: 'Ibnu Fajar'
    },
    {
        image: '/img/kantor-pulogadung.png',
        areaName: 'Pal Meriam',
        personName: 'Setiyawan'
    },
    {
        image: '/img/kantor-jatinegara.png',
        areaName: 'Pisangan Baru',
        personName: 'Wahyu Dwi Kesdianto'
    },
    {
        image: '/img/kantor-kramat-jati.png',
        areaName: 'Kayu Manis',
        personName: 'Heru Setiawan, S. STP.'
    },
    {
        image: '/img/kantor-pasar-rebo.png',
        areaName: 'Utan Kayu Selatan',
        personName: 'Rusli Abidin, S. E., M.Si'
    },
    {
        image: '/img/kantor-cakung.png',
        areaName: 'Utan Kayu Utara',
        personName: 'Rahma Edwina, S.IP'
    },
]

export const KelurahanSection = () => {
    return (
        <div className="grid gap-8">
            <SectionTitle>Kelurahan</SectionTitle>
            <div className="flex border rounded-xl focus-within:border-pink-500/40 overflow-hidden">
                <div className="p-4 text-gray-500">
                    <Icon name="Search" size={24}/>
                </div>
                <input className="py-4 flex-1 focus:outline-none"/>
            </div>
            <SelectKecamatan/>
            <div className="grid grid-cols-2 gap-6">
                {items.map((item, index) => (
                    <div key={index} className="border rounded-xl flex gap-6 px-6 py-5">
                        <div className="w-20 h-20 relative">
                            <Image src={item.image} alt={item.areaName} fill className="object-cover rounded-xl"/>
                        </div>
                        <div className="flex-1 grid gap-2">
                            <h5 className="text-lg font-bold">
                                {item.areaName}
                            </h5>
                            <div className="grid gap-1">
                                <p className="text-sm text-gray-500">Nama Lurah</p>
                                <p className="text-gray-500">{item.personName}</p>
                            </div>
                        </div>
                        <button className="text-pink-500">
                            <Icon name="OutlineShare" size={32}/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
"use client";

import {Select, Option} from "@/app/components/Select"
import {useCallback} from "react";
import {useRouter, useSearchParams} from "next/navigation";

const districts = [
    {
        label: 'Matraman',
        value: 'matraman'
    },
    {
        label: 'Pulogadung',
        value: 'pulogadung',
    },
    {
        label: "Jatinegara",
        value: 'jatinegara'
    },
    {
        label: 'Kramat Jati',
        value: 'kramat-jati'
    },
    {
        label: 'Pasar Rebo',
        value: 'pasar-rebo'
    },
    {
        label: 'Cakung',
        value: 'cakung'
    },
    {
        label: 'Duren Sawit',
        value: 'duren-sawit'
    },
    {
        label: 'Makasr',
        value: 'makasar'
    },
    {
        label: 'Ciracas',
        value: 'ciracas'
    },
    {
        label: 'Cipayung',
        value: 'cipayung'
    }
]

export const SelectKecamatan = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const onChange = useCallback((selected: Option) => {
        const params = new URLSearchParams(searchParams)
        params.set('district', selected.value)
        router.push(`?${params.toString()}`, {
            scroll: false
        })
    }, [searchParams, router])

    return (
        <Select label="Pilih Kecamatan" data={districts} onChange={onChange}/>
    )
}
"use client";
import { trpc } from "@/utils/trpc";
import { SchoolListItem } from "../_components/SchoolListItem";

export const SchoolList = () => {
  const { data } = trpc.externalApi.getSchools.useQuery();
  return (
    <div className="flex flex-col gap-4">
      {data?.data.map((school, index) => (
        <SchoolListItem
          key={index}
          name={school.name}
          address={school.alamat}
          npsn={school.npsn}
          totalTeacher={school.guru}
          totalClass={school.kelas}
          totalLab={school.lab}
          totalLibrary={school.perpus}
          totalTendik={school.tendik}
        />
      ))}
    </div>
  );
};

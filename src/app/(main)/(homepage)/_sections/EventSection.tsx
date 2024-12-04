"use client";
import { Agenda } from "@/app/components/Agenda";
import { Calender } from "@/app/components/Calender";
import { Event } from "@/app/components/Event";
import { SectionBox } from "@/app/components/SectionBox";
import { trpc } from "@/utils/trpc";
import { useMemo } from "react";

export const EventSection = () => {
  const { data } = trpc.externalApi.agenda.useQuery(
    {
      page: 1,
      limit: 4,
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  const eventList = useMemo(() => {
    if (data) {
      const types: {
        [key: string]: number;
      } = {
        Walikota: 0,
        "Wakil Walikota": 1,
        "Sekretaris WaliKota": 2,
      };
      return data.data.map((d) => ({
        ...d,
        type: types[d.pelaksana],
      }));
    }
    return [];
  }, [data]);

  return (
    <SectionBox
      align="center"
      title="Tetap Terinformasi Dengan Kegiatan Pemerintah"
      subtitle="Ketahui Informasi dan Pengumuman Pemerintah Jakarta Timur Terkini"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 rounded-xl bg-white p-6 drop-shadow lg:flex-row">
          <Calender
            listAgenda={eventList}
            // onItemClick={() => {
            //   console.log("");
            // }}
          />

          <div className="grid flex-1 gap-1">
            <h4 className="font-plus-jakarta-sans text-xl font-semibold md:text-2xl">
              Agenda Pimpinan
            </h4>
            <Agenda data={eventList} />
          </div>
          <Event
            items={[
              {
                image: "/img/event-1.png",
              },
              {
                image: "/img/event-2.png",
              },
              {
                image: "/img/event-3.png",
              },
            ]}
          />
        </div>
      </div>
    </SectionBox>
  );
};

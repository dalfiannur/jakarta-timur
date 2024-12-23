"use client";
import { Agenda } from "@/app/components/Agenda";
import { Calender } from "@/app/components/Calender";
import { Event } from "@/app/components/Event";
import { SectionBox } from "@/app/components/SectionBox";
import { trpc } from "@/utils/trpc";
import { useEffect, useMemo, useState } from "react";
import * as dateFns from "date-fns";
import { Activity } from "@/types/activity";

export const EventSection = () => {
  const [selected, setSelected] = useState<(Activity & { type: number })[]>([]);
  const { data } = trpc.externalApi.agenda.useQuery(
    {
      page: 1,
      date: "12-2024",
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

  useEffect(() => {
    if (eventList.length > 0) {
      const l = eventList.filter((f) =>
        dateFns.isSameDay(dateFns.addDays(f.tanggal, 1), new Date()),
      );
      setSelected(l);
    }
  }, [eventList]);

  return (
    <SectionBox
      align="center"
      title="Tetap Terinformasi Dengan Kegiatan Pemerintah"
      subtitle="Ketahui Informasi dan Pengumuman Pemerintah Jakarta Timur Terkini"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 rounded-xl bg-white p-6 drop-shadow lg:flex-row">
          <Calender listAgenda={eventList} onItemClick={setSelected} />

          <div className="flex flex-1 flex-col gap-1">
            <h4 className="font-plus-jakarta-sans text-xl font-semibold md:text-2xl">
              Agenda Pimpinan
            </h4>
            <Agenda data={selected} />
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

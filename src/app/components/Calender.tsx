"use client";
import { useCallback, useMemo, useState } from "react";
import { Icon } from "../icons";
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import _ from "lodash";
import { AgendaType } from "./AgendaItem";
import { CalenderLegend } from "./CalenderLegend";
import { Activity } from "@/types/activity";

const dayLabels = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
const monthLabels = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const legends: {
  type: AgendaType;
  name: string;
}[] = [
  {
    type: "walikota",
    name: "Walikota",
  },
  {
    type: "wakil_walikota",
    name: "Wakil Walikota",
  },
  {
    type: "sekretaris_walikota",
    name: "Sekretaris Walikota",
  },
];

interface CalenderProps {
  listAgenda?: (Activity & { type: number })[];
  onItemClick?: (agenda: (Activity & { type: number })[]) => void;
}

export const Calender = ({ listAgenda = [], onItemClick }: CalenderProps) => {
  const [active, setActive] = useState(new Date());
  const [selected, setSelected] = useState<Date | undefined>();

  const renderDays = useMemo(() => {
    const startDate = startOfWeek(startOfMonth(active), { weekStartsOn: 1 });
    const endDate = endOfWeek(endOfMonth(active), { weekStartsOn: 1 });

    const calender = [];
    let currentDate = startDate;

    while (currentDate < endDate) {
      calender.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }

    return calender.map((date, index) => {
      const agenda = listAgenda.filter((item) =>
        isSameDay(addDays(item.tanggal, 1), date),
      );
      return (
        <Day
          currentDate={active}
          key={index}
          date={date}
          agenda={agenda}
          selected={selected ? isSameDay(selected, date) : false}
          onClick={() => {
            onItemClick?.(agenda);
            setSelected(
              selected ? (isSameDay(selected, date) ? undefined : date) : date,
            );
          }}
        />
      );
    });
  }, [active, listAgenda, onItemClick, selected]);

  const handlePrevMonth = useCallback(() => {
    setActive((prev) => subMonths(prev, 1));
  }, []);
  const handleNextMonth = useCallback(() => {
    setActive((prev) => addMonths(prev, 1));
  }, []);

  return (
    <div>
      <div className="w-full rounded-xl border p-5 lg:max-w-[460px]">
        <div className="flex items-center justify-between py-2">
          <button className="text-pink-500" onClick={handlePrevMonth}>
            <Icon name="ChevronLeft" className="h-6 w-6" />
          </button>
          <div className="text-2xl font-semibold">
            {monthLabels[active.getMonth()]} {active.getFullYear()}
          </div>
          <button className="text-pink-500" onClick={handleNextMonth}>
            <Icon name="ChevronRight" className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-8 grid grid-cols-7 gap-4 md:gap-6">
          {dayLabels.map((day) => (
            <div key={day} className="text-center">
              {day}
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-7 gap-4 md:gap-8">
          {renderDays}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 md:flex-row md:gap-8">
        {legends.map((legend) => (
          <CalenderLegend
            key={legend.type}
            type={legend.type}
            label={legend.name}
          />
        ))}
      </div>
    </div>
  );
};

interface DayProps {
  date: Date;
  currentDate: Date;
  agenda: (Activity & { type: number })[];
  selected?: boolean;
  onClick: () => void;
}

const Day = ({ currentDate, selected, date, agenda, onClick }: DayProps) => {
  const groups = _.countBy(agenda, "type");
  const keys = Object.keys(groups);

  return (
    <button
      onClick={onClick}
      data-active={isToday(date) ? true : undefined}
      data-selected={selected ? true : undefined}
      data-bias={isSameMonth(currentDate, date) ? undefined : true}
      className="relative  flex h-10 w-10 flex-col items-center justify-center rounded-xl border border-transparent text-center font-semibold data-[selected]:border-pink-500 data-[active]:bg-pink-500 data-[active]:text-white data-[bias]:text-gray-400/60"
    >
      <div>{date.getDate()}</div>
      <div className="absolute bottom-1 flex gap-1 text-xs">
        {keys.map((key) => (
          <div
            key={key}
            data-type={key}
            className="h-1 w-1 rounded-full data-[type=0]:bg-green-800 data-[type=1]:bg-orange-500 data-[type=3]:bg-red-700"
          />
        ))}
      </div>
    </button>
  );
};

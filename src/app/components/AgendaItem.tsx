import { tv } from "tailwind-variants";
import { Icon } from "../icons";
import { dateFormatter } from "@/utils/date-formatter";

const Styles = tv({
  slots: {
    root: "group py-2 hover:py-3 px-4 rounded-xl grid gap-2 hover:gap-4 transition-all hover:bg-pink-500/10 border hover:border-pink-500",
    title: "",
  },
  variants: {
    type: {
      0: {
        root: "bg-green-50 border-green-50",
        title: "text-green-800",
      },
      1: {
        root: "bg-orange-50 border-orange-50",
        title: "text-orange-500",
      },
      2: {
        root: "bg-red-50 border-red-50",
        title: "text-red-500",
      },
    },
  },
});

export type AgendaType = "walikota" | "wakil_walikota" | "sekretaris_walikota";

interface AgendaItemProps {
  type: number | 0 | 1 | 2;
  description: string;
  date: string;
  times: string[];
}

const titles = ["Walikota", "Wakil Walikota", "Sekretaris Walikota"];

export const AgendaItem = ({
  type,
  description,
  date,
  times,
}: AgendaItemProps) => {
  //@ts-expect-error mismatch type
  const styles = Styles({ type });

  return (
    <a href="#" className={styles.root()}>
      <div className={styles.title()}>{titles[type]}</div>
      <div className="font-semibold text-base/4">{description}</div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="ScheduleColored" size={24} />
          <div className="text-sm text-gray-500">{dateFormatter(date)}</div>
        </div>
        <div className="text-sm text-gray-500">
          {times[0]} - {times[1]} WIB
        </div>
      </div>
    </a>
  );
};

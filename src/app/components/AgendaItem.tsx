import { tv } from "tailwind-variants";
import { Icon } from "../icons";
import { format } from "date-fns";

const Styles = tv({
  slots: {
    root: "group py-2 hover:py-3 px-4 rounded-xl grid gap-2 hover:gap-4 transition-all hover:bg-pink-500/10 border hover:border-pink-500",
    title: "",
  },
  variants: {
    type: {
      walikota: {
        root: "bg-green-50 border-green-50",
        title: "text-green-800",
      },
      wakil_walikota: {
        root: "bg-orange-50 border-orange-50",
        title: "text-orange-500",
      },
      sekretaris_walikota: {
        root: "bg-red-50 border-red-50",
        title: "text-red-500",
      },
    },
  },
});

export type AgendaType = "walikota" | "wakil_walikota" | "sekretaris_walikota";

interface AgendaItemProps {
  type: AgendaType;
  description: string;
  date: Date;
  times: string[];
}

const titles = {
  walikota: "Walikota",
  wakil_walikota: "Wakil Walikota",
  sekretaris_walikota: "Sekretaris Walikota",
};

export const AgendaItem = ({
  type,
  description,
  date,
  times,
}: AgendaItemProps) => {
  const styles = Styles({ type });
  const dateString = format(date, "dd MMMM yyyy");

  return (
    <a href="#" className={styles.root()}>
      <div className={styles.title()}>{titles[type]}</div>
      <div className="font-semibold text-base/4">{description}</div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="ScheduleColored" size={24} />
          <div className="text-sm text-gray-500">{dateString}</div>
        </div>
        <div className="text-sm text-gray-500">
          {times[0]} - {times[1]} WIB
        </div>
      </div>
    </a>
  );
};

import { tv } from "tailwind-variants";
import { AgendaType } from "./AgendaItem";

const LegendStyles = tv({
  slots: {
    root: "group flex items-center gap-2",
    strip: "w-8 h-2 rounded-full",
    label: "text-sm",
  },
  variants: {
    type: {
      walikota: {
        strip: "bg-green-800",
      },
      wakil_walikota: {
        strip: "bg-orange-500",
      },
      sekretaris_walikota: {
        strip: "bg-red-500",
      },
    },
  },
});

export const CalenderLegend = ({
  label,
  type,
}: {
  label: string;
  type: AgendaType;
}) => {
  const x = LegendStyles({
    type,
  });

  return (
    <div className={x.root()}>
      <div className={x.strip()} />
      <div className={x.label()}>{label}</div>
    </div>
  );
};

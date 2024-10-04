import { AgendaItem, AgendaType } from "./AgendaItem";

const items: {
  type: AgendaType;
  description: string;
  date: Date;
  times: [string, string];
}[] = [
  {
    type: "walikota",
    description:
      "Mendampingi PJ Gubernur dalam rangka Penyerahan Piala PORWAJA",
    date: new Date("2023-08-17T08:00:00"),
    times: ["08:00", "10:00"],
  },
  {
    type: "wakil_walikota",
    description:
      "Mendampingi PJ Gubernur dalam rangka Penyerahan Piala PORWAJA",
    date: new Date("2023-08-17T08:00:00"),
    times: ["08:00", "10:00"],
  },
  {
    type: "sekretaris_walikota",
    description:
      "Mendampingi PJ Gubernur dalam rangka Penyerahan Piala PORWAJA",
    date: new Date("2023-08-17T08:00:00"),
    times: ["08:00", "10:00"],
  },
  {
    type: "sekretaris_walikota",
    description:
      "Mendampingi PJ Gubernur dalam rangka Penyerahan Piala PORWAJA",
    date: new Date("2023-08-17T08:00:00"),
    times: ["08:00", "10:00"],
  },
];

export const Agenda = () => {
  return (
    <div className="relative flex gap-4">
      <div className="absolute w-1 bottom-[12%] -z-10 top-[12%] left-[10px] bg-pink-500" />
      <div className="flex flex-col justify-around items-center">
        {items.map((_, i) => (
          <div key={i} className="bg-pink-500 border-4 border-white p-[2px] rounded-full">
            <div
              data-active={i === 0 ? true : undefined}
              className="bg-white data-[active]:bg-pink-500 border-2 border-white w-3 h-3 rounded-full"
            />
          </div>
        ))}
      </div>
      <div className="flex-1 grid gap-4">
        {items.map((item, index) => (
          <AgendaItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

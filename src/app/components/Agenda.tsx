import { Activity } from "@/types/activity";
import { AgendaItem } from "./AgendaItem";

type AgendaProps = {
  data?: (Activity & { type: number })[];
};

export const Agenda = ({ data = [] }: AgendaProps) => {
  return (
    <div className="relative flex gap-4">
      <div className="absolute w-1 bottom-[12%] -z-10 top-[12%] left-[10px] bg-pink-500" />
      <div className="flex flex-col justify-around items-center">
        {data.map((_, i) => (
          <div
            key={i}
            className="bg-pink-500 border-4 border-white p-[2px] rounded-full"
          >
            <div
              data-active={i === 0 ? true : undefined}
              className="bg-white data-[active]:bg-pink-500 border-2 border-white w-3 h-3 rounded-full"
            />
          </div>
        ))}
      </div>
      <div className="flex-1 grid gap-4">
        {data.map((item, index) => (
          <AgendaItem
            key={index}
            description={item.acara}
            date={item.tanggal}
            times={[item.jam]}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

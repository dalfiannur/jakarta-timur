import { Activity } from "@/types/activity";
import { AgendaItem } from "./AgendaItem";
import {addDays} from 'date-fns'

type AgendaProps = {
  data?: (Activity & { type: number })[];
};

export const Agenda = ({ data = [] }: AgendaProps) => {
  return (
    <div className="relative flex max-h-[600px] gap-4 overflow-y-scroll scrollbar-hidden">
      <div className="flex h-fit justify-stretch">
        <div className="-z-10 ml-[10px] w-1 bg-pink-500" />

        <div className="-ml-[13px] flex flex-1 flex-col gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex aspect-square w-6 items-center justify-center rounded-full border-4 border-white bg-pink-500">
                <div
                  data-active={index === 0 ? true : undefined}
                  className="h-3 w-3 rounded-full border-2 border-white bg-white data-[active]:bg-pink-500"
                />
              </div>
              <div className="flex-1">
                <AgendaItem
                  key={index}
                  description={item.acara}
                  date={addDays(new Date(item.tanggal), 1).toString()}
                  times={[item.jam]}
                  type={item.type}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

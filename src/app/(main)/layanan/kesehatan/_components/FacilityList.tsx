"use client";
import { Icon } from "@/app/icons";
import _ from "lodash";

const getFacilities = (value: string) => {
  const list = [...value.matchAll(/<li>(.*?)<\/li>/g)].map((match) =>
    match[1].replace(/\u00A0|&nbsp;/g, " ").trim()
  );
  return _.chunk(list, Math.ceil(list.length / 2));
};

export const FacilityList = ({ dataString }: { dataString: string }) => {
  const list = getFacilities(dataString);
  return (
    <>
      <div className="text-gray-500">Fasilitas</div>
      <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6">
        {list.map((facilities, index) => (
          <ul key={index} className="flex flex-col gap-2">
            {facilities.map((facility, fIndex) => (
              <li key={fIndex} className="flex items-center gap-2">
                <div className="text-pink-500">
                  <Icon name="CheckOne" className="w-4 h-4" />
                </div>
                <span className="text-base">{facility}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
};

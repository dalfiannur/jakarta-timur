import { Icon } from "@/app/icons";

export const DetailItem = ({
  address,
  routes,
}: {
  address: string;
  routes: { type: string; label: string }[];
}) => {
  return (
    <>
      <div className="mt-1 flex gap-2 border-b">
        <div className="mt-1">
          <Icon name="GoogleMapColored" className="h-2 w-2" />
        </div>
        <div className="pb-2 text-xs text-gray-500">{address}</div>
      </div>
      <div className="mt-2">
        <div className="text-xs">Rute Perjalanan</div>
        <ul className="mt-2 flex flex-col gap-1 lg:gap-2 ">
          {routes.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-xs lg:text-base"
            >
              <div className="mt-1 text-pink-500">
                <Icon name="MapMarkerAlt" className="w-[14px]" />
              </div>
              <div>
                {item.type}: {item.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

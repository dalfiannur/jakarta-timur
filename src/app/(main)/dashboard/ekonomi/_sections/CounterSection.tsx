import { Icon, IconKeys } from "@/app/icons";

const counters: {
  title: string;
  value: number;
  icon: IconKeys;
}[] = [
  {
    title: "Jumlah Destinasi Wisata",
    value: 2162,
    icon: "Vacation",
  },
  {
    title: "Jumlah Peserta Wirausaha Baru",
    value: 2162,
    icon: "BusinessMan",
  },
];

export const CounterSection = () => {
  return (
    <div className="grid grid-cols-2 gap-2 lg:gap-4">
      {counters.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between px-6 py-4"
        >
          <div className="flex-1 font-plus-jakarta-sans">
            <div className="text-xs font-medium text-gray-500">
              {item.title}
            </div>
            <div className="mt-2 text-base lg:text-xl font-bold text-gray-950">
              {item.value}
            </div>
          </div>

          <div className="flex aspect-square h-8 lg:h-10 items-center justify-center rounded-full bg-orange-100/60">
            <Icon
              name={item.icon}
              className="aspect-square h-4 text-orange-600 lg:h-6"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

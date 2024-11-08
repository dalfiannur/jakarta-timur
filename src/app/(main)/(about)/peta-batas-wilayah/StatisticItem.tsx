export const StatisticItem = ({
  title,
  value,
}: {
  title: string;
  value: number;
}) => {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xl">{title}</div>
    </div>
  );
};

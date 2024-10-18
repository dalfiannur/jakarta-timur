import { NumberListItem } from "./NumberListItem";

export const NumberList = ({ data }: { data: string[] }) => {
  return (
    <ul className="grid gap-4">
      {data.map((item, index) => (
        <NumberListItem key={index} no={index + 1}>
          {item}
        </NumberListItem>
      ))}
    </ul>
  );
};

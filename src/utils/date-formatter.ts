import { format } from "date-fns";
import { id } from "date-fns/locale/id";

export const dateFormatter = (date: string) => {
  return format(date, "dd MMMM yyyy", { locale: id });
};

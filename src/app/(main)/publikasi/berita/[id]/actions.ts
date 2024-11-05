import { News } from "@/types/news";

export const getNewsById = async (id: number): Promise<News> => {
  return fetch("https://timur.jakarta.go.id/API_Timur/api/news")
    .then((res) => res.json())
    .then((res) => res.data.find((d: News) => d.id === id))
    .catch((err) => {
      console.error(err);
    });
};

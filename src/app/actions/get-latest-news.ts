import { News } from "@/types/news";

export const getLatestNews = async (): Promise<News[]> => {
  const news = await fetch("https://timur.jakarta.go.id/API_Timur/api/news")
    .then((res) => res.json())
    .then((res) => res.data.reverse().slice(0, 3))
    .catch((err) => {
      console.error(err);
    });

  return news;
};

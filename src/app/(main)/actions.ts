"use server";

import { News } from "@/types/news";

export interface NewsPhoto {
  id: number;
  albID: number;
  title: string;
  slug: string;
  lokasi: string;
  deskripsi: string;
  time: string;
  img: string;
  viewed: number;
  img_name: string | null;
  galleries: any[];
}

interface Pagination<T> {
  status: string;
  data: T[];
}

export const getNews = async (): Promise<News[]> => {
  const news = await fetch("https://timur.jakarta.go.id/API_Timur/api/news")
    .then((res) => res.json())
    .then((res) => res.data.reverse().slice(0, 10))
    .catch((err) => {
      console.error(err);
    });

  return news;
};

export const getNewsStory = async (): Promise<Pagination<NewsPhoto>> => {
  return fetch("https://timur.jakarta.go.id/API_Timur/api/newsphoto")
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};

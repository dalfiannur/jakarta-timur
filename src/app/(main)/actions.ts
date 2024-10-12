"use server";

export interface News {
  id: number;
  catID: number;
  title: string;
  slug: string;
  writer: string;
  reporter: string;
  content: string;
  time: string;
  img: string;
  viewed: number;
  img_name: string | null;
}

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
  meta: {
    code: number;
    status: string;
    message: string;
  };
  data: {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
      url: string;
      label: string;
      active: boolean;
    }[];
    next_page_url: string | null;
    to: number;
    total: number;
  };
}

export const getNews = async (): Promise<Pagination<News>> => {
  return fetch("https://timur.jakarta.go.id/API_Timur/api/news")
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};

export const getNewsStory = async (): Promise<Pagination<NewsPhoto>> => {
  return fetch("https://timur.jakarta.go.id/API_Timur/api/newsphoto")
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};

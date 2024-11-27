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
  img_url: string;
  kategori: {
    id: number;
    cat: string;
  };
}

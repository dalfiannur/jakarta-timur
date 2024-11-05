export interface News {
  id: number;
  catID: {
    id: number;
    name: string;
  };
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

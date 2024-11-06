export type Video = {
  id: number;
  catID: number;
  title: string;
  slug: string;
  tanggal: string;
  source: string;
  description: string;
  viewed: number;
  keyword: string | null;
  kategori: {
    id: number;
    catID: number;
    cat: string;
  };
};

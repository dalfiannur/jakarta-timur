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
  img_url: string | null;
  kategori: {
    id: number;
    catID: number;
    cat: string;
  };
}

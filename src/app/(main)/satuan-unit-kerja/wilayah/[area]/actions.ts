"use service";

type DataItem = {
  id: number;
  slug: string;
  nama: string;
  jabatan: string;
  pejabat: string;
  deskripsi: string;
  sejarah: string;
  image: string;
};

export const getData = async ({
  area,
  filters = [],
}: {
  area: string;
  filters?: { by: string; value: string }[];
}) => {
  const searchParams = new URLSearchParams();
  filters.forEach((d) => {
    searchParams.set(d.by, d.value);
  });

  const url = `https://timur.jakarta.go.id/API_Timur/api/${area}?${searchParams.toString()}`;
  const res = await fetch(url).then((res) => res.json());
  const data = res.data.data as DataItem[];

  return { data };
};

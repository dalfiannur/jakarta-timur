"use service";

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
  console.log(url);
  const { data } = await fetch(url).then((res) => res.json());

  return data;
};

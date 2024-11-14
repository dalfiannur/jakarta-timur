export const getData = async () => {
  const res = await fetch(
    "https://timur.jakarta.go.id/API_Timur/api/perangkatkota",
  ).then((res) => res.json());
  return res.data;
};

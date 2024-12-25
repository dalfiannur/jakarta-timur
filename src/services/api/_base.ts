import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const jakartaTimurBaseQuery = fetchBaseQuery({
  baseUrl: "https://timur.jakarta.go.id/API_Timur/api",
});

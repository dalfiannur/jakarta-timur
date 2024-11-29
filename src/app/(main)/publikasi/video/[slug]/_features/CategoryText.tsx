"use client";

import { useContext } from "react";
import { Context } from "../Provider";

export const CategoryText = () => {
  const { data } = useContext(Context);
  return (
    <div className="font-roboto text-xs uppercase text-gray-500 lg:text-xl">
      {data?.kategori.cat}
    </div>
  );
};

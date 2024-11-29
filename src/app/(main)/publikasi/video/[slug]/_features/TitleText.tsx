"use client";
import { useContext } from "react";
import { Context } from "../Provider";

export const TitleText = () => {
  const { data } = useContext(Context);
  return (
    <h2 className="font-plus-jakarta-sans text-xl font-bold lg:text-3xl">
      {data?.title}
    </h2>
  );
};

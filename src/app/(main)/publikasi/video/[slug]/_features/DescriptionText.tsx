"use client";
import { useContext } from "react";
import { Context } from "../Provider";

export const DescriptionText = () => {
  const { data } = useContext(Context);
  return (
    <div
      className="mt-6 grid gap-4 text-justify font-plus-jakarta-sans text-gray-600 lg:mt-12"
      dangerouslySetInnerHTML={{ __html: data?.description ?? "" }}
    />
  );
};

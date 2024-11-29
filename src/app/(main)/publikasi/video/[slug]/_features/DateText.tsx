"use client";
import { Icon } from "@/app/icons";
import { dateFormatter } from "@/utils/date-formatter";
import { useContext } from "react";
import { Context } from "../Provider";

export const DateText = () => {
  const { data } = useContext(Context);
  return (
    <div className="flex items-center gap-2">
      <Icon name="Calendar" className="aspect-square h-4 text-pink-500" />
      <div>{dateFormatter(data?.tanggal ?? new Date().toISOString())}</div>
    </div>
  );
};

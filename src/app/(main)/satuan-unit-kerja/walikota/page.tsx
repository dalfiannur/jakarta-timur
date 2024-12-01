"use client"
import { SectionTitle } from "../_components/SectionTitle";
import { Content } from "./_features/Content";
import { PrevLeaders } from "./_features/PrevLeaders";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col gap-6 lg:gap-16">
      <SectionTitle>Walikota</SectionTitle>
      <Content />
      <PrevLeaders />
    </div>
  );
}

"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ReactNode, useState } from "react";
import { Icon } from "@/app/icons";

export type CardLinkProps = {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
};

export const CardLink = ({
  title,
  description,
  icon,
  href = "#",
}: CardLinkProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href}>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <div className="group inline-flex w-full items-center gap-5 rounded-xl border border-transparent bg-white p-5 drop-shadow transition-all hover:border-pink-500 hover:bg-pink-100">
          <div className="flex aspect-square w-10 items-center justify-center rounded-xl bg-pink-100/60 transition-all group-hover:bg-white md:w-16">
            {icon}
          </div>
          <div className="flex-1">
            <h5 className="text-lg font-semibold">{title}</h5>
            <motion.p
              initial={{
                opacity: 0,
                height: 0,
                y: 10,
                fontSize: 12,
                lineHeight: "16px",
              }}
              animate={{
                opacity: hovered ? 1 : 0,
                height: hovered ? "auto" : 0,
                y: hovered ? 0 : 10,
              }}
            >
              {description}
            </motion.p>
          </div>
          <div>
            <Icon name="ChevronRight" className="h-4 w-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

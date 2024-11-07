"use client";
import Link from "next/link";
import { motion } from "framer-motion";
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
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={href}>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group w-full inline-flex bg-white hover:bg-pink-100 drop-shadow p-5 rounded-xl items-center gap-5 border border-transparent hover:border-pink-500 transition-all"
      >
        <div className="w-16 h-16 rounded-xl bg-pink-100/60 group-hover:bg-white transition-all flex justify-center items-center">
          {icon}
        </div>
        <div className="flex-1">
          <h5 className="text-lg font-semibold">{title}</h5>
          <motion.p
            initial={{
              opacity: 0,
              height: 0,
              y: 10,
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
              y: isHovered ? 0 : 10,
            }}
            className="text-xs text-gray-800/60"
          >
            {description}
          </motion.p>
        </div>
        <div>
          <Icon name="ChevronRight" size={16} />
        </div>
      </motion.div>
    </Link>
  );
};

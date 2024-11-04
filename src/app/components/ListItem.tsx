"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Icon, IconKeys } from "../icons";

interface ListItemProps {
  icon: IconKeys;
  title: string;
  description?: string;
  link?: string;
}

export const ListItem = ({ icon, title, description, link }: ListItemProps) => {
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  return (
    <motion.button
      onClick={() => link && router.push(link)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      exit={{ opacity: 0, y: 10 }}
      className="group flex items-center hover:items-start gap-6 hover:bg-[#FFF9FC] w-72 rounded-lg p-4 text-left"
      onHoverStart={() => setOpened(true)}
      onHoverEnd={() => setOpened(false)}
    >
      <div className="h-full">
        <div className="bg-gray-100 group-hover:bg-pink-100 p-2 text-gray-500 group-hover:text-pink-500 rounded-lg transition-all duration-500">
          {icon && <Icon name={icon} size={16} />}
        </div>
      </div>
      <div className="transition-all duration-500">
        <h6 className="group-hover:text-pink-500 font-semibold">{title}</h6>
        {description && (
          <motion.p
            initial={{ opacity: 0, height: 0, y: 10 }}
            animate={{
              opacity: opened ? 1 : 0,
              height: opened ? "auto" : 0,
              y: opened ? 0 : 10,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="text-gray-500 text-xs"
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.button>
  );
};

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface ListItemProps {
  icon: ReactNode;
  title: string;
  description?: string;
}

export const ListItem = ({ icon, title, description }: ListItemProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      exit={{ opacity: 0, y: 10 }}
      className="group flex items-center hover:items-start gap-6 hover:bg-[#FFF9FC] w-72 rounded-lg p-4 text-left"
      onHoverStart={() => setOpened(true)}
      onHoverEnd={() => setOpened(false)}
    >
      <div className="h-full">
        <div className="bg-gray-100 group-hover:bg-pink-100 p-2 text-gray-500 group-hover:text-pink-500 rounded-lg transition-all duration-500">
          {icon}
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

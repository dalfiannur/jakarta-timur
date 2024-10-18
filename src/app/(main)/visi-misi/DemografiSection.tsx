import { motion } from "framer-motion";
import { animations } from "./animations";
import { SectionTitle } from "./SectionTitle";

export const DemografiSection = () => {
  return (
    <motion.div {...animations}>
      <SectionTitle>Demografi</SectionTitle>
    </motion.div>
  );
};

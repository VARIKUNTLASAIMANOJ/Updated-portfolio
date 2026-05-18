"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MainFadeProps = {
  children: ReactNode;
};

const MainFade = ({ children }: MainFadeProps) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative z-10"
    >
      {children}
    </motion.main>
  );
};

export default MainFade;

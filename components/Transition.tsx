"use client"

import { motion } from "framer-motion";

export default function Transition({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 0.75}}
        className="flex flex-col items-center justify-center text-center"
    >
        {children}
    </motion.div>
  );
}


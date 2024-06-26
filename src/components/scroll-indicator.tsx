"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollY } = useScroll();
  return (
    <div className="w-px relative h-24 overflow-hidden z-10 mt-12">
      <div className="relative w-px h-24 bg-[#191D23] origin-center"></div>
      <motion.div
        className="w-px h-7 bg-white absolute top-0"
        initial={{ y: 0 }}
        style={{ y: scrollY }}
      />
    </div>
  );
}

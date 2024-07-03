"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export default function ProgressIndicator({ parentRef }: { parentRef: any }) {
  const { scrollYProgress } = useScroll({
    target: parentRef,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const opacity = useTransform(scrollYProgress, (number) =>
    number > 0 ? 1 : 0
  );

  const y = useTransform(scrollYProgress, (number) =>
    number > 0 ? "0" : "-100%"
  );

  return (
    <motion.div
      aria-hidden="true"
      className="fixed bg-black/90 left-0 right-0 w-full z-10 top-0"
      style={{ opacity, y }}
      transition={{ type: "spring" }}
    >
      <div className="container py-4 flex justify-between items-center gap-x-1">
        <p className="text-xs font-medium">
          The future of web development: our prediction for 2024
        </p>
        <Link href="/blogs">
          <X className="size-4" />
        </Link>
      </div>
      <motion.div
        className="absolute h-px bg-white w-full left-0 origin-[0%] bottom-0 block appearance-none"
        style={{ scaleX }}
      ></motion.div>
    </motion.div>
  );
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[2] h-[500px] w-[500px] rounded-full"
      style={{
        left: pos.x - 250,
        top: pos.y - 250,
        background:
          "radial-gradient(circle, oklch(1 0 0 / 0.06) 0%, transparent 60%)",
      }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
    />
  );
}

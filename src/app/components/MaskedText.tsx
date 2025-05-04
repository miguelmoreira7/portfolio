"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MaskedText() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  return (
    <div
      className="relative overflow-hidden text-6xl font-bold leading-tight text-neutral-300"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      {/* Texto visível por padrão */}
      <div className="pointer-events-none">
        MAKING GOOD SHIT SINCE 2009 <br />
        asdasdasdasdasdasd <br />
        asdasdasdasdsdasda
      </div>

      {/* Texto com máscara */}
      <motion.div
        className="absolute top-0 left-0 text-[#FF5733] pointer-events-none"
        style={{
          clipPath: `circle(120px at ${mousePosition.x}px ${mousePosition.y}px)`,
        }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        njaksdnjkasnjkdnasjkdnajksdnjkasndjk
      </motion.div>
    </div>
  );
}
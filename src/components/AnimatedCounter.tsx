"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  target: number;
  label: string;
  duration?: number; // in ms
  suffix?: string;
}

export default function AnimatedCounter({
  target,
  label,
  duration = 1000,
  suffix = "+",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    const startValue = target > 10 ? target - 15 : 0;
    let current = startValue;
    const totalSteps = target - startValue;
    const stepTime = Math.max(Math.floor(duration / totalSteps), 30);

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center"
    >
      <h2 className="text-5xl font-bold text-[#c38e24]">
        {count}
        {suffix}
      </h2>
      <p className="text-xl text-gray-400">{label}</p>
    </motion.div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    const minLoadTime = setTimeout(() => {
      if (document.readyState === "complete") {
        setIsLoading(false);
      } else {
        const handleLoad = () => {
          setIsLoading(false);
          window.removeEventListener("load", handleLoad);
        };
        window.addEventListener("load", handleLoad);
      }
    }, 500);

    return () => {
      clearTimeout(minLoadTime);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050913]"
        >
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/logo.png"
              alt="Al Eliza Interior"
              className={`h-56 w-auto animate-pulse transition-transform duration-500 ease-in-out ${
                progress >= 100 ? "scale-125" : "scale-100"
              }`}
              width={224}
              height={224}
            />
          </div>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#c38e24] transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

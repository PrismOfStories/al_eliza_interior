"use client";

import React, { useEffect, useState, useRef } from "react";

export default function FollowingDot() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      setDotPosition((prevPos) => {
        const ease = 0.15;
        const newX = prevPos.x + (mousePosition.x - prevPos.x) * ease;
        const newY = prevPos.y + (mousePosition.y - prevPos.y) * ease;

        return { x: newX, y: newY };
      });

      animationRef.current = requestAnimationFrame(followMouse);
    };

    followMouse();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div
      className="fixed pointer-events-none z-50 w-2.5 h-2.5 bg-white rounded-full mix-blend-difference transition-opacity duration-300 hidden md:block"
      style={{
        left: `${dotPosition.x}px`,
        top: `${dotPosition.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}

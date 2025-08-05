"use client";

import { AutorotatePlugin } from "@photo-sphere-viewer/autorotate-plugin";
import { useEffect, useRef } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import "@photo-sphere-viewer/core/index.css";
import { IoClose } from "react-icons/io5";

type Props = {
  imageUrl: string;
  onClose: () => void;
};

export default function PanoramaViewer({ imageUrl, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    if (!containerRef.current || !imageUrl) return;

    viewerRef.current = new Viewer({
      container: containerRef.current,
      panorama: imageUrl,
      caption: "360 degree view interior design",
      touchmoveTwoFingers: true,
      defaultYaw: 0,
      defaultPitch: 0,
      defaultZoomLvl: 0,
      mousewheel: true,
      navbar: ["autorotate", "zoom", "caption", "fullscreen"],
      plugins: [
        AutorotatePlugin.withConfig({
          autorotatePitch: "0deg",
        }),
      ],
    });

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      viewerRef.current?.destroy();
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [imageUrl, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-transparent backdrop-blur-lg bg-opacity-80 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        ref={containerRef}
        style={{ width: "100%", height: "88%", backgroundColor: "#000" }}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-2 right-4 text-white rounded cursor-pointer"
      >
        <IoClose className="h-10 w-10" />
      </button>
    </div>
  );
}

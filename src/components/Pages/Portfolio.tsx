"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Portfolio() {
  const [currentTab, setCurrentTab] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp",
      category: "business-center",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img5_nsn0nj.webp",
      category: "cafe",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/img3_u7qqdu.webp",
      category: "office",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/img3_u7qqdu.webp",
      category: "outdoor",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/about_3_tp5mmt.webp",
      category: "restaurant",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
      category: "showroom",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
      category: "business-center",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_2_ucqtyb.webp",
      category: "cafe",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp",
      category: "office",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
      category: "outdoor",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img5_nsn0nj.webp",
      category: "restaurant",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
      category: "showroom",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/about_1_zi61v1.webp",
      category: "business-center",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/intro-poster_mw7g0m.webp",
      category: "cafe",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img5_nsn0nj.webp",
      category: "office",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_3_tp5mmt.webp",
      category: "outdoor",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp",
      category: "restaurant",
    },
    {
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_2_ucqtyb.webp",
      category: "showroom",
    },
  ];

  const tabs = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Business Center",
      value: "business-center",
    },
    {
      name: "Cafe",
      value: "cafe",
    },
    {
      name: "Office",
      value: "office",
    },
    {
      name: "Outdoor",
      value: "outdoor",
    },
    {
      name: "Restaurant",
      value: "restaurant",
    },
    {
      name: "Showroom",
      value: "showroom",
    },
  ];

  const filteredImages = images.filter((image) => {
    return currentTab === "all" || image.category === currentTab;
  });

  const slides = filteredImages.map((img) => ({
    src: img.src,
    alt: img.category,
  }));
  return (
    <>
      <div className="relative h-[45vh] bg-cover bg-center">
        <Image
          src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center mt-12 px-4"
          >
            <h1 className="text-5xl font-bold mb-4 text-white">Portfolio</h1>
            <p className="text-xl text-white max-w-4xl mx-auto">
              Explore our portfolio of interior and architectural designs
              crafted with creativity, precision, and a focus on elegant,
              functional spaces for both residential and commercial projects.
            </p>
          </motion.div>
        </div>
      </div>

      {/* add list of buttons like tab */}

      <div className="max-w-6xl mx-auto px-4 py-8">
        <ul className="flex justify-around gap-4 my-8 text-lg font-normal  flex-wrap">
          {tabs.map((tab) => (
            <li
              onClick={() => setCurrentTab(tab.value)}
              key={tab.value}
              className={`hover:text-yellow-dark cursor-pointer ${
                currentTab === tab.value ? "text-yellow-dark font-semibold" : ""
              }`}
            >
              {tab.name}
            </li>
          ))}
        </ul>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab} // triggers animation on tab change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {filteredImages.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  setLightboxIndex(i);
                  setLightboxOpen(true);
                }}
                className="w-full aspect-square overflow-hidden rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={item.src}
                  alt={`${item.category} Gallery ${i + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox Viewer */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Thumbnails, Fullscreen, Zoom]}
        carousel={{ finite: true }}
        animation={{ fade: 250 }}
      />
    </>
  );
}

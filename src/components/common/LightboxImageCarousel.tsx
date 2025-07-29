"use client";

import React, { useState, useCallback } from "react";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface LightboxImageCarouselProps {
  images: string[]; // CDN or local image URLs
  height?: string; // optional custom height
}

const LightboxImageCarousel: React.FC<LightboxImageCarouselProps> = ({
  images,
  // height = "aspect-[3/2]",
}) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((img) => ({ src: img }));

  const openLightbox = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  return (
    <>
      {/* Inline Carousel */}
      <Lightbox
        index={index}
        slides={slides}
        plugins={[Inline]}
        on={{
          click: ({ index }) => openLightbox(index),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        inline={{
          style: {
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto",
            cursor: "pointer",
            borderRadius: "1rem",
            height: "100%",
            aspectRatio: "3 / 2",
            overflow: "hidden",
          },
        }}
      />

      {/* Fullscreen Lightbox Viewer */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        on={{ view: ({ index }) => setIndex(index) }}
        plugins={[Fullscreen, Thumbnails, Zoom]}
        carousel={{ finite: true }}
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: true,
        }}
        animation={{ fade: 250 }}
      />
    </>
  );
};

export default LightboxImageCarousel;

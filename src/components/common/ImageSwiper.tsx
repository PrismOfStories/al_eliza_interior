"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface ImageSwiperProps {
  images: string[];
  height?: string;
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({
  images,
  height = "h-full",
}) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt={`Slide ${i}`}
              className={`w-full ${height} object-cover rounded-xl cursor-pointer`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              height={500}
              width={500}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
        plugins={[Fullscreen, Zoom, Thumbnails]}
        carousel={{ finite: true }}
        animation={{ fade: 250 }}
      />
    </>
  );
};

export default ImageSwiper;

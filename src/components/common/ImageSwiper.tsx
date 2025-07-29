"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

interface ImageSwiperProps {
  images: string[];
  height?: string;
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({
  images,
  height = "h-full",
}) => {
  return (
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
            className={`w-full ${height} object-cover rounded-xl`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            height={500}
            width={500}
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;

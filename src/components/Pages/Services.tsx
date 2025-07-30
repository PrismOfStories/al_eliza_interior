"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ImageSwiper from "../common/ImageSwiper";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { services } from "@/lib/staticData/services";
import Link from "next/link";

const AnimatedService = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Services() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <div className="relative h-[45vh] bg-cover bg-center">
        <Image
          src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_3_tp5mmt.webp"
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
            <h1 className="text-5xl font-bold mb-4 text-white">Services</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Discover our range of services designed to transform your space
              into a haven of comfort and style. From interior design to
              renovation, we offer tailored solutions to meet your unique needs.
            </p>
          </motion.div>
        </div>
      </div>

      {!isMobile ? (
        <section className="max-w-[90rem] mx-auto py-24 space-y-24">
          {services.map((service, index) => (
            <AnimatedService key={service.id + index} id={service.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 h-auto w-full space-x-6">
                {index % 2 === 0 ? (
                  <>
                    {/* Left Content */}
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="flex flex-col items-center justify-center p-6"
                    >
                      <div className="max-w-xl space-y-3">
                        <h2 className="text-4xl font-semibold text-yellow">
                          {service.title}
                        </h2>
                        <p className="text-lg font-normal text-paragraph">
                          {service.description}
                        </p>
                        {service.additional && (
                          <p className="text-lg font-normal text-paragraph">
                            {service.additional}
                          </p>
                        )}
                      </div>
                      <Link href="/contact">
                        <Button
                          variant="al_eliza"
                          size="al_eliza"
                          className="mt-8 w-56 flex justify-center mx-auto items-center"
                        >
                          Get a Quote{" "}
                          <MdOutlineKeyboardArrowRight className="!h-6 !w-6" />
                        </Button>
                      </Link>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="w-full h-full relative flex justify-center items-center overflow-hidden p-6 "
                    >
                      <ImageSwiper images={service.images} height="h-[25vw]" />
                    </motion.div>
                  </>
                ) : (
                  <>
                    {/* Left Image */}
                    <div className="w-full h-full relative flex justify-center items-center overflow-hidden p-6">
                      <ImageSwiper images={service.images} height="h-[25vw]" />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col items-center justify-center p-6">
                      <div className="max-w-xl space-y-3">
                        <h2 className="text-4xl font-semibold text-yellow">
                          {service.title}
                        </h2>
                        <p className="text-lg font-normal text-paragraph">
                          {service.description}
                        </p>
                        {service.additional && (
                          <p className="text-lg font-normal text-paragraph">
                            {service.additional}
                          </p>
                        )}
                      </div>
                      <Link href="/contact">
                        <Button
                          variant="al_eliza"
                          size="al_eliza"
                          className="mt-8 w-56 flex justify-center mx-auto items-center"
                        >
                          Get a Quote{" "}
                          <MdOutlineKeyboardArrowRight className="!h-6 !w-6 " />
                        </Button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </AnimatedService>
          ))}
        </section>
      ) : (
        <section className="max-w-[90rem] mx-auto py-24 space-y-16 px-4">
          {services.map((service, index) => (
            <AnimatedService key={service.id + index} id={service.id}>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-6 items-center">
                {/* Text Content */}
                <div className="flex flex-col p-4 md:p-6 text-left md:text-left">
                  <div className="max-w-xl space-y-4">
                    <h2 className="text-3xl md:text-4xl font-semibold text-yellow">
                      {service.title}
                    </h2>
                    <p className="text-base md:text-lg text-paragraph">
                      {service.description}
                    </p>
                    {service.additional && (
                      <p className="text-base md:text-lg text-paragraph">
                        {service.additional}
                      </p>
                    )}
                  </div>
                </div>

                {/* Swiper Image */}
                <div className="w-full h-full relative flex justify-center items-center p-4 md:p-6">
                  <ImageSwiper images={service.images} height="h-[60vw]" />
                </div>

                <Button
                  variant="al_eliza"
                  size="al_eliza"
                  className="w-56 mt-4 mx-auto"
                >
                  Get a Quote
                </Button>
              </div>
            </AnimatedService>
          ))}
        </section>
      )}
    </div>
  );
}

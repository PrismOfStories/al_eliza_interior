"use client";

import React from "react";
import { FaHandsHelping, FaStar, FaUserCog } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Team from "../Team";

export default function Page() {
  return (
    <>
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
            <h1 className="text-5xl font-bold mb-4 text-white">About Us</h1>
            {/* <p className="text-xl text-white max-w-2xl mx-auto">
              Welcome to our company! We are dedicated to delivering the best
              services and products with passion and professionalism.
            </p> */}
          </motion.div>
        </div>
      </div>

      <section className="py-24 sm:py-40 relative">
        <div className="w-full max-w-[95rem] px-4 md:px-8 lg:px-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-12"
          >
            {/* Image Stack */}
            <div className="relative w-full flex items-center justify-center lg:justify-end">
              <div className="relative w-full h-[400px] flex items-center justify-center">
                <Image
                  className="absolute top-2 left-12 rounded-xl object-cover shadow-lg"
                  src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/about_1_zi61v1.webp"
                  alt="about us image 1"
                  width={400}
                  height={300}
                  style={{
                    width: "60%",
                    height: "80%",
                    objectFit: "cover",
                    borderRadius: "20px",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                  }}
                />
                <Image
                  className="absolute bottom-[-14px] right-[16px] rounded-xl object-cover shadow-lg"
                  src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_2_ucqtyb.webp"
                  alt="about us image 2"
                  width={400}
                  height={300}
                  style={{
                    width: "50%",
                    height: "60%",
                    objectFit: "cover",
                    borderRadius: "20px",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
                  }}
                />
              </div>
            </div>

            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left px-6 sm:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold font-manrope leading-snug">
                <span className="text-yellow">Al Eliza</span> Interior Company
              </h2>
              <p className="text-paragraph text-justify text-sm sm:text-base font-normal leading-relaxed mt-4">
                We transform your residential or commercial space with
                aesthetically pleasing and stunning designs that elevate your
                mood, increase value and enhance your purpose. Our team of
                professionals is dedicated to working personally with each
                client to uncover their specific wants, needs and style to
                infuse their space with luxurious yet functional design that
                balance style with necessity. Collaborate with us and implement
                exceptional designs, that deliver remarkable first impressions
                and exceed your expectations.{" "}
              </p>
              <div className="w-full flex justify-center lg:justify-center mt-6">
                <Button
                  variant="al_eliza"
                  className="ml-4"
                  size="al_eliza"
                  onClick={() => alert("Navigate to contact page")}
                >
                  Contact Us →
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative w-full py-16 sm:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/intro-poster_mw7g0m.webp"
          alt="Interior background"
          fill
          className="object-cover object-center z-[-1]"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-20">
          <div className="w-full lg:w-[400px] flex justify-center items-center relative">
            <div className="relative w-[400px] h-[300px]">
              <Image
                src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_2_ucqtyb.webp"
                alt="About us image 3"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="rounded-lg shadow-xl object-cover"
              />
              <div
                className="absolute bottom-[-50px] left-5 right-5 backdrop-blur-sm bg-black/20  text-[#FCBA06] shadow-lg rounded-lg py-4 px-6 max-w-md mx-auto text-center"
                style={{ zIndex: 10 }}
              >
                <p className="font-bold text-xl md:text-2xl">
                  Our Core Pillars
                </p>
                <p className="text-sm md:text-base text-white">
                  We offer a dynamic and inclusive work environment that fosters
                  growth, creativity, and innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center space-y-6">
            <div className="w-full backdrop-blur-sm bg-black/20 shadow-md rounded-lg p-6 flex items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-yellow  mr-4 rounded-full">
                <FaHandsHelping className="text-2xl md:text-3xl" />
              </div>
              <div className="flex-1">
                <div className=" text-sm md:text-base">
                  <p className="font-bold text-xl text-paragraph">Trust</p>Our
                  clients choose us for our transparency, commitment to
                  promises, and consistent dedication to surpassing
                  expectations.
                </div>
              </div>
            </div>

            <div className="w-full backdrop-blur-sm bg-black/20 shadow-md rounded-lg p-6 flex items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-yellow  mr-4 rounded-full">
                <FaStar className="text-2xl md:text-3xl" />
              </div>
              <div className="flex-1">
                <div className=" text-sm md:text-base">
                  <p className="font-bold text-xl text-paragraph">Quality</p> We
                  achieve unmatched quality by adhering to the highest
                  standards, utilizing skilled craftsmanship, and sourcing
                  premium materials to deliver exceptional results.
                </div>
              </div>
            </div>

            <div className="w-full backdrop-blur-sm bg-black/20 shadow-md rounded-lg p-6 flex items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-yellow  mr-4 rounded-full">
                <FaUserCog className="text-2xl md:text-3xl " />
              </div>
              <div className="flex-1">
                <div className=" text-sm md:text-base">
                  <p className="font-bold text-xl text-paragraph">Service</p> We
                  provide personalized, client-focused solutions, ensuring a
                  smooth and timely project experience tailored to each unique
                  vision.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team />
    </>
  );
}

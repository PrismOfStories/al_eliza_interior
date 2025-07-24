"use client";

import React from "react";
import { FaHandsHelping, FaStar, FaUserCog } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <div className="relative h-screen bg-cover bg-center">
        <Image
          src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_3_tp5mmt.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center mt-12 px-4"
          >
            <h1 className="text-4xl font-bold mb-4 text-white">About Us</h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Welcome to our company! We are dedicated to delivering the best
              services and products with passion and professionalism.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 sm:py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-8 lg:px-10 mx-auto">
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

      <div
        className="w-full py-16 px-6 md:px-12 lg:px-20 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/intro-poster_mw7g0m.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-full lg:w-[400px] flex justify-center items-center relative">
            <div className="relative w-full max-w-lg">
              <Image
                src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_2_ucqtyb.webp"
                alt="About us image 3"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                width={400}
                height={300}
              />
              <div
                className="absolute bottom-[-30px] left-5 right-5 bg-white text-[#FCBA06] shadow-lg rounded-lg py-4 px-6 max-w-md mx-auto text-center"
                style={{ zIndex: 10 }}
              >
                <p className="font-bold text-lg md:text-xl">Our Core Pillars</p>
                <p className="text-sm md:text-base text-black">
                  We offer a dynamic and inclusive work environment that fosters
                  growth, creativity, and innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center space-y-6">
            <div className="w-full bg-white shadow-md rounded-lg p-6 flex items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#FCBA06] text-white mr-4 rounded-full">
                <FaHandsHelping className="text-2xl md:text-3xl" />
              </div>
              <div className="flex-1">
                <p className="text-black text-sm md:text-base">
                  <strong>Trust</strong> Our clients choose us for our
                  transparency, commitment to promises, and consistent
                  dedication to surpassing expectations.
                </p>
              </div>
            </div>

            <div className="w-full bg-white shadow-md rounded-lg p-6 flex items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#FCBA06] text-white mr-4 rounded-full">
                <FaStar className="text-2xl md:text-3xl" />
              </div>
              <div className="flex-1">
                <p className="text-black text-sm md:text-base">
                  <strong>Quality</strong> We achieve unmatched quality by
                  adhering to the highest standards, utilizing skilled
                  craftsmanship, and sourcing premium materials to deliver
                  exceptional results.
                </p>
              </div>
            </div>

            <div className="w-full bg-white shadow-md rounded-lg p-6 flex items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#FCBA06] text-white mr-4 rounded-full">
                <FaUserCog className="text-2xl md:text-3xl " />
              </div>
              <div className="flex-1">
                <p className="text-black text-sm md:text-base">
                  <strong>Service</strong> We provide personalized,
                  client-focused solutions, ensuring a smooth and timely project
                  experience tailored to each unique vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

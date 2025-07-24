"use client";

import React from "react";
import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

export default function Home() {
  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const customEase = cubicBezier(0.42, 0, 0.58, 1);
  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: customEase,
      },
    },
  };

  const services = [
    {
      title: "Residential & Commercial Designs",
      description:
        "We provide tailored interior design solutions for residential and commercial spaces with elegance and functionality.",
      image:
        "https://res.cloudinary.com/dpzuexs49/image/upload/v1753301312/img4_slwfgq.webp",
    },
    {
      title: "Design Consultancy",
      description:
        "Expert design consultations to turn your vision into reality, from layout planning to final finishes.",
      image:
        "https://res.cloudinary.com/dpzuexs49/image/upload/v1753301307/img1_i7es83.webp",
    },
    {
      title: "Virtual Reality 360° Designs",
      description:
        "Experience your space before it's built with immersive 360° VR walkthroughs and visualizations.",
      image:
        "https://res.cloudinary.com/dpzuexs49/image/upload/v1753301305/img5_rmjv6x.webp",
    },
    {
      title: "Fit out Approvals",
      description:
        "We manage and secure fit-out approvals with relevant authorities to ensure smooth project execution.",
      image:
        "https://res.cloudinary.com/dpzuexs49/image/upload/v1753301304/img2_guriht.webp",
    },
    {
      title: "Turnkey Fit out Projects",
      description:
        "From concept to completion – we handle every aspect of your project with end-to-end solutions.",
      image:
        "https://res.cloudinary.com/dpzuexs49/image/upload/v1753301304/img3_rzj3z8.webp",
    },
    {
      title: "Landscaping",
      description:
        "Transform your outdoor spaces with creative and sustainable landscaping solutions.",
      image:
        "https://res.cloudinary.com/dpzuexs49/image/upload/v1753301307/img1_i7es83.webp",
    },
    {
      title: "Maintenance",
      description:
        "Comprehensive maintenance services to keep your spaces functional, safe, and beautiful.",
      image:
        "https://res.cloudinary.com/dpzuexs49/image/upload/v1753301304/img2_guriht.webp",
    },
  ];

  return (
    <main>
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            poster="https://res.cloudinary.com/dpzuexs49/image/upload/v1753302867/intro-poster_qonht1.webp"
            className="w-full h-full object-cover opacity-70 pointer-events-none"
          >
            <source
              width="720"
              src="https://res.cloudinary.com/dpzuexs49/video/upload/v1753213392/intro2_1_eacnbz.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="relative z-5 flex items-center justify-center min-h-screen pt-20 pointer-events-none">
          <div className="text-left md:text-center px-5 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Building Your{" "}
              <span className="text-[#c38e24] font-bold">Dream & Future</span>
            </h1>
            {/* <p className="text-xl md:text-2xl mb-4">
              Delivering impeccable quality standards and outstanding client
              services.
            </p> */}
            <p className="text-xl md:text-2xl">
              Honoring architectural vision and ensuring exceptional execution.
            </p>

            <button
              onClick={() => alert("Start Your Design Journey Clicked")}
              className="border border-[#c38e24]  hover:bg-[#c38e24]  text-white cursor-pointer  px-8 py-3 mt-8 rounded-lg font-semibold  transition-colors pointer-events-auto"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </section>
      <section className="min-h-screen h-full bg-[#050913] flex flex-col items-center justify-center pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl">
          <div className="flex flex-col justify-center px-8 py-10 relative">
            <h2 className="absolute top-4 md:top-4 lg:top-4 xl:top-5 whitespace-nowrap -right-24 lg:right-0 sm:right-10 md:-right-28 xl:right-10 2xl:right-10 left-1/2 -translate-x-1/2 text-6xl text-gray-700 font-bold z-0 select-none opacity-50">
              About us
            </h2>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative text-center text-6xl font-extrabold z-10 text-[#c38e24] mb-20"
            >
              About us
            </motion.h2>

            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              {[
                <p
                  key="1"
                  className="text-xl underline underline-offset-8 [text-decoration-color:#70541d]"
                >
                  Established in 2021
                </p>,
                <p key="2" className="text-lg tracking-wide font-normal">
                  At Al Eliza Interior Design, we specialize in transforming
                  residential and commercial spaces into stunning, aesthetically
                  pleasing environments. Our designs elevate your mood, enhance
                  functionality, and increase the value of your space.
                </p>,
                <p key="3" className="text-lg tracking-wide font-normal">
                  Our dedicated team of professionals works closely with each
                  client to uncover their unique needs, preferences, and style.
                  Together, we create luxurious yet practical designs that
                  balance elegance with purpose.
                </p>,
                <p key="4" className="text-lg tracking-wide font-normal">
                  Collaborate with us to implement exceptional designs that
                  leave remarkable first impressions and exceed expectations.
                </p>,
                <p key="5" className="text-lg tracking-wide font-normal">
                  Contact us today to bring your vision to life.
                </p>,
              ].map((paragraph, index) => (
                <motion.div key={index} variants={itemVariant}>
                  {paragraph}
                </motion.div>
              ))}
            </motion.div>

            <button
              onClick={() => alert("navigate to about page")}
              className="hover:bg-[#c38e24] border border-[#c38e24] cursor-pointer text-white w-40 px-8 py-3 mt-8 rounded-lg font-semibold transition-colors pointer-events-auto"
            >
              Read More
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center justify-end h-[700px] px-6"
          >
            <div className="border-[14px] border-t-0 border-r-0 border-[#70541d] h-full w-[90%] ml-auto relative top-0 flex justify-end items-start">
              <Image
                src="/images/img2.jpg"
                alt="Main Sample"
                className="w-[96%] h-[96%] object-cover"
                width={800}
                height={800}
              />
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 pt-24 ">
          <AnimatedCounter target={75} label="Crew" />
          <AnimatedCounter target={300} label="Clients" />
          <AnimatedCounter target={7} label="Years Experience" />
          <AnimatedCounter target={450} label="Projects" />
        </div>
      </section>{" "}
      <section className="py-16 bg-[#050913]">
        <div className="container mx-auto px-4">
          <div className="relative text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
              Our Services
            </h2>

            <div className="relative mt-3 flex items-center justify-center">
              <div className="h-[2px] bg-[#70541d] w-1/12" />
              <span className="mx-3 w-1 h-1 rounded-full bg-[#70541d]" />
              <div className="h-[2px] bg-[#70541d] w-1/12" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative h-[320px] rounded-xl overflow-hidden shadow-md group cursor-pointer"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={800}
                  height={800}
                />

                {/* Default title (visible before hover) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-white text-lg font-bold text-center px-4 z-10">
                    {service.title}
                  </h3>
                </div>

                {/* Hover content */}
                <div className="absolute inset-0 bg-black/80 text-white flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    {service.description}
                  </p>
                  <button className="border border-[#70541d] hover:bg-[#70541d] text-white cursor-pointer px-4 py-1.5 text-sm rounded ">
                    READ MORE →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import React from "react";
import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "../AnimatedCounter";
import { Button } from "../ui/button";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

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
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp",
    },
    {
      title: "Design Consultancy",
      description:
        "Expert design consultations to turn your vision into reality, from layout planning to final finishes.",
      image:
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
    },
    {
      title: "Virtual Reality 360° Designs",
      description:
        "Experience your space before it's built with immersive 360° VR walkthroughs and visualizations.",
      image:
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img5_nsn0nj.webp",
    },
    {
      title: "Fit out Approvals",
      description:
        "We manage and secure fit-out approvals with relevant authorities to ensure smooth project execution.",
      image:
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
    },
    {
      title: "Turnkey Fit out Projects",
      description:
        "From concept to completion – we handle every aspect of your project with end-to-end solutions.",
      image:
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/img3_u7qqdu.webp",
    },
    {
      title: "Landscaping",
      description:
        "Transform your outdoor spaces with creative and sustainable landscaping solutions.",
      image:
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_3_tp5mmt.webp",
    },
    {
      title: "Maintenance",
      description:
        "Comprehensive maintenance services to keep your spaces functional, safe, and beautiful.",
      image:
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_2_ucqtyb.webp",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            poster="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/intro-poster_mw7g0m.webp"
            className="w-full h-full object-cover opacity-70 pointer-events-none"
          >
            <source
              width="720"
              src="https://res.cloudinary.com/dxhmpdgqj/video/upload/v1753375133/intro_ofgrvv.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="relative z-5 flex items-center justify-center min-h-screen pt-20 pointer-events-none">
          <div className="text-left md:text-center px-5 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Building Your{" "}
              <span className="text-yellow font-bold">Dream & Future</span>
            </h1>
            <p className="text-xl md:text-2xl">
              Honoring architectural vision and ensuring exceptional execution.
            </p>

            <Button
              onClick={() => alert("Start Your Design Journey Clicked")}
              variant="al_eliza"
              size="al_eliza"
              className="mt-7 border-2 bg-transparent hover:bg-yellow text-white cursor-pointer transition-colors pointer-events-auto"
            >
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="min-h-screen h-full py-16 md:py-28 flex flex-col items-center justify-center  ">
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
              className="relative text-center text-6xl font-extrabold z-10 text-yellow mb-20"
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
                  className="text-xl underline underline-offset-8 [text-decoration-color:#70541d] tracking-wide font-semibold"
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

            <Button
              onClick={() => alert("navigate to about page")}
              variant="al_eliza"
              size="al_eliza"
              className="w-40 mt-7"
            >
              Read More
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center justify-end h-[700px] px-6"
          >
            <div className="border-[14px] border-t-0 border-r-0 border-yellow-dark h-full w-[90%] ml-auto relative top-0 flex justify-end items-start">
              <Image
                src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp"
                alt="About Us Image"
                className="w-[96%] h-[96%] object-cover rounded-r-md hover:scale-105 transition-transform duration-500"
                width={800}
                height={800}
              />
            </div>
          </motion.div>
        </div>
      </section>{" "}
      {/* Achievements Section */}
      <section className="py-14">
        {" "}
        <div className="relative  h-full md:h-[400px] w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753393326/img6_laomha.webp"
              alt="Achievements Background"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 bg-black/60 z-10" />

          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-center text-5xl font-extrabold tracking-widest ">
                Our Achievements
              </h2>
              <p className="text-lg sm:text-xl text-paragraph mt-2">
                Milestones that reflect our passion, precision, and trusted
                excellence
              </p>
              <div className="relative mt-4 flex items-center justify-center">
                <div className="h-[2px] bg-[#70541d] w-1/4 md:w-1/12" />
                <span className="mx-3 w-1 h-1 rounded-full bg-[#70541d]" />
                <div className="h-[2px] bg-[#70541d] w-1/4 md:w-1/12" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 py-16">
              <AnimatedCounter target={75} label="Crew" />
              <AnimatedCounter target={300} label="Clients" />
              <AnimatedCounter target={7} label="Years Experience" />
              <AnimatedCounter target={450} label="Projects" />
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="min-h-screen flex flex-col items-center justify-center py-14 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative text-center mb-16">
            {/* <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white">
              Our Services
            </h2> */}
            <h2 className="text-center text-5xl font-extrabold tracking-widest text-yellow">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-paragraph mt-2">
              Professional design services that blend style and function
              delivering impactful, high-quality solutions for every need.
            </p>
            <div className="relative mt-4 flex items-center justify-center">
              <div className="h-[2px] bg-[#70541d] w-1/4 md:w-1/12" />
              <span className="mx-3 w-1 h-1 rounded-full bg-[#70541d]" />
              <div className="h-[2px] bg-[#70541d] w-1/4 md:w-1/12" />
            </div>
          </div>

          <div className="h-full py-10 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 ">
              {/* Column 1 – 2 items */}
              <div className="flex flex-col gap-4">
                {services.slice(0, 2).map((service, index) => (
                  <div
                    key={index}
                    className="relative h-[300px] rounded-md overflow-hidden shadow-md group cursor-pointer"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      width={800}
                      height={800}
                    />
                    <div className="absolute inset-0 flex flex-col z-10 items-center justify-center bg-black/20 transition-opacity duration-300 group-hover:opacity-0 px-2">
                      <div className="flex flex-col items-center justify-center p-2  backdrop-blur-xs rounded-md">
                        <h3 className="text-white text-xl font-bold text-center">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/80 text-white flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm opacity-90 mb-4">
                        {service.description}
                      </p>
                      <button className="border border-[#70541d] hover:bg-[#70541d] text-white cursor-pointer px-4 py-1.5 text-sm rounded">
                        READ MORE →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 2 – 3 items */}
              <div className="flex flex-col gap-4">
                {services.slice(2, 5).map((service, index) => (
                  <div
                    key={index}
                    className="relative h-[300px] md:h-[195px] rounded-md overflow-hidden shadow-md group cursor-pointer"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      width={800}
                      height={800}
                    />
                    <div className="absolute inset-0 flex flex-col z-10 items-center justify-center bg-black/20 transition-opacity duration-300 group-hover:opacity-0 px-2">
                      <div className="flex flex-col items-center justify-center p-2 backdrop-blur-xs ">
                        <h3 className="text-white text-xl font-bold text-center">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/80 text-white flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm opacity-90 mb-4">
                        {service.description}
                      </p>
                      <button className="border border-[#70541d] hover:bg-[#70541d] text-white cursor-pointer px-4 py-1.5 text-sm rounded">
                        READ MORE →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 3 – 2 items */}
              <div className="flex flex-col gap-4">
                {services.slice(5, 7).map((service, index) => (
                  <div
                    key={index}
                    className="relative h-[300px] rounded-md overflow-hidden shadow-md group cursor-pointer"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      width={800}
                      height={800}
                    />
                    <div className="absolute inset-0 flex items-center z-10 justify-center bg-black/20 transition-opacity duration-300 group-hover:opacity-0">
                      <div className="flex flex-col items-center justify-center p-2 backdrop-blur-xs rounded-md">
                        <h3 className="text-white text-xl font-bold text-center">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/80 text-white flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm opacity-90 mb-4">
                        {service.description}
                      </p>
                      <button className="border border-[#70541d] hover:bg-[#70541d] text-white cursor-pointer px-4 py-1.5 text-sm rounded">
                        READ MORE →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Us Section */}
      <section className=" px-8 max-w-[95rem] mx-auto space-y-14 md:space-y-28 min-h-1/2 h-full flex flex-col items-center justify-center md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className=" py-10 ">
            <div className="max-w-4xl space-y-4 flex justify-center items-center flex-col gap-4 px-10">
              <div className="space-y-4">
                <h2 className="text-center text-6xl font-extrabold tracking-widest text-yellow">
                  Why us?
                </h2>
                <p className="text-center text-paragraph text-2xl">
                  Building The Dream.
                </p>{" "}
                <div className="relative mt-4 flex items-center justify-center">
                  <div className="h-[2px] bg-[#70541d] w-1/4" />
                  <span className="mx-3 w-1 h-1 rounded-full bg-[#70541d]" />
                  <div className="h-[2px] bg-[#70541d] w-1/4 " />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-center text-base text-paragraph">
                  Our team of professionals is dedicated to working personally
                  with each client to uncover their specific wants, needs and
                  style to infuse their space with luxurious yet functional
                  design that balance style with necessity.
                </p>

                <p className="text-center text-base text-paragraph">
                  Collaborate with us and implement exceptional designs, that
                  deliver remarkable first impressions and exceed your
                  expectations.
                </p>
              </div>{" "}
            </div>
          </div>

          <div className="relative py-16 px-6 flex flex-col items-center text-center justify-center gap-14 h-full ">
            <Image
              src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753393326/img6_laomha.webp"
              alt="About Us Background"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
              className="object-cover object-center z-0 rounded-xl"
            />

            <div className="absolute inset-0 bg-black/20 z-10" />

            {/* Content */}
            <div className="relative z-20 max-w-2xl bg-transparent text-white">
              <div className=" text-lg sm:text-xl font-serif  space-y-1 backdrop-blur-xs p-4">
                <p className="text-2xl relative italic ">
                  <FaQuoteLeft className="inline-block mr-2 absolute -top-3 -left-1 text-[#d49d39]" />
                  Over 7 years of expertise Uncompromising Quality Standards
                  Visionary In-House Designers Meticulous Attention to Detail
                  Transparent Pricing Assurance Trusted Credibility Outstanding
                  Client Service
                  <FaQuoteRight className="inline-block ml-2 absolute -bottom-1 right-1 text-[#d49d39]" />
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <p className="max-w-4xl mx-auto text-center text-xl leading-relaxed font-medium italic mt-6 text-paragraph">
          &quot;Our team takes immense pride in surpassing our clients&apos;
          expectations, crafting each project into a masterpiece where
          architectural precision and artistic vision converge seamlessly. We
          believe that no space is truly complete without a signature element of
          art, reflecting the soul of its design.&quot;
        </p>
      </section>
      {/* <section className="h-screen"></section> */}
    </main>
  );
}

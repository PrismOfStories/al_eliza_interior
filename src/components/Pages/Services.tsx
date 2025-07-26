"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ImageSwiper from "../common/ImageSwiper";

export default function Services() {
  const services = [
    {
      title: "Residential & Commercial Interior Design",
      description:
        "Whether it's a brand new build or a space refresh, we offer full spectrum interior styling services in Dubai, UAE. For new homeowners, we design interiors from the ground up. For clients looking to enhance existing spaces, we expertly rearrange furniture, recommend paint colors, and source new décor tailored to their style.",
      additional:
        "Our commercial interior design services are just as personalized. Many businesses in Dubai and across the UAE trust us to create functional and branded environments from restaurants to office spaces by combining local style with international design expertise.",
      images: [
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
      ],
    },
    {
      title: "Interior Design Consultancy",
      description:
        "In today’s people first world, workplace expectations have evolved. Our Dubai-based interior design consultants help businesses across the UAE create flexible, wellness driven environments aligned with their company’s purpose and culture.",
      additional:
        "From strategic space planning to creative ideation, our team provides expert guidance across the entire real estate lifecycle ensuring each commercial interior in Dubai or the wider UAE meets modern design, comfort, and efficiency standards.",
      images: [
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
      ],
    },
    {
      title: "360° Virtual Reality Interior Design",
      description:
        "Embrace the future of design with our immersive 360° Virtual Reality (VR) experiences. Based in Dubai, UAE, our team builds interactive, photorealistic environments that allow clients to explore their spaces before physical execution.",
      additional:
        "Whether you're in real estate, hospitality, or commercial development in Dubai, our VR solutions bring your vision to life. Experience true to scale interiors, make faster decisions, and impress stakeholders with dynamic virtual walkthroughs.",
      images: [
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
      ],
    },
    {
      title: "Fit-Out Approvals & Compliance",
      description:
        "Navigating Dubai's regulatory landscape is a critical part of any commercial interior project. We manage the entire approval process, liaising with building owners, developers, and government bodies across Dubai and the UAE.",
      additional:
        "From securing Development Applications (DA) to fast tracking Complying Development Certificates (CDC), we ensure your office or retail fit out complies with all local UAE building codes and safety regulations saving you time and avoiding costly delays.",
      images: [
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
      ],
    },
    {
      title: "Turnkey Fit-Out Solutions",
      description:
        "Our turnkey fit out services in Dubai provide a hassle free, end to end solution for commercial and residential spaces. From concept development to final handover, we deliver fully functional interiors tailored to your needs.",
      additional:
        "We coordinate every stage of the project design, approvals, execution, and handover across the UAE. With a focus on punctual delivery and premium quality, our team ensures your property is market-ready without delays.",
      images: [
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
      ],
    },
    {
      title: "Landscaping & Outdoor Design",
      description:
        "Our landscaping services in Dubai transform outdoor spaces into lush, livable environments. We design and install gardens, courtyards, and terraces that balance natural beauty with function perfect for villas, offices, and commercial properties.",
      additional:
        "Whether you're in Dubai or elsewhere in the UAE, our landscaping specialists create sustainable, low maintenance designs tailored to the local climate. We bring greenery, structure, and serenity to every project.",
      images: [
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
      ],
    },
    {
      title: "Interior Maintenance Services",
      description:
        "Maintain your property’s value with our comprehensive interior maintenance services in Dubai, UAE. From routine upkeep to urgent fixes, we keep your home or commercial space running smoothly year round.",
      additional:
        "Our team handles everything HVAC servicing, electrical and plumbing checks, carpentry, and paint touch ups. We offer scheduled maintenance plans for properties across Dubai and the UAE to keep them in optimal shape and minimize repair costs.",
      images: [
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
        "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
      ],
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 h-auto w-full space-x-6"
            >
              {index % 2 === 0 ? (
                <>
                  {/* Left Content */}
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
                    <Button
                      variant="al_eliza"
                      size="al_eliza"
                      className="mt-8 w-56 flex justify-center mx-auto items-center"
                    >
                      Get a Quote{" "}
                      <MdOutlineKeyboardArrowRight className="!h-6 !w-6 " />
                    </Button>
                  </div>

                  {/* Right Image */}
                  <div className="w-full h-full relative flex justify-center items-center overflow-hidden p-6">
                    <ImageSwiper images={service.images} height="h-[30vw]" />
                  </div>
                </>
              ) : (
                <>
                  {/* Left Image */}
                  <div className="w-full h-full relative flex justify-center items-center overflow-hidden p-6">
                    <ImageSwiper images={service.images} height="h-[30vw]" />
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
                    <Button
                      variant="al_eliza"
                      size="al_eliza"
                      className="mt-8 w-56 flex justify-center mx-auto items-center"
                    >
                      Get a Quote{" "}
                      <MdOutlineKeyboardArrowRight className="!h-6 !w-6 " />
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </section>
      ) : (
        <section className="max-w-[90rem] mx-auto py-24 space-y-16 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:grid md:grid-cols-2 gap-6 items-center"
            >
              {/* Text Content */}
              <div className="flex flex-col items-center justify-center p-4 md:p-6 text-center md:text-left">
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
          ))}
        </section>
      )}
    </div>
  );
}

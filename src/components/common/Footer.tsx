import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#10141e] text-white pt-10 px-8 md:px-0 pb-6 border-t border-[#10141e] ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[85%] mx-auto py-6">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <div className="relative w-[150px] h-[150px]">
            <Image
              src="/images/logo.png"
              alt="Al Eliza Interior"
              fill
              className="object-contain h-full w-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 150px"
              priority
            />
          </div>
          <p className=" text-white/60 mt-4 uppercase space-x-4 font-semibold text-xs">
            <span className="text-yellow">inspired</span>{" "}
            <span className="text-yellow">creative</span>{" "}
            <span className="text-yellow">functional</span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 text-lg">
          <h1 className="uppercase text-xl tracking-wide font-semibold mb-2 text-yellow">
            Quick Links
          </h1>
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-400">
            About Us
          </Link>
          <Link href="/services" className="hover:text-yellow-400">
            Services
          </Link>
          <Link href="/gallery" className="hover:text-yellow-400">
            Gallery
          </Link>
          <Link href="/contact" className="hover:text-yellow-400">
            Contact Us
          </Link>
        </div>

        {/* Address */}
        <div className="text-lg space-y-2">
          <h1 className="uppercase  text-xl tracking-wide font-semibold mb-2 text-yellow">
            Visit Us
          </h1>
          {/* <p className="text-white/80">
            Office No. 10, FBL Business Center,
            <br />
            Al Mamzar, Dubai, UAE
          </p> */}
          <Link
            href="https://maps.app.goo.gl/7TErS2LiQtmY4Cqx5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            {" "}
            Al Eliza Interior, FBL Business Center,
            <br />
            Al Mamzar - Dubai - United Arab Emirates
          </Link>
          <p className="text-lg text-white mt-2 space-y-2.5">
            <Link
              href="tel:+971522889300"
              className="text-white hover:underline"
            >
              +971 522 889 300
            </Link>
            <br />
            <Link
              href="tel:+971543783000"
              className="text-white hover:underline"
            >
              +971 54 378 3000
            </Link>
          </p>
        </div>

        {/* Contact & Socials */}
        <div className="text-lg space-y-4">
          <h1 className="uppercase  text-xl tracking-wide font-semibold text-yellow">
            Say Hello
          </h1>
          <p className="text-white/80">
            <Link
              href="mailto:info@alelizainteriors.com"
              className="text-white hover:underline"
            >
              info@alelizainteriors.com
            </Link>
          </p>
          <div className="flex gap-3 mt-2">
            <Button
              variant="al_eliza"
              size="al_eliza"
              className="bg-yellow text-white p-3 rounded-full text-lg"
            >
              <Link
                href="https://www.facebook.com/p/Al-eliza-design-Studio-100086651834406/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline !p-0"
              >
                <FaFacebookF className="!h-5 !w-5" />
              </Link>
            </Button>
            <Button
              variant="al_eliza"
              size="al_eliza"
              className="bg-yellow text-white p-3 rounded-full text-lg"
            >
              <Link
                href="https://www.instagram.com/alelizainteriors?igsh=NHgxYzUyc3dzMmVu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                <FaInstagram className="!h-5 !w-5" />
              </Link>
            </Button>

            <Button
              variant="al_eliza"
              size="al_eliza"
              className="bg-yellow text-white p-3 rounded-full text-lg"
            >
              <Link
                href="https://www.linkedin.com/company/al-eliza/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                <FaLinkedinIn className="!h-5 !w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 pt-4 text-center text-lg text-white/50">
        © {new Date().getFullYear()} Al Eliza Interior. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FaInstagram,
    FaFacebookF,
    FaPinterestP,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-10 px-6 md:px-20 pb-6 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo Section */}
                <div className="flex flex-col items-start">
                    <Image src="/images/logo.png" alt="Al Eliza Interior" width={160} height={40} />
                    {/* <p className="text-xs text-white/60 mt-4">
                        Crafting beautiful interiors that reflect your vision and lifestyle.
                    </p> */}
                </div>

                {/* Quick Links */}
                <div className="flex flex-col space-y-2 text-sm">
                    <h1 className="uppercase tracking-wide font-semibold mb-2 text-yellow-400">Quick Links</h1>
                    <Link href="/" className="hover:text-yellow-400">Home</Link>
                    <Link href="/about" className="hover:text-yellow-400">About Us</Link>
                    <Link href="/services" className="hover:text-yellow-400">Services</Link>
                    <Link href="/gallery" className="hover:text-yellow-400">Gallery</Link>
                    <Link href="/contact" className="hover:text-yellow-400">Contact Us</Link>
                </div>

                {/* Address */}
                <div className="text-sm space-y-2">
                    <h1 className="uppercase tracking-wide font-semibold mb-2 text-yellow-400">Visit Us</h1>
                    <p className="text-white/80">
                        Office No. 10, FBL Business Center,<br />
                        Al Mamzar, Dubai, UAE
                    </p>
                    <p className="text-white/80">+971 522 889 300</p>
                    <p className="text-white/80">+971 54 378 3000</p>
                </div>

                {/* Contact & Socials */}
                <div className="text-sm space-y-4">
                    <h1 className="uppercase tracking-wide font-semibold text-yellow-400">Say Hello</h1>
                    <p className="text-white/80">info@alelizainteriors.com</p>
                    <div className="flex gap-3 mt-2">
                        <a href="#" className="bg-yellow-400 text-black p-2 rounded-full hover:scale-105 transition"><FaInstagram /></a>
                        <a href="#" className="bg-yellow-400 text-black p-2 rounded-full hover:scale-105 transition"><FaFacebookF /></a>
                        <a href="#" className="bg-yellow-400 text-black p-2 rounded-full hover:scale-105 transition"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mt-10 pt-4 text-center text-xs text-white/50">
                © 2023 Al Eliza Interior. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;

'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../common/Footer";
import { Button } from "@/components/ui/button";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,

} from "react-icons/fa";

const Contact: React.FC = () => {


    const [form, setForm] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setSent(true);
                setForm({
                    name: '',
                    company: '',
                    phone: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            {/* Hero Section */}
            <div className="relative h-[45vh] bg-cover bg-center">
                <Image
                    src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_3_tp5mmt.webp"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
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
                        <h1 className="text-5xl font-bold mb-4 text-white">Contact Us</h1>
                        <p className="text-xl text-white max-w-2xl mx-auto">
                            {/* Kassapay is ready to provide the right solution according to your needs. */}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Contact Section */}
            <section className="py-16 px-4 bg-gradient-to-b from-transparent to-black/10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-10 bg-black/30 rounded-xl p-6 backdrop-blur-md">

                        {/* Left: Contact Info (40%) */}
                        <div className="w-full md:w-2/5 text-white">
                            {/* Yellow Rounded Heading */}
                            <h3 className="text-3xl font-semibold text-yellow-500 mb-6">Get in touch</h3>


                            {/* Contact Cards */}
                            <div className="space-y-6">

                                {/* Address */}
                                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                                    <div className="bg-yellow-400 text-black p-3 rounded-full text-lg">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Head Office</p>
                                        <p className="text-sm text-white/80">
                                            Al Eliza Interior,<br />
                                            FBL Business Center,<br />
                                            Al Mamzar - Dubai - United Arab Emirates
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                                    <div className="bg-yellow-400 text-black p-3 rounded-full text-lg">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Email Us</p>
                                        <p className="text-sm text-white/80">
                                            info@alelizainteriors.com
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                                    <div className="bg-yellow-400 text-black p-3 rounded-full text-lg">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Call Us</p>
                                        <p className="text-sm text-white/80">
                                            +971 522 889 300<br />
                                            +971 54 378 3000
                                        </p>
                                    </div>
                                </div>

                                {/* Social Icons */}
                                <div className=" rounded-xl p-4 ">
                                    {/* <p className="font-semibold mb-2 ml-12">Follow our social media</p> */}
                                    <div className="flex gap-4 ml-10 md:ml-20 justify-center md:justify-start flex-wrap">
                                        <div className="bg-yellow-400 text-black p-3 rounded-full text-lg">
                                            <FaFacebookF />
                                        </div>
                                        <div className="bg-yellow-400 text-black p-3 rounded-full text-lg">
                                            <FaInstagram />
                                        </div>

                                        <div className="bg-yellow-400 text-black p-3 rounded-full text-lg">
                                            <FaLinkedinIn />

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right: Contact Form (60%) */}
                        <div className="w-full md:w-3/5 p-4 text-white">
                            <h3 className="text-3xl font-semibold mb-6">Send us a message</h3>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {/* Row 1: Name & Company */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative w-full">
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder=" "
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            className="peer w-full bg-transparent border-b border-white/50 text-white placeholder-transparent focus:outline-none px-2 pt-6 pb-2"
                                        />
                                        <label
                                            htmlFor="name"
                                            className="absolute left-2 top-0 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-0 peer-focus:text-sm peer-focus:text-white/70"
                                        >
                                            Name
                                        </label>
                                    </div>

                                    <div className="relative w-full">
                                        <input
                                            type="text"
                                            id="company"
                                            placeholder=" "
                                            value={form.company}
                                            onChange={handleChange}
                                            className="peer w-full bg-transparent border-b border-white/50 text-white placeholder-transparent focus:outline-none px-2 pt-6 pb-2"
                                        />
                                        <label
                                            htmlFor="company"
                                            className="absolute left-2 top-0 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-0 peer-focus:text-sm peer-focus:text-white/70"
                                        >
                                            Company
                                        </label>
                                    </div>
                                </div>

                                {/* Row 2: Phone & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative w-full">
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder=" "
                                            value={form.phone}
                                            onChange={handleChange}
                                            className="peer w-full bg-transparent border-b border-white/50 text-white placeholder-transparent focus:outline-none px-2 pt-6 pb-2"
                                        />
                                        <label
                                            htmlFor="phone"
                                            className="absolute left-2 top-0 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-0 peer-focus:text-sm peer-focus:text-white/70"
                                        >
                                            Phone
                                        </label>
                                    </div>

                                    <div className="relative w-full">
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder=" "
                                            value={form.email}
                                            onChange={handleChange}
                                            className="peer w-full bg-transparent border-b border-white/50 text-white placeholder-transparent focus:outline-none px-2 pt-6 pb-2"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-2 top-0 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-0 peer-focus:text-sm peer-focus:text-white/70"
                                        >
                                            Email
                                        </label>
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        id="subject"
                                        placeholder=" "
                                        value={form.subject}
                                        onChange={handleChange}
                                        className="peer w-full bg-transparent border-b border-white/50 text-white placeholder-transparent focus:outline-none px-2 pt-6 pb-2"
                                    />
                                    <label
                                        htmlFor="subject"
                                        className="absolute left-2 top-0 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-0 peer-focus:text-sm peer-focus:text-white/70"
                                    >
                                        Subject
                                    </label>
                                </div>

                                {/* Message */}
                                <div className="relative w-full">
                                    <textarea
                                        id="message"
                                        placeholder=" "
                                        value={form.message}
                                        onChange={handleChange}
                                        className="peer w-full bg-transparent border-b border-white/50 text-white placeholder-transparent focus:outline-none px-2 pt-6 pb-2 h-32 resize-none"
                                    ></textarea>
                                    <label
                                        htmlFor="message"
                                        className="absolute left-2 top-0 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-0 peer-focus:text-sm peer-focus:text-white/70"
                                    >
                                        Message
                                    </label>
                                </div>


                                <div className="flex justify-center">
  <Button
    type="submit"
    disabled={loading}
    size="al_eliza"
    className={`bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md w-[250px] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    {loading ? 'Sending...' : 'Send'}
  </Button>
</div>


                            </form>

                            {sent && (
                                <p className="text-green-400 text-sm mt-4">
                                    Your message has been sent successfully!
                                </p>
                            )}
                        </div>

                    </div>
                </div>
            </section>


            {/* Map Section */}
            <div className="w-full mt-12">
                <h3 className="text-center text-2xl font-semibold mb-4">Our Location</h3>
                <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg px-4">
                    <iframe
                        title="Al Eliza Interior Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.699266250519!2d55.3448698759609!3d25.29482002703168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c32a604a159%3A0xa4b5efbe65b0c42f!2sFBL%20Business%20Center!5e0!3m2!1sen!2sae!4v1722163904040!5m2!1sen!2sae"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border-0 w-full h-full"
                    ></iframe>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Contact;

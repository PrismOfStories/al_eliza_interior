"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        setForm({
          name: "",
          company: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
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
            <h1 className="text-5xl font-bold mb-4 text-white">Contact Us</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              {/* Kassapay is ready to provide the right solution according to your needs. */}
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20 md:py-28 px-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-0">
            <div className="w-full md:w-10/12 text-white">
              <h3 className="text-4xl font-semibold text-yellow mb-6">
                Get in touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-[#10141e] rounded-xl p-4">
                  <div className="bg-yellow text-white p-3 rounded-full text-lg">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-yellow">Head Office</p>

                    <p className="text-lg text-white mt-0.5">
                      <Link
                        href="https://maps.app.goo.gl/7TErS2LiQtmY4Cqx5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:underline"
                      >
                        {" "}
                        Al Eliza Interior,
                        <br />
                        FBL Business Center,
                        <br />
                        Al Mamzar - Dubai - United Arab Emirates
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#10141e] rounded-xl p-4">
                  <div className="bg-yellow text-white p-3 rounded-full text-lg">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-yellow">Email Us</p>
                    <p className="text-lg text-white mt-0.5">
                      <Link
                        href="mailto:info@alelizainteriors.com"
                        className="text-white hover:underline"
                      >
                        info@alelizainteriors.com
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#10141e] rounded-xl p-4">
                  <div className="bg-yellow text-white p-3 rounded-full text-lg">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-yellow">Call Us</p>
                    <p className="text-lg text-white mt-0.5">
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
                </div>

                <div className=" rounded-xl ">
                  <p className="font-semibold text-center md:text-start text-2xl mb-3 text-yellow">
                    Follow our social media
                  </p>
                  <div className="flex gap-4   justify-center md:justify-start flex-wrap">
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
            </div>

            <div className="w-full  text-white">
              <h3 className="text-4xl text-yellow font-semibold mb-6">
                Send us a message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
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
                    variant="al_eliza"
                    className={`bg-yellow hover:bg-yellow-dark hover:border-yellow-dark font-semibold px-6 py-2 rounded-md w-[250px] ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? "Sending..." : "Send"}
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

      <div className="w-full mx-auto ">
        <h3 className="text-center text-yellow text-4xl md:text-5xl font-semibold mb-10">
          Our Location
        </h3>
        <div className="w-full h-[400px]  overflow-hidden shadow-lg px-8 md:px-0 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.46651462006213!2d55.35785207844792!3d25.28860235409731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d931d237c6d%3A0xc429f45c56e9c88!2sAl%20Eliza%20interior!5e0!3m2!1sen!2sae!4v1753894309606!5m2!1sen!2sae"
            loading="lazy"
            title="Al Eliza Interior Location"
            className="text-center w-full h-full"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;

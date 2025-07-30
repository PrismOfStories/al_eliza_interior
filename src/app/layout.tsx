import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import FollowingDot from "@/components/FollowingDot";
import Preloader from "@/components/Preloader";
import "./globals.css";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Eliza Interior - Transform Your Space with Elegant Designs",
  description:
    "Al Eliza Interior specializes in creating beautiful, functional spaces with elegant design solutions. Transform your home or office with our expert interior design services.",
  keywords: [
    "interior design",
    "home decoration",
    "elegant design",
    "space transformation",
    "Al-Eliza Interior",
  ],
  authors: [{ name: "Al Eliza Interior" }],
  creator: "Al Eliza Interior",
  publisher: "Al Eliza Interior",
  openGraph: {
    title: "Al Eliza Interior - Transform Your Space with Elegant Designs",
    description:
      "Al Eliza Interior specializes in creating beautiful, functional spaces with elegant design solutions. Transform your home or office with our expert interior design services.",
    url: "https://al-eliza-interior.com",
    siteName: "Al-Eliza Interior",
    images: [
      {
        url: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375285/logo_hfohxb.png",
        width: 1200,
        height: 630,
        alt: "Al Eliza Interior - Elegant Design Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Eliza Interior - Transform Your Space with Elegant Designs",
    description:
      "Al Eliza Interior specializes in creating beautiful, functional spaces with elegant design solutions.",
    images: [
      "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375285/logo_hfohxb.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          as="image"
          href="/images/logo.webp"
          type="image/webp"
          fetchPriority="high"
        ></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader /> <FollowingDot />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

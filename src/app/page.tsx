import HomePage from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Al Eliza Interior - Transform Your Space with Elegant Designs",
  description:
    "Al Eliza Interior specializes in creating beautiful, functional spaces with elegant design solutions. Transform your home or office with our expert interior design services.",
  openGraph: {
    title: "Al Eliza Interior | Elegant Design Solutions",
    description:
      "Welcome to Al Eliza Interior. Discover our elegant design solutions and transform your space with our expert interior design services.",
    images: ["/images/intro-poster.jpg"],
  },
};

export default function Home() {
  return <HomePage />;
}

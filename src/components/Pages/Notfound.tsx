import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Notfound() {
  return (
    <div className="relative min-h-screen bg-cover bg-center">
      <Image
        src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_3_tp5mmt.webp"
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center mt-12 px-4">
          <h1 className="text-6xl font-bold text-yellow mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-6">
            The page you&#39;re looking for doesn&#39;t exist or has been moved.
            Let&#39;s get you back on track.
          </p>

          <Link href="/">
            <Button
              variant="al_eliza"
              size="al_eliza"
              className="bg-transparent hover:bg-yellow"
            >
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

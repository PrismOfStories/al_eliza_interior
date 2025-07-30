import React from "react";
import Image from "next/image";

const founders = [
  {
    name: "Mr. Harif Harry",
    role: "Business Development Manager",
    image: "/images/harif.jpg",
    description:
      "The visionary leader driving innovation and growth. Focused on steering the team toward excellence and creating impactful design experiences.",
  },
  {
    name: "Mr. Jerais Mohammed",
    role: "Creative Consultant",
    image: "/images/jerry.jpg",
    description:
      "The guiding force behind the company’s mission. Focused on strategic direction, team inspiration, and fostering a legacy of design excellence.",
  },
  {
    name: "Mr. Mohammed Ashiq",
    role: "Managing Director",
    image: "/images/ashiq.jpg",
    description:
      "The operational anchor of the firm. Dedicated to turning the team’s creative vision into seamless execution and long-term success.",
  },
];

const Team = () => {
  return (
    <section className="py-20 px-4 text-center">
      {/* Heading */}
      <div className="mb-16 relative">
        <h2 className="text-[80px] md:text-[120px] font-bold text-left text-[#e8d1a0] opacity-50 leading-none">
          founders
        </h2>
        <p className="absolute left-0 bottom-4 text-xl md:text-3xl font-semibold text-yellow-400">
          meet the
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-20">
        {founders.map((person, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Name and Role */}
            <div className="mb-4 text-center">
              <h3 className="text-lg font-semibold tracking-tight">{person.name}</h3>
              <p className="text-sm text-gray-600">{person.role}</p>
            </div>

            {/* Image with black overlay on hover */}
            <div className="relative w-64 h-80 group overflow-hidden rounded-md shadow-lg">
              <Image
                src={person.image}
                alt={person.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 leading-relaxed max-w-[256px] mt-4 text-center">
              {person.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;

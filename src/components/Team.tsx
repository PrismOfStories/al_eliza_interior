import React from "react";
import Image from "next/image";

const founders = [
  {
    name: "Mr. Harif Harry",
    role: "Business Development Manager",
    image:
      "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753899334/harif_bc8lea.jpg",
    description:
      "Leads business growth and client relations, aligning interior design solutions with market trends and customer needs.",
  },
  {
    name: "Mr. Jerais Mohammed",
    role: "Creative Consultant",
    image:
      "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753899334/jerry_nrgv00.jpg",
    description:
      "Shapes the firm’s creative vision, ensuring each interior design project is unique, purposeful, and visually compelling.",
  },
  {
    name: "Mr. Mohammed Ashiq",
    role: "Managing Director",
    image:
      "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753899334/ashiq_axmp9d.jpg",
    description:
      "Oversees project execution and operations, turning design concepts into refined, functional interior spaces.",
  },
];

const Team = () => {
  return (
    <section className="py-16 md:py-28 px-4 max-w-[95rem] mx-auto text-center">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-20 mx-auto">
        {founders.map((person, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-4 text-center">
              <h3 className="text-2xl font-semibold tracking-wide text-paragraph">
                {person.name}
              </h3>
              <p className="text-lg text-yellow font-semibold">{person.role}</p>
            </div>

            <div className="relative w-[300px] h-[400px] overflow-hidden rounded-md shadow-lg group">
              <Image
                src={person.image}
                alt={person.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
                priority
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>

            <p className="text-lg text-paragraph  w-[300px] mt-4 text-center">
              {person.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;

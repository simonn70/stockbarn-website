import Image from "next/image";
import React from "react";
import loggo from "../public/loggo.jpg"
import loggoo from "../public/aaa.jpg"
const partners = [
  { id: 1, name: "Partner 1", logo: loggoo },
  { id: 2, name: "Partner 2", logo: loggo },
  { id: 3, name: "Partner 3", logo: loggoo },
  { id: 4, name: "Partner 4", logo: loggo },
];

const OurPartners = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Our Trusted Partners</h1>
        <p className="text-lg text-gray-600 mt-3">
          We are proud to collaborate with industry-leading companies and organizations.
        </p>
      </header>

      {/* Partners Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className=" rounded-lg  p-6 flex items-center justify-center hover:scale-105 transform transition-all"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className=" object-fit"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurPartners;

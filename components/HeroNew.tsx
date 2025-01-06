import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {  Sparkles } from "lucide-react";
import { ImageSlideshow } from "./HeroSlideShow";

import AutoLoan from "../public/market.jpg";

// import PropertyLoan from "../assets/images/property loan.jpg";
// import LifestyleLoan from "../assets/images/lifestyle loan.jpg";
// import EnterpriseLoan from "../assets/images/enterprise loan.png";
// import Image4 from "../assets/images/education-image-5.png";
import Link from "next/link";

const images = [ AutoLoan];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 sm:py-40 px-5 sm:px-10 overflow-hidden ">
      {/* Decorative elements */}
      <div
        className="absolute hidden inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"
        aria-hidden="true"
      />
      <div
        className="absolute hidden sm:block -top-36 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-36 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        aria-hidden="true"
      />

      <div className="container mt-8 sm:mt-0 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="space-y-8 max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl text-blue-300">
              We work hard to make your restaurant run smoothly.
            </h1>
            <p className="text-xl text-blue-300 leading-relaxed">
            We supply all your fresh vegetables, oils, creams, proteins, tubers and grains .
</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* <Button
                asChild
                size="lg"
                className="bg-white text-blue-400 hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
              >
                <Link href="/register">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button> */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white bg-blue-400 hover:bg-white/10 transition-colors"
              >
                <Link href="/order">
                  Order Now
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-lg xl:max-w-xl">
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl blur-2xl opacity-30 transform rotate-3"
              aria-hidden="true"
            />
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <ImageSlideshow images={images} currentImage={currentImage} />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" /> */}
              {/* <div className="absolute bottom-4 left-4 right-4 text-white pl-5 pb-5 z-10">
                <p className="font-semibold text-lg text-blue-950 text-customDark">
                  Buy all you need affordably at a fast delivered time
                </p>
                
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
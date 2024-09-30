import React, { useEffect } from "react";
import Hero from "@/components/home-page/home-10/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
const HeroBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <div className="hero-banner-one p-30">
      <div className="bg-wrapper" data-aos="fade">
        <Hero />
        <img
          src="/images/shape/shape_08.svg"
          alt="illustration"
          className="lazy-img shapes shape-eight"
        />
      </div>
    </div>
  );
};

export default HeroBanner;

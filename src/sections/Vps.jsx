import React from "react";
import Features from "@/components/home-page/home-7/Features";
import Features2 from "@/components/home-page/home-7/Features2";
import ProductTabs from "@/components/home-page/home-6/ProductTabs";
import TagList from "@/components/home-page/home-6/TagList";
import IntroAbout from "@/components/home-page/home-1/IntroAbout";
import About from "@/components/home-page/home-5/about";
import Pricing from "@/components/home-page/home-6/Pricing";
import VideoBlock from "@/components/about/VideoBlock";
import Features3 from "@/components/home-page/home-7/Features3";
import Block from "@/components/about/Block";
import AboutCeo from "@/components/about/AboutCeo";
const Vps = () => {
  return (
    <div
      id="vps"
      className="fancy-feature-ten position-relative mt-170 lg-mt-100"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 m-auto">
            <div
              className="title-style-four text-center pb-100"
              data-aos="fade-up"
            >
              <div
                className="sc-title-two"
                style={{ color: "var(--prime-one" }}
              >
                Beneficios
              </div>
              <h2 className="main-title fw-500 tx-dark m0">
                <span>Servidores VPS</span>
              </h2>
              <p className="text-lg mt-40 mb-100 lg-mt-20 lg-mb-50">
                Permite a las empresas y usuarios alojar aplicaiones, servicios
                con flexibilidad y un menor costo, aprovechando recursos
                compartidos de manera eficiente.
              </p>
            </div>
          </div>
        </div>
        <Features3 />
      </div>
    </div>
  );
};

export default Vps;

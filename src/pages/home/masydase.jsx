import Seo from "@/components/common/Seo";
import HeaderMasy from "@/components/header/HeaderMasy";
import React from "react";
import Hero from "../../components/home-page/home-10/Hero";
import Features from "../../components/home-page/home-7/Features";
import Features2 from "../../components/home-page/home-7/Features2";
import ProductTabs from "../../components/home-page/home-6/ProductTabs";
import TagList from "../../components/home-page/home-6/TagList";
import IntroAbout from "../../components/home-page/home-1/IntroAbout";
const MasyDase = () => {
  return (
    <>
      <Seo pageTitle="MasyDase" />
      <HeaderMasy />
      <div className="hero-banner-one p-30">
        <div className="bg-wrapper" data-aos="fade">
          <Hero />
          {/* /.container */}
          <img
            src="/images/shape/shape_08.svg"
            alt="illustration"
            className="lazy-img shapes shape-eight"
          />
        </div>
      </div>
      <div id="nosotros" className="fancy-feature-seven pt-200 lg-pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5" data-aos="fade-right">
              <div className="title-style-four text-center text-lg-start">
                <h2 className="main-title fw-500 tx-dark m0">
                  Encontramos la mejor <span>Solución.</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <p className="text-lg text-center text-lg-start md-pt-30 m0">
                En MASYDASE, somos un equipo joven dedicado a la programación de
                sistemas convertidas en soluciones, y que brinda soporte técnico
                a más de 1500 empresas nacionales, desde 1998.
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-50 lg-pt-10">
          <div className="row gx-xxl-5">
            <Features />
          </div>
        </div>
      </div>
      <div
        id="utilcon"
        className="fancy-feature-eight position-relative mt-225 xl-mt-150 md-mt-100"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-7 ms-auto order-lg-last">
              <Features2 />
            </div>
          </div>
        </div>
        <div className="illustration-holder">
          <img
            src="/images/utilcon/FONDO.png"
            alt="media"
            className="lazy-img main-img"
          />
          <img
            src="/images/utilcon/LOGIN.png"
            alt="media"
            className="lazy-img shapes screen-one"
          />
          <img
            src="/images/shape/shape_44.svg"
            alt="media"
            className="lazy-img shapes shape-one"
          />
        </div>
      </div>
      <div
        id="liquidacion-compras"
        className="fancy-feature-four pt-250 lg-pt-120"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-7 col-md-8 m-auto text-center"
              data-aos="fade-up"
            >
              <div className="title-style-three">
                <h2 className="main-title fw-500 px-3">
                  Liquidación de
                  <span className="d-inline-block position-relative mx-3">
                    Compras
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#a4f1ff" }}
                    />
                  </span>
                </h2>
              </div>
              <p className="text-lg mt-40 mb-100 lg-mt-20 lg-mb-50">
                Es el proceso mediante el cual se revisan, verifican y ajustan
                todas las transacciones relacionadas con la adquisición de
                bienes o servicios.
              </p>
            </div>
          </div>
          <div className="fancy-feature-five pb-30">
            <div className="container">
              <div className="row align-items-center">
                <div className=" order-md-first" data-data-aos="fade-right">
                  <div className="tags-wrapper position-relative">
                    <img
                      src="/images/shape/shape_35.svg"
                      alt="shape"
                      className="lazy-img shapes shape-one"
                    />
                    <div className="h3 m0 fw-normal tx-dark">6 Beneficios</div>

                    <TagList />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductTabs />
        </div>
      </div>
      <div
        id="guia-transportistas"
        className="fancy-feature-thirtyFive mt-90 md-mt-70"
      >
        <div className="bg-wrapper mt-150 pt-100 lg-mt-80 lg-pt-70">
          <div className="container">
            <IntroAbout />
          </div>
        </div>
      </div>
    </>
  );
};

export default MasyDase;

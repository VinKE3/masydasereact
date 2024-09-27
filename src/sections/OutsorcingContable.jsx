import React from "react";
import Block from "@/components/about/Block";
import AboutCeo from "@/components/about/AboutCeo";
const OutsorcingContable = () => {
  return (
    <>
      {" "}
      <div
        id="outsorcing-contable"
        className="fancy-feature-two position-relative pt-150 lg-pt-90"
      >
        <div className="container">
          <div className="row align-items-center">
            <AboutCeo />
          </div>
        </div>
      </div>
      <div className="fancy-feature-fiftyFour p-30 mt-150 lg-mt-90">
        <div className="bg-wrapper position-relative zn2 pt-140 lg-pt-60 pb-140 lg-pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <div className="title-style-one mt-30">
                  <div className="sc-title text-uppercase">
                    ¿Por qué elegirnos?
                  </div>
                  <h2 className="main-title fw-bold tx-dark">
                    Nuestros <span>Beneficios</span>
                  </h2>
                </div>
                <p className="text-lg mt-40 lg-mt-20">
                  Contamos que los siguientes beneficios que te ayudarán a
                  obtener una mejor experiencia.
                </p>
                <img
                  src="/images/shape/shape_179.svg"
                  alt="icon"
                  className="lazy-img d-none d-lg-block mt-80"
                />
              </div>
              <div className="col-lg-7 ms-auto">
                <div className="row gx-xxl-5">
                  <Block />
                </div>
              </div>
            </div>
          </div>
          <img
            src="/images/shape/shape_11.svg"
            alt="icon"
            className="lazy-img shapes shape-one"
          />
          <img
            src="/images/shape/shape_11.svg"
            alt="icon"
            className="lazy-img shapes shape-two"
          />
          <img
            src="/images/shape/shape_11.svg"
            alt="icon"
            className="lazy-img shapes shape-three"
          />
          <img
            src="/images/shape/shape_11.svg"
            alt="icon"
            className="lazy-img shapes shape-four"
          />
        </div>
      </div>
    </>
  );
};

export default OutsorcingContable;

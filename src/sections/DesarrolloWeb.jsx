import React from "react";
import Features from "@/components/feature-sass/Features";
import Features2 from "@/components/feature-sass/Features2";
import Hero from "@/components/feature-sass/Hero";
const DesarrolloWeb = () => {
  return (
    <>
      {" "}
      <div className="hero-banner-two position-relative pt-160 md-pt-150">
        <img
          src="/images/shape/shape_182.svg"
          alt="shape"
          className="lazy-img shapes shape-left-two"
        />
        <img
          src="/images/shape/shape_183.svg"
          alt="shape"
          className="lazy-img shapes shape-right-two"
        />

        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
              <Hero />
            </div>
          </div>

          <div
            className="illustration-holder position-relative mt-100 lg-mt-80 xs-mt-30"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <img
                  src="/images/media/img_96.jpg"
                  alt="shape"
                  className="lazy-img main-screen-two m-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fancy-feature-fiftyFive position-relative zn2 pt-140 lg-pt-80 pb-140 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row">
                <div className="col-xxl-7 col-lg-6 col-md-7 m-auto">
                  <div className="title-style-five text-center mb-140 lg-mb-50">
                    <h2 className="main-title font-recoleta fw-normal">
                      Tenemos todas las
                      <span className="position-relative d-inline-block mx-4">
                        herramientas
                        <img
                          src="/images/shape/shape_181.svg"
                          alt="icon"
                          className="lazy-img shapes line-shape"
                        />
                      </span>
                      para hacer crecer tu negocio.
                    </h2>
                  </div>
                </div>
              </div>

              {/* <div className="row">
                <div className="col-lg-7 col-md-6 order-md-last">
                  <div className="d-flex align-items-center justify-content-between title-line mt-15">
                    <div className="count fw-500 font-recoleta text-white rounded-circle text-center order-md-last">
                      01
                    </div>
                    <div className="solid-line order-md-first" />
                  </div>
                </div>

                <div className="col-lg-5 col-md-6 order-md-first">
                  <div className="title-style-thirteen text-center text-md-start sm-mt-20">
                    <h2 className="main-title font-recoleta fw-normal">
                      Servicios para todo tipo de empresas.
                    </h2>
                  </div>
                </div>
              </div>

              <div className="row">
                <Features />
              </div> */}

              <div className="mt-150 lg-mt-80">
                <div className="row">
                  <div className="col-lg-7 col-md-6">
                    <div className="d-flex align-items-center justify-content-between title-line mt-15">
                      <div className="count fw-500 font-recoleta text-white rounded-circle text-center">
                        01
                      </div>
                      <div className="solid-line" />
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-6">
                    <div className="title-style-thirteen text-center text-md-start sm-mt-20">
                      <h2 className="main-title font-recoleta fw-normal">
                        Solo ofrecemos los mejores servicios.
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <Features2 />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
        <div className="shapes shape-three rounded-circle" />
      </div>
    </>
  );
};

export default DesarrolloWeb;

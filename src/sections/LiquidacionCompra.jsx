import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductTabs from "@/components/home-page/home-6/ProductTabs";
import TagList from "@/components/home-page/home-6/TagList";

const LiquidacionCompra = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
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
              todas las transacciones relacionadas con la adquisición de bienes
              o servicios.
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
  );
};

export default LiquidacionCompra;

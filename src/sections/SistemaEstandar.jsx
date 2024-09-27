import React from "react";
import Pricing from "@/components/home-page/home-6/Pricing";

const SistemaEstandar = () => {
  return (
    <div
      id="sistema-estandar"
      className="pricing-section-one position-relative mt-200 lg-mt-120"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div
              className="title-style-three text-center mb-60 lg-mb-40"
              data-aos="fade-up"
            >
              <div className="sc-title text-uppercase">Tabla Comparativa</div>
              <h2 className="main-title fw-500 mx-6">
                Facturación
                <span className="d-inline-block position-relative mx-3">
                  Electrónica
                  <span
                    className="mark-bg"
                    style={{ backgroundColor: "#2bdfff" }}
                  />
                </span>
              </h2>
            </div>
          </div>
        </div>
        <Pricing />
      </div>
      <div className="shapes shape-one rounded-circle" />
      <img
        src="/images/shape/shape_40.svg"
        alt="shape"
        className="lazy-img shapes shape-two"
      />
      <img
        src="/images/shape/shape_41.svg"
        alt="shape"
        className="lazy-img shapes shape-three"
      />
    </div>
  );
};

export default SistemaEstandar;

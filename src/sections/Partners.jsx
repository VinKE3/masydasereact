import React from "react";
import Partners from "@/components/home-page/home-12/Partners";
const PartnersSection = () => {
  return (
    <div className="partner-section-six mt-140 lg-mt-80" data-aso="fade-up">
      <div className="container">
        <div className="top-header">
          <div className="d-flex align-items-center justify-content-between">
            <span className="lines" />
            <div className="title text-uppercase tx-dark text-center">
              Trabajamos con marcas reconocidas
            </div>
            <span className="lines" />
          </div>
          <div className="partner_slider_one mt-65 lg-mt-40">
            <Partners />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;

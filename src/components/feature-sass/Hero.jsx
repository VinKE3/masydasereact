import { Link } from "react-router-dom";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-8 m-auto">
          <div
            className="title-style-four text-center mb-60 lg-mb-40"
            data-aos="fade-up"
          >
            <div className="sc-title text-uppercase">Servicios</div>
            <h2 className="main-title fw-500 mx-6">
              Desarrollo
              <span className="d-inline-block position-relative mx-3">
                Web
                <span
                  className="mark-bg"
                  style={{ backgroundColor: "#2bdfff" }}
                />
              </span>
            </h2>
          </div>
        </div>
      </div>
      <Link to="#contacto" className="btn-four fw-500 pe-5 ps-5">
        Contactanos
      </Link>
    </>
  );
};

export default Hero;

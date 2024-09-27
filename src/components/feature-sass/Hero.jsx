import { Link } from "react-router-dom";
import React from "react";

const Hero = () => {
  return (
    <>
      <h1 className="hero-heading fw-normal font-recoleta pe-xxl-5 ps-xxl-5">
        Crea la
        <b className="position-relative d-inline-block fw-normal mx-4">
          Identidad
          <img
            src="/images/shape/shape_180.svg"
            alt="shape"
            className="lazy-img shapes line-shape-two"
          />
        </b>
        de tu empresa.
      </h1>
      <p className="text-lg mb-40 pt-20 lg-mb-30">
        Con nuestra ayuda vas a poder hacer crecer tu negocio.
      </p>
      <Link to="#contacto" className="btn-four fw-500 pe-5 ps-5">
        Contactanos
      </Link>
    </>
  );
};

export default Hero;

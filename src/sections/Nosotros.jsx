import React from "react";
import Features from "@/components/home-page/home-7/Features";

const Nosotros = () => {
  return (
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
              sistemas convertidas en soluciones, y que brinda soporte técnico a
              más de 1500 empresas nacionales, desde 1998.
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
  );
};

export default Nosotros;

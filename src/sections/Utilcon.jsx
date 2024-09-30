import React from "react";

import Features2 from "@/components/home-page/home-7/Features2";

const Utilcon = () => {
  return (
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
  );
};

export default Utilcon;

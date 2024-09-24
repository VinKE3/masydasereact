import HeroSubscribe from "./HeroSubscribe";
import Illustration from "./Illustration";

const Hero = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-7">
          <h1 className="hero-heading fw-bold tx-dark">
            Te ayudamos <br /> a conseguir el
            <span className="position-relative d-inline-block">Exito.</span>
          </h1>
          <p className="text-lg mb-60 pt-50 pe-xl-5 lg-pt-30 lg-mb-40">
            Transformamos ideas en soluciones agíles de confianza.
          </p>

          <div className="pr-info fw-500 fs-20 tx-dark mt-35">
            Más de
            <span className="fw-bold text-decoration-underline">
              150,000+ clientes
            </span>
            a nivel nacional.
          </div>
        </div>
      </div>
      <Illustration />
    </div>
  );
};

export default Hero;

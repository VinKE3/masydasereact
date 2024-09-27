import BlockContact5 from "@/components/contact/BlockContact5";
import ContactForm4 from "@/components/contact/ContactForm4";
import Map2 from "@/components/contact/Map2";

const Contacto = () => {
  return (
    <div className="contact-section-four pt-180 md-pt-150">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-lg-6 col-md-7 m-auto">
            <div
              className="title-style-fourteen text-center mb-100 lg-mb-50"
              data-aos="fade-up"
            >
              <div className="sc-title">CONTACTO</div>
              <h2 className="main-title font-recoleta fw-normal tx-dark">
                Nuestro{" "}
                <span className="position-relative">
                  equipo <img src="/images/shape/shape_181.svg" alt="icon" />
                </span>
                esta aquí para ayudarte.
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <BlockContact5 />
        </div>
      </div>

      <div className="contact-meta mt-10 lg-mt-40">
        <div className="row gx-0">
          <div className="col-lg-6 order-lg-last d-flex">
            <div className="form-wrapper pt-60 lg-pt-40 pb-85 lg-pb-50 w-100">
              <div className="form-style-five">
                <h3 className="form-title font-recoleta fw-normal pb-30 lg-pb-20">
                  Enviar Mensaje.
                </h3>
                <ContactForm4 />
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-lg-first d-flex">
            <Map2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

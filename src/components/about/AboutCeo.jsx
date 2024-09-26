import React from "react";

const AboutCeo = () => {
  const aboutData = {
    title: {
      subtitle: "Servicio",
      mainTitle: (
        <>
          Outsorcing <span>Contable</span>
        </>
      ),
    },
    content: {
      sectionTitle: "¿Que es?",
      description:
        "Implica delegar funciones relacionadas con la contabilidad, como la gestión de libros  contables, la elaboración de informes financieros, la prepración de impuestos, y el control de cuentas, a una entidad externa especilizada. Esto puede incluir desde firmas contables hasta freelancers con experiencia en contabilidad.",
    },
    rating: {
      text: "Satisfacción garantizada.",
      starsCount: 5,
    },
  };

  const starIcons = Array.from(
    { length: aboutData.rating.starsCount },
    (_, index) => (
      <li key={index}>
        <i className="bi bi-star-fill" />
      </li>
    )
  );

  return (
    <>
      <div className="col-lg-5 col-md-6 ms-auto order-md-last">
        <div className="block-style-one" data-aos="fade-left">
          <div className="title-style-one">
            <div className="sc-title text-uppercase">
              {aboutData.title.subtitle}
            </div>
            <h2 className="main-title fw-bold tx-dark m0">
              {aboutData.title.mainTitle}
            </h2>
          </div>
          <h4 className="tx-dark pt-65 pb-20 lg-pt-40 lg-pb-10">
            {aboutData.content.sectionTitle}
          </h4>
          <p className="fs-20">{aboutData.content.description}</p>
          <p className="fs-18 mb-10 pt-30 lg-pt-20">
            <span className="fw-500 tx-dark">{aboutData.rating.text}</span>
          </p>
          <ul className="d-flex style-none rating">{starIcons}</ul>
        </div>
      </div>

      <div className="col-md-6 order-md-first" data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 sm-mt-90">
          <img
            style={{ objectFit: "cover" }}
            src="/images/outsourcing/1.webp"
            alt="shape"
            className="lazy-img"
          />
          <img
            src="/images/shape/shape_09.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <img
            src="/images/shape/shape_11.svg"
            alt="shape"
            className="lazy-img shapes shape-two"
          />
          <div className="shapes shape-three" />
          <img
            src="/images/shape/shape_11.svg"
            alt="shape"
            className="lazy-img shapes shape-four"
          />
          <img
            src="/images/shape/shape_11.svg"
            alt="shape"
            className="lazy-img shapes shape-five"
          />
          <div className="shapes shape-six" />
          <img
            src="/images/shape/shape_11.svg"
            alt="shape"
            className="lazy-img shapes shape-seven"
          />
        </div>
      </div>
    </>
  );
};

export default AboutCeo;

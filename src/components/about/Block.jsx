import React from "react";

const blocksData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_12.svg",
    title: "Reducción de Costos",
    dataAos: "fade-up",
    dataAosDelay: "",
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_12.svg",
    title: "Asesoría personalizada",
    dataAos: "fade-up",
    dataAosDelay: "200",
  },

  {
    id: 4,
    iconSrc: "/images/icon/icon_12.svg",
    title: "Acceso a experiencia personalizada",
    dataAos: "fade-up",
    dataAosDelay: "300",
  },
  {
    id: 6,
    iconSrc: "/images/icon/icon_12.svg",
    title: "Flexibilidad operativa y dinámica.",
    dataAos: "fade-up",
    dataAosDelay: "100",
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_12.svg",
    title: "Garantía del cumplmiento normativo",
    dataAos: "fade-up",
    dataAosDelay: "100",
  },
  {
    id: 5,
    iconSrc: "/images/icon/icon_12.svg",
    title: "Mitigación y reducción de riesgos empresariales",
    dataAos: "fade-up",
    dataAosDelay: "",
  },

  {
    id: 7,
    iconSrc: "/images/icon/icon_12.svg",
    title: "Optimización de recursos",
    dataAos: "fade-up",
    dataAosDelay: "200",
  },
  {
    id: 8,
    iconSrc: "/images/icon/icon_12.svg",
    title: "Seguridad de la información",
    dataAos: "fade-up",
    dataAosDelay: "300",
  },
];

const Block = () => {
  return (
    <>
      {blocksData.map((block) => (
        <div className="col-sm-6" key={block.id}>
          <div
            className="card-style-twentyFour bg-white mt-30"
            data-aos={block.dataAos}
            data-aos-delay={block.dataAosDelay}
          >
            <div className="icon">
              <img src={block.iconSrc} alt="icon" className="lazy-img mh-100" />
            </div>
            <h4 className="fw-bold tx-dark mt-0 mb-15">{block.title}</h4>
            <p className="fs-18">{block.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Block;

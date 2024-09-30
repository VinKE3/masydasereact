import { useState } from "react";
import ModalVideo from "react-modal-video";

const IntroAbout = () => {
  const [isOpen, setOpen] = useState(false);
  const cardsData = [
    {
      id: 1,
      cardNo: "card-one",
      title: "Eficiencia",
      subtitle: "Mejorada",
    },
    {
      id: 2,
      title: "Mejora en",
      cardNo: "card-two",
      subtitle: "Exactitud de entregas",
    },
    {
      id: 3,
      title: "Aumento de ",
      cardNo: "card-three",
      subtitle: "la seguridad",
    },
    {
      id: 4,
      cardNo: "card-four",
      title: "Reducción de",
      subtitle: "Costos Operativos",
    },
    {
      id: 5,
      title: "Flexibilidad",
      cardNo: "card-five",
      subtitle: "y adaptación",
    },
    {
      id: 6,
      title: "Cumplimiento",
      cardNo: "card-six",
      subtitle: "Normativo",
    },
  ];

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="UFaPYZ7AW1A"
        onClose={() => setOpen(false)}
      />

      <div className="row">
        <div className="col-xl-5 col-md-6 order-md-last">
          <div className="text-wrapper md-pb-70">
            <img
              src="/images/icon/icon_103.svg"
              alt="icon"
              className="lazy-img cursor-pointer"
              onClick={() => setOpen(true)}
            />
            <p className="tx-dark pt-30 pb-30 md-pb-15" data-aos="fade-up">
              Sistema de guías <span className="fw-500">Electronicas</span> de
              transportistas.
            </p>
            <h6
              className="fs-20 tx-dark d-inline-block position-relative ps-4"
              data-aos="fade-up"
            >
              Sistema digital utilizado para emitir, gestionar y validar guías
              de transporte en formato electrónico. Estas guías son documentos
              que certifican el transporte de mercancías y son requeridas por
              las autoridades fiscales para asegurar que las transacciones
              comerciales cumple con las regulaciones.
            </h6>
          </div>
        </div>

        <div className="col-xl-7 col-md-6 order-md-first" data-aos="fade-up">
          <div className="img-holder d-lg-inline-flex position-relative zn2 pb-45 xl-pb-90">
            <img
              src="/images/shape/shape_135.svg"
              alt="shape"
              className="lazy-img"
            />
            <img
              src="/images/media/img_53.png"
              className="lazy-img avatar-img"
              alt="man"
            />

            {cardsData.map((item) => (
              <div
                className={`card-style ${item.cardNo} d-flex justify-content-center`}
                key={item.id}
              >
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-lg" />
                </div>
                <div className="ps-2 ps-lg-4">
                  <h3>{item.title}</h3>
                  <p className="fs-20 tx-dark m0">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroAbout;

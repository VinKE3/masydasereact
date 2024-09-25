const Intro = () => {
  return (
    <>
      <div className="title-style-eleven">
        <div className="sc-title">Sistema Web</div>
        <h2 className="main-title tx-dark">
          Guías <br /> de Remisión.
        </h2>
      </div>
      <div className="d-flex mt-70 mb-40 lg-mt-40 lg-mb-10">
        <img
          src="/images/shape/shape_164.svg"
          alt=""
          className="lazy-img d-none d-lg-block"
        />
        <p className="text-lg m0 ps-lg-5">
          Es un documento legal que acompaña a las mercancías durante el
          transporte. Su propósito es certificar la entrega y recepción de
          bienes entre un remitente y un destinatario.
        </p>
      </div>
    </>
  );
};

export default Intro;

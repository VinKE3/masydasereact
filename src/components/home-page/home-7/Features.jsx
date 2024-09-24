const featureData = [
  {
    id: 1,
    icon: "/images/icon/icon_24.svg",
    title: "Misión",
    text: "Nuestra misión es adaptarnos a las necesidades de los sistemas de gestión corporativa, ofreciendo soluciones creativas e innovadoras con sistemas flexibles y soporte técnico integrado.",
    backgroundColor: "#e0f1f8",
  },
  {
    id: 2,
    icon: "/images/icon/icon_25.svg",
    title: "Visión",
    text: "Aspiramos a ser líderes en el mercado informático, patentando la mayoría de sistemas adaptables a todo tipo de negocios en Perú, fortaleciendo la seguridad de empresas confiadas en nosotros.",
    backgroundColor: "#e0f1f8",
  },
  {
    id: 3,
    icon: "/images/icon/icon_26.svg",
    title: "Valores",
    text: "Nuestros valores fundamentales son la responsabilidad, honestidad y respeto, principios que guían nuestro compromiso hacia la excelencia y la integridad en cada solución que brindamos a nuestros clientes.",
    backgroundColor: "#e0f1f8",
  },
];

const FeatureCard = ({ icon, title, text, backgroundColor }) => {
  return (
    <div className="card-style-four text-center position-relative mt-40 xs-mt-20">
      <div
        className="icon rounded-circle m-auto d-flex align-items-center justify-content-center"
        style={{ backgroundColor }}
      >
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-500 mt-35 mb-25">
        <a href="#" className="tran3s tx-dark">
          {title}
        </a>
      </h4>
      <p className="mb-30">{text}</p>
      <a href="#">
        <img src="/images/icon/icon_05.svg" alt="icon" className="lazy-img" />
      </a>
    </div>
  );
};

const Features = () => {
  return (
    <>
      {featureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
            backgroundColor={feature.backgroundColor}
          />
        </div>
      ))}
    </>
  );
};

export default Features;

const Features3 = () => {
  const icons = [
    {
      src: "/images/icon/icon_30.svg",
      alt: "shape",
      className: "lazy-img shapes icon-one",
    },
    {
      src: "/images/icon/icon_31.svg",
      alt: "shape",
      className: "lazy-img shapes icon-two",
    },
    {
      src: "/images/icon/icon_32.svg",
      alt: "shape",
      className: "lazy-img shapes icon-three",
    },
    {
      src: "/images/icon/icon_33.svg",
      alt: "shape",
      className: "lazy-img shapes icon-four",
    },
    {
      src: "/images/icon/icon_34.svg",
      alt: "shape",
      className: "lazy-img shapes icon-five",
    },
  ];
  const blocks = [
    {
      className:
        "block-bg shapes tran3s block-one d-flex align-items-center justify-content-center",
      text: "Seguridad Robusta",
    },
    {
      className:
        "block-bg shapes tran3s block-two d-flex align-items-center justify-content-center",
      text: "Escabilidad instantanea",
    },
    {
      className:
        "block-bg shapes tran3s block-three d-flex align-items-center justify-content-center",
      text: "Entorno dedicado",
    },
    {
      className:
        "block-bg shapes tran3s block-four d-flex align-items-center justify-content-center",
      text: "Agilidad y eficiencia",
    },
    {
      className:
        "block-bg shapes tran3s block-five d-flex align-items-center justify-content-center",
      text: "Costo reducido",
    },
  ];

  return (
    <div className="wrapper position-relative" data-aos="fade-up">
      <div className="circle-one rounded-circle position-relative m-auto">
        {blocks.map((block, index) => (
          <div key={index} className={block.className}>
            <span>{block.text}</span>
          </div>
        ))}

        <div className="circle-two rounded-circle position-relative">
          <div>
            {icons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className={icon.className}
              />
            ))}
          </div>
          <div className="circle-three rounded-circle" />
        </div>
      </div>

      <div className="mobile-screen">
        <img
          src="/images/vps/1.svg"
          alt="shape"
          width={430}
          height={770}
          className="lazy-img m-auto"
        />
      </div>
      <img
        src="/images/shape/shape_47.svg"
        alt="shape"
        className="lazy-img shapes fancy-shape"
      />
    </div>
  );
};

export default Features3;

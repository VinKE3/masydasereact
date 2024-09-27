const BlockContact5 = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_178.svg",
      title: "Dirección",
      content: "Villa el Salvador, Sec. 3 Grupo 13 Mza. C Lote. 9",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_180.svg",
      title: "Soporte",

      phones: ["987351513", "984799203", "936072443"],
      delay: "200",
    },
    {
      icon: "/images/icon/icon_162.svg",
      title: "Emails",

      emails: [
        "ventas@masydase.com",
        "soporte@masydase.com",
        "info@masydase.com",
      ],
      delay: "300",
    },
    {
      icon: "/images/icon/icon_173.svg",
      title: "Horario de atención",
      content: "Lunes a Viernes: 8 am a 6 pm Sábados: 9 am a 12 pm",
      delay: "100",
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div
          className="col"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon border rounded-circle d-flex align-items-center justify-content-center m-auto">
              <img src={block.icon} alt="icon" />
            </div>
            <h5 className="title">{block.title}</h5>
            <p>
              {block.content}
              {block.phones &&
                block.phones.map((phone, phoneIndex) => (
                  <a
                    href={`tel:${phone}`}
                    className="call d-block mb-2"
                    key={phoneIndex}
                  >
                    {phone}
                    <br />
                  </a>
                ))}
              {block.emails &&
                block.emails.map((email, emailIndex) => (
                  <a
                    href={`mailto:${email}`}
                    className="webaddress"
                    key={emailIndex}
                  >
                    {email}
                    <br />
                  </a>
                ))}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact5;

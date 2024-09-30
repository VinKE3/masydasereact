const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Menu",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "Inicio", href: "/" },
        { label: "Nosotros", href: "/pricing" },
        { label: "Contacto", href: "/about-v1" },
      ],
    },
    {
      id: 2,
      title: "Servicios",
      column: "col-lg-3 col-md-4 col-sm-6 mb-30",
      items: [
        { label: "VPS", href: "/service-details" },
        { label: "Outsorcing Contable", href: "/service-details" },
        { label: "Desarrollo Web", href: "/service-details" },
      ],
    },
  ];

  const socialIcons = [
    {
      iconClass: "fab fa-facebook-f",
      link: "#",
    },
    {
      iconClass: "fab fa-twitter",
      link: "#",
    },
    {
      iconClass: "fab fa-linkedin-in",
      link: "#",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className="footer-title text-white fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.items.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title text-white fw-500">Dirección</h5>
        <p className="text-white opacity-75 mb-35">
          Villa el Salvador, Sec. 3 <br />
          Grupo 13 Mza. C Lote. 9.
        </p>
        <ul className="d-flex social-icon style-none">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;

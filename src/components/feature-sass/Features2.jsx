import { Link } from "react-router-dom";
import React from "react";

const featuresData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_13.svg",
    title: "Diseño Web Responsivo",
    description:
      "El sitio web debe adaptarse a diferentes dispositivos y tamaños de pantalla (móviles, tabletas, ordenadores).",
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_14.svg",
    title: "Desarrollo Personalizado",
    description:
      "Soluciones hechas a medida según las necesidades y objetivos específicos de cada cliente.",
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_17.svg",
    title: "Seguridad Web",
    description:
      "Medidas de seguridad como certificados SSL, protección contra ataques, y seguridad en el código para garantizar la integridad del sitio y la privacidad de los datos.",
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_164.svg",
    title: "Gestión de Contenidos",
    description:
      "Implementación de un sistema de gestión de contenidos (CMS) como WordPress o un CMS personalizado que permita al cliente actualizar fácilmente el contenido del sitio.",
    colClass: "col-lg-8",
  },
  {
    id: 5,
    iconSrc: "/images/icon/icon_165.svg",
    title: "Mantenimiento y Soporte Técnico",
    description:
      "Servicios de mantenimiento continuo para actualizaciones, correcciones de errores, o ajustes que el cliente pueda necesitar con el tiempo.",
    colClass: "col-lg-4",
  },
];

const Features2 = () => {
  return (
    <>
      {featuresData.map((feature) => (
        <div
          key={feature.id}
          className={`col-md-6 d-flex mt-40 lg-mt-30 ${
            feature.colClass || "col-lg-4"
          }`}
          data-aos="fade-up"
          data-aos-delay={`${feature.id * 100}`}
        >
          <div className="card-style-three border-0">
            <div className="icon d-flex align-items-end">
              <img
                style={{ objectFit: "contain" }}
                src={feature.iconSrc}
                alt="icon"
                className="lazy-img"
              />
            </div>
            <h4 className="mt-25 mb-20">{feature.title}</h4>
            <p className="mb-50">{feature.description}</p>
            <Link to="/pages-menu/service-details">
              <img
                src="/images/icon/icon_18.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link>
          </div>
          {/* /.card-style-three */}
        </div>
      ))}
    </>
  );
};

export default Features2;

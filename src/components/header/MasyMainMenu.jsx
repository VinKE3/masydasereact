import { Link } from "react-router-dom";
import { portfolioItems, blogItems } from "../../data/menu";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const MasyMainMenu = () => {
  const { pathname } = useLocation();

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Define cuando se considera una sección como visible (50%)
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link to="/" className="d-block">
                <img src="/images/logo/logo2.png" alt="logo" />
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <a
              href="#nosotros"
              role="button"
              className={
                activeSection === "nosotros"
                  ? "nav-link active-menu"
                  : "nav-link"
              }
            >
              Nosotros
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#utilcon"
              role="button"
              className={
                activeSection === "utilcon"
                  ? "nav-link active-menu"
                  : "nav-link"
              }
            >
              Utilcon
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className={
                portfolioItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Sin Nombre
            </a>
            <ul className="dropdown-menu">
              {portfolioItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className={`dropdown-item ${
                      isActive(item.link) ? "active" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              // className="nav-link dropdown-toggle"
              className={
                blogItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              F. Electrónica
            </a>
            <ul className="dropdown-menu">
              {blogItems.map((blog, index) => (
                <li key={index}>
                  <Link
                    to={blog.link}
                    className={`dropdown-item ${
                      isActive(blog.link) ? "active" : ""
                    }`}
                  >
                    <span>{blog.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="nav-item">
            <a
              href="#vps"
              role="button"
              className={
                activeSection === "nosotros"
                  ? "nav-link active-menu"
                  : "nav-link"
              }
            >
              VPS
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#outsorcing-contable"
              role="button"
              className={
                activeSection === "nosotros"
                  ? "nav-link active-menu"
                  : "nav-link"
              }
            >
              Outsourcing.Contable
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#desarrollo-web"
              role="button"
              className={
                activeSection === "nosotros"
                  ? "nav-link active-menu"
                  : "nav-link"
              }
            >
              Desarrollo.Web
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contacto"
              role="button"
              className={
                activeSection === "nosotros"
                  ? "nav-link active-menu"
                  : "nav-link"
              }
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link
              to="/contact/contact-v1"
              className="btn-twentyOne fw-500 tran3s"
            >
              Contact us
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MasyMainMenu;

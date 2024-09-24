import { useEffect, useState } from "react";
import MasyMainMenu from "./MasyMainMenu";
import { Link } from "react-router-dom";

const HeaderMasy = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link to="/" className="d-block">
              <img
                src="/images/logo/logo2.png"
                alt="logo"
                width={150}
                height={30}
              />
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            <Link to="#" className="login-btn-three rounded-circle tran3s me-3">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="#" className="login-btn-three rounded-circle tran3s me-3">
              <i className="bi bi-youtube"></i>
            </Link>
            <Link to="#" className="login-btn-three rounded-circle tran3s me-3">
              <i className="bi bi-instagram"></i>
            </Link>
          </div>{" "}
          <MasyMainMenu />
        </div>
      </div>
    </header>
  );
};

export default HeaderMasy;

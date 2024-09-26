import { Link } from "react-router-dom";
import Seo from "../components/common/Seo";
import HeaderMasy from "@/components/header/HeaderMasy";

const NotFound = () => {
  return (
    <>
      <Seo pageTitle="404" />
      <HeaderMasy />
      <div className="error-page-content d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 m-auto">
              <h3>Opps! estás en el lugar equivocado.</h3>
              <p className="me-xxl-5 ms-xxl-5 pt-15 pb-20">
                ¿No encuentra lo que necesita? Tómese un momento y haga una
                búsqueda a continuación o empiece desde nuestra página de
                inicio.
              </p>
              <Link to="/" className="btn-twentyOne fw-500 tran3s">
                Voler al inicio
              </Link>
            </div>
          </div>
          <img src="/images/assets/ils_06.svg" alt="" className="m-auto" />
        </div>
        <img
          src="/images/shape/shape_178.svg"
          alt="shape"
          className="shapes shape-one w-100"
        />
      </div>
    </>
  );
};

export default NotFound;

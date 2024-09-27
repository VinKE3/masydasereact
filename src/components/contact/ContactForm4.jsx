import React from "react";

const ContactForm4 = () => {
  return (
    <form action="#">
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label>Nombre*</label>
            <input
              type="text"
              placeholder="Introduzca su nombre"
              name="name"
              required="required"
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-45">
            <label>Email*</label>
            <input
              type="email"
              placeholder="Introduzca su correo"
              name="email"
              required="required"
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-45">
            <textarea
              placeholder="Mensaje"
              name="message"
              required="required"
              defaultValue={""}
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-12">
          <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase">
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm4;

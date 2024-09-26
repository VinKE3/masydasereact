const Pricing = () => {
  const plans = [
    {
      name: "Sistema Estándar",
      price: "S/ 82.48",
      info: "IGV incluido",
      info2: "Planes previa evaluación",
      features: [
        { text: "Sujeto a modificaciones", available: false },
        { text: "Multiples usuarios", available: true },
        { text: "Demos", available: true },
        { text: "Soporte", available: true },
      ],
    },
    {
      name: "Sistema a medida",
      price: "S/ 236.00",
      info: "IGV incluido",
      features: [
        { text: "Sujeto a modificaciones", available: true },
        { text: "Multiples usuarios", available: true },
        { text: "Demos", available: true },
        { text: "Soporte", available: true },
      ],
    },
  ];

  return (
    <>
      <div
        className="pricing-table-area-one mt-110 lg-mt-60 pe-xxl-4 ps-xxl-4"
        data-aos="fade-up"
      >
        <div className="tab-content">
          <div className="tab-pane show active" id="month">
            <div className="row gx-0 position-relative">
              <div className="col-lg-3 pr-list-wrapper d-none d-lg-block position-relative">
                <ul className="style-none">
                  <li>Sujeto a modificaciones</li>
                  <li>Multiples Usuarios</li>
                  <li>Demo</li>
                  <li>Soporte</li>
                </ul>
              </div>
              <div className="col-lg-9 pr-table-wrapper ml-auto">
                <div className="row gx-0">
                  {plans.map((item, index) => (
                    <div className="col-md-6 pr-column sm-mb-20" key={index}>
                      <div className="pr-header">
                        <div className="plan">{item.name}</div>
                        {/* <div className="price">{item.price}</div>
                        <div className="info">{item.info}</div> */}
                      </div>
                      <div className="pr-body">
                        <ul className="style-none">
                          {item.features.map((feature) => (
                            <li key={feature.text}>
                              <span className="pr-text d-block d-lg-none">
                                {feature.text}
                              </span>
                              <i
                                className={
                                  feature.available
                                    ? "bi bi-check2 availabe"
                                    : "bi bi-x not-available"
                                }
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pr-footer">
                        <a
                          href="#contacto"
                          className="trial-button fw-500 fs-16 tran3s"
                        >
                          Contacto
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;

const Features2 = () => {
  const listItems = [
    "Provisiones 36000 asientos en CODEBASE y SQL",
    "Permite pagar y cobrar parte o saldos efectivo y con bancos",
    "Provisiones de Ventas, Compras y Honorarios",
    "Tipo de cambio diario y manual",
    "Valida comprobantes",
    "Elimina empresas y periodos",
    "Permite pagar y cobrar en fechas distintas efectivo y con bancos",
    "Eliminar comprobantes",
    "Cancelaciones masivas de comprobantes",
    "Consulta Ruc (Sunat)",
    "Carga de Anexos",
  ];

  return (
    <div className="block-style-three" data-aos="fade-right">
      <div className="title-style-four">
        <h2 className="main-title fw-500 tx-dark m0">
          Optimiza tu productividad con <span>Utilcon.</span>
        </h2>
      </div>
      <p className="text-lg pt-35 pb-30 lg-pb-10">
        Herramienta diseñada para facilitar las provisiones o cargas masivas de
        sus ventas y compras, cuenta con un módulo de cancelaciones y trabaja
        enterno red.
      </p>
      <ul className="style-none list-item fs-18">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Features2;

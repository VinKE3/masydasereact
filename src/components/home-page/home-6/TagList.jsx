const TagList = () => {
  const tags = [
    { color: "rgba(128, 240, 255, 0.13)", text: "Multi-empresa" },
    { color: "rgba(49, 162, 255, 0.13)", text: "Carga mediante Excel" },
    { color: "rgba(0, 195, 255, 0.13)", text: "Listado de vendedores" },
    { color: "rgba(5, 184, 255, 0.15)", text: "Descarga PDF y XML" },
    { color: "rgba(0, 96, 134, 0.15)", text: "Permite consultar DNI" },
    {
      color: "rgba(78, 164, 235, 0.15)",
      text: "Opción de revertir las liquidaciones",
    },
  ];

  return (
    <ul className="d-flex flex-wrap align-items-center style-none">
      {tags.map((tag, index) => (
        <li key={index}>
          <a href="#">
            <span style={{ backgroundColor: tag.color }}>{tag.text}</span>
          </a>
        </li>
      ))}
      {/* <li>&amp; more…</li> */}
    </ul>
  );
};

export default TagList;

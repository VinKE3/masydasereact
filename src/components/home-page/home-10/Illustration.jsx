const Illustration = () => {
  const shapes = [
    { src: "/images/shape/shape_01.svg", className: "shapes shape-one" },
    { src: "/images/shape/shape_03.svg", className: "shapes shape-two" },
    { src: "/images/shape/shape_03.svg", className: "shapes shape-three" },
    { src: "/images/shape/shape_03.svg", className: "shapes shape-four" },
    { src: "/images/shape/shape_03.svg", className: "shapes shape-five" },
  ];

  return (
    <div className="illustration-holder">
      <img
        src="/images/700.png"
        alt="illustration"
        className="lazy-img main-illustration w-100"
      />
      {shapes.map((shape, i) => (
        <img
          key={i}
          src={shape.src}
          alt="illustration"
          className={`lazy-img ${shape.className}`}
        />
      ))}
    </div>
  );
};

export default Illustration;

import React from "react";
import Slider from "react-slick";

const partners = [
  {
    id: 1,
    logo: "/images/partners/ANLUVET.png",
  },
  {
    id: 2,
    logo: "/images/partners/ARTCOLORS.png",
  },
  {
    id: 3,
    logo: "/images/partners/barco.png",
  },
  {
    id: 4,
    logo: "/images/partners/iza.png",
  },
  {
    id: 5,
    logo: "/images/partners/machu.png",
  },
  {
    id: 6,
    logo: "/images/partners/MEGAPAPER.png",
  },
  {
    id: 7,
    logo: "/images/partners/natural.png",
  },
  {
    id: 8,
    logo: "/images/partners/omega.png",
  },
  {
    id: 9,
    logo: "/images/partners/or.png",
  },
  {
    id: 10,
    logo: "/images/partners/organica.png",
  },
  {
    id: 11,
    logo: "/images/partners/rojas.png",
  },
];

const Partners = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} arrows={false}>
      {partners.map((partner) => (
        <div className="item" key={partner.id}>
          <div className="icon d-flex align-items-center justify-content-center">
            <img src={partner.logo} alt="" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Partners;

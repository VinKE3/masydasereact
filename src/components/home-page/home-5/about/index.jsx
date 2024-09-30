import ImgGallery from "./ImgGallery";
import Intro from "./Intro";
import { useState } from "react";

const index = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="row align-items-center">
      <div className="col-lg-6 ms-auto order-lg-last" data-aos="fade-left">
        <div className="ps-xl-4">
          <Intro />
        </div>
      </div>
      <div className="col-lg-5 order-lg-first position-relative">
        <ImgGallery />
      </div>
    </div>
  );
};

export default index;

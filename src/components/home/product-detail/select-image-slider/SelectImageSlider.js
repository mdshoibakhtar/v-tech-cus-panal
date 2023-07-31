import React from "react";

import fertilizerApp1 from "../../../../assets/img/product-detail/fertilizer-application1.jpg";
import fertilizerApp2 from "../../../../assets/img/product-detail/single-product.jpg";
// import fertilizerApp3 from "../../../../assets/img/product-detail/fertilizer-application3.jpg";
// import fertilizerApp4 from "../../../../assets/img/product-detail/fertilizer-application4.jpg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import "./SelectImageSlider.css";

function SelectImageSlider() {
  return (
    <>
      <div className="selectImageInfo">
        <button type="button" className="slidePrev">
          <IoIosArrowUp />
        </button>
        <div className="selectImageSlider">
          <div className="productSliderItem">
            <img src={fertilizerApp1} alt="" className="img-fluid" />
          </div>
          <div className="productSliderItem">
            <img src={fertilizerApp2} alt="" className="img-fluid" />
          </div>
          <div className="productSliderItem">
            <img src={fertilizerApp1} alt="" className="img-fluid" />
          </div>
          <div className="productSliderItem">
            <img src={fertilizerApp2} alt="" className="img-fluid" />
          </div>
          <div className="productSliderItem">
            <img src={fertilizerApp1} alt="" className="img-fluid" />
          </div>
          <div className="productSliderItem">
            <img src={fertilizerApp2} alt="" className="img-fluid" />
          </div>
        </div>
        <button type="button" className="slideNext">
          <IoIosArrowDown />
        </button>
      </div>
    </>
  );
}

export default SelectImageSlider;

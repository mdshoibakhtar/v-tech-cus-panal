import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import "./SelectImageSlider.css";
import { ImgesData } from "../../proImgs/ImgesData";

function SelectImageSlider({ handleUniqueID, productData }) {
  return (
    <>

      <div className="selectImageInfo">
        <button type="button" className="slidePrev">
          <IoIosArrowUp />
        </button>
        <div className="selectImageSlider">

          {productData?.length === 1 ? ImgesData.slice(5, 9).map((item, i) => {
            return <div className="productSliderItem" key={i}>
              <img
                src={item.url}
                className="img-fluid"
                onClick={() => { handleUniqueID(item) }}
              />
            </div>
          }) : productData?.map((item, i) => {
            return <div className="productSliderItem" key={i}>
              <img
                src={item.url}
                className="img-fluid"
                onClick={() => { handleUniqueID(item) }}
              />
            </div>
          })}
        </div>
        <button type="button" className="slideNext">
          <IoIosArrowDown />
        </button>
      </div>
    </>
  );
}

export default SelectImageSlider;

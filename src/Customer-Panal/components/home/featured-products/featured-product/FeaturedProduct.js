import React, { useState } from "react";
import Rating from "../../../../shared/rating/Rating";

import { FiSearch } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { BsFillCartFill } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";

// You need to import the CSS only once
// import "react-awesome-lightbox/build/style.css";

import "../../../home/products/product/ProductItem.css";
import { Link } from "react-router-dom";
import {
  setFeachers, useGetProductDetailQuery,
} from "../../../products/productSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ImgesData } from "../../proImgs/ImgesData";

import img1 from '../../../../assets/prductsImg/newPro1.webp'
import img2 from '../../../../assets/prductsImg/newPro2.webp'
import img3 from '../../../../assets/prductsImg/newPro3.webp'
import img4 from '../../../../assets/prductsImg/newPro4.webp'
import img5 from '../../../../assets/prductsImg/newPro5.webp'
import img6 from '../../../../assets/prductsImg/newPro6.webp'
import img7 from '../../../../assets/prductsImg/newPro7.webp'
import img8 from '../../../../assets/prductsImg/newPro8.webp'

function FeaturedProduct({ isLoading, error, handleShow }) {
  const curr = window.localStorage.getItem('currencySym')
  const currencySymbol = curr ? curr : 'ZK'
  // const dispacher = useDispatch()

  // useEffect(() => {
  //   dispacher(setFeachers(data))
  // }, [data])

  const [data, setData] = useState([
    { url: img1 ,name:'POWERWASH Foam Tank 80 Lt For Car Washing'},
    { url: img2 ,name:'AgriPro 3.0 HP Chaff Cutter With Motor APCC9Z'},
    { url: img3 ,name:'Ingco 85 W 1450 Rpm Scroll Saw Machine SS852'},
    { url: img4 ,name:'Powerhouse 3 HP 50-60 L Air Compressor PH2050/2060'},
    { url: img5 ,name:'Stolica Athena Leatherette High Back Brown Office Chair'},
    { url: img6 ,name:'Powerwash High Pressure Power Sprayer PW 280 With 6 Months Warranty'},
    { url: img7 ,name:'POWERWASH Foam Tank 80 Lt For Car Washing'},
    { url: img8 ,name:'AgriPro 3.0 HP Chaff Cutter With Motor APCC9Z'},
  ])

  return (
    <>
      {isLoading && (
        <div className="loaderIcon">
          <BiLoaderAlt />
        </div>
      )}
      {data && data?.map((item, i) => {
        return (
          <div className="col-lg-3 col-md-6 col-sm-12" key={item._id}>
            <div className="featuredInfo">
              <div className="featuredFigure">
                <div className="featuredImg" style={{ textAlign: "center" }}>
                  <Link to={`/product/64a3dc328da7b8d7361891d1`}>
                    <img src={item.url ? item?.url : ImgesData[0].url} alt="Product" className="imgProduct" />
                  </Link>
                  <div className="quickView">
                    <ul>
                      <li className="viewProduct">
                        <button
                          className="quick_view_btn"
                          onClick={(e) => {
                            handleShow(item)
                          }}
                        >
                          <FiSearch />
                        </button>
                      </li>
                      <li className="addProduct">
                        <Link to="#">
                          <GrAdd />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="hotList">
                  <li>
                    <Link to="/products">hot</Link>
                  </li>
                  <li>
                    <Link to="products">-20%</Link>
                  </li>
                </ul>
              </div>
              <div className="featuredContent">
                <h6>category</h6>
                <h5 style={{marginBottom:"17px"}}>
                  <Link to='#'>{item.name}</Link>
                </h5>
                <Rating  />
                <div className="rateDigit">
                  <span className="cross">Rs 599.00</span>
                  <span className="currentPrice">Rs 489.00</span>
                </div>
                <div className="buyNowInfo">


                  <Link className="btn btn-danger addCart" to={`/product/64a3dc328da7b8d7361891d1`}
                  >
                    View Detail
                  </Link>


                  <Link to={`#`} className="btn btn-primary buyNow">
                    <BsFillCartFill /> Buy Now
                  </Link>
                </div>
                <div className="featuredOption">
                  <select defaultValue={"DEFAULT"}>
                    <option value="DEFAULT">Select Option</option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {error && (
        <div className="alertMsg mb-4" role="alert">
          No Data Found
        </div>
      )}

    </>
  );
}

export default FeaturedProduct;

 

import React, { useState } from "react";
// import Rating from "../../../../shared/rating/Rating";

import { FiSearch } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { BsFillCartFill } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";

// You need to import the CSS only once
// import "react-awesome-lightbox/build/style.css";

import "../../home/products/product/ProductItem.css";
import { Link } from "react-router-dom";
import {
  setFeachers, useGetProductDetailQuery,
} from "../../products/productSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ImgesData } from "../proImgs/ImgesData";

import img1 from '../../../assets/prductsImg/pros1.png'
import img2 from '../../../assets/prductsImg/pros2.png'
import img3 from '../../../assets/prductsImg/pros3.png'
import img4 from '../../../assets/prductsImg/pros4.png'

function RentPro({ isLoading, error, handleShow }) {
  const curr = window.localStorage.getItem('currencySym')
  const currencySymbol = curr ? curr : 'ZK'
  // const dispacher = useDispatch()

  // useEffect(() => {
  //   dispacher(setFeachers(data))
  // }, [data])

  const [data, setData] = useState([
    { url: img1 ,name:'Inverter Battery'},
    { url: img2 ,name:'Stabilizer'},
    { url: img3 ,name:'Inverter & UPS'},
    { url: img4 ,name:'Flexible Single & Multicore Cables'},
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
                {/* <Rating  /> */}
                <div className="rateDigit d-block">
                  {/* <span className="cross">Rs 599.00</span>
                  <span className="currentPrice">Rs 489.00</span> */}
                  <div >Rent</div>
                  <div className="currentPrice">Rs 800.00 /Mo</div>
                </div>
                <div className="buyNowInfo">


                  <Link className="btn btn-danger addCart" to={`/product/64a3dc328da7b8d7361891d1`}
                  >
                    View Detail
                  </Link>


                  <Link to={`#`} className="btn btn-primary buyNow">
                    <BsFillCartFill /> Rent Now
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

export default RentPro;

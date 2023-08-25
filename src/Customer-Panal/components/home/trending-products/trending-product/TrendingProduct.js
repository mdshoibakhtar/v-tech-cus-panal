import React, { useEffect, useState } from "react";
import Rating from "../../../../shared/rating/Rating";

import { FiSearch } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { BsFillCartFill } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";

import { Link } from "react-router-dom";
import { setTrendingProduct } from "../../../products/productSlice";
import { useDispatch } from "react-redux";
import { ImgesData } from "../../proImgs/ImgesData";
import pro1 from '../../../../assets/prductsImg/dem1.png'
import pro2 from '../../../../assets/prductsImg/dem2.png'
import pro3 from '../../../../assets/prductsImg/dem3.png'
import pro4 from '../../../../assets/prductsImg/dem4.png'
import pro5 from '../../../../assets/prductsImg/pro5.webp'
import pro6 from '../../../../assets/prductsImg/pro6.webp'
import pro7 from '../../../../assets/prductsImg/pro7.webp'
import { Button } from "react-bootstrap";
function TrendingProduct({  isLoading, handleShow  ,error}) {
  const curr = window.localStorage.getItem('currencySym')
  const currencySymbol = curr ? curr : 'ZK'
  // const [renderValid, setReder] = useState(false)
  // const dispacher = useDispatch()

  // useEffect(() => {
  //   setReder(!renderValid)
  //   dispacher(setTrendingProduct(data))
  // }, [data])
  const [loade , setLoade] = useState(4)
  const [data , setData] = useState([
    {name:"Earth Auger",url:pro1},
    {name:"Petrol Chain Saw",url:pro2},
    {name:"Power Sprayers",url:pro3},
    {name:"Chaff Cutter Machine",url:pro4},
    {name:"Contec CMS8000 Multipara Patient ",url:pro4},
    {name:"Earth Auger",url:pro1},
    {name:"Petrol Chain Saw",url:pro2},
    {name:"Power Sprayers",url:pro3},
    {name:"Chaff Cutter Machine",url:pro4},
    {name:"BPL Oxygen Concentrator OXY 5 NEO, 5LPM -Single Flow",url:pro3},
    {name:"RMS Vesta 301i 3 channel ECG Machine",url:pro4},
    {name:"Contec CMS8000 Multipara Patient ",url:pro5},
    {name:"Oxymed 10 Litre Dual flow Oxygen Concentrator with 2 year Warranty",url:pro6},
    {name:"Resmed Lumis 150 VPAP ST BIPAP TriPack : With Humidifier",url:pro7},
    {name:"Philips Everflo Oxygen Concentrator, 5LPM",url:pro1},
    {name:"BPL GENX3 ECG Machine, 3 Channel ECG Machine, Bpl ECG Machine",url:pro2},
    {name:"BPL Oxygen Concentrator OXY 5 NEO, 5LPM -Single Flow",url:pro3},
    {name:"RMS Vesta 301i 3 channel ECG Machine",url:pro4},
    {name:"Contec CMS8000 Multipara Patient ",url:pro5},
    {name:"Oxymed 10 Litre Dual flow Oxygen Concentrator with 2 year Warranty",url:pro6},
    {name:"Resmed Lumis 150 VPAP ST BIPAP TriPack : With Humidifier",url:pro7},
    {name:"Philips Everflo Oxygen Concentrator, 5LPM",url:pro1},
    {name:"BPL GENX3 ECG Machine, 3 Channel ECG Machine, Bpl ECG Machine",url:pro2},
    {name:"BPL Oxygen Concentrator OXY 5 NEO, 5LPM -Single Flow",url:pro3},
    {name:"RMS Vesta 301i 3 channel ECG Machine",url:pro4},
    {name:"Contec CMS8000 Multipara Patient ",url:pro5},
    {name:"Oxymed 10 Litre Dual flow Oxygen Concentrator with 2 year Warranty",url:pro6},
    {name:"Resmed Lumis 150 VPAP ST BIPAP TriPack : With Humidifier",url:pro7},
    {name:"Philips Everflo Oxygen Concentrator, 5LPM",url:pro1},
    {name:"BPL GENX3 ECG Machine, 3 Channel ECG Machine, Bpl ECG Machine",url:pro2},
    {name:"BPL Oxygen Concentrator OXY 5 NEO, 5LPM -Single Flow",url:pro3},
    {name:"RMS Vesta 301i 3 channel ECG Machine",url:pro4},
    {name:"Contec CMS8000 Multipara Patient ",url:pro5},
    {name:"Oxymed 10 Litre Dual flow Oxygen Concentrator with 2 year Warranty",url:pro6},
    {name:"Resmed Lumis 150 VPAP ST BIPAP TriPack : With Humidifier",url:pro7},
    {name:"Philips Everflo Oxygen Concentrator, 5LPM",url:pro1},
    {name:"BPL GENX3 ECG Machine, 3 Channel ECG Machine, Bpl ECG Machine",url:pro2},
    {name:"BPL Oxygen Concentrator OXY 5 NEO, 5LPM -Single Flow",url:pro3},
    {name:"RMS Vesta 301i 3 channel ECG Machine",url:pro4},
    {name:"Contec CMS8000 Multipara Patient ",url:pro5},
    {name:"Oxymed 10 Litre Dual flow Oxygen Concentrator with 2 year Warranty",url:pro6},
    {name:"Resmed Lumis 150 VPAP ST BIPAP TriPack : With Humidifier",url:pro7},
  ])

  const moreValues = ()=>{
    if (loade === 7) {
      setLoade(4)
      return
    }
    setLoade(7)
  }

  return (
    <>
      {isLoading ? <div className="loaderIcon"><BiLoaderAlt /></div> : null}
      {data && data?.slice(0, loade).map((item, i) => {
        return (
          <div className=" col-lg-3 col-md-6 col-sm-12" >
            <div className="featuredInfo">
              <div className="featuredFigure">
                <div className="featuredImg" style={{ display: "flex", justifyContent: "center" }}>

                  <Link to={`/product/64a3dc328da7b8d7361891d1`} style={{ width: "210px" }}>
                    <img src={item?.url ? item?.url : ImgesData[i + 1].url} alt="Product" />

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
                        <Link to="/#">
                          <GrAdd />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="hotList">
                  <li>
                    <Link to="/products">Sale</Link>
                  </li>
                  <li>
                    <Link to="/products">-24%</Link>
                  </li>
                </ul>
              </div>
              <div className="featuredContent">
                <h5 style={{margin:'16px 0'}}>
                  <Link to={`#`}>{item.name}</Link>
                </h5>

                <Rating />
                <div className="rateDigit">
                  <span className="cross">Rs 799.0</span>
                  <span className="currentPrice">Rs  689.0</span>
                </div>

                <div className="buyNowInfo">
                  <Link className="btn btn-danger addCart" to={`/product/64a3dc328da7b8d7361891d1`}
                  >
                    View Detail
                  </Link>
                  <Link to={`#s`} className="btn btn-primary buyNow">
                    <BsFillCartFill /> Buy Now
                  </Link>
                </div>
                <div className="productDesc">
                  <p>
                    CAN(Calcium ammonium nitrate: N(27), P(0), K(0), S(0),
                    Zn(0), Ca(3.2) Dosage: 5-6 gm per plant. Time of
                    Application: During vegetative stage. Use: Top dressing
                    containing calcium
                  </p>
                </div>
                <div className="featuredOption">
                  <select defaultValue={"DEFAULT"}>
                    <option value="DEFAULT Option">Select Option</option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {error && <div className="alertMsg mb-4" role="alert"> No Data Found </div>}

    <div style={{display:"flex",justifyContent:"center" ,margin:"10px 0"}}><Button variant="warning" onClick={moreValues}>{loade === 4 ? 'View More' : 'Less..' }</Button></div>
    </>
  );
}

export default TrendingProduct;

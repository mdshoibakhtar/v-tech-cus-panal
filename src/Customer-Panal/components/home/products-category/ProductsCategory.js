import React, { useState } from "react";
import { useGetCategoriesQuery } from "../../products/productSlice";

import "./ProductsCategory.css";
import eq1 from '../../../assets/prductsImg/newPro1.webp'
import eq2 from '../../../assets/prductsImg/newPro2.webp'
import eq3 from '../../../assets/prductsImg/newPro3.webp'
import eq4 from '../../../assets/prductsImg/newPro4.webp'
import eq5 from '../../../assets/prductsImg/newPro5.webp'
import eq6 from '../../../assets/prductsImg/newPro6.webp'

import { Link } from "react-router-dom";
import { Image } from "antd";

function ProductsCategory() {
  // const { data, isLoading, error } = useGetCategoriesQuery();
  const [data, setData] = useState([
    { name: "POWERWASH Foam Tank 80 Lt For Car Washing", url: eq1 },
    { name: "AgriPro 3.0 HP Chaff Cutter With Motor APCC9Z", url: eq2 },
    { name: "Ingco 85 W 1450 rpm Scroll Saw Machine SS852", url: eq3 },
    { name: "Powerhouse 3 HP 50-60 L Air Compressor PH2050/2060", url: eq4 },
    { name: "Stolica Athena Leatherette High Back Brown Office Chair", url: eq5 },
    { name: "Powerwash High Pressure Power Sprayer PW 280 with 6 Months Warranty", url: eq6 },
    { name: "POWERWASH Foam Tank 80 Lt For Car Washing", url: eq1 },
    { name: "AgriPro 3.0 HP Chaff Cutter With Motor APCC9Z", url: eq2 },
  ])

  return (
    <>
      <section className="productsCategorySec">
        <div className="container">


          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="fisherman-content mb-3">
                <h3>TOp Categories</h3>
              </div>
            </div>

            {/* {isLoading && <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>}
            {error && <h4 style={{textAlign:"center" , color:"red"}}>Server Error</h4>} */}

            {data?.map((item, i) => {
              return <div style={{ margin: "10px 0" }} key={item._id} className="col-lg-3 col-md-6 col-sm-12">
                <div className="productsCategoryItem">
                  <div className="categoryHeader">
                    <h5 className="title">{item.name}</h5>
                  </div>
                  <div className="categoryBody">
                    <div className="singleProducts">
                      <Image
                        width={200}
                        src={item.url}
                      />
                      {/* <Link to="#">
                        <img src={item.url} alt="Product" />

                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsCategory;


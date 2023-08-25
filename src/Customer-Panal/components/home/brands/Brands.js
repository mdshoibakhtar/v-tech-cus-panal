import React, { useEffect } from "react";

import etg from "../../../assets/img/brands/etg.png";
import kynoch from "../../../assets/img/brands/kynoch.png";
import falcon from "../../../assets/img/brands/falcon.png";
import oemff from "../../../assets/img/brands/oemff.png";
import "./Brands.css";
import { Link } from "react-router-dom";
import { useListAllBrandQuery } from "../../products/productSlice";
import axios from "axios";

const imgs = [etg, kynoch, falcon, oemff]

function Brands() {
  const { data, isLoading, error } = useListAllBrandQuery()

  return (
    <>
      <section className="brandsSec">
        <div className="container">

          <div className="brandsItem">
            <div className="brandsHeader">
              <div className="fisherman-content mb-4">
                <span>our brands</span>
                <h3>top brands</h3>
              </div>
              <div className="viewMoreBrands">
                <Link to="/view-all-brands" className="btn btn-primary">
                  view all brands
                </Link>
              </div>
            </div>
            {isLoading && <div style={{ textAlign: "center" }}> <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div></div>}
            {error && <h5 style={{ textAlign: "center", color: "red" }}>Server Error</h5>}
            <marquee behavior="scroll" direction="left">
              <ul>
                {data && data.map((item, i) => {
                  return <li key={item._id}>
                    <Link to={`/product/brand/${item._id}`}>
                      <img src={imgs[i]} alt="Brand" className="img-fluid" />
                    </Link>
                  </li>
                })}
              </ul>
            </marquee>
          </div>
        </div>
      </section>
    </>
  );
}

export default Brands;

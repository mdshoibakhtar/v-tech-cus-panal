import React from "react";
import seminis from "../../../assets/img/brands/seminis.jpg";
import bayer from "../../../assets/img/brands/bayer.jpg";
import namdhari from "../../../assets/img/brands/namdhari.jpg";
import rallis from "../../../assets/img/brands/rallis.png";
import dhanuka from "../../../assets/img/brands/dhanuka.jpg";
import artboard from "../../../assets/img/brands/artboard.jpg";
import "./Brands.css";
function Brands() {
  return (
    <>
      <section className="brandsSec">
        <div className="container">
          <div className="brandsItem">
            <div className="fisherman-content mb-5">
              <span>our brands</span>
              <h3>top brands</h3>
            </div>
            <ul>
              <li>
                <a href="#">
                  <img src={seminis} alt="" className="img-fluid" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={bayer} alt="" className="img-fluid" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={namdhari} alt="" className="img-fluid" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={rallis} alt="" className="img-fluid" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={dhanuka} alt="" className="img-fluid" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={artboard} alt="" className="img-fluid" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Brands;

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  GiChestnutLeaf,
  GiFruitBowl,
  GiTomato,
  GiFertilizerBag,
} from "react-icons/gi";
import { Link } from "react-router-dom";

import "./ServiceList.css";
function ServiceList() {
  return (
    <>
      <section className="serviceList">
        <div className="container">
          <div className="serviceItemInfo">
            <div className="serviceItem">
              <div className="serviceItemIcon">
                <GiChestnutLeaf className="ruppee" />
              </div>
              <div className="serviceItemText">
                <h5>Field Crops</h5>
                <p>Field Crops</p>
                <Link to="/products">
                  <BsArrowRight />
                </Link>
              </div>
            </div>
            <div className="serviceItem">
              <div className="serviceItemIcon">
                <GiFruitBowl className="wallet" />
              </div>
              <div className="serviceItemText">
                <h5>Fruit Seeds</h5>
                <p>Get up to 60% Off</p>
                <Link to="/products">
                  <BsArrowRight />
                </Link>
              </div>
            </div>
            <div className="serviceItem">
              <div className="serviceItemIcon">
                <GiTomato className="mobile" />
              </div>
              <div className="serviceItemText">
                <h5>Vegetable Seeds </h5>
                <p>on Vegetable</p>
                <Link to="/products">
                  <BsArrowRight />
                </Link>
              </div>
            </div>
            <div className="serviceItem border-0">
              <div className="serviceItemIcon">
                <GiFertilizerBag className="offer" />
              </div>
              <div className="serviceItemText">
                <h5>fertilizer</h5>
                <p>Check Now</p>
                <Link to="/products">
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceList;

import React from "react";
import { BsArrowRight, BsWallet } from "react-icons/bs";
import { TbCurrencyRupee } from "react-icons/tb";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";

import "./ServiceList.css";
function ServiceList() {
  return (
    <>
      <section className="serviceList">
        <div className="container">
          <div className="serviceItemInfo">
            <div className="serviceItem">
              <div className="serviceItemIcon">
                <TbCurrencyRupee className="ruppee" />
              </div>
              <div className="serviceItemText">
                <h5>Harvest Special</h5>
                <p>Cashback Deals</p>
                <a href="#">
                  <BsArrowRight />
                </a>
              </div>
            </div>
            <div className="serviceItem">
              <div className="serviceItemIcon">
                <BsWallet className="wallet" />
              </div>
              <div className="serviceItemText">
                <h5>Clearance Sale</h5>
                <p>Get up to 60% Off</p>
                <a href="#">
                  <BsArrowRight />
                </a>
              </div>
            </div>
            <div className="serviceItem">
              <div className="serviceItemIcon">
                <AiOutlineMobile className="mobile" />
              </div>
              <div className="serviceItemText">
                <h5>Hot Deals</h5>
                <p>on Smartphones</p>
                <a href="#">
                  <BsArrowRight />
                </a>
              </div>
            </div>
            <div className="serviceItem border-0">
              <div className="serviceItemIcon">
                <MdOutlineLocalOffer className="offer" />
              </div>
              <div className="serviceItemText">
                <h5>Offers for You</h5>
                <p>Check Now</p>
                <a href="#">
                  <BsArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceList;

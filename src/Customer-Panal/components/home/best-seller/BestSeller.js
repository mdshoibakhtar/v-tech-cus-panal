import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../../shared/rating/Rating";

function BestSeller() {
  return (
    <>
      <div className="bestSeller">
        <div className="bestSellerHeader">
          <div className="fisherman-content mb-4">
            <span>our Sellers</span>
            <h3>Best Sellers</h3>
          </div>
        </div>
        <div className="bestSellerBody">
          <div className="bestSellerCard">
            <div className="bestSellerLogo">
              <img
                src="https://mmslfashions.in/public/uploads/all/J3IHQMPrIal220S890WP4kxP1shTCJytvopboZrL.png"
                alt="Product"
              />
            </div>
            <div className="bestSellerText">
              <h5 className="card-title">Demo Seller</h5>
              <Rating />
              <Link
                to="https://mmslfashions.in/shop/Abaris-Products-1"
                className="btn btn-primary"
              >
                visit store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSeller;

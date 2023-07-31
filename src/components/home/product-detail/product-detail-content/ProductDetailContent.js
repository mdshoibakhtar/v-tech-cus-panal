import React, { useContext, useState } from "react";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { FiSettings, FiPackage } from "react-icons/fi";
import { AiFillTag } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { CiPercent } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaHands } from "react-icons/fa";
import payment1 from "../../../../assets/img/payment/1.svg";
import payment2 from "../../../../assets/img/payment/2.svg";
import payment3 from "../../../../assets/img/payment/3.svg";
import payment4 from "../../../../assets/img/payment/4.svg";
import payment5 from "../../../../assets/img/payment/5.svg";
import payment6 from "../../../../assets/img/payment/6.svg";
import payment7 from "../../../../assets/img/payment/7.svg";
import Rating from "../../../../shared/rating/Rating";
import singleProduct from "../../../../assets/img/shop/single-product.jpg";
import pickupVan from "../../../../assets/img/pickup.png";
import trust from "../../../../assets/img/trust.jpg";

import "./ProductDetailContent.css";


export const sizeData = [
  {
    id: "1",
    weight: "25",
    isActive: true,
  },
  {
    id: "2",
    weight: "50",
    isActive: false,
  },
  {
    id: "3",
    weight: "75",
    isActive: false,
  },
  {
    id: "4",
    weight: "100",
    isActive: false,
  },
];

function ProductDetailContent() {
  const [size, setSize] = useState(sizeData);
  const [isIngredient, setIsIngredient] = useState(""); 
  
  const handleIngredient = () => {
    setIsIngredient(!isIngredient);
  };

  // On Change
  const handleChange = () => {}


  // Active Class
  const handleActive = (index) => {
    const modifiedArr = size.map((item) => {
      if (item.id === index) {
        return { ...item, isActive: !item.isActive };
      } else {
        return { ...item, isActive:false};
      }
    });
    setSize(modifiedArr);
  };
  return (
    <>
      <div className="product-details-desc">
        <h3>Natural Organic Fertilizer</h3>
        <div className="price">
          <span className="new-price">Offer Price: ZK 9,499</span>
          <span className="old-price">MRP: ZK 10,999</span>
          <span className="save-price text-success">You save: ZK 1,500</span>
        </div>
        <span className="allTaxes">Inclusive of all taxes</span>
        <div className="cost-emi">
          <div className="emiTitle">
            <span className="title">No Cost EMI</span>
            <AiOutlineInfoCircle />
          </div>
          <div className="emiInfo">
            <div className="emiTextInfo">
              <div className="emiText">
                <div className="priceNumber">
                  <span className="dollor">ZK </span>
                  <span className="number">1,584</span>
                  <span className="perMonth">/m</span>
                </div>
                <div className="warrantyText">
                  <span>For 06 months</span>
                </div>
              </div>
              <div className="plus">+</div>
              <div className="downPayment">
                <div className="downPaymentNumber">
                  <span>ZK 0</span>
                </div>
                <span className="downPaymentText">
                  Downpayment
                  <AiOutlineInfoCircle />
                  <div className="downpaymentModal">
                    <h5>Downpayment</h5>
                    <p>
                      It is a part of the total payment paid upfront as advance
                      EMIs while availing the finance facility to purchase a
                      product. The remaining amount is paid through equated
                      monthly installments.
                    </p>
                  </div>
                </span>
              </div>
            </div>
            <div className="viewMoreScheme">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="viewMoreSchemeBtn"
              >
                View More Schemes
              </button>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modalDialog">
                  <div className="modal-content modalContent">
                    <div className="modal-header">
                      <div className="noCostEmi">
                        <CiPercent className="parent" />
                        <span> Select No Cost EMI Scheme</span>
                        <AiOutlineInfoCircle className="info" />
                      </div>
                      <button
                        type="button"
                        className="changeModalCancel"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <RxCross1 />
                      </button>
                    </div>
                    <div className="modal-body">
                      <table className="table emistableWrap">
                        <thead>
                          <tr>
                            <th scope="col">EMI X Months</th>
                            <th scope="col">Down Payment</th>
                            <th scope="col">Annual Interest (%)</th>
                            <th scope="col">Overall Cost</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row">
                              <input type="radio" checked onChange={handleChange} /> ZK 4,374 X 6m
                            </td>
                            <td>ZK 8,748</td>
                            <td>ZK 0</td>
                            <td>
                              <p className="overAll">ZK 34,990</p>
                              <p className="cost">+ ZK 399*</p>
                            </td>
                          </tr>
                          <tr>
                            <td scope="row">
                              <input type="radio" onChange={handleChange} /> ZK 2,333 X 11m
                            </td>
                            <td>ZK 9,332</td>
                            <td>ZK 0</td>
                            <td>
                              <p className="overAll">ZK 34,990</p>
                              <p className="cost">+ ZK 399*</p>
                            </td>
                          </tr>
                          <tr>
                            <td scope="row">
                              <input type="radio" onChange={handleChange} /> ZK 3,499 X 7m
                            </td>
                            <td>ZK 10,497</td>
                            <td>ZK 0</td>
                            <td>
                              <p className="overAll">ZK 34,990</p>
                              <p className="cost">+ ZK 399*</p>
                            </td>
                          </tr>
                          <tr>
                            <td scope="row">
                              <input type="radio" onChange={handleChange} /> ZK 4,374 X 6m
                            </td>
                            <td>ZK 8,748</td>
                            <td>ZK 0</td>
                            <td>
                              <p className="overAll">ZK 34,990</p>
                              <p className="cost">+ ZK 399*</p>
                            </td>
                          </tr>
                          <tr>
                            <td scope="row">
                              <input type="radio" onChange={handleChange} /> ZK 2,333 X 11m
                            </td>
                            <td>ZK 9,332</td>
                            <td>ZK 0</td>
                            <td>
                              <p className="overAll">ZK 34,990</p>
                              <p className="cost">+ ZK 399*</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="processingFee">
                        <p className="text">* Processing Fees</p>
                        <a href="#" className="condition">
                          EMI T&C
                        </a>
                      </div>
                      <p className="loginTitle">
                        * EMI options may change once you login
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cost-emi">
          <div className="titleText">
            <FiSettings />
            <h6>OFFERS FOR YOU</h6>
          </div>
          <div className="availableOffer">
            <AiFillTag />
            <p>
              Offer: Get Cashback worth ZK. 500 in your wallet. Apply Promo Code
              SAVE1 at Checkout. <span className="conditionText">T & C</span>
            </p>
          </div>
          <div className="timerWrapper">
            <p className="text">Hurry! Cashback offer ending in</p>
            <span className="countDown">3 m : 22 s </span>
          </div>
        </div>
        <div className="storageContainer borderTop">
          <div className="storageInfo">
            <div className="titleText">
              <FiPackage />
              <h6>Fertilizer Packaging</h6>
            </div>
            <ul className="storageNumber">
              {size.map((item) => {
                return (<li key={item.id}>
                  <button
                    type="button"
                    className={`${item.isActive && "active" }`}
                    onClick={()=>{handleActive(item.id)}}
                  >
                    {item.weight} KG
                  </button>
                </li>);
              })}
            </ul>
          </div>
          <div className="productColorInfo">
            <div className="titleText">
              <FaHands />
              <h6>Ingredient </h6>
            </div>
            <ul className="storageNumber productColorChoose">
              <li>
                <button
                  type="button"
                  className={isIngredient ? "" : "active"}
                  onClick={handleIngredient}
                >
                  <img src={singleProduct} alt="" />
                  <p>Sodium</p>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={isIngredient ? "active" : ""}
                  onClick={handleIngredient}
                >
                  <img src={singleProduct} alt="" />
                  <p>Amonium</p>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="storageContainer borderTop">
          <div className="storageInfo">
            <div className="titleText">
              <TbTruckDelivery />
              <h6>DELIVERY MODE & SELLER</h6>
            </div>
            <ul
              className="deliveryModeList storageNumber"
              id="myTab"
              role="tablist"
            >
              <li role="presentation">
                <button
                  className="nav-link active"
                  id="homeDelivery-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#homeDelivery"
                  type="button"
                  role="tab"
                  aria-controls="homeDelivery"
                  aria-selected="true"
                >
                  Home Delivery
                </button>
              </li>
              <li role="presentation">
                <button
                  className="nav-link"
                  id="pickUp-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pickUp"
                  type="button"
                  role="tab"
                  aria-controls="pickUp"
                  aria-selected="false"
                >
                  Pick up from store
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="homeDelivery"
                role="tabpanel"
                aria-labelledby="homeDelivery-tab"
              >
                <div className="deliveryDetail">
                  <div className="deliveryVan">
                    <span className="vanCircle">
                      <img src={pickupVan} alt="" className="img-fluid" />
                    </span>
                  </div>
                  <div className="deliveryDays">
                    <h6>Free Home Delivery</h6>
                    <p>in 1-2 days</p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pickUp"
                role="tabpanel"
                aria-labelledby="pickUp-tab"
              >
                <div className="whyPickup">
                  <em>Why pick up from store</em>
                  <AiOutlineInfoCircle />
                </div>
                <div className="deliveryDetail">
                  <div className="deliveryVan">
                    <span className="vanCircle">
                      <img src={pickupVan} alt="" className="img-fluid" />
                    </span>
                  </div>
                  <div className="deliveryDays">
                    <h6>
                      Pick up the product from the selected seller on or before
                    </h6>
                    <p>11 th January</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkAvailability">
          <div className="titleText">
            <h6>CHECK AVAILABILITY</h6>
          </div>
          <div className="enterCodeInput">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Pincode"
              onChange={handleChange}
            />
            <button
              data-bs-toggle="modal"
              data-bs-target="#changeModal"
              className="enterCodeBtn"
            >
              Change
            </button>
            {/* Check Availabilty Modal */}
            <div
              className="modal fade"
              id="changeModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="changeModalInfo modal-dialog ">
                <div className="modal-content">
                  <div className="changeModalHeader">
                    <h5>Enter a pincode to get the best offers</h5>
                    <button
                      type="button"
                      className="changeModalCancel"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <RxCross1 />
                    </button>
                  </div>
                  <div className="changeModalBody">
                    <div className="enterCodeInput">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Pincode"
                        onChange={handleChange}
                      />
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#changeModal"
                        className="enterCodeBtn enterCodeModalBtn"
                        disable
                      >
                        Change
                      </button>
                    </div>
                    <div className="changeModal">
                      <p className="text">or</p>
                      <button type="button" className="signUp">
                        Sign In / Sign Up
                      </button>
                      <em className="disclaimer">
                        Please note that the price may vary based on the
                        pincode.
                      </em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sellerInformation">
          <h5 className="sellerTitle">Seller Information</h5>
          <div className="sellerInfo">
            <span>You are buying from:</span>
            <h6>Prince Enterprises, Chadiza</h6>
            <p>
              G-36 Aggarwal City Plaza Manglam Chadiza Sector-3 Chadiza,M2K
              Cinema,Chadiza 110085 , Africa
            </p>
          </div>
          <em className="sellerInfoProd">
            Product price may vary basis the selected seller
          </em>
          <button
            type="button"
            className="sellerPriceBtn"
            data-bs-toggle="modal"
            data-bs-target="#sellerPriceModal"
          >
            View more sellers from ZK 34,990
          </button>
          <div
            className="modal fade"
            id="sellerPriceModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog sellerPriceInfo">
              <div className="modal-content ">
                <div className="sellerPriceContent">
                  <div className="sellerPriceHeader">
                    <h5>Select a seller</h5>
                    <button
                      type="button"
                      className="changeModalCancel"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <RxCross1 />
                    </button>
                  </div>
                  <div className="sellerPriceBody">
                    <ul
                      className="deliveryModeList storageNumber"
                      id="myTab"
                      role="tablist"
                    >
                      <li role="presentation">
                        <button
                          className="nav-link active"
                          id="home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#home"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                          typeof="button"
                        >
                          Home Delivery
                        </button>
                      </li>
                      <li role="presentation">
                        <button
                          className="nav-link"
                          id="store-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#store"
                          type="button"
                          role="tab"
                          aria-controls="store"
                          aria-selected="false"
                          typeof="button"
                        >
                          Store Pickup
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="homePriceInfo">
                          <div className="homePriceName">
                            <input type="radio" checked className="checkBox" onChange={handleChange} />
                            <span className="name">Zebrs</span>
                          </div>
                          <div className="priceSec">
                            <span className="priceInText">Price</span>
                            <span className="priceInInteger">ZK 57,754</span>
                          </div>
                        </div>
                        <div className="homePriceInfo">
                          <div className="homePriceName">
                            <input type="radio" className="checkBox" onChange={handleChange} />
                            <span className="name">National Distributor</span>
                          </div>
                          <div className="priceSec">
                            <span className="priceInText">Price</span>
                            <span className="priceInInteger">ZK 24,999</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="store"
                        role="tabpanel"
                        aria-labelledby="store-tab"
                      >
                        <div className="homePriceInfo">
                          <div className="homePriceName">
                            <input type="radio" checked className="checkBox" onChange={handleChange} />
                            <span className="name">
                              vijay sales, lajpatnagar
                            </span>
                          </div>
                          <div className="priceSec">
                            <span className="priceInText">Price</span>
                            <span className="priceInInteger">ZK 37,754</span>
                          </div>
                        </div>
                        <div className="homePriceInfo">
                          <div className="homePriceName">
                            <input type="radio" className="checkBox" onChange={handleChange} />
                            <span className="name">vijay sales, kalkaji</span>
                          </div>
                          <div className="priceSec">
                            <span className="priceInText">Price</span>
                            <span className="priceInInteger">ZK 24,999</span>
                          </div>
                        </div>
                        <div className="homePriceInfo">
                          <div className="homePriceName">
                            <input type="radio" className="checkBox" onChange={handleChange} />
                            <span className="name">
                              anand electronics, south delhi
                            </span>
                          </div>
                          <div className="priceSec">
                            <span className="priceInText">Price</span>
                            <span className="priceInInteger">ZK 37,754</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sellerScorecard">
                      <em className="text">
                        The Sellers are listed as per your internal city and
                        scorecard
                      </em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="product-review">
          <Rating />
          <a href="#" className="rating-count">
            3 reviews
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et.
        </p> */}
        {/* <div className="product-add-to-cart">
          <div className="input-counter">
            <span className="minus-btn">
              <AiOutlineMinus />
            </span>
            <input type="text" min="1" value="1" onChange={handleChange} />
            <span className="plus-btn">
              <AiOutlinePlus />
            </span>
          </div>
          <button type="submit" className="default-btn">
            <FiShoppingCart />
            Add to cart
          </button>
        </div> */}
        <div className="buy-checkbox-btn">
          {/* <div className="item">
            <input className="inp-cbx" id="cbx" type="checkbox" onChange={handleChange} />
            <label className="cbx" htmlFor="cbx">
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <span>I agree with the terms and conditions</span>
            </label>
          </div> */}
          {/* <div className="item">
            <a href="#" className="btn btn-light">
              Buy it now!
            </a>
          </div> */}
          <div className="trustFigure">
            <img src={trust} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="custom-payment-options">
          <span>Guaranteed safe checkout:</span>
          <div className="payment-methods">
            <a href="#">
              <img src={payment1} alt="image" />
            </a>
            <a href="#">
              <img src={payment2} alt="image" />
            </a>
            <a href="#">
              <img src={payment3} alt="image" />
            </a>
            <a href="#">
              <img src={payment4} alt="image" />
            </a>
            <a href="#">
              <img src={payment5} alt="image" />
            </a>
            <a href="#">
              <img src={payment6} alt="image" />
            </a>
            <a href="#">
              <img src={payment7} alt="image" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailContent;

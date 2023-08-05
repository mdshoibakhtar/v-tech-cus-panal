import React, { useState } from "react";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";

import "./TopHeader.css";
import { AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
import { Offcanvas } from "react-bootstrap";

// import { Link } from "react-router-dom";



function TopHeader() {
  const [auction, setAution] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="heading-row">
              <div className="col-md-12">
                <div className="full">
                  <div className="topbar-left">
                    {/* <ul className="list-inline">
                      <li>
                        <span className="topbar-label">
                          <i className="fa fa-home" />
                        </span>{" "}
                        <span className="topbar-hightlight">
                          Raviraj CRU Mall,Office No-210,2nd Floor,Above Fedral
                          Bank Gangadham Chowk,Marketyard,Pune-411037.
                        </span>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
              <div className="col-md-12 right_section_header_top">
                <div className="float-left">
                  <div className="social_icon">
                    <ul className="list-inline">
                      <li>
                        <a href="#" />
                        <BiLogoFacebook />
                      </li>
                      <li>
                        <a href="#" />
                        <AiOutlineGooglePlus />
                      </li>
                      <li>
                        <a href="#" />
                        <AiOutlineTwitter />
                      </li>
                      <li>
                        <a href="#" />
                        <BsInstagram />
                      </li>
                      <li>
                        <a href="#" />
                        <BiLogoLinkedin />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="float-right">
                  <div className="make_appo">
                    <Link className="btn white_btn" to="contact-us">
                      GET A QUOTE
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9  col-3 fabar">
              <div className="fabar-container">
                <HiOutlineBars3 className="fabar-icon" onClick={handleShow} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="offcanvas-main-container"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="sidemnenu mb-3">
            <ul
              className="aiz-side-nav-list px-2 metismenu"
              data-toggle="aiz-side-menu"
            >
              <li className="aiz-side-nav-item">
                <Link
                  to="/customer"
                  className="aiz-side-nav-link"
                  onClick={() => {
                    setAution(!auction);
                  }}
                >
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Dashbord</span>
                  <span className="aiz-side-nav-arrow"></span>
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${
                    auction ? "mm-show" : "extra"
                  }`}
                  id="product"
                >
                  <li className="aiz-side-nav-item">
                    <Link to="/customer" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Dashbord</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link
                      to="/customer/inventory-dashbord"
                      className="aiz-side-nav-link"
                    >
                      <span className="aiz-side-nav-text">
                        Inventory Dashbord
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="customer-dashbord" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">
                        Customer Dashbord
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="/customer/agreement" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Agreement</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link
                  to="/customer/delivery-challan"
                  className="aiz-side-nav-link "
                >
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Delivery challan</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="/customer/Quotation" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <i class="bi bi-heart"></i>
                  <span className="aiz-side-nav-text">Quotations</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Purchase Order</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Inward Challan</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="/customer/inventory" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Your Inventory</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="/customer/invoices" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Invoices</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="/customer/outstanding" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Total Outstanding</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="/customer/wishlists" className="aiz-side-nav-link ">
                  <i className="la la-heart-o aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Wishlist</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link
                  to="/customer/support-tiket"
                  className="aiz-side-nav-link "
                >
                  <i className="las la-atom aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Support Ticket</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="/customer/profile" className="aiz-side-nav-link ">
                  <i className="las la-user aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Manage Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default TopHeader;

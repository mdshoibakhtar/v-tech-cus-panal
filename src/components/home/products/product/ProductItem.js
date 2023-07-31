import { Button, Modal } from "bootstrap";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import fertilizer1 from "../../../../assets/img/products/1.jpg";
import fertilizer2 from "../../../../assets/img/products/2.jpg";
import fertilizer3 from "../../../../assets/img/products/3.jpg";
import fertilizer4 from "../../../../assets/img/products/4.jpg";
import fertilizer5 from "../../../../assets/img/products/5.jpg";
import fertilizer6 from "../../../../assets/img/products/6.jpg";
import Rating from "../../../../shared/rating/Rating";
import "./ProductItem.css";
function ProductItem() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className=" col-lg-3 col-md-6 col-sm-12">
        <div className="featuredInfo">
          <div className="featuredFigure">
            <div className="featuredImg">
              <img src={fertilizer4} alt="" />
            </div>
            <ul className="hotList">
              <li>
                <a href="#">hot</a>
              </li>
              <li>
                <a href="#">-20%</a>
              </li>
              <li className="hoverEffect" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                <div className="text-box">
                  <a href="#" className="btn btn-white btn-animate btnFocus"><BsSearch style={{ fontSize: "20px" }} /></a>
                </div>
              </li>

              <li className="hoverEffect2" >
                <div className="text-box">
                  <a href="#" className="btn btn-white btn-animate btnFocus"><IoMdAdd style={{ fontSize: "20px" }} /></a>
                </div>
              </li>
            </ul>

          </div>

          <div className="featuredContent">
            <h6>category</h6>
            <h5>VANPROZ V-BIND (BIO VIRICIDE)</h5>
            <Rating />
            <div className="rateDigit">
              <span className="cross">ZK59.00</span>
              <span className="currentPrice">ZK49.00</span>
            </div>
            <div className="featuredOption">
              <select name="" id="">
                <option value="Select Option">Select Option</option>
                <option value="one">One</option>
                <option value="two">Two</option>
              </select>

            </div>
          </div>
        </div>
      </div>
      <div className=" col-lg-3 col-md-6 col-sm-12">
        <div className="featuredInfo">
          <div className="featuredFigure">
            <div className="featuredImg">
              <img src={fertilizer1} alt="" />
            </div>
            <ul className="hotList">
              <li>
                <a href="#">hot</a>
              </li>
              <li>
                <a href="#">-29%</a>
              </li>
              <li className="hoverEffect" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                <div className="text-box">
                  <a href="#" className="btn btn-white btn-animate btnFocus"><BsSearch style={{ fontSize: "20px" }} /></a>
                </div>
              </li>

              <li className="hoverEffect2"  >
                <div className="text-box">
                  <a href="#" className="btn btn-white btn-animate btnFocus"><IoMdAdd style={{ fontSize: "20px" }} /></a>
                </div>
              </li>
            </ul>
          </div>
          <div className="featuredContent">
            <h6>category</h6>
            <h5>MOVENTO 15.31%OD INSECTICIDE</h5>
            <Rating />
            <div className="rateDigit">
              <span className="cross">ZK59.00</span>
              <span className="currentPrice">ZK50.00</span>
            </div>
            <div className="featuredOption">
              <select name="" id="">
                <option value="Select Option">Select Option</option>
                <option value="one">One</option>
                <option value="two">Two</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-lg-3 col-md-6 col-sm-12">
        <div className="featuredInfo">
          <div className="featuredFigure">
            <div className="featuredImg">
              <img src={fertilizer2} alt="" />
            </div>
            <ul className="hotList">
              <li>
                <a href="#">hot</a>
              </li>
              <li>
                <a href="#">-24%</a>
              </li>
              <li className="hoverEffect" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                <div className="text-box">
                  <a href="#" className="btn btn-white btn-animate btnFocus"><BsSearch style={{ fontSize: "20px" }} data-bs-toggle="modal" data-bs-target="#exampleModal" /></a>
                </div>
              </li>

              <li className="hoverEffect2" >
                <div className="text-box">
                  <a href="#" className="btn btn-white btn-animate btnFocus"><IoMdAdd style={{ fontSize: "20px" }} /></a>
                </div>
              </li>
            </ul>
          </div>
          <div className="featuredContent">
            <h6>category</h6>
            <h5>VANPROZ V-BIND (BIO VIRICIDE)</h5>
            <Rating />
            <div className="rateDigit">
              <span className="cross">ZK59.00</span>
              <span className="currentPrice">ZK35.00</span>
            </div>
            <div className="featuredOption">
              <select name="" id="">
                <option value="Select Option">Select Option</option>
                <option value="one">One</option>
                <option value="two">Two</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-lg-3 col-md-6 col-sm-12">
        <div className="featuredInfo">
          <div className="featuredFigure">
            <div className="featuredImg">
              <img src={fertilizer3} alt="" />
            </div>
            <ul className="hotList">
              <li>
                <a href="#">hot</a>
              </li>
              <li>
                <a href="#">-17%</a>
              </li>
              <li className="hoverEffect" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                <div className="text-box">
                  <a href="#" className="btn btn-white btn-animate btnFocus"><BsSearch style={{ fontSize: "20px" }} data-bs-toggle="modal" data-bs-target="#exampleModal" /></a>
                </div>
              </li>

              <li className="hoverEffect2" >
                <div className="text-box">
                  <a href="#" className="btn btn-white btn-animate btnFocus"><IoMdAdd style={{ fontSize: "20px" }} /></a>
                </div>
              </li>
            </ul>
          </div>
          <div className="featuredContent">
            <h6>category</h6>
            <h5>MOVENTO 15.31%OD INSECTICIDE</h5>
            <Rating />
            <div className="rateDigit">
              <span className="cross">ZK59.00</span>
              <span className="currentPrice">ZK56.00</span>
            </div>
            <div className="featuredOption">
              <select name="" id="">
                <option value="Select Option">Select Option</option>
                <option value="one">One</option>
                <option value="two">Two</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className=" col-lg-3 col-md-6 col-sm-12">
        <div className="featuredInfo">
          <div className="featuredFigure">
            <div className="featuredImg">
              <img src={fertilizer5} alt="" />
            </div>
            <ul className="hotList">
              <li>
                <a href="#">hot</a>
              </li>
              <li>
                <a href="#">-20%</a>
              </li>
              <li className="hoverEffect" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                <div className="text-box">
                  <a href="#" className="btn btn-white btn-animate btnFocus"><BsSearch style={{ fontSize: "20px" }} data-bs-toggle="modal" data-bs-target="#exampleModal" /></a>
                </div>
              </li>

              <li className="hoverEffect2" >
                <div className="text-box">
                  <a href="#" className="btn btn-white btn-animate btnFocus"><IoMdAdd style={{ fontSize: "20px" }} /></a>
                </div>
              </li>
            </ul>
          </div>
          <div className="featuredContent">
            <h6>category</h6>
            <h5>VANPROZ V-BIND (BIO VIRICIDE)</h5>
            <Rating />
            <div className="rateDigit">
              <span className="cross">ZK59.00</span>
              <span className="currentPrice">ZK49.00</span>
            </div>
            <div className="featuredOption">
              <select name="" id="">
                <option value="Select Option">Select Option</option>
                <option value="one">One</option>
                <option value="two">Two</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-lg-3 col-md-6 col-sm-12">
        <div className="featuredInfo">
          <div className="featuredFigure">
            <div className="featuredImg">
              <img src={fertilizer6} alt="" />
            </div>
            <ul className="hotList">
              <li>
                <a href="#">hot</a>
              </li>
              <li>
                <a href="#">-29%</a>
              </li>
              <li className="hoverEffect" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                <div className="text-box">
                  <a href="#" className="btn btn-white btn-animate btnFocus"><BsSearch style={{ fontSize: "20px" }} data-bs-toggle="modal" data-bs-target="#exampleModal" /></a>
                </div>
              </li>

              <li className="hoverEffect2" >
                <div className="text-box">
                  <a href="#" className="btn btn-white btn-animate btnFocus"><IoMdAdd style={{ fontSize: "20px" }} /></a>
                </div>
              </li>
            </ul>
          </div>
          <div className="featuredContent">
            <h6>category</h6>
            <h5>MOVENTO 15.31%OD INSECTICIDE</h5>
            <Rating />
            <div className="rateDigit">
              <span className="cross">ZK59.00</span>
              <span className="currentPrice">ZK50.00</span>
            </div>
            <div className="featuredOption">
              <select name="" id="">
                <option value="Select Option">Select Option</option>
                <option value="one">One</option>
                <option value="two">Two</option>
              </select>
            </div>
          </div>
        </div>
      </div>




      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Quick Shop</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ display: "flex" }}>
              <div>
                <section id="services" className="services section-bg">
                  <div className="container-fluid">
                  
                    <div className="row row-sm">
                      <div className="col-md-6 _boxzoom">
                        <img src={fertilizer6} />
                        <div className="_product-images">
                          <div className="picZoomer">
                            <img className="my_img" src="https://s.fotorama.io/1.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="_product-detail-content">
                          <p className="_p-name"> Milton Bottle </p>
                          <div className="_p-price-box">
                            <div className="p-list">
                              <span> M.R.P. : <i className="fa fa-inr"></i> <del> 1399  </del>   </span>
                              <span className="price"> Rs. 699 </span>
                            </div>
                            <div className="_p-add-cart">
                              <div className="_p-qty">
                                <span>Add Quantity</span>
                                <div className="value-button decrease_" id="" value="Decrease Value">-</div>
                                <input type="number" name="qty" id="number" value="1" readOnly />
                                <div className="value-button increase_" id="" value="Increase Value">+</div>
                              </div>
                            </div>
                            <div className="_p-features">
                              <span> Description About this product:- </span>
                              Solid color polyester/linen full blackout thick sunscreen floor curtain
                              Type: General Pleat
                              Applicable Window Type: Flat Window
                              Format: Rope
                            </div>
                            <form action="" method="post" acceptCharset="utf-8">
                              <ul className="spe_ul"></ul>
                              <div className="_p-qty-and-cart">
                                <div className="_p-add-cart">
                                  <button className="btn-theme btn buy-btn" tabIndex="0">
                                    <i className="fa fa-shopping-cart"></i> Buy Now
                                  </button>
                                  <button className="btn-theme btn btn-success" tabIndex="0">
                                    <i className="fa fa-shopping-cart"></i> Add to Cart
                                  </button>
                                  <input type="hidden" name="pid" value="18"  readOnly/>
                                  <input type="hidden" name="price" value="850"  readOnly/>
                                  <input type="hidden" name="url" value=""  readOnly/>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;

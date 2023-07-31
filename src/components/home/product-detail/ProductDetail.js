import React from "react";
import Breadcrumb from "../../../shared/breadcrumb/Breadcrumb";
import fertilizerApp1 from "../../../assets/img/product-detail/single-product.jpg";

import ProductDetailContent from "./product-detail-content/ProductDetailContent";
import Rating from "../../../shared/rating/Rating";
import { BsFillCartFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import "./ProductDetail.css";
import SelectImageSlider from "./select-image-slider/SelectImageSlider";
import ReviewForm from "./review-form/ReviewForm";
import Review from "./review/Review";
function ProductDetail() {
  return (
    <>
      <Breadcrumb />
      {/* Start Product Details Area */}
      <section className="product-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="SelectImageSec">
                <div className="SelectImg">
                  <SelectImageSlider />
                </div>
                <div className="product-details-image">
                  <img src={fertilizerApp1} alt="image" className="img-fluid" />
                  <div className="product-details-desc">
                    <div className="product-add-to-cart addToCart">
                      <button type="submit" className="default-btn cart">
                        <FiShoppingCart />
                        Add to cart
                      </button>
                      <button type="submit" className="default-btn buy">
                        <BsFillCartFill />
                        Buy it now!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <ProductDetailContent />
            </div>

             <div className="col-lg-12 col-md-12">
              <div className="tab products-details-tab">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <ul className="tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          id="description-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#description"
                          type="button"
                          role="tab"
                          aria-controls="description"
                          aria-selected="true"
                        >
                          <div className="dot"></div>
                          Description
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="additional-information-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#additional-information"
                          type="button"
                          role="tab"
                          aria-controls="additional-information"
                          aria-selected="false"
                        >
                          <div className="dot"></div>
                          Additional information
                        </a>
                      </li>
                      
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab_content tab-pane fade show active"
                        id="description"
                        role="tabpanel"
                        aria-labelledby="description-tab"
                      >
                        <div className="tabs_item">
                          <div className="products-details-tab-content">
                            <p>
                              Design inspiration lorem ipsum dolor sit amet,
                              consectetuer adipiscing elit. Morbi commodo, ipsum
                              sed pharetra gravida, orci magna rhoncus neque, id
                              pulvinar odio lorem non turpis. Nullam sit amet
                              enim. Suspendisse id velit vitae ligula volutpat
                              condimentum. Aliquam erat volutpat. Sed quis
                              velit. Nulla facilisi. Nulla libero. Vivamus
                              pharetra posuere sapien. Nam consectetuer. Sed
                              aliquam, nunc eget euismod ullamcorper, lectus
                              nunc ullamcorper orci, fermentum bibendum enim
                              nibh eget ipsum. Nam consectetuer. Sed aliquam,
                              nunc eget euismod ullamcorper, lectus nunc
                              ullamcorper orci, fermentum bibendum enim nibh
                              eget ipsum. Nulla libero. Vivamus pharetra posuere
                              sapien.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab_content tab-pane fade"
                        id="additional-information"
                        role="tabpanel"
                        aria-labelledby="additional-information-tab"
                      >
                        <div className="tabs_item">
                          <div className="products-details-tab-content">
                            <ul className="additional-information">
                              <li>
                                <span>Brand:</span>
                                ThemeForest
                              </li>
                              <li>
                                <span>Color:</span>
                                Brown
                              </li>
                              <li>
                                <span>Size:</span>
                                Large, Medium
                              </li>
                              <li>
                                <span>Weight:</span>
                                27 kg
                              </li>
                              <li>
                                <span>Dimensions:</span>
                                22 x 123 cm
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
      <Review />
      {/* End Product Details Area */}
    </>
  );
}

export default ProductDetail;

import React from "react";
import fertilizer1 from "../../../assets/img/serviceList/single-product.jpg";
import fert1 from "../../../assets/img/serviceList/fert1.avif";
import fert2 from "../../../assets/img/serviceList/fert2.avif";
import fert3 from "../../../assets/img/serviceList/fert3.avif";
import fert4 from "../../../assets/img/serviceList/fert4.avif";
import flower from "../../../assets/img/serviceList/flower.jpg";
import "./ProductsCategory.css";
function ProductsCategory() {
  return (
    <>
      <section className="productsCategorySec">
        <div className="container">
          <div className="row justify-content-center">
            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div className="productsCategoryItem">
                <div className="categoryHeader">
                  <h5 className="title">seeds</h5>
                  <a href="#">view all </a>
                </div>
                <div className="categoryBody">
                  <div className="singleProducts">
                    <a href="#">
                      <img src={fert1} alt="" />
                      <p> Flower seeds</p>
                      <span className="sale">Sale</span>
                    </a>
                  </div>
                  <div className="singleProducts">
                    <a href="#">
                      <img src={fert2} alt="" />
                      <p> Flower seeds</p>
                    </a>
                  </div>
                  <div className="singleProducts">
                    <a href="#">
                      <img src={fert3} alt="" />
                      <p> Flower seeds</p>
                    </a>
                  </div>
                  <div className="singleProducts">
                    <a href="#">
                      <img src={fert4} alt="" />
                      <p> Flower seeds</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div className="productsCategoryItem">
                <div className="categoryHeader">
                  <h5 className="title">chemicals</h5>
                  <a href="#">view all </a>
                </div>
                <div className="categoryBody">
                  <div className="singleProducts">
                    <a href="#">
                      <img src={fert4} alt="" />
                      <p> insecticides</p>
                      <span className="sale">Sale</span>
                    </a>
                  </div>
                  <div className="singleProducts">
                    <a href="#">
                      <img src={fert3} alt="" />
                      <p> fungicides</p>
                    </a>
                  </div>
                  <div className="singleProducts">
                    <a href="#">
                      <img src={fert2} alt="" />
                      <p> herbicides</p>
                    </a>
                  </div>
                  <div className="singleProducts">
                    <a href="#">
                      <img src={fert1} alt="" />
                      <p> bactericides</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div className="productsCategoryItem">
                <div className="categoryHeader">
                  <h5 className="title">crop nutrition</h5>
                  <a href="#">view all </a>
                </div>
                <div className="categoryBody">
                  <div className="singleProducts">
                    <a href="#">
                      <img src={fert1} alt="" />
                      <p> major nutrients</p>
                    </a>
                  </div>
                  <div className="singleProducts">
                    <a href="#">
                      <img src={fert2} alt="" />
                      <p> secondary nutrients</p>
                      <span className="sale">Sale</span>
                    </a>
                  </div>
                  <div className="singleProducts">
                    <a href="#">
                      <img src={fert3} alt="" />
                      <p> growth promoters</p>
                    </a>
                  </div>
                  <div className="singleProducts">
                    <a href="#">
                      <img src={fert4} alt="" />
                      <p> growth retardants</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsCategory;

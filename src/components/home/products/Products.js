import React from "react";
import ProducItem from "./product/ProductItem";
import "./Products.css";

function Products() {
  return (
    <>
      <section className="productsSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="fisherman-content mb-5">
                <span>our products</span>
                <h3>Featured Products</h3>
              </div>
            </div>
            <ProducItem />
            <div className="col-lg-12">
              <div className="fisherman-btn mt-4 text-center">
                <a href="#" className="optional-btn">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;

import React from 'react'
import { Link } from 'react-router-dom';
import RelatedProduct from './related-product/RelatedProduct';

function RelatedProducts({productData}) {
  return (
    <>
        <section className="relatedProductSec p-30">
        <div className="container">
          <div className="row classSet">
            <div className="col-lg-12">
              <div className="fishermanHeader d-flex justify-content-between align-items-end mb-4">
                <div className="fisherman-content">
                  <span>our Related Products</span>
                  <h3>Related Products</h3>
                </div>
                <div className="fisherman-btn">
                  <Link to="/products" className="optional-btn">
                    View More
                  </Link>
                </div>
              </div>
            </div>
            <RelatedProduct productData={productData} />
          </div>
        </div>
      </section>
    </>
  )
}

export default RelatedProducts
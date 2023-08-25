import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetTrendingProductQuery } from "../../products/productSlice";
import TrendingProduct from "./trending-product/TrendingProduct";
import QuiekViewModal from "../../../pages/QueikViewModal/QuiekViewModal";


function TrendingProducts() {
  const { data, isLoading, error } = useGetTrendingProductQuery();

  const [modelDataId, setModelDataId] = useState(null)
  const setProduct_id = (id) => {
    setModelDataId(id)
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setModelDataId(id)
    setShow(true)
  };

  return (
    <>
      {data?.length > 0 && <section className="trendingProductSe p-30 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="fishermanHeader d-flex justify-content-between align-items-end mb-4">
                <div className="fisherman-content">
                  <h3> Now in demand </h3>
                </div>
                {/* <div className="fisherman-btn">
                  <Link to="#" className="optional-btn">
                    View More
                  </Link>
                </div> */}
              </div>
            </div>
            <TrendingProduct data={data} error={error} isLoading={isLoading} handleShow={handleShow} setProduct_id={setProduct_id}/>
          </div>
        </div>

        {modelDataId && (
          <QuiekViewModal modelDataId={modelDataId} show={show} onHide={handleClose} size="xl"
            centered />
        )}
      </section>}
    </>
  );
}

export default TrendingProducts;

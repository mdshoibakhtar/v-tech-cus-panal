import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useGetFeaturedProductQuery } from '../../products/productSlice'
import FeaturedProduct from './featured-product/FeaturedProduct'
import QuiekViewModal from '../../../pages/QueikViewModal/QuiekViewModal'


function FeaturedProducts() {
  const { data, error, isLoading } = useGetFeaturedProductQuery()

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
      {data?.length && <section className="productsSection  p-30">
        <div className="container">
          <div className="row featuredRow">
            <div className="col-lg-12">
              <div className="fishermanHeader d-flex justify-content-between align-items-end mb-4">
                <div className="fisherman-content">
                  <span>our products</span>
                  <h3> Possibly you may be interested </h3>
                </div>
                <div className="fisherman-btn">
                  <Link to="/products" className="optional-btn">
                    View More
                  </Link>
                </div>
              </div>
            </div>
            <FeaturedProduct data={data} isLoading={isLoading} error={error} handleShow={handleShow} setProduct_id={setProduct_id} />
          </div>
        </div>

        {modelDataId && (
          <QuiekViewModal modelDataId={modelDataId} show={show} onHide={handleClose} size="xl"
            centered />
        )}
      </section>}
    </>
  )
}

export default FeaturedProducts
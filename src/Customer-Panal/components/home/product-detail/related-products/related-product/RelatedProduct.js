import React, { useState } from "react";
// import fertilizer1 from "../../../../../assets/img/products/1.jpg";
// import fertilizer2 from "../../../../../assets/img/products/2.jpg";

// import Rating from "../../../../../shared/rating/Rating";

import { FiSearch } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { GrAdd } from "react-icons/gr";
import { BsFillCartFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { CgShutterstock } from "react-icons/cg";

import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../../../products/productSlice";
// import QuiekViewModal from "../../../../../pages/QueikViewModal/QuiekViewModal";

function RelatedProduct({ productData }) {
  const { data, error, isLoading } = useGetProductsQuery();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    arrows: false,
    autoplaySpeed: 3000,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

    ]
  };


  const [modelDataId, setModelDataId] = useState(null)

  const [show, setShow] = useState(false);

  const curr = window.localStorage.getItem('currencySym')
  const currencySymbol = curr ? curr : 'ZK'

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setModelDataId(id)
    setShow(true)
  };


  return (
    <>
      <Slider {...settings}>
        {data?.map((item) => {
          return (
            <div className="col-lg-3 col-md-6 col-sm-12" key={item._id}>
              <div className="featuredInfo">
                <div className="featuredFigure">
                  <div className="featuredImg">
                    <Link to={`/product/${item._id}`}>
                      {/* <img src={fertilizer2} alt="Product" /> */}
                    </Link>
                    <div className="quickView">
                      <ul>
                        <li className="viewProduct">
                          <button
                            className="quick_view_btn"
                            onClick={(e) => {
                              handleShow(item._id)
                            }}
                          >
                            <FiSearch />
                          </button>
                        </li>
                        <li className="addProduct">
                          <button type="button">
                            <GrAdd />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="hotList">
                    <li>
                      <Link to="/products">Sale</Link>
                    </li>
                    <li>
                      <Link to="/products">-24%</Link>
                    </li>
                  </ul>
                </div>
                <div className="featuredContent">
                  <h6>category</h6>
                  <h5>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </h5>

                  {/* <Rating /> */}
                  <div className="rateDigit">
                    <span className="cross">{currencySymbol} 59.00</span>
                    <span className="currentPrice">{currencySymbol}87</span>
                  </div>
                  <div className="buyNowInfo">
                    <Link
                      to="/cart"
                      className="btn btn-primary addCart"
                    >
                      <FiShoppingCart />
                      Add Cart
                    </Link>

                    <Link
                      to="/"
                      className="btn btn-primary buyNow"
                    >
                      <BsFillCartFill />
                      Buy Now
                    </Link>
                  </div>
                  <div className="productDesc">
                    <p>
                      CAN(Calcium ammonium nitrate: N(27), P(0), K(0), S(0),
                      Zn(0), Ca(3.2) Dosage: 5-6 gm per plant. Time of
                      Application: During vegetative stage. Use: Top dressing
                      containing calcium
                    </p>
                  </div>
                  <div className="featuredOption">
                    <select defaultValue={"DEFAULT"}>
                      <option value="DEFAULT Option">Select Option</option>
                      <option value="one">One</option>
                      <option value="two">Two</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      {/* {modelDataId && (
        <QuiekViewModal modelDataId={modelDataId} show={show} onHide={handleClose} size="xl"
          centered />
      )} */}
    </>
  );
}

export default RelatedProduct;

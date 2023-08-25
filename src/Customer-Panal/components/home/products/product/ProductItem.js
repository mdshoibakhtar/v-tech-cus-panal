import React, { useEffect, useState } from "react";
// import fertilizer1 from "../../../../assets/img/products/1.jpg";
// import Rating from "../../../../shared/rating/Rating";

import { FiSearch } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { BsFillCartFill } from "react-icons/bs";
// import pro2 from '../../../../assets/prductsImg/pro2.webp'
// You need to import the CSS only once
// import "react-awesome-lightbox/build/style.css";

import "./ProductItem.css";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { ImgesData } from "../../proImgs/ImgesData";
import axios from "axios";
import { setCartLists, useOfflineAddPostMutation, useSetCartMutation } from "../../../products/productSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductItem({ loadMore, setTotalProductLength, latestData, setLatestData, handleShow,loade }) {
  const userid = window.localStorage.getItem("user_id");
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [isLoading, SetIsloading] = useState(true)

  const getData = async () => {
    try {
      const res = await axios.get(`https://onlineparttimejobs.in/api/product`)
      setData(res.data)
      SetIsloading(false)
    } catch (error) {
      setError(true)
      SetIsloading(false)
    }
  }

  const curr = window.localStorage.getItem('currencySym')
  let currencySymbol = curr
  if (currencySymbol === 'undefined') {
    currencySymbol = 'ZK'
  }

  const params = useParams();
  // useEffect(() => {
  //   if (!data) {
  //     // getData()
  //   }

  //   if (params.val) {
  //     const filteredData = data?.filter((currentElm) => {
  //       const currentName = currentElm?.name?.toLowerCase();
  //       const currentVal = params.val.toLowerCase();

  //       if (currentName) {
  //         if (
  //           currentName.includes(currentVal) ||
  //           currentElm.brand === currentVal
  //         ) {
  //           return currentElm;
  //         }
  //       }

  //     });
  //     setLatestData(filteredData);
  //     setTotalProductLength(filteredData)
  //   } else {
  //     setLatestData(data);
  //     setTotalProductLength(data)
  //   }
  // }, []);

  const [addToCart, { data: datacart, isLoading: isAddCartLoading, isSuccess: isAddToCartSuccess, isError: isAddToCartError }] = useSetCartMutation();
  const isLogin = window.localStorage.getItem("isLogin");
  const [postOffline, { data: resData, isSuccess, isError: offErr, isLoading: isloadPost }] = useOfflineAddPostMutation()
  const navigate = useNavigate()


  const { updatedProducts: products } = useSelector((state) => {
    return state.productList
  })
  const BuyNowPro = (item) => {
    if (isLogin === 'false') {
      postOffline({
        product_count: 1,
        product_variant: item?.variations[0]._id,
        deliveryType: 'HOME DELIVERY',
        seller_id: '64269f0df127906d53878d3d',
        sku: item?.variations[0].sku,
        product_id: item?._id,
        products: products ? products : []
      })

    } else {
      const payload = {
        product_count: 1,
        product_variant: item?.variations[0]._id,
        deliveryType: 'HOME DELIVERY',
        seller_id: '64269f0df127906d53878d3d',
        sku: item?.variations[0].sku,
        product_id: item?._id,
        userid,

      }
      addToCart(payload)

    }

  }

  useEffect(() => {
    if (isSuccess) {
      navigate('/cart')
    }
  }, [isSuccess])

  const dispacher = useDispatch()
  useEffect(() => {
    if (isSuccess) {
      dispacher(setCartLists(resData.cart.products))
    }
  }, [isSuccess, offErr])
  

  return (
    <>
      {latestData?.length === 0 && (<h6 className="text-center mb-5">No Found Data</h6>)}
      {latestData?.slice(0,loade).map((item, i) => {
        return (
          <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
            <div className="featuredInfo">
              <div className="featuredFigure">
                {isloadPost && <div className="preloaderCount">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>}
                <div className="featuredImg" style={{ display: "flex", justifyContent: "center" }}>
                  <Link to={`/product/${item._id}`}>
                    <img src={item?.mainimage_url?.url ? item?.mainimage_url?.url : '' } alt="Product" />
                  </Link>
                  <div className="quickView">
                    <ul>
                      <li className="viewProduct">
                        <button
                          className="quick_view_btn"
                          onClick={(e) => {
                            handleShow(item)
                          }}
                        >
                          <FiSearch />
                        </button>
                      </li>
                      <li className="addProduct">
                        <Link to="/products">
                          <GrAdd />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="hotList">
                  <li>
                    <Link to="/products">hot</Link>
                  </li>
                  <li>
                    <Link to="products">- 49</Link>
                  </li>
                </ul>
              </div>
              <div className="featuredContent">
                <h6>category</h6>
                <h5 style={{marginBottom:"12px"}}>
                  <Link to={`#`}>{item.name}</Link>
                </h5>
                {/* <Rating /> */}
                <div className="rateDigit">
                  <span className="cross">Rs 799.0</span>
                  <span className="currentPrice">Rs 604.00</span>
                </div>
                <div className="buyNowInfo">

                  <Link to={`/product/${item._id}`} className="btn btn-danger addCart">View Detail</Link>
                  <Link to="#"
                    // onClick={() => { BuyNowPro(item) }}
                    className="btn btn-primary buyNow">
                    <BsFillCartFill /> Buy Now
                  </Link>
                </div>
                <div className="featuredOption">
                  <select defaultValue={"DEFAULT"}>
                    <option value="DEFAULT">Select Option</option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {error && (
        <div className="alertMsg mb-4" role="alert">
          <h4 style={{ color: "red" }}>Server Error</h4>
        </div>
      )}
    </>
  );
}

export default ProductItem
import React, { useEffect, useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useDispatch, useSelector } from "react-redux";
import { clearUpdatedProduct, setCartLeng, clereCartLitsItem, useClearAllListMutation, useDeleteDataMutation, useGetCartQuery, useGetCouponMutation, useOfflineCartListMutation, useSetQuantityCartMutation, setCartCalc } from "../products/productSlice";
import { ApiQuatity } from "./ApiQuantity";
import { AiFillDelete } from "react-icons/ai";
import productSmall1 from "../../assets/img/products/productSmall1.jpg";
import LoginCartSec from "./LoginCartSec";
import axios from "axios";

function Cart() {
  const isLogin = window.localStorage.getItem("isLogin")
  const user_id = window.localStorage.getItem("user_id")
  const [modalShow, setModalShow] = useState(false);
  const dispach = useDispatch()
  const curr = window.localStorage.getItem('currencySym')
  let currencySymbol = curr
  if (currencySymbol === 'undefined') {
    currencySymbol = 'ZK'
  }
  const [getDisCoupons, { isLoading, isSuccess: coupenSuss }] = useGetCouponMutation()

  // const { data, isSuccess } = useGetCartQuery(user_id);
  const [isSuccess, setisSuccess] = useState(false)
  const [showData, setShowData] = useState(null)
  const { updatedProducts: products, cartCal } = useSelector((state) => {
    return state.productList
  })
  const getCartData = async () => {
    try {
      const res = await axios.get(`https://onlineparttimejobs.in/api/cart/${user_id}`)
      setisSuccess(true)
      setShowData(res.data)
      dispach(setCartLeng(res.data?.cart?.products.length))
      dispach(setCartCalc(res.data))
    } catch (error) {
      setisSuccess(false)
    }
  }

  useEffect(() => {
    if (isLogin) {
      getCartData()
    }
  }, [isSuccess])

  useEffect(() => {
    if (coupenSuss) {
      getCartData()
    }
  }, [coupenSuss])


  const navigate = useNavigate()

  const [deleteList, { isSuccess: alldlete }] = useClearAllListMutation()
  const [deleteSingleItem, { isLoading: isLoadingDelete, isSuccess: isdeletesuss }] = useDeleteDataMutation()

  useEffect(() => {
    if (isdeletesuss) {
      getCartData()
    }
    if (alldlete) {
      getCartData()
      dispacher(setCartLeng(0))
    }

  }, [isdeletesuss, alldlete])



  const [getOffCartList, { data: offCartList, isSuccess: issucOff }] = useOfflineCartListMutation()

  useEffect(() => {
    getOffCartList({ products: products })
  }, [])


  const dispacher = useDispatch()
  const deleteData = () => {
    const userid = window.localStorage.getItem("user_id");
    if (isLogin === 'true') {
      deleteList(userid)

    } else {
      dispach(clereCartLitsItem([]))
      dispacher(setCartLeng(0))
      getOffCartList({ products: [] })
    }
  }

  const deleteSingle = (id) => {
    if (isLogin === 'true') {
      deleteSingleItem({ userid: user_id, id: id })
    } else {
      const newClone = products.filter((item) => {
        console.log(item);
        console.log(id);
      })

      // dispach(clearUpdatedProduct())
    }

  }


  const orderConfirm = () => {

    if (isLogin) {
      // tempCart(userid)
      // callSpinner()
      navigate('/checkout')
    } else {
      navigate('/login')
    }
  };

  const couponRef = useRef()

  const sendCouponFree = () => {
    const value = couponRef.current.value
    getDisCoupons({ value: value, id: user_id })
    couponRef.current.value = ""
  }

  const [dataOff, setDataOf] = useState(offCartList)

  const deleteCartList = (id) => {
    const filterdData = products.filter((item) => {
      return item.product !== id
    })
    dispach(clereCartLitsItem(filterdData))
    getOffCartList({ products: filterdData })
  }

  useEffect(() => {
    if (offCartList) {
      setDataOf(offCartList)
    }
  }, [issucOff])



  if (isLogin === 'true') {
    return (
      <>
        <Helmet>
          <title>Cart | Fertilizer Multi Vendor</title>
          <meta
            name="keyword"
            content="Fertilizer, Agricultural, Seeds, Machinery, Nutrition"
          />
          <meta
            name="description"
            content="Buy Agricultural Products and Machinery Online at ETG. We Offering broad range of Seeds, Plant Nutrition, Plant Protection and Agri Implements."
          />
        </Helmet>
        <section className="cartBody">
          {/* {!isSuccess && <div className="preloaderCount">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>} */}
          {isLoading && <div className="preloaderCount">
            <h4>Coupon Applied</h4>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>}
          {isLoadingDelete && <div className="preloaderCount">
            <h4>Product Delete</h4>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>}
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="cartTable">
                  <table className="table cartTablePage">
                    <thead>
                      <tr className="fontHead">
                        <th><AiFillDelete /></th>
                        <th>#</th>
                        <th>Product</th>
                        <th>Variation</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub-Total</th>
                        <th>Tax%</th>
                        <th>Tax Amt</th>
                        <th>Total</th>
                        <th>Delivery Type</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {showData?.cart &&
                        showData?.cart?.products?.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td><AiFillDelete onClick={() => deleteSingle(item._id)} /></td>
                              <td>{i + 1}</td>
                              <td>
                                <div className="productImageInfo">
                                  <figure>
                                    <Link
                                      to={`/product/${item?.product?._id}`}
                                      className="productImage"
                                    >
                                      {item?.product?.mainimage_url?.url ? <img
                                        src={item?.product?.mainimage_url?.url}
                                        alt={`${item?.product?.name}`}
                                      /> : <img
                                        src={productSmall1}
                                        alt={`${item?.product?.name}`}
                                      />}

                                    </Link>
                                  </figure>
                                  <h5>
                                    <Link to={`/product/${item?.product?._id}`}>
                                      {item?.product?.name}
                                    </Link>{" "}
                                  </h5>
                                </div>
                              </td>
                              <td>{item?.variations[0]?.weight}</td>
                              <td>
                                {item.product && (
                                  <h6>{currencySymbol} {item?.variations[0]?.sale_rate}</h6>
                                )}
                              </td>


                              <td>
                                <ApiQuatity countValue={item.count} item={item} getCartData={getCartData} />
                              </td>
                              <td>
                                {item.subTotal}
                              </td>

                              <td>
                                <div style={{ display: "flex", justifyContent: "center" }}>{item?.variations[0]?.tax}</div>
                              </td>
                              <td>
                                <div style={{ display: "flex", justifyContent: "center" }}>{item.tax}</div>
                              </td>
                              <td>
                                <h6>
                                  {currencySymbol}  {item?.total}
                                </h6>
                              </td>
                              <td>
                                {item.deliveryType}
                              </td>

                            </tr>
                          );

                        })}
                    </tbody>
                  </table>
                  {showData?.subTotal > 0 && <h5>Grand Total : {currencySymbol} {showData?.grandTotal}</h5>}
                </div>
                <div className="cartDiscountInfo">
                  <div className="updateBtn d-flex">


                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ marginLeft: "10px", backgroundColor: "red" }}
                      onClick={deleteData}
                    >
                      Clear All
                    </button>

                  </div>
                </div>
              </div>


              <div className="col-lg-3">
                <div className="cartTotals">
                  <input placeholder="Apply Coupon" className="form-control" ref={couponRef} />
                  <button type="button" className="btn btn-info" style={{ margin: '10px 0' }} onClick={sendCouponFree}>Apply Coupon</button>
                  <h5 className="cartTitle">Price Details</h5>

                  <div className="subTotal">
                    <h6>Base Price</h6>
                    <p>{currencySymbol} {showData?.basePrice}</p>
                  </div>

                  <div className="subTotal">
                    <h6>Discount Amount </h6>
                    <p>{currencySymbol} {showData?.discount}</p>
                  </div>



                  {/* <div className="subTotal">
                    <h6>Coupon Applied</h6>
                    <p>{currencySymbol} {showData?.discount}</p>
                  </div> */}
                  <div className="subTotal">
                    <h6>Sub Total</h6>
                    <p>{currencySymbol} {showData?.subTotal}</p>
                  </div>

                  <div className="subTotal">
                    <h6>Tax Amount</h6>
                    <p>{currencySymbol} {showData?.tax}</p>
                  </div>
                  <div className="subTotal">
                    <h6>Shipping</h6>
                    <p>{currencySymbol} {showData?.shippingCost}</p>
                  </div>

                  <div className="subTotal">
                    <h6>Grand Total</h6>
                    <p>{currencySymbol} {showData?.grandTotal}</p>
                  </div>
                  <hr />
                  <button
                    type="button"
                    className="btn btn-success spinnerBtn"
                    onClick={orderConfirm}
                    style={{ backgroundColor: "green", border: "none", fontSize: '19px' }}
                  >
                    proceed to checkout
                  </button>

                </div>
              </div>


            </div>
          </div>
        </section>
      </>
    )
  } else {
    return <>
      <Helmet>
        <title>Cart | Fertilizer Multi Vendor</title>
        <meta
          name="keyword"
          content="Fertilizer, Agricultural, Seeds, Machinery, Nutrition"
        />
        <meta
          name="description"
          content="Buy Agricultural Products and Machinery Online at ETG. We Offering broad range of Seeds, Plant Nutrition, Plant Protection and Agri Implements."
        />
      </Helmet>
      <section className="cartBody">
        {/* {!isSuccess && <div className="preloaderCount">
       <div className="spinner-border" role="status">
         <span className="visually-hidden">Loading...</span>
       </div>
     </div>} */}

        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="cartTable" style={{ overflow: 'auto' }}>
                <table className="table cartTablePage">
                  <thead>
                    <tr>
                      <th><AiFillDelete /></th>
                      <th>#</th>
                      <th>Product</th>
                      <th>Variation</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Tax%</th>
                      <th>Tax Amt</th>
                      <th>Total</th>
                      <th>Delivery Type</th>
                      {/* <th>Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {offCartList &&
                      offCartList?.cart?.products.map((item, i) => {
                        console.log(item);
                        return <tr key={i}>
                          <td>{item?.product?._id ? <AiFillDelete onClick={() => deleteCartList(item.product._id)} /> : <AiFillDelete onClick={() => deleteCartList(item.product._id)} />}</td>
                          <td>{i + 1}</td>
                          <td>
                            <div className="productImageInfo">
                              <figure>
                                <Link
                                  to={`/product/${item?.product?._id}`}
                                  className="productImage"
                                >
                                  {item?.mainimage_url ? <img
                                    src={item?.mainimage_url}
                                  /> : <img
                                    src={item?.product?.mainimage_url?.url}
                                  />}

                                </Link>
                              </figure>
                              <h5>
                                <Link to={`/product/${item?.product?._id}`}>
                                  {item?.product?.name}
                                </Link>
                              </h5>
                            </div>
                          </td>
                          <td>{item?.variations ? item?.variations[0]?.weight : ""}</td>
                          <td>
                            <h6>{currencySymbol} {item?.variations ? item?.variations[0]?.sale_rate : ""}</h6>
                          </td>


                          <td>
                            <ApiQuatity countValue={item.count} item={i} getOffCartList={getOffCartList} />
                          </td>

                          <td>
                            <div style={{ display: "flex", justifyContent: "center" }}>{item?.variations[0]?.tax}</div>
                          </td>
                          <td>
                            <div style={{ display: "flex", justifyContent: "center" }}>{item.tax}</div>
                          </td>
                          <td>
                            <h6>
                              {currencySymbol} {item.total}
                            </h6>
                          </td>
                          <td>
                            {item.deliveryType}
                          </td>

                        </tr>


                      })}
                  </tbody>
                </table>
              </div>
              {<h5>Grand Total : ZK {offCartList?.grandTotal}</h5>}
              <div className="cartDiscountInfo">
                <div className="updateBtn d-flex">


                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{ marginLeft: "10px", backgroundColor: "red" }}
                    onClick={deleteData}
                  >
                    Clear All
                  </button>

                </div>
              </div>
            </div>


            <div className="col-lg-3">
              <div className="cartTotals">
                <input placeholder="Apply Coupon" className="form-control" ref={couponRef} />
                <button type="button" className="btn btn-info" style={{ margin: '10px 0' }} onClick={sendCouponFree}>Apply Coupon</button>
                <h5 className="cartTitle">Price Details</h5>

                {/* <div className="subTotal">
                  <h6>Base Price</h6>
                  <p>{offCartList?.basePrice}</p>
                </div>

                <div className="subTotal">
                  <h6>Discount Amount </h6>
                  <p>{offCartList?.discount}</p>
                </div> */}



                <div className="subTotal">
                  <h6>Subtotal</h6>
                  <p> {offCartList?.subTotal}</p>
                </div>
                <div className="subTotal">
                  <h6>Coupon Applied</h6>
                  <p> {offCartList?.discount}</p>
                </div>
                <div className="subTotal">
                  <h6>Shipping</h6>
                  <p> {offCartList?.shippingCost}</p>
                </div>
                <div className="subTotal">
                  <h6>GST</h6>
                  <p> {offCartList?.tax}</p>
                </div>
                <div className="subTotal">
                  <h6>Cart Total</h6>
                  <p> {offCartList?.grandTotal}</p>
                </div>
                <hr />

                {isLogin === 'true' ? <button
                  type="button"
                  className="btn btn-success spinnerBtn"
                  onClick={orderConfirm}
                  style={{ backgroundColor: "green", border: "none", fontSize: '19px' }}
                >
                  proceed to checkout
                </button> :
                  <button
                    type="button"
                    className="btn btn-success spinnerBtn"
                    onClick={() => setModalShow(true)}
                    style={{ backgroundColor: "green", border: "none", fontSize: '19px' }}
                  >
                    proceed to checkout
                  </button>}


              </div>
            </div>


          </div>
        </div>
      </section>

      {modalShow && <LoginCartSec show={modalShow}
        onHide={() => setModalShow(false)} />}



    </>
  }


}

export default Cart;

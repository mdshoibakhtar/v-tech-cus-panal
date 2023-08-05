import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { setCartCalc, setCartLeng, useAddAddressDetailMutation, useClearAllListMutation, useGetActiveBillingQuery, useGetCartQuery, useGetCouponMutation, useGetCurrencyQuery, useGetLanguageQuery, useGetOrderHistoryQuery, usePostBillAddresMutation, useSetCartTemptMutation, useSetEditedAddresMutation } from "../products/productSlice";
import AddShipping from "./AddShipping";
import "./Checkout.css"
import ShippingAddress from "./ShippingAddress";
import { CustomToaster } from "../../../common/toaster/CustomToaster";
// import payment from '../../assets/img/paymentTing.jpg'
import PaymentSectins from "./PaymentSectins";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import SussessMsg from "./SussessMsg";

function CheckoutPage() {
  const userid = window.localStorage.getItem("user_id")
  const isLogin = window.localStorage.getItem("isLogin")
  const [shipping, setShipping] = useState(false)
  const navigate = useNavigate()
  const dispacher = useDispatch()

  const [editAdd, { isLoading }] = useSetEditedAddresMutation()
  const [tempCart, { data: plaecedData, isError, isSuccess, isLoading: cartIsLoading }] = useSetCartTemptMutation()

  useEffect(() => {
    if (isSuccess) {
      dispacher(setCartLeng(0))
      dispacher(setCartCalc([]))
    }
  }, [isSuccess])

  // const [addAddress] = useAddAddressDetailMutation()

  const [showModal, setShowMoal] = useState(true)
  const [cartValue, setCartValue] = useState()
  const { data: cartDetail } = useGetCartQuery(userid)
  const [showTaoster, setShowToaster] = useState({ show: false, message: '', color: 'success' })

  const curr = window.localStorage.getItem('currencySym')
  let currencySymbol = curr
  if (currencySymbol === 'undefined') {
    currencySymbol = 'ZK'
  }
  // const { data: cartval, isSuccess: iscartin } = useGetCartQuery(user_id);

  const { object, cartCal } = useSelector((state) => {
    return state.productList
  })

  const [AddBillAdd, { isLoading: isLoadingBillAdd }] = usePostBillAddresMutation()

  const [alert1, setAlert] = useState(false)
  const [showPayment, seShowPayment] = useState(false)


  const [formData, setFormData] = useState({
    btype: "billing",
    bcountry: "",
    bstate: "",
    bcity: "",
    bzip: "",
    baddressLine1: "",
    baddressLine2: "",
    blandmark: "",
    bprovince: "",
    bcompany: "",
    userid: window.localStorage.getItem('user_id')
  });


  const updateAddress = () => {
    if (data?.address?._id) {
      const obj = {
        type: "billing",
        country: formData.bcountry,
        state: formData.bstate,
        city: formData.bcity,
        zip: formData.bzip,
        addressLine1: formData.baddressLine1,
        addressLine2: formData.baddressLine2,
        landmark: formData.blandmark,
        province: formData.bprovince,
        company: formData.bcompany,
        selectedBillingAddress: true,
        userid: window.localStorage.getItem('user_id')
      }
      editAdd({ ...obj, ship_id: data.address._id })
    } else {
      AddBillAdd({ ...formData, selectedBillingAddress: true, })
    }

  }


  const handleChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    const cloneData = { ...formData };
    cloneData[name] = val;
    setFormData(cloneData);
  };

  let shippingAdd;
  const setShippingAdd = (item) => {
    shippingAdd = item
  }
  let ship = true

  const handlePlace = (e) => {
    const shipAdd = window.localStorage.getItem('shippingId')
    if (!formData.baddressLine1 || !formData.bcountry || !formData.bstate || !formData.bcity || !formData.blandmark) {
      alert('Plese Fill The Billing Address')
      return
    }
    if (shipAdd) {
      ship = false
    }
    e.preventDefault();
    if (isLogin) {
      const paylode = {
        billAddress: formData,
        shipping_Address: shippingAdd,
        userid: userid,
        Seller: "ETG",
        Delivery_Status: "Pending",
        Payment_method: "COD",
        Payment_Status: "Unpaid",
        orderStatus: "Not Processed",
        billAddress_Active: ship
      }
      tempCart(paylode)
    }
    else {
      navigate('/login')
    }

  };

  useEffect(() => {
    if (isError) {
      alert('Something went Wrong Order Not Placed !!')
    } else {
      setCartValue(cartCal)
      alertMsg()
    }
  }, [isError])


  const alertMsg = () => {
    setAlert(true)
    setTimeout(() => {
      setAlert(false);
      // navigate('/')
    }, 2000);
  }


  // const { data } = useGetActiveBillingQuery(userid)
  const [data, setData] = useState(null)

  const getBillData = async () => {
    const res = await axios.get(`https://onlineparttimejobs.in/api/user/getActiveBillAddress/${userid}`)
    setData(res.data)
  }

  useEffect(() => {
    getBillData()
  }, [])

  const handleToaster = () => {
    setShowToaster({ ...showTaoster, show: false })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    const obj = {
      btype: "billing",
      bcountry: data?.address?.country,
      bstate: data?.address?.state,
      bcity: data?.address?.city,
      bzip: data?.address?.zip,
      baddressLine1: data?.address?.addressLine1,
      baddressLine2: data?.address?.addressLine2,
      blandmark: data?.address?.landmark,
      bprovince: data?.address?.province,
      bcompany: data?.address?.company,
      userid: window.localStorage.getItem('user_id')
    }
    setFormData(obj)
    window.localStorage.setItem('shippingId', '')
  }, [data])
  const [getDisCoupons, { isLoading: forCoupons }] = useGetCouponMutation()
  const couponRef = useRef()

  const sendCouponFree = () => {
    const value = couponRef.current.value
    getDisCoupons(value)
    couponRef.current.value = ""
  }

  const cashDelevery = () => {
    seShowPayment(false)
  }

  const [data1, setData1] = useState()

  const getPayments1 = async () => {
    try {
      const res = await axios.get(`https://onlineparttimejobs.in/api/africanConfig/available`)
      setData1(res.data)
    } catch (error) {

    }
  }
  const [billadd, setBillAdd] = useState()

  const billAdd = async () => {
    try {
      const res = await axios.get(`https://onlineparttimejobs.in/api/user/billAddress/${userid}`)
      setBillAdd(res.data.address)
    } catch (error) {

    }
  }

  const changeBillings = (e) => {
    const obj = billadd.find((item) => {
      return item._id === e.target.value
    })
    console.log(obj);
    const obj2 = {
      btype: "billing",
      bcountry: obj?.country,
      bstate: obj?.state,
      bcity: obj?.city,
      bzip: obj?.zip,
      baddressLine1: obj?.addressLine1,
      baddressLine2: obj?.addressLine2,
      blandmark: obj?.landmark,
      bprovince: obj?.province,
      bcompany: obj?.company,
      userid: window.localStorage.getItem('user_id')
    }
    setFormData(obj2)
  }

  useEffect(() => {
    getPayments1()
    billAdd()
  }, [])

  return (
    <>
      <Helmet>
        <title>Checkout | Fertilizer Multi Vendor</title>
        <meta
          name="keyword"
          content="Fertilizer, Agricultural, Seeds, Machinery, Nutrition"
        />
        <meta
          name="description"
          content="Buy Agricultural Products and Machinery Online at ETG. We Offering broad range of Seeds, Plant Nutrition, Plant Protection and Agri Implements."
        />
      </Helmet>
      <section className="checkoutSec mt-4 mb-4">
        <div className="container">
          {forCoupons && <div className="preloaderCount">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>}

          {cartIsLoading && <div className="preloaderCount">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>}

          <div className="row" style={{ width: "750px", margin: "auto" }}>
            <div className="col-lg-12">
              {!isLogin && <div className="loginInfo">

                <div className="coupon">
                  <p>
                    New Registration <Link to="/registration">Create Account</Link>
                  </p>
                </div>
                <div className="coupon">
                  <p>
                    Already Have Account <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>}
            </div>
            <div className="col-lg-7">
              <div className="checkoutBody">
                <div className="billingDetails">

                  <h6>Change Billing Address</h6>
                  <div style={{ margin: "10px 0" }}>
                    <Form.Select aria-label="Default select example" onChange={changeBillings}>
                      <option>Open this select menu</option>

                      {billadd && billadd.map((item) => {
                        // console.log(item);
                        return <option key={item._id} value={item._id}>{item?.country} {item?.state} {item.city} {item.landmark} {item?.addressLine1} {item?.addressLine2}</option>
                      })}
                    </Form.Select>
                  </div>

                  <h5>Billing Details</h5>
                  <CustomToaster color={showTaoster.color} title={data?.name} show={showTaoster.show} setShow={handleToaster} message={showTaoster.message} position="bottom-end" delay={3000} />

                  <form className="row">
                    <div className="mb-3 col-6">
                      <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                      <input type="text" className="form-control" name="bcountry" value={formData?.bcountry} onChange={handleChange} aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3 col-6">
                      <label htmlFor="exampleInputEmail1" className="form-label">State</label>
                      <input type="text" className="form-control" name="bstate" value={formData?.bstate} onChange={handleChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-6">
                      <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                      <input type="text" className="form-control" name="bcity" value={formData?.bcity} onChange={handleChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-6">
                      <label htmlFor="exampleInputEmail1" className="form-label">ZIP</label>
                      <input type="text" className="form-control" name="bzip" value={formData?.bzip} onChange={handleChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-6">
                      <label htmlFor="exampleInputEmail1" className="form-label">Province</label>
                      <input type="text" className="form-control" name="bprovince" value={formData?.bprovince} onChange={handleChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-6">
                      <label htmlFor="exampleInputEmail1" className="form-label">Address Line1</label>
                      <input type="text" className="form-control" name="baddressLine1" value={formData?.baddressLine1} onChange={handleChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-6">
                      <label htmlFor="exampleInputEmail1" className="form-label">Address Line2</label>
                      <input type="text" className="form-control" name="baddressLine2" value={formData?.baddressLine2} onChange={handleChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-6">
                      <label htmlFor="exampleInputEmail1" className="form-label">Landmark</label>
                      <input type="text" className="form-control" name="blandmark" value={formData?.blandmark} onChange={handleChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-6">
                      <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
                      <input type="text" className="form-control" name="bcompany" value={formData?.bcompany} onChange={handleChange} aria-describedby="emailHelp" />
                    </div>

                  </form>
                  {isLoadingBillAdd && <>
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <h5>Adding Your Billing Address</h5>
                  </>}

                  {data?.address?._id ? <button type="button" className="btn btn-primary" style={{ margin: "10px 0" }} onClick={updateAddress}>Save Address</button> : <button type="button" className="btn btn-primary" style={{ margin: "10px 0" }} onClick={updateAddress}>Add Address</button>}

                  <form id="checkout-form">



                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={shipping}
                        onChange={() => { }}
                        onClick={() => setShipping(!shipping)}
                      />
                      <label
                        className="form-check-label"
                        onClick={() => setShipping(!shipping)}
                      >
                        Ship to a different address?
                      </label>
                    </div>

                    {/* shipping price */}

                    {shipping && (<div>
                      <ShippingAddress setShippingAdd={setShippingAdd} />
                      {showModal && <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <AddShipping setShowMoal={setShowMoal} />
                      </div>}

                    </div>)}



                    <div className="form-group mb-3">
                      <label className="order-comments">
                        Order notes (optional)
                      </label>
                      <textarea
                        className="form-control"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        required
                        defaultValue={""}
                        rows="4"
                        name="notes"
                        onChange={handleChange}
                      />
                    </div>
                    {/* <button type="submit" className="btn btn-primary">
                      place order
                    </button> */}
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">

              <div className="orderInfo" style={{ width: "545px" }}>
                {/* <input placeholder="Apply Coupon" className="form-control" ref={couponRef} />
                <button type="button" className="btn btn-info" style={{ margin: '10px 0' }} onClick={sendCouponFree}>Apply Coupon</button> */}
                <h5 className="mb-4">Your Order has <span style={{ color: "red" }}>{cartDetail?.cart?.products?.length}</span> Items</h5>

                <div style={{ overflow: "auto" }}>

                  <table className="table">
                    <thead>
                      <tr className="fontHead">
                        <th scope="col">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Variant</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sub Total</th>
                        <th scope="col">Tax %</th>
                        <th scope="col">Tax</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartCal?.cart?.products?.map((item, i) => {
                        return <tr key={i}>
                          <td>{++i}</td>
                          <td style={{ fontSize: "14px" }}>{item?.product?.name}</td>
                          <td>{item?.count}</td>
                          <td>{item?.variations[0]?.weight}</td>
                          <td>{item?.variations[0]?.sale_rate}</td>
                          <td>{item?.subTotal}</td>
                          <td>{item?.variations[0]?.tax}</td>
                          <td>{item?.tax}</td>
                          <td>{item?.total}</td>
                        </tr>
                      })}

                    </tbody>
                  </table>
                </div>


                <div className="productAdd" style={{ textAlign: "right" }}>
                  <div className="col">
                    <div className="cartTotals">

                      <h5 className="cartTitle">Price Details</h5>
                      <div className="subTotal">
                        <h6>Subtotal</h6>
                        <p>{currencySymbol} {cartCal?.subTotal}</p>
                      </div>
                      <div className="subTotal">
                        <h6>Coupon Applied</h6>
                        <p>{currencySymbol} {cartCal?.discount}</p>
                      </div>
                      <div className="subTotal">
                        <h6>Shipping</h6>
                        <p>{currencySymbol} {cartCal?.shippingCost}</p>
                      </div>
                      <div className="subTotal">
                        <h6>GST</h6>
                        <p>{currencySymbol} {cartCal?.tax}</p>
                      </div>
                      <hr />
                      <div className="subTotal">
                        <h6>Cart Total</h6>
                        <p>{currencySymbol} {cartCal?.grandTotal}</p>
                      </div>
                    </div>
                  </div>

                </div>


                <div className="shipping">
                  {/* <h6>Shipping</h6> */}
                  {/* <div className="shippingRadio">
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Local pickup
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Flat rate
                        </label>
                      </div>
                    </div>
                    <hr />
                  </div> */}
                  <div className="cartTotalFooter">
                    <div className="totalAmount">

                    </div>


                    <div className="paymentMethods">
                      <h4>Payment </h4>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault4"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault4"
                          onClick={cashDelevery}
                        >
                          Cash on Delivery/Pay on Delivery
                        </label>
                      </div>

                      {/* <p style={{ marginBottom: "5px" }}>
                        <FaInfoCircle />COD
                      </p> */}

                      {/* {data1 && data1.map((item) => {
                        return <p key={item._id} className="d-flex payTingg" style={{ marginTop: "5px" }}
                          // onClick={() => { seShowPayment(!showPayment) }}
                        >
                          <img style={{ width: "25px", marginLeft: "-5px", marginRight: "6px" }} src={payment} /><h6>{item?.name}</h6>
                        </p>
                      })} */}

                      {data1 && data1.map((item, i) => {
                        return <div className="form-check" key={i}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id={`flexRadioDefault4${1 + i}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`flexRadioDefault4${1 + i}`}
                            onClick={cashDelevery}
                          >
                            {item?.name}
                          </label>
                        </div>
                        //  <p key={item._id} className="d-flex payTingg" style={{ marginTop: "5px" }}
                        //   // onClick={() => { seShowPayment(!showPayment) }}
                        // >
                        //   <img style={{ width: "25px", marginLeft: "-5px", marginRight: "6px" }} src={payment} /><h6>{item?.name}</h6>
                        // </p>
                      })}


                    </div>



                    {showPayment && <div className="paymentProcess">
                      <PaymentSectins />
                    </div>
                    }



                    <div className="proceed">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handlePlace}
                        disabled={!cartCal?.cart?.products}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isSuccess && <SussessMsg plaecedData={plaecedData} cartValue={cartValue} currencySymbol={currencySymbol} />}
    </>
  );
}

export default CheckoutPage

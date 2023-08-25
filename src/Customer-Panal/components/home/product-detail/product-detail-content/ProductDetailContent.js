import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classnames from "classnames";

// import payment1 from "../../../../assets/img/payment/1.svg";
// import payment2 from "../../../../assets/img/payment/2.svg";
// import payment3 from "../../../../assets/img/payment/3.svg";
// import payment4 from "../../../../assets/img/payment/4.svg";
// import payment5 from "../../../../assets/img/payment/5.svg";
// import payment6 from "../../../../assets/img/payment/6.svg";
// import payment7 from "../../../../assets/img/payment/7.svg";
// import singleProduct from "../../../../assets/img/shop/single-product.jpg";
// import pickupVan from "../../../../assets/img/pickup.png";
// import trust from "../../../../assets/img/trust.jpg";

import { FiPackage } from "react-icons/fi";
import {
  AiOutlineNumber,
  AiOutlineHeart,
  AiTwotoneHeart,
} from "react-icons/ai";
import { TbTruckDelivery, TbBrandWhatsapp, TbTags } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { FaHands } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BiLoaderAlt } from "react-icons/bi";

import {
  useGetPickUpPointsByIdQuery,
  useGetPickUpPointsQuery, usePickupStockMutation, useSetWishListMutation,
} from "../../../products/productSlice";

import "./ProductDetailContent.css";
import { QuantityCounter } from "../../../cart/QuantityCounter";
// import { CustomToaster } from "../../../../common/toaster/CustomToaster";
import axios from "axios";
import OthersSellers from "./OthersSellers";
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";


function ProductDetailContent({ changeImage, wish, data, isLoading, value, isAddToCartSuccess, isAddToCartError, isError, shortVariant, getAllDeta, setVariantsval }) {
  const curr = window.localStorage.getItem('currencySym')
  let currencySymbol = curr
  if (currencySymbol === 'undefined') {
    currencySymbol = 'ZK'
  }
  const { data: pickUpPointsData, isSuccess: pickupSuccess } = useGetPickUpPointsQuery();
  const [setWishList, { isSuccess }] = useSetWishListMutation();
  const [count1, setCount1] = useState(0);
  const [str, setStr] = useState(null)
  const [showTaoster, setShowToaster] = useState({ show: false, message: '', color: 'success' })
  const [pickupData, setPickupData] = useState()
  const [variantId, setVariantId] = useState('')
  const [storeAdd, setStoreAdd] = useState(null)
  const [modalShow, setModalShow] = useState(false);


  const handleActive = (itemId, itemIndex, item) => {
    changeImage(item, itemIndex)
    setCount1(itemIndex);
    window.localStorage.setItem("variationsId", item._id)
    setVariantId(itemId)
    setStoreAdd(null)
    shortVariant(item)
    window.localStorage.setItem("variant_id", itemId)
    window.localStorage.setItem("SKU", item?.sku)
    setVariantsval(item)
  };
  const isLogin = window.localStorage.getItem("isLogin");
  const handleWishlist = () => {
    if (isLogin === 'false') {
      setShowToaster({ show: true, message: 'Login First !', color: 'danger' })
      return
    }
    const paylode = {
      userid: window.localStorage.getItem("user_id"),
      productid: data._id
    }
    setWishList(paylode);
    if (wish) {
      setShowToaster({ show: true, message: 'Product WishList Removed successfully!', color: 'success' })
    } else {
      setShowToaster({ show: true, message: 'Product WishList Add successfully!', color: 'success' })
    }
    getAllDeta()
  };

  const getDataPickUp = async (id) => {
    const res = await axios.get(`https://onlineparttimejobs.in/api/pickupPoints/${id}`)
    setPickupData(res.data);
  }

  const handlePick = (pickup) => {
    setStr(pickup.pickupPoints.pickupPoint_name)
    window.localStorage.setItem("deliveryType", "Pickup Point Delivery")
    window.localStorage.setItem("pickUpPoint", pickup.pickupPoints._id)
    getDataPickUp(pickup.pickupPoints._id)
  };


  useEffect(() => {
    if (isAddToCartSuccess) {
      setShowToaster({ show: true, message: 'Product added successfully!', color: 'success' });
    }
    if (isAddToCartError) {
      setShowToaster({ show: true, message: 'Something went wrong!', color: 'danger' })
    }
  }, [isSuccess])

  const handleToaster = () => {
    setShowToaster({ ...showTaoster, show: false })
  }


  useEffect(() => {
    window.localStorage.setItem("pickUpPoint", null)
    window.localStorage.setItem("deliveryType", 'HOME DELIVERY')
    setStr(null)
  }, [pickupSuccess, data, isAddToCartSuccess, isAddToCartError, isSuccess])


  const homeDelever = () => {
    setStr(null)
    window.localStorage.setItem("pickUpPoint", null)
    window.localStorage.setItem("deliveryType", 'HOME DELIVERY')
  }
  useEffect(() => {
    window.localStorage.setItem("productCount", 1)
    window.localStorage.setItem("shippingId", "")
    setVariantsval(data?.variations[0])
    window.localStorage.setItem("variant_id", data?.variations[0]?._id)

  }, [data])


  const setStoreSeller = (value) => {
    setStoreAdd(value)
    console.log(value);
    window.localStorage.setItem("otherSeller", value?.seller_id._id)
    window.localStorage.setItem("SKU", value?.sku)
  }


  const [getData, { data: dataVal, isSuccess: loads }] = usePickupStockMutation()

  const [newData, setNewData] = useState()

  const getPickupsPoints = () => {
    let val = window.localStorage.getItem('variationsId')
    if (val === 'null') {
      val = data?.variations[0]._id
    }
    let obj = {
      product_id: data._id,
      variant: val
    }
    getData(obj);

  }

  useEffect(() => {
    setNewData(dataVal)
  }, [dataVal])
  const param = useParams()

  return (
    <>
      {isLoading ? (
        <div className="loaderIcon details_loader">
          <BiLoaderAlt />
        </div>
      ) : (
        <div className="product-details-desc" style={{ zIndex: "-1" }}>
          <div>
            {/* <CustomToaster color={showTaoster.color} title={data?.name} show={showTaoster.show} setShow={handleToaster} message={showTaoster.message} position="bottom-end" delay={5000} /> */}
            <h3>
              {data?.name}

              {wish ? <AiTwotoneHeart style={{ marginLeft: "10px" }} onClick={() => { handleWishlist(data?._id) }} /> : <AiOutlineHeart style={{ marginLeft: "10px" }}
                className="productWishList" l
                onClick={() => {
                  handleWishlist(data?._id);
                }}
              />}


              {isError && <h3 style={{ color: "red" }}>Something Went Wrong Server Error </h3>}


            </h3>
            {data?.brand_id && (
              <h6>Brand : {data.brand_id.name} </h6>
            )}
            {data?.quotation ? '----' : <div className="price">
              <span className="new-price">
                Offer Price: {currencySymbol}
                <>
                  {storeAdd ? <span>{storeAdd?.sale_rate}</span> : <span>{data?.variations[count1]?.sale_rate}</span>}

                  {storeAdd ? <span style={{ margin: "0 10px" }} className="old-price">MRP: {currencySymbol} {storeAdd?.mrp}</span> : <span style={{ margin: "0 10px" }} className="old-price">MRP: {currencySymbol} {data?.variations[count1]?.mrp}</span>}

                  {storeAdd ? <span className="save-price text-success">You save: {currencySymbol} {storeAdd?.mrp - storeAdd?.sale_rate}</span> : <span className="save-price text-success">You save: {currencySymbol} {data?.variations[count1]?.mrp - data?.variations[count1]?.sale_rate}</span>}

                </>
              </span>
            </div>}
            {storeAdd ? <span className="allTaxes">{storeAdd.tax_type} of All Taxes.</span> : <span className="allTaxes">{data?.variations[count1]?.tax_type} of All Taxes.</span>}

            {data?.tags?.length > 0 && (
              <div className="shareProductSec borderTop">
                <div className="titleText">
                  <TbTags />
                  <h6>
                    TAGS:
                    {data.tags.map((item, i) => {
                      return (
                        <span key={i} className="tags">
                          {item}
                        </span>
                      );
                    })}
                  </h6>
                </div>
              </div>
            )}

            {data?.variations && (
              <div className="shareProductSec borderTop">
                <div className="titleText">
                  <AiOutlineNumber />
                  {storeAdd ? <h6>SKU: {storeAdd.sku}</h6> : <h6>SKU: {data?.variations[count1]?.sku}</h6>}
                </div>
              </div>
            )}

            <div className="storageContainer borderTop">

              {value?.wholesaleTable?.length > 0 && <div className="storageInfo" style={{ margin: "20px 0" }}>
                <div className="titleText">
                  <FiPackage />
                  <h6>Whole Sale Price</h6>
                </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Min Qty</th>
                      <th scope="col">Max Qty</th>
                      <th scope="col">Whole Sale Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {value?.wholesaleTable[0]?.products[count1]?.wholesale.map((item, i) => {
                      return <tr key={i}>
                        <th scope="row">{1 + i}</th>
                        <td>{item?.min_qty}</td>
                        <td>{item?.max_qty}</td>
                        <td>{item?.sale_price}</td>
                      </tr>
                    })}


                  </tbody>
                </table>
              </div>}


              <div className="storageInfo">
                <div className="titleText">
                  <FiPackage />
                  <h6>Variants</h6>
                </div>
                <ul className="storageNumber">
                  {data?.variations &&
                    data?.variations.map((item, i) => {
                      if (item.weight) {
                        return (
                          <li key={item._id}>
                            <button
                              type="button"
                              className={classnames({ active: variantId === item._id })}
                              onClick={() => {
                                handleActive(item._id, i, item);
                              }}
                            >
                              {item.weight}
                            </button>
                          </li>
                        );
                      }
                    })}
                </ul>
              </div>


              <div className="productCount borderTop">
                <div className="titleText">
                  <FiPackage />
                  <h6>Add Quantity</h6>
                </div>
                <div className="addQuantity _p-qty">

                  <div className="IncItem">
                    <QuantityCounter countValue={1} val={data} />
                  </div>
                </div>
              </div>

            </div>




            <div className="shareProductSec borderTop">
              <div className="titleText">
                <h4 >Specifications</h4>
                <hr />
              </div>
              {data?.variations && data?.variations[count1]?.attributeList?.map((item, i) => {
                return <div key={i}>
                  <h5 style={{ display: "flex", justifyContent: "center" }}>{item?.attributeSetMaster?.name}</h5>
                  {item?.list && item?.list.map((val, v) => {
                    console.log(val);
                    return <div className="separet">
                      <span>{val?.attribute?.name}</span>
                      <span>{val.value}</span>
                    </div>
                  })}
                </div>
              })}

            </div>






            <div className="shareProductSec borderTop">
              <div className="titleText">
                <AiOutlineNumber />
                <h6>Share</h6>
              </div>
              <div className="shareProduct">
                <ul>



                  <li>
                    <FacebookShareButton
                      url={`https://etgfrontlive.s3infotech.online/product/${param._id}`}
                    >
                      <FacebookIcon logofillcolor='white' round={true}></FacebookIcon>
                    </FacebookShareButton>
                  </li>

                  <li>
                    <WhatsappShareButton
                      url={`https://etgfrontlive.s3infotech.online/product/${param._rid}`}
                    >
                      <WhatsappIcon logofillcolor='white' round={true}></WhatsappIcon>
                    </WhatsappShareButton>
                  </li>

                </ul>
              </div>
            </div>


            <div className="storageContainer borderTop">
              <div className="storageInfo">
                <div className="titleText">
                  <TbTruckDelivery />
                  <h6>DELIVERY MODE & SELLER</h6>
                </div>
                <ul
                  className="deliveryModeList storageNumber"
                  id="myTab"
                  role="tablist"
                >
                  <li role="presentation">
                    <button
                      className={`nac-link ${!str && 'active'}`}
                      id="homeDelivery-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#homeDelivery"
                      type="button"
                      role="tab"
                      aria-controls="homeDelivery"
                      aria-selected="true"
                      onClick={homeDelever}
                    >
                      Home Delivery
                    </button>
                  </li>
                  <button
                    type="button"
                    className={`btn btn-primary PickUpTab ${str && 'active'}`}
                    data-bs-toggle="modal"
                    data-bs-target="#pickupStore"
                    onClick={getPickupsPoints}
                  >
                    Pick up from store
                  </button>
                  {str && <div>Pick up Point :{str}</div>}
                  <div
                    className="modal fade"
                    id="pickupStore"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"

                  >
                    <div className="modal-dialog sellerPriceInfo">
                      <div className="modal-content">
                        <div className="sellerPriceContent">
                          <div className="sellerPriceHeader">
                            <h5>Pick up from store</h5>
                            <hr />
                            <button
                              type="button"
                              className="changeModalCancel"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              <RxCross1 />
                            </button>
                          </div>
                          <div className="modal-body sellerPriceBody p-0">

                            {dataVal?.length ? (
                              <div className="pickupList">
                                {dataVal.map((item, i) => {
                                  if (!item.overSelling) {
                                    return (
                                      <div className="form-check mb-2 d-flex" key={item._id}>

                                        {!item.qty <= 0 && <> <input

                                          className="form-check-input"
                                          type="radio"
                                          name={`flexRadioDefault`}
                                          id={item._id}
                                          value={item?.pickupPoints?.address}
                                          onClick={() => {
                                            handlePick(item);
                                          }}
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                          readOnly
                                        />
                                          <label
                                            style={{ marginLeft: "10px" }}
                                            className="form-check-label"
                                            htmlFor={`flexRadioDefault`}
                                            onClick={() => {
                                              handlePick(item);
                                            }}

                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          >
                                            {item?.pickupPoints?.pickupPoint_name}dd
                                          </label>
                                          <div style={{ marginLeft: "20px" }}>({item.qty})</div></>}
                                      </div>
                                    )
                                  } else {
                                    return (
                                      <>
                                        {item.qty > 0 && <div className="form-check mb-2 d-flex" key={item._id}>
                                          <input

                                            className="form-check-input"
                                            type="radio"
                                            name={`flexRadioDefault`}
                                            id={item._id}
                                            value={item?.pickupPoints?.address}
                                            onClick={() => {
                                              handlePick(item);
                                            }}
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            readOnly
                                          />
                                          <label
                                            style={{ marginLeft: "10px" }}
                                            className="form-check-label"
                                            htmlFor={`flexRadioDefault`}
                                            onClick={() => {
                                              handlePick(item);
                                            }}

                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          >
                                            {item?.pickupPoints?.pickupPoint_name}
                                          </label>
                                          {item.qty > 0 && <div style={{ marginLeft: "20px" }}>({item.qty})</div>}
                                        </div >}
                                      </>
                                    )
                                  }
                                })}
                              </div>
                            ) : <div>No Pickup Points...</div>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="homeDelivery"
                    role="tabpanel"
                    aria-labelledby="homeDelivery-tab"
                  >
                    <div className="deliveryDetail">
                      <div className="deliveryVan">
                        <span className="vanCircle">
                          <img
                            // src={pickupVan}
                            alt="Product"
                            className="img-fluid"
                          />
                        </span>
                      </div>
                      <div className="deliveryDays">
                        <h6>Free Home Delivery</h6>
                        <p>in 1-2 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div >


            {str && <div className="sellerInformation">
              <h5 className="sellerTitle">Pickup Address Detail</h5>
              <div className="sellerInfo">
                <span>You are buying from:</span>
                <p>
                  <h6>Pickup Point Name : {pickupData?.pickupPoint_name}</h6>
                </p>
                <h6>{pickupData?.address}</h6>
                <h6>Phone :{pickupData?.phone}</h6>
                <p>
                  <h6>Province : {pickupData?.province}</h6>
                </p>

              </div>
              <em className="sellerInfoProd">
                Product price may vary basis the selected seller
              </em>

              <div
                className={`modal fade`}
                id="sellerPriceModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog sellerPriceInfo">
                  <div className="modal-content ">
                    <div className="sellerPriceContent">
                      <div className="sellerPriceHeader">
                        <h5>Select a seller</h5>
                        <button
                          type="button"
                          className="changeModalCancel"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <RxCross1 />
                        </button>
                      </div>
                      <div className="sellerPriceBody">
                        <ul
                          className="deliveryModeList storageNumber"
                          id="myTab"
                          role="tablist"
                        >
                          <li role="presentation">
                            <button
                              className="nav-link active"
                              id="home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#home"
                              type="button"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                              typeof="button"
                            >
                              Home Delivery
                            </button>
                          </li>
                          <li role="presentation">
                            <button
                              className="nav-link"
                              id="store-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#store"
                              type="button"
                              role="tab"
                              aria-controls="store"
                              typeof="button"
                            >
                              Store Pickup
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                          >
                            <div className="homePriceInfo">
                              <div className="homePriceName">
                                <input
                                  type="radio"
                                  checked
                                  className="checkBox"
                                  readOnly

                                />
                                <span className="name">Zebrs</span>
                              </div>
                              <div className="priceSec">
                                <span className="priceInText">Price</span>
                                <span className="priceInInteger">ZK 57,754</span>
                              </div>
                            </div>
                            <div className="homePriceInfo">
                              <div className="homePriceName">
                                <input
                                  type="radio"
                                  className="checkBox"
                                  readOnly
                                />
                                <span className="name">National Distributor</span>
                              </div>
                              <div className="priceSec">
                                <span className="priceInText">Price</span>
                                <span className="priceInInteger">ZK 24,999</span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="store"
                            role="tabpanel"
                            aria-labelledby="store-tab"
                          >
                            <div className="homePriceInfo">
                              <div className="homePriceName">
                                <input
                                  type="radio"
                                  checked
                                  className="checkBox"
                                  readOnly

                                />
                                <span className="name">
                                  vijay sales, lajpatnagar
                                </span>
                              </div>
                              <div className="priceSec">
                                <span className="priceInText">Price</span>
                                <span className="priceInInteger">ZK 37,754</span>
                              </div>
                            </div>
                            <div className="homePriceInfo">
                              <div className="homePriceName">
                                <input
                                  type="radio"
                                  className="checkBox"
                                  readOnly

                                />
                                <span className="name">vijay sales, kalkaji</span>
                              </div>
                              <div className="priceSec">
                                <span className="priceInText">Price</span>
                                <span className="priceInInteger">ZK 24,999</span>
                              </div>
                            </div>
                            <div className="homePriceInfo">
                              <div className="homePriceName">
                                <input
                                  type="radio"
                                  className="checkBox"
                                  readOnly

                                />
                                <span className="name">
                                  anand electronics, south delhi
                                </span>
                              </div>
                              <div className="priceSec">
                                <span className="priceInText">Price</span>
                                <span className="priceInInteger">ZK 37,754</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sellerScorecard">
                          <em className="text">
                            The Sellers are listed as per your internal city and
                            scorecard
                          </em>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            }

            {
              storeAdd && <div className="sellerInfo">
                <span>You are buying from:</span>
                <p>
                  <h6>Store Name : {storeAdd.seller_id.firstname} {storeAdd.seller_id.lastname}</h6>
                </p>

                <p>
                  <strong>Address Line 1</strong>
                  <h6>{storeAdd.seller_id?.addressLine1}</h6>

                </p>
                <p>
                  <strong>Address line 2</strong>
                  <h6> {storeAdd.seller_id?.addressLine1}</h6>

                </p>
                <p>
                  <strong>Seller Company Name</strong>
                  <h6>{storeAdd.seller_id?.company}</h6>
                </p>

                <p>
                  <strong>landmark</strong>
                  <h6> {storeAdd.seller_id?.landmark}</h6>
                </p>

              </div>
            }

            <h6 style={{ color: "#0074c9", cursor: "pointer", textAlign: "center", marginTop: "7px" }} onClick={() => setModalShow(true)}>View More Sellers (Click Here) </h6>

            <div className="buy-checkbox-btn">
              <div className="trustFigure">
                {/* <img src={trust} alt="Product" className="img-fluid" /> */}
              </div>
            </div>

            {/* <div className="custom-payment-options">
          <span>Guaranteed safe checkout:</span>
          <div className="payment-methods">
            <Link to="/">
              <img src={payment1} alt="image" />
            </Link>
            <Link to="/">
              <img src={payment2} alt="image" />
            </Link>
            <Link to="/">
              <img src={payment3} alt="image" />
            </Link>
            <Link to="/">
              <img src={payment4} alt="image" />
            </Link>
            <Link to="/">
              <img src={payment5} alt="image" />
            </Link>
            <Link to="/">
              <img src={payment6} alt="image" />
            </Link>
            <Link to="/">
              <img src={payment7} alt="image" />
            </Link>
          </div>
        </div> */}
            {
              modalShow && <OthersSellers show={modalShow}
                onHide={() => setModalShow(false)}
                setStoreSeller={setStoreSeller}
                data={data}
                count1={count1}
              />
            }
          </div>
        </div >
      )}



    </>
  );
}

export default ProductDetailContent;


import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ReactImageZoom from "react-image-zoom";
import Spinner from 'react-bootstrap/Spinner';
import classnames from 'classnames'

// import Review from "./review/Review";
// import Breadcrumb from "../../../shared/breadcrumb/Breadcrumb";
import ProductDetailContent from "./product-detail-content/ProductDetailContent";
import SelectImageSlider from "./select-image-slider/SelectImageSlider";
import RelatedProducts from "./related-products/RelatedProducts";

import { BsChatLeftQuoteFill, BsFillCartFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { RiDownloadCloudFill } from "react-icons/ri";

// import { productItemContext } from "../../../pages/product-detail";

import "./ProductDetail.css";
import {
  useSetCartMutation,
  useGetProductDetailQuery,
  setCartLists,
  useOfflineAddPostMutation,
  useSendComboMutation,
  setCartLeng
} from "../../products/productSlice";
import { useNavigate, useParams } from "react-router-dom";
// import { CustomToaster } from "../../../common/toaster/CustomToaster";
import { ImgesData } from "../proImgs/ImgesData";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";
import ModalQuatation from "./ModalQutation";

function createMarkup(data) {
  return { __html: data };
}
function ProductDetails() {

  const userid = window.localStorage.getItem("user_id");
  const isLogin = window.localStorage.getItem("isLogin");
  const [addToCart, { data: datacart, isLoading: isAddCartLoading, isSuccess: isAddToCartSuccess, isError: isAddToCartError }] = useSetCartMutation();
  const [showTaoster, setShowToaster] = useState({ show: false, message: '', color: 'success' })
  const [productAdded, setProductAdded] = useState(false);
  // const productData = useContext(productItemContext);
  const [mainImage, setMainImage] = useState(ImgesData[0]);
  const isProductAdded = window.localStorage.getItem('currentProductId');

  const [varint, setVariants] = useState({})
  const params = useParams();
  const [data, setData] = useState(null)

  const [isProduceDetailLoading, setisProduceDetailLoading] = useState(true)
  const [isError, setisError] = useState(false)
  const [links, setLinks] = useState('https://www.youtube.com/embed/TW3TA7B8fJU')
  const getAllDeta = async () => {
    const userId = userid ? userid : null
    console.log(userId);
    try {
      const user = await axios.get(`https://onlineparttimejobs.in/api/product/public/${params.id + '&' + userId}`)

      setData(user.data)
      // setLinks(user?.data.getaProduct?.video_link)
      setisProduceDetailLoading(false)
    } catch (error) {
      setisError(true)
      setisProduceDetailLoading(false)
    }


  }
  useEffect(() => {
    getAllDeta()
    window.localStorage.setItem("variationsId", null)
  }, [])
  let imgs = mainImage.url
  // if (data?.getaProduct?.mainimage_url?.url) {
  //   imgs = data?.getaProduct?.mainimage_url?.url
  // }

  const [zoomImageProps, setzoomImageProps] = useState({
    width: 430,
    height: 300,
    zoomWidth: 500,
    img: imgs,
  })


  const handleUniqueID = (currentElm) => {
    setMainImage(currentElm);
    setzoomImageProps({ ...zoomImageProps, img: currentElm.url })
  };

  const selllerId = window.localStorage.getItem('otherSeller')
  let selId = selllerId

  const handleAddCart = () => {
    const product_count = window.localStorage.getItem("productCount");
    const pickupPoint = window.localStorage.getItem("pickUpPoint");

    const userid = window.localStorage.getItem("user_id");
    const deliveryType = window.localStorage.getItem("deliveryType");
    const product_id = params._id;
    const product_variant = window.localStorage.getItem("variationsId")

    if (selllerId === 'undefined') {
      selId = '64269f0df127906d53878d3d'
    }

    if (!product_variant) {
      setShowToaster({ show: true, message: 'Something went wrong! Select Atleast  1 Variant', color: 'danger' })
    }
    if (pickupPoint == 'null') {
      const payload = {
        product_count: product_count,
        product_variant,
        product_id,
        deliveryType,
        userid,
        seller_id: selId,
        sku: window.localStorage.getItem('SKU'),
      }
      addToCart(payload)
    }
    else {
      const payload = {
        product_count: product_count,
        pickupPoint: pickupPoint,
        product_variant,
        product_id,
        deliveryType,
        userid,
        seller_id: selId,
        sku: window.localStorage.getItem('SKU'),
      }
      addToCart(payload)
    }

  };

  const handleToaster = () => {
    setShowToaster({ ...showTaoster, show: false })
  }
  const dispacher = useDispatch()

  const [mergsData, setMergsData] = useState(data?.getaProduct?.images)
  useEffect(() => {
    window.scrollTo(0, 0)
    if (data) {
      const clone = {
        width: 430,
        height: 300,
        zoomWidth: 500,
        img: data?.getaProduct?.variations[0]?.mainImage_url?.url,
      }
      setzoomImageProps(clone)
      const cloen = [...data?.getaProduct?.variations[0]?.images]
      const obj = { url: clone?.img }
      cloen.push(obj)
      setMergsData(cloen)
    }

  }, [data])

  useEffect(() => {
    if (isAddToCartSuccess) {
      dispacher(setCartLeng(datacart?.cart?.products?.length))
      setShowToaster({ show: true, message: 'Product added successfully!', color: 'success' });
    }
    if (isAddToCartError) {
      setShowToaster({ show: true, message: 'Something went wrong! Select atlest 1 Variant', color: 'danger' })
    }
    if (isProductAdded) {
      setProductAdded(true);
    } else {
      setProductAdded(false)
    }
  }, [isAddToCartSuccess, isAddToCartError, isProductAdded])



  const shortVariant = (data) => {
    setVariants({ ...data })
  }


  const { updatedProducts: products } = useSelector((state) => {
    return state.productList
  })
  const [postOffline, { data: resData, isLoading, isSuccess, isError: offErr }] = useOfflineAddPostMutation()

  const notLogin = (id) => {

    const product_count = window.localStorage.getItem("productCount");
    const pickupPoint = window.localStorage.getItem("pickUpPoint");

    const deliveryType = window.localStorage.getItem("deliveryType");
    const product_variant = window.localStorage.getItem("variationsId")
    if (selllerId === null) {
      selId = '64269f0df127906d53878d3d'
    }
    if (!Object.keys(varint).length) {
      setShowToaster({ show: true, message: 'Something went wrong! Select Atleast  1 Variant', color: 'danger' })
    } else {
      if (pickupPoint == 'null') {
        postOffline({
          product_count: product_count,
          product_variant: product_variant,
          deliveryType,
          seller_id: selId,
          sku: window.localStorage.getItem('SKU'),
          product_id: data.getaProduct._id,
          pickupPoint: null,
          products: products ? products : ""
        })

      }
      else {

        postOffline({
          product_count: product_count,
          product_variant: product_variant,
          deliveryType,
          seller_id: selId,
          sku: window.localStorage.getItem('SKU'),
          product_id: data.getaProduct._id,
          pickupPoint: pickupPoint,
          products: products ? products : []
        })

      }
    }

  }
  useEffect(() => {

    if (isSuccess) {
      setShowToaster({ show: true, message: 'Product added successfully!', color: 'success' });
      dispacher(setCartLists(resData.cart.products))
    }
    if (offErr) {
      setShowToaster({ show: true, message: 'Product Not Added!', color: 'danger' });
    }
  }, [isSuccess, offErr])


  const [varientsval, setVariantsval] = useState(null)

  const navigate = useNavigate()

  const BuyNowItem = (id) => {
    if (isLogin === 'false') {
      const product_count = window.localStorage.getItem("productCount");
      const pickupPoint = window.localStorage.getItem("pickUpPoint");

      const deliveryType = window.localStorage.getItem("deliveryType");
      const product_variant = window.localStorage.getItem("variationsId")
      if (selllerId === null) {
        selId = '64269f0df127906d53878d3d'
      }
      if (!Object.keys(varint).length) {
        setShowToaster({ show: true, message: 'Something went wrong! Select Atleast  1 Variant', color: 'danger' })
      } else {
        if (pickupPoint == 'null') {
          postOffline({
            product_count: product_count,
            product_variant: product_variant,
            deliveryType,
            seller_id: selId,
            sku: window.localStorage.getItem('SKU'),
            product_id: data.getaProduct._id,
            pickupPoint: null,
            products: products ? products : ""
          })

        }
        else {
          postOffline({
            product_count: product_count,
            product_variant: product_variant,
            deliveryType,
            seller_id: selId,
            sku: window.localStorage.getItem('SKU'),
            product_id: data.getaProduct._id,
            pickupPoint: pickupPoint,
            products: products ? products : []
          })

        }
      }
    } else {
      const product_count = window.localStorage.getItem("productCount");
      const pickupPoint = window.localStorage.getItem("pickUpPoint");

      const userid = window.localStorage.getItem("user_id");
      const deliveryType = window.localStorage.getItem("deliveryType");
      const product_id = params._id;
      const product_variant = window.localStorage.getItem("variationsId")

      if (selllerId === 'undefined') {
        selId = '64269f0df127906d53878d3d'
      }

      if (!product_variant) {
        setShowToaster({ show: true, message: 'Something went wrong! Select Atleast  1 Variant', color: 'danger' })
      }
      if (pickupPoint == 'null') {
        const payload = {
          product_count: product_count,
          product_variant,
          product_id,
          deliveryType,
          userid,
          seller_id: selId,
          sku: window.localStorage.getItem('SKU'),
        }
        addToCart(payload)
      }
      else {
        const payload = {
          product_count: product_count,
          pickupPoint: pickupPoint,
          product_variant,
          product_id,
          deliveryType,
          userid,
          seller_id: selId,
          sku: window.localStorage.getItem('SKU'),
        }
        addToCart(payload)
      }

    }

    setTimeout(() => {
      navigate('/cart')
    }, 1000);
  }

  const [sendCombos, { isLoading: isLoadingcomb, isError: isErrorcomb, isSuccess: issusscomb }] = useSendComboMutation()

  const [dilevType, setdilevType] = useState('HOME DELIVERY')
  const homeDelever = (str) => {
    setdilevType(str)
  }

  const sendCombo = (id) => {
    if (dilevType === 'HOME DELIVERY') {
      sendCombos({ userid: userid, combo_id: id, deliveryType: dilevType, pickupPoint: null })

    } else {
      console.log(dilevType);
      sendCombos({ userid: userid, combo_id: id, deliveryType: dilevType, pickupPoint: null })
      alert('Combo Not Added')
    }
    setTimeout(() => {
      navigate('/cart')
    }, 1000);
  }


  useEffect(() => {
    if (isErrorcomb) {
      alert('Server Error Combo Product Not Add')
    }
    if (issusscomb) {
      alert('Combo Product Add Successfully')
    }

  }, [isErrorcomb, issusscomb])

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const changeImage = (item,itemIndex) => {
    if (item?.images?.length) {
      setzoomImageProps({ ...zoomImageProps, img: item?.images[0]?.url })
      setMergsData(item.images)
    }else{
      setMergsData(data?.getaProduct?.images)
      setzoomImageProps({ ...zoomImageProps, img: data?.getaProduct?.images[0].url })
    }
   
  }

  return (
    <>
      <Helmet>
        <title>{data?.getaProduct?.title}</title>
        <meta
          name="keyword"
          content={"Fertilizer, Agricultural, Seeds, Machinery, Nutrition"}
        />
        <meta
          name="description"
          content={`${data?.getaProduct?.meta_description}`}
        />
      </Helmet>
      {/* <Breadcrumb title={data?.getaProduct?.name} /> */}
      <ModalQuatation show={show} setShow={setShow} />
      {/* Start Product Details Area */}
      {/* <CustomToaster color={showTaoster.color} title={data?.getaProduct?.name} show={showTaoster.show} setShow={handleToaster} message={showTaoster.message} position="bottom-end" delay={10000} /> */}
      <section className="product-details-area">
        {/* {isLoading && <div className="preloaderCount">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>} */}
        {isAddCartLoading && <div className="preloaderCount">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="SelectImageSec">
                <div className="SelectImg">
                  <SelectImageSlider
                    productData={mergsData}
                    handleUniqueID={handleUniqueID}
                  />
                </div>
                <div className="product-details-image">
                  <ReactImageZoom {...zoomImageProps} />

                  <div className="product-details-desc">

                    {data?.getaProduct?.quotation ?
                      <div className="product-add-to-cart addToCart">
                        <button
                          type="button"
                          className={classnames("default-btn cart btn-row")}
                          onClick={handleShow}
                        >
                          Ask Quotation
                          <BsChatLeftQuoteFill className="svg-icon" />

                        </button>
                      </div>
                      :
                      <div className="product-add-to-cart addToCart">

                        {isLogin === 'true' ? <button
                          type="button"
                          className={classnames("default-btn cart btn-row", { disabled: isAddCartLoading })}
                          onClick={() => {
                            handleAddCart(data?.getaProduct?._id);
                          }}

                        >
                          <FiShoppingCart className="svg-icon" />
                          Add to cart
                          {/* {isAddCartLoading && <Spinner animation="border" className="spinner" />} */}

                        </button> :

                          <button
                            type="button"
                            className={classnames("default-btn cart btn-row", { disabled: isAddCartLoading })}
                            onClick={() => {
                              notLogin(data?.getaProduct?._id);
                            }}

                          >
                            <FiShoppingCart className="svg-icon" />
                            Add to cart
                            {/* {isLoading && <Spinner animation="border" className="spinner" />} */}
                          </button>
                        }


                        <button type="Button" className="default-btn buy" onClick={() => BuyNowItem(data?.getaProduct?._id)}>
                          <BsFillCartFill />
                          Buy it now!
                        </button>
                      </div>
                    }


                  </div>
                  {data?.comboDeals?.length > 0 && <div className="comboShowBox">

                    {data?.comboDeals[0]?.products.map((item, i) => {
                      return <div>
                        <div className="innerCombo" key={i}>
                          <div>
                            <img style={{ width: "110px", height: "110px" }} src={item?.image?.url} />
                          </div>
                          <div>Product Name : {item.name} , variant : {item?.variant[0].weight}</div>
                        </div>
                        {data?.comboDeals[0]?.products.length === i + 1 ? <span></span> : <span>+</span>}
                      </div>
                    })}




                    <div className="btncomboSec">
                      <div style={{ margin: "10px 0" }}>
                        <h5>Offer Price : {data?.comboDeals[0]?.offer_Price}</h5>
                      </div>
                      <ul
                        className="deliveryModeList storageNumber"
                        id="myTab"
                        role="tablist"
                      >
                        <li role="presentation">
                          <button
                            className={`nac-link`}
                            // className={`nac-link ${!str && 'active'}`}
                            id="homeDelivery-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#homeDelivery"
                            type="button"
                            role="tab"
                            aria-controls="homeDelivery"
                            aria-selected="true"
                            onClick={() => homeDelever('HOME DELIVERY')}
                          >
                            Home Delivery
                          </button>
                        </li>

                        <li role="presentation">
                          <button
                            className={`nac-link`}
                            // className={`nac-link ${!str && 'active'}`}
                            id="pickup-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#pickup"
                            type="button"
                            role="tab"
                            aria-controls="pickup"
                            aria-selected="true"
                            onClick={() => homeDelever('pickuppoint')}
                          >
                            Pickup From Store
                          </button>
                        </li>


                      </ul>
                      <button type="Button" className="default-btn buy" onClick={() => { sendCombo(data?.comboDeals[0]._id) }}>
                        <BsFillCartFill />
                        Buy it now!
                      </button>
                    </div>
                    {isLoadingcomb && <div className="preloaderCount">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>}

                  </div>}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12" >
              <ProductDetailContent setVariantsval={setVariantsval} getAllDeta={getAllDeta} shortVariant={shortVariant} value={data} data={data?.getaProduct} wish={data?.wish} isError={isError} isLoading={isProduceDetailLoading} isAddToCartSuccess={isAddToCartSuccess} isAddToCartError={isAddToCartError} changeImage={changeImage} />
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="tab products-details-tab">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <ul className="tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          id="description-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#description"
                          type="button"
                          role="tab"
                          aria-controls="description"
                          aria-selected="true"
                        >
                          <div className="dot"></div>
                          Description
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="additional-information-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#additional-information"
                          type="button"
                          role="tab"
                          aria-controls="additional-information"
                          aria-selected="false"
                        >
                          <div className="dot"></div>
                          Additional information
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="brochure-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#brochure"
                          type="button"
                          role="tab"
                          aria-controls="brochure"
                          aria-selected="false"
                        >
                          <div className="dot"></div>
                          Brochure
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="video-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#video"
                          type="button"
                          role="tab"
                          aria-controls="video"
                          aria-selected="false"
                        >
                          <div className="dot"></div>
                          Video
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab_content tab-pane fade show active"
                        id="description"
                        role="tabpanel"
                        aria-labelledby="description-tab"
                      >
                        <div className="tabs_item">
                          <div className="products-details-tab-content" dangerouslySetInnerHTML={createMarkup(data?.getaProduct.productDescription)} />
                        </div>
                      </div>
                      <div
                        className="tab_content tab-pane fade"
                        id="additional-information"
                        role="tabpanel"
                        aria-labelledby="additional-information-tab"
                      >
                        <div className="tabs_item">
                          <div className="products-details-tab-content">
                            <ul className="additional-information">
                              <li>
                                <span><strong>Brand:</strong></span>
                                <span>{data?.getaProduct?.brand_id?.name}</span>
                              </li>
                              <li>
                                <span><strong>Weight:</strong></span>
                                <span>{varientsval?.weight}</span>
                              </li>
                              {data?.getaProduct?.attributes?.map((item, i) => {
                                return <li key={i}>
                                  <span><strong>{item?.label?.name} :</strong></span>
                                  <span>{item?.value}</span>
                                </li>
                              })}

                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab_content tab-pane fade"
                        id="brochure"
                        role="tabpanel"
                        aria-labelledby="brochure-tab"
                      >
                        <div className="tabs_item">
                          <div className="products-details-tab-content">
                            <a
                              className="downloadBtn"
                              href="https://www.fertilizer.org/images/Library_Downloads/2016_Nutrient_Management_Handbook.pdf"
                              download
                              target="_blank"
                            >
                              <RiDownloadCloudFill />{" "}
                              <span className="txt">Download</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab_content tab-pane fade"
                        id="video"
                        role="tabpanel"
                        aria-labelledby="video-tab"
                      >
                        <div className="tabs_item">
                          <div className="products-details-tab-content">
                            {/* <video width="400" controls>
                              <source src={`${data?.video_link}`} type="video/mp4" />
                              <source src={`${data?.getaProduct?.video_link}`} type="video/ogg"/>
                              Your browser does not support HTML video.
                            </video> */}
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/6j1IAnPuzqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div style={{ margin: "20px 0" }}>
                <h5>Meta Title : {data?.getaProduct?.meta_title} </h5>
                <h5>Meta Description : {data?.getaProduct?.meta_description}</h5>
              </div> */}

            </div>
          </div>
        </div>

      </section>
      {/* <Review ids={window.localStorage.getItem('variant_id')} /> */}
      {/* <RelatedProducts productData={productData} /> */}
      {/* End Product Details Area */}
    </>
  );
}

export default ProductDetails
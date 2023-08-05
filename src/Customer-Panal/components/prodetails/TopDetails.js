import { useState } from "react";
import img from "../../../assets/img/brands/dhanuka.jpg"
import { QuantityCounter } from "./Counter";
import { useEffect } from "react";
import axios from "axios";
import trust from "../../../assets/img/trust2.jpg";
import payment1 from "../../../assets/img/payment/1.svg";
import payment2 from "../../../assets/img/payment/2.svg";
import payment3 from "../../../assets/img/payment/3.svg";
import payment4 from "../../../assets/img/payment/4.svg";
import payment5 from "../../../assets/img/payment/5.svg";
import payment6 from "../../../assets/img/payment/6.svg";
import payment7 from "../../../assets/img/payment/7.svg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiOutlineNumber, AiTwotoneHeart } from "react-icons/ai";
import pickupVan from "../../../assets/img/pickup.png";
import { useSetCartMutation, useSetWishListMutation } from "../products/productSlice";
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

// function createMarkup(data) {
//     return { __html: data };
// }
function TopDetails({ param }) {

    const userid = window.localStorage.getItem("user_id");
    const [data, setData] = useState()
    const [mainImg, setMainImg] = useState(null)
    const [allImg, setAllImg] = useState()
    const [count, setCount] = useState(0)
    const [skus, setskus] = useState(null)

    const getAllDeta = async () => {
        const userId = userid ? userid : null
        try {
            const user = await axios.get(`https://onlineparttimejobs.in/api/product/public/${param + '&' + userId}`)

            setData(user.data)
            setMainImg(user.data.getaProduct?.mainimage_url?.url)
            const allimg = [...user.data.getaProduct?.images]
            allimg.push({ _id: Math.random(), url: user.data.getaProduct?.mainimage_url?.url })
            setAllImg(allimg)
            setskus(user.data?.getaProduct?.variations[0]?.sku)
            window.localStorage.setItem("variationsId", user?.data.getaProduct?.variations[0]._id)
        } catch (error) {
            alert('Server Error Product not Load!!')
        }
    }
    useEffect(() => {
        getAllDeta()
        window.localStorage.setItem("variationsId", null)
    }, [])

    const sendImg = (url) => {
        setMainImg(url)
    }

    const sendVariant = (i, item) => {
        setCount(i)
        window.localStorage.setItem("variationsId", item._id)
        setskus(item.sku)
    }
    const [setWishList, { isSuccess }] = useSetWishListMutation();
    const handleWishlist = () => {

        const paylode = {
            userid: window.localStorage.getItem("user_id"),
            productid: param
        }
        setWishList(paylode);


    };

    useEffect(() => {
        if (isSuccess) {
            getAllDeta()
        }
    }, [isSuccess])


    const [addToCart, { data: datacart, isLoading: isAddCartLoading, isSuccess: isAddToCartSuccess, isError: isAddToCartError }] = useSetCartMutation()
    const addTocart = async () => {
        const obj = {
            deliveryType: "HOME DELIVERY",
            product_count: window.localStorage.getItem('productCount'),
            product_id: param,
            product_variant: window.localStorage.getItem('variationsId'),
            sku: skus,
            userid: userid
        }
        addToCart(obj)

    }
    useEffect(() => {
        if (isAddToCartSuccess) {
            alert('Add TO Cart successfully...')
        }
        if (isAddToCartError) {
            alert('Add TO Cart  Faill ... !!')
        }

    }, [isAddToCartSuccess, isAddToCartError])



    const navigate = useNavigate()

    const BuyNowItem = (id) => {
        const product_count = window.localStorage.getItem("productCount");

        const userid = window.localStorage.getItem("user_id");
        const product_id = param
        const product_variant = window.localStorage.getItem("variationsId")

        const payload = {
            product_count: product_count,
            product_variant: window.localStorage.getItem('variationsId'),
            product_id: param,
            deliveryType: "HOME DELIVERY",
            userid,
            seller_id: null,
            sku: skus,
        }
        addToCart(payload)

        setTimeout(() => {
            navigate('/customer/cart')
        }, 1000);
    }

    return <section id="services" className="services section-bg">
        <div className="container">

            <div className="row row-sm" style={{ width: "1100px", margin: "auto" }}>
                <div className="col-md-6 _boxzoom">
                    <div className="zoom-thumb">
                        <ul className="piclist">
                            {allImg && allImg.map((item) => {
                                return <li onClick={() => { sendImg(item.url) }} key={item._id}><img src={item.url} alt="" /></li>
                            })}
                        </ul>
                    </div>
                    <div className="_product-images">
                        <img src={mainImg} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="_product-detail-content">
                        <p className="_p-name" style={{ display: "flex", justifyContent: "space-around" }}> {data?.getaProduct?.name}
                            {data?.wish ? <AiTwotoneHeart style={{ marginLeft: "10px" }} onClick={() => { handleWishlist(data?._id) }} /> : <AiOutlineHeart style={{ marginLeft: "10px" }}
                                className="productWishList" l
                                onClick={() => {
                                    handleWishlist(data?._id);
                                }}
                            />}
                        </p>
                        <div className="_p-price-box">
                            <div className="p-list">
                                <span> M.R.P. : <i className="fa fa-inr"></i> <del> {data?.getaProduct?.variations[count].mrp}  </del>   </span>
                                <span className="price"> Rs. {data?.getaProduct?.variations[count].sale_rate} </span>
                            </div>
                            <div className="_p-add-cart">
                                <div className="_p-qty">
                                    <span style={{ fontSize: '16px' }}>Add Quantity</span>
                                    {/* <div className="value-button decrease_" id="" value="Decrease Value">-</div> */}
                                    <QuantityCounter />
                                    {/* <div className="value-button increase_" id="" value="Increase Value">+</div> */}
                                </div>
                            </div>
                            <h6>Brand : {data?.getaProduct?.brand_id?.name} </h6>
                            <div className="shareProductSec borderTop">
                                <div className="titleText">
                                    <AiOutlineNumber />
                                    <h6>SKU: {data?.getaProduct?.variations[count]?.sku}</h6>
                                </div>
                            </div>
                            <div className="_p-add-cart">
                                <div className="_p-qty">
                                    <span style={{ fontSize: '16px' }} >Select Type </span>
                                    <div className="fortypePro">
                                        {data && data?.getaProduct?.variations.map((item, i) => {
                                            return <span onClick={() => { sendVariant(i, item) }} className={i === count && 'setColor'} key={i}>{item?.weight}</span>
                                        })}


                                    </div>
                                </div>
                            </div>

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
                                                src={pickupVan}
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
                            <div className="buy-checkbox-btn">
                                <div className="trustFigure">
                                    <img src={trust} alt="Product" className="img-fluid" />
                                </div>
                            </div>
                            <div className="custom-payment-options" style={{ margin: "10px 0" }}>
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
                            </div>
                            <form action="" method="post" acceptCharset="utf-8">
                                <ul className="spe_ul"></ul>
                                <div className="_p-qty-and-cart">
                                    <div className="_p-add-cart">
                                        <button onClick={BuyNowItem} type="button" className="btn-theme btn buy-btn" tabIndex="0">
                                            <i className="fa fa-shopping-cart"></i> Buy Now
                                        </button>
                                        <button type="button" onClick={addTocart} className="btn-theme btn btn-success" tabIndex="0">
                                            <i className="fa fa-shopping-cart"></i> Add to Cart
                                        </button>
                                        {/* <input type="hidden" name="pid" value="18" />
                                        <input type="hidden" name="price" value="850" />
                                        <input type="hidden" name="url" value="" /> */}
                                    </div>
                                </div>
                            </form>
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
                                            url={`https://etgfrontlive.s3infotech.online/product/${param}`}
                                        >
                                            <FacebookIcon logofillcolor='white' round={true}></FacebookIcon>
                                        </FacebookShareButton>
                                    </li>

                                    <li>
                                        <WhatsappShareButton
                                            url={`https://etgfrontlive.s3infotech.online/product/${param}`}
                                        >
                                            <WhatsappIcon logofillcolor='white' round={true}></WhatsappIcon>
                                        </WhatsappShareButton>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>

    </section>
}
export default TopDetails
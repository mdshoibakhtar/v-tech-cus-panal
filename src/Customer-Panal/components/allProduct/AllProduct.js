import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { BsFillCartFill } from "react-icons/bs";
import fertilizer1 from '../../../assets/img/client-bg.png'
import Rating from "../../../shared/rating/Rating";
function AllProduct() {

    const [products, setProducts] = useState(null)

    const getProducts = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/product/page/0`)
        setProducts(res.data)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return <>
        <div className="aiz-user-panel">
            <div className="aiz-titlebar mt-2 mb-4">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="h3">All Products</h1>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0 h6">Products</h5>
                </div>
                <div className="card-body">
                    <div className="table-tag">
                        <section className="prodcutsSec">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-lg-12">

                                                <div
                                                style={{display:"flex", flexWrap:"wrap"}}
                                                // className={`row changeGrid ${listView ? "listView" : ""}`}
                                                >
                                                    {products && products?.map((item, i) => {
                                                        return <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
                                                            <div className="featuredInfo">
                                                                <div className="featuredFigure">

                                                                    <div className="featuredImg" style={{ display: "flex", justifyContent: "center" }}>

                                                                        <Link to={`/customer/product/${item._id}`}>
                                                                            {item?.mainimage_url ? <img src={item?.mainimage_url.url} alt="Product" className="imgProduct" /> : <img src={fertilizer1} alt="Product" />}
                                                                        </Link>
                                                                    </div>
                                                                    <ul className="hotList">
                                                                        <li>
                                                                            <Link to="/products">hot</Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="products">- {item?.variations[0].discount}</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="featuredContent">
                                                                    <h6>category</h6>
                                                                    <h5>
                                                                        <Link to={`/customer/product/${item._id}`}>{item.name}</Link>
                                                                    </h5>
                                                                    {/* <Rating /> */}
                                                                    <div className="rateDigit">
                                                                        <span className="cross">{item?.variations ? item?.variations[0]?.mrp : ''}</span>
                                                                        <span className="currentPrice">{item?.variations ? item?.variations[0]?.sale_rate : ''}</span>
                                                                    </div>
                                                                    <div className="buyNowInfo" style={{display:"flex"}}>

                                                                        <Link style={{padding:"10px"}} to={`/customer/product/${item._id}`} className="btn btn-danger addCart">View Detail</Link>
                                                                        <Link to="#"
                                                                        style={{padding:"10px",marginLeft:"10px",fontSize:"smaller"}}
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
                                                    })}

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="aiz-pagination"></div>
                </div>
            </div>
        </div>
    </>
}
export default AllProduct
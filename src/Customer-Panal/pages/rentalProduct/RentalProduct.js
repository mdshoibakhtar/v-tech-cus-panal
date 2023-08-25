import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { BsFillCartFill } from "react-icons/bs";
import fertilizer1 from '../../../assets/img/cultivation-white.png'
import { Button } from "react-bootstrap";

function RentalProduct() {

    const [products, setProducts] = useState(null)
    const [load, setLoad] = useState(12)

    const getProducts = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/serviceProductRent/admin`)
        setProducts(res.data)
    }
    useEffect(() => {
        getProducts()
    }, [])

    const loadMore = () => {
        setLoad(load + 6)
    }
    return <>
        <div className="aiz-user-panel">
            <div className="aiz-titlebar mt-2 mb-4">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="h3">Rent Products</h1>
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
                                                    style={{ display: "flex", flexWrap: "wrap" }}
                                                // className={`row changeGrid ${listView ? "listView" : ""}`}
                                                >
                                                    {products && products?.map((item, i) => {
                                                        console.log(item);
                                                        return <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
                                                            <div className="featuredInfo">
                                                                <div className="featuredFigure">

                                                                    <div className="featuredImg" style={{ display: "flex", justifyContent: "center" }}>

                                                                        <Link to={`/customer/product/${item._id}`}>
                                                                            {item?.product_image?.url ? <img src={item?.product_image.url} alt="Product" className="imgProduct" /> : <img src={fertilizer1} alt="Producdt" />}
                                                                        </Link>
                                                                    </div>
                                                                    <ul className="hotList">
                                                                        <li>
                                                                            <Link to="/products">hot</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="featuredContent">
                                                                    <h6>category</h6>
                                                                    <h5>
                                                                        <Link to={`/customer/product/${item._id}`}>{item.product_name}</Link>
                                                                    </h5>
                                                                    <div className="buyNowInfo" style={{ display: "flex" }}>
                                                                        <div>
                                                                            <h6 style={{display:"grid"}}><span>Rs {item?.list[0].services[0]?.sale_price} </span> <span style={{fontSize:"12px"}}>per-month</span></h6>
                                                                           
                                                                        </div>

                                                                        <Link to={`/customer/rent-product/${item._id}`}
                                                                            style={{ padding: "10px", marginLeft: "10px", fontSize: "smaller" }}
                                                                            className="btn btn-primary buyNow">
                                                                            <BsFillCartFill /> Rent Now
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
                                            {/* <Button style={{ width: "140px", margin: "auto" }} onClick={loadMore} variant="primary">Load more..</Button> */}
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
export default RentalProduct
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./orderDetail.css"
import axios from "axios"
import { Button } from "react-bootstrap"
// import jsPDF from "jspdf"

import React from "react";
import QRCode from "react-qr-code";
import { GiReturnArrow } from "react-icons/gi"
import ReturnsModal from "./ReturnsModal"

function OrderDetail() {
    const isLogin = window.localStorage.getItem("isLogin")
    const idUser = window.localStorage.getItem("user_id")
    const params = useParams()
    const navigate = useNavigate()

    const curr = window.localStorage.getItem('currencySym')
    const currencySymbol = curr ? curr : 'ZK'

    const invoce = window.localStorage.getItem('Invoice')

    const [data, setData] = useState(null)

    const fechData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/order/getOrderById/${params.id}`)
        setData(res.data);
    }

    useEffect(() => {
        if (!isLogin) {
            navigate('/login')
            return
        } else {

            fechData()
        }
    }, [])

    // const GeneratePdf = () => {
    //     var doc = new jsPDF('landscaps', 'px', 'a4', 'false')
    //     doc.text(70, 100, `Delivery Status : ${data?.getaOrderById?.orderStatusTrans[data?.getaOrderById?.orderStatusTrans.length - 1].orderStatusId?.orderStatusName}`)
    //     doc.text(70, 120, `Order Date : ${data?.createdAt}`)
    //     doc.text(70, 140, `Customer Name : ${data?.getaOrderById?.user?.firstname + " " + data?.getaOrderById?.user?.lastname}`)
    //     doc.text(70, 160, `Order Amount  : ${data?.getaOrderById?.grandTotal}`)
    //     doc.text(70, 180, `Order Amount  : ${data?.getaOrderById.order_referenceNo}`)
    //     doc.text(70, 200, `Payment Status  : ${data?.getaOrderById?.Payment_Status?.paymentStatusName}`)

    //     doc.text(70, 220, `# Billing Address #`)
    //     doc.text(70, 240, `Address Line 1  : ${data?.getaOrderById?.billingAddress?.baddressLine1}`)
    //     doc.text(70, 260, `Address Line 1  : ${data?.getaOrderById?.billingAddress?.baddressLine2}`)
    //     doc.text(70, 280, `City  : ${data?.getaOrderById?.billingAddress?.bcity}`)
    //     doc.text(70, 300, `State  : ${data?.getaOrderById?.billingAddress?.bstate}`)
    //     doc.text(70, 320, `Country  : ${data?.getaOrderById?.billingAddress?.bcountry}`)

    //     if (data?.getaOrderById.pickupAddress) {
    //         doc.text(70, 340, `# pickUp Address #`)
    //         doc.text(70, 360, `Pickup Point Name  : ${data?.getaOrderById?.pickupAddress?.pickupPoint_name}`)
    //         doc.text(70, 380, `Address : ${data?.getaOrderById?.pickupAddress?.address}`)
    //         doc.text(70, 400, `Province  : ${data?.getaOrderById?.pickupAddress?.province}`)
    //         doc.text(70, 420, `Phone  : ${data?.getaOrderById?.pickupAddress?.phone}`)
    //     } else {
    //         doc.text(70, 340, `# Shipping Address #`)
    //         doc.text(70, 360, `Address Line 1  : ${data?.getaOrderById?.shippingAddress_save?.addressLine1}`)
    //         doc.text(70, 380, `Address Line 1  : ${data?.getaOrderById?.shippingAddress_save?.addressLine2}`)
    //         doc.text(70, 400, `City  : ${data?.getaOrderById?.shippingAddress_save?.city}`)
    //         doc.text(70, 420, `State  : ${data?.getaOrderById?.shippingAddress_save?.state}`)
    //         doc.text(70, 440, `Country  : ${data?.getaOrderById?.shippingAddress_save?.country}`)
    //     }





    //     doc.save('OrderDetail.pdf')



    //     // doc.setFont('courier')
    //     // doc.setFontType('normal')


    //     // doc.save("OrderDetai.pdf")

    //     // doc.html(document.querySelector('#pdfGen', {
    //     //     callback: function (pdf) {
    //     //         pdf.save("OrderDetai.pdf")
    //     //         console.log(pdf);
    //     //     }
    //     // }))

    // }
    const [modalShow, setModalShow] = useState(false);
    const [item, setItem] = useState()
    const [index, setIndex] = useState()
    const [valDatas, setvalData] = useState()

    const sendDataModal = (item, i, valData) => {
        setModalShow(true)
        setItem(item)
        setIndex(i)
        setvalData(valData)
    }

    return <div>

        <div className="container ">

            {data ? <div className="row orderdetails" id="pdfGen">
                <div className="bar-code">
                    <div>
                        <h5 style={{ textTransform: "uppercase" }}> Customer Name : {data?.getaOrderById?.user?.firstname}  {data?.getaOrderById?.user?.lastname}</h5>
                        <h6><span className="fontSize">Order Date</span> :{data?.createdAt}</h6>
                        <h6><span className="fontSize">Order No</span> : <span style={{ color: "#fb641b" }}>{data?.getaOrderById.order_referenceNo}</span></h6>
                        <h6><span className="fontSize">Order Amount</span> : {data?.getaOrderById?.currency?.symbol} <strong>{data?.getaOrderById?.grandTotal}</strong>.0</h6>
                        <h6><span className="fontSize">Paid</span> : {data?.getaOrderById?.Paid}.0</h6>
                        <h6><span className="fontSize">Balance</span> : {data?.getaOrderById?.Balance}.0</h6>
                    </div>
                    <div>
                        <h6><span className="fontSize">Delivery Status</span> :<span style={{ color: "#fb641b" }}><strong>{data?.getOrderTrans[0].orderStatusId.orderStatusName}</strong></span> </h6>
                        <h6><span className="fontSize">Payment Status</span> : {data?.getaOrderById?.Payment_Status?.paymentStatusName}</h6>
                        <h6><span className="fontSize">Payment Method</span> :COD </h6>
                        <h6><span className="fontSize">AWB Number</span> :{data?.deliverys && data?.deliverys[0]?.AwbNo} </h6>
                        <h6><span className="fontSize">Reference No</span> :{data?.deliverys ? data?.deliverys[0]?.courier_reference_no : ''} </h6>
                        <h6><span className="fontSize">Mode</span> :{data?.deliverys ? data?.deliverys[0]?.mode : ''} </h6>
                        <h6><span className="fontSize">Courier Company Name</span> :{data?.deliverys ? data?.deliverys[0]?.courierName : ''} </h6>
                    </div>
                    {/* <div className="barSpace"><img src={inputRef} /></div> */}
                    <div style={{ background: 'white', padding: '16px', width: "160px" }}>
                        <QRCode
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={data?.getaOrderById?.order_referenceNo}
                            viewBox={`0 0 256 256`} />
                    </div>
                </div>

                <div className="order-detail-bill " style={{ display: "flex", justifyContent: "space-between" }}>


                    <div style={{ marginBottom: "10px" }}>
                        <h4>Billing Address  </h4>
                        <h6 style={{ textTransform: "uppercase" }}> Customer Name : {data?.getaOrderById?.user?.firstname}  {data?.getaOrderById?.user?.lastname}</h6>
                        <h6 style={{ textTransform: "uppercase" }}> Company Name : ABC Company</h6>
                        <div><span className="fontSize">Address Line 1 : {data?.getaOrderById?.billingAddress?.baddressLine1}</span></div>
                        <div><span className="fontSize">Address Line 2 : {data?.getaOrderById?.billingAddress?.baddressLine2}</span></div>

                        <div>City : {data?.getaOrderById?.billingAddress?.bcity}</div>
                        <div>State : {data?.getaOrderById?.billingAddress?.bstate}</div>
                        <div>Country : {data?.getaOrderById?.billingAddress?.bcountry}</div>
                        <div>Phone : {data?.getaOrderById?.billingAddress?.bphone}</div>
                        <div>Email : {data?.getaOrderById?.billingAddress?.bemail}</div>
                        <h6>GST : IGda8797</h6>

                    </div>



                    {data?.getaOrderById.pickupAddress ? <div style={{ marginBottom: "10px" }}>
                        <h4>Pickup Points Address</h4>
                        <div>Pickup Point Name : <strong>{data?.getaOrderById?.pickupAddress?.pickupPoint_name}</strong></div>
                        <div>Address : {data?.getaOrderById?.pickupAddress?.address}</div>
                        <div><span className="fontSize">Province</span>  {data?.getaOrderById?.pickupAddress?.province}</div>
                        <div><span className="fontSize">Phone</span>  {data?.getaOrderById?.pickupAddress?.phone}</div>
                    </div> : <div style={{ marginBottom: "10px" }}>
                        <h4>Shipping Address  </h4>
                        <h6 style={{ textTransform: "uppercase" }}> Name : {data?.getaOrderById?.user?.firstname}  {data?.getaOrderById?.user?.lastname}</h6>
                        <h6 style={{ textTransform: "uppercase" }}> Company Name : ABC Company</h6>

                        <div><span className="fontSize">Address Line 1 : {data?.getaOrderById?.shippingAddress_save ? data?.getaOrderById?.shippingAddress_save?.addressLine1 : data?.getaOrderById?.billingAddress?.baddressLine1}</span></div>
                        <div><span className="fontSize">Address Line 2 : {data?.getaOrderById?.shippingAddress_save ? data?.getaOrderById?.shippingAddress_save?.addressLine2 : data?.getaOrderById?.billingAddress?.baddressLine2}</span></div>

                        <div>City : {data?.getaOrderById?.shippingAddress_save ? data?.getaOrderById?.shippingAddress_save?.city : data?.getaOrderById?.billingAddress?.bcity}</div>
                        <div>State : {data?.getaOrderById?.shippingAddress_save ? data?.getaOrderById?.shippingAddress_save?.state : data?.getaOrderById?.billingAddress?.bstate}</div>
                        <div>Country : {data?.getaOrderById?.shippingAddress_save ? data?.getaOrderById?.shippingAddress_save?.country : data?.getaOrderById?.billingAddress?.bcountry}</div>
                        <div>Phone :{data?.getaOrderById?.shippingAddress_save?.phone}</div>
                        <div>Email :{data?.getaOrderById?.shippingAddress_save?.email}</div>

                    </div>}

                    <div style={{ marginBottom: "10px" }}>
                        <h4>Seller Address  </h4>
                        <div style={{ textTransform: "uppercase" }}><strong>Seller Name : <strong>{data?.getaOrderById?.Seller[0]?.firstname} {data?.getaOrderById?.Seller[0]?.lastname}</strong></strong></div>

                        <strong>Company Name: {data?.getaOrderById?.Seller[0]?.Company}</strong>
                        <div><span className="fontSize">Address Line 1 : {data?.getaOrderById?.Seller[0]?.addressLine1}</span></div>
                        <div><span className="fontSize">Address Line 2 : {data?.getaOrderById?.Seller[0]?.addressLine2}</span></div>

                        <div>City : {data?.getaOrderById?.Seller[0]?.city}</div>
                        <div>State : {data?.getaOrderById?.Seller[0]?.state}</div>
                        <div>Country : {data?.getaOrderById?.Seller[0]?.country}</div>
                        <div>Phone : {data?.getaOrderById?.Seller[0]?.mobile}</div>
                        <div>Email : {data?.getaOrderById?.Seller[0]?.email}</div>
                        <h6>GST : IGda8797</h6>
                    </div>

                </div>


                {/* <div className="gstDtails">
                    <div className="customerGst">
                        <h5>GST Details</h5>
                    </div>
                    <div className="sellerGst">sdd</div>
                </div> */}


                <div className="classOverflow">
                    {/* <Button variant="info" onClick={GeneratePdf}>Downlode PDF</Button> */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Variant</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Sub Total</th>
                                <th scope="col">Tax%</th>
                                <th scope="col">Tax</th>
                                <th scope="col">Total</th>
                                <th scope="col">Delivery Type</th>
                                <th scope="col">Refund</th>
                            </tr>
                        </thead>
                        <tbody>

                            {!invoce && (
                                data?.products.map((item, i) => {
                                    return <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{item.product_name}</td>
                                        <td>{item?.product_variant.weight}</td>
                                        <td>{item.product_count}</td>
                                        <td>{data?.getaOrderById?.currency?.symbol} {item.product_variant.sale_rate}</td>
                                        <td>{data?.getaOrderById?.currency?.symbol} {item?.product_subTotal}</td>
                                        <td>{item?.product_variant?.tax}</td>
                                        <td>{item?.product_tax}</td>
                                        {/* <td> {item.product_count * item.product_variant.sale_rate + data?.getaOrderById?.products[i].tax}</td> */}

                                        <td>{data?.getaOrderById?.currency?.symbol} {item?.product_total}</td>

                                        <td>{data?.getaOrderById?.products[i]?.deliveryType}</td>
                                        <td>
                                            <GiReturnArrow onClick={() => sendDataModal(item, i, data?.getaOrderById?.products[i])} />
                                        </td>
                                    </tr>
                                })
                            )}

                        </tbody>
                    </table>
                </div>






                <div style={{ display: "flex", justifyContent: "end" }}>
                    <div className="col-lg-3">
                        <div className="cartTotals">
                            <h5 className="cartTitle">Price Details</h5>

                            <div className="subTotal">
                                <h6>Base Price</h6>
                                <p> {data?.getaOrderById?.basePrice}</p>
                            </div>


                            <div className="subTotal">
                                <h6>Coupon</h6>
                                <p style={{ fontSize: "13px" }}> <span style={{ color: "rebeccapurple" }}>{data?.getaOrderById?.coupon_id?.code}</span> ( {data?.getaOrderById?.coupon_id?.discount} {data?.getaOrderById?.coupon_id?.discount_type === 'Percent' ? 'Percent' : 'Amount'} )</p>
                            </div>
                            <div className="subTotal">
                                <h6>Discount Amount </h6>
                                <p> {data?.getaOrderById?.discount}</p>
                            </div>

                            <div className="subTotal">
                                <h6>Tax Amount</h6>
                                <p> {data?.getaOrderById?.tax}</p>
                            </div>
                            <div className="subTotal">
                                <h6>Shipping</h6>
                                <p> {data?.getaOrderById?.shippingCost}</p>
                            </div>
                            <div style={{ margin: "4px 0", borderTop: "1px solid black" }}></div>
                            <div className="subTotal">
                                <h6>Grand Total</h6>
                                <p> {data?.getaOrderById?.grandTotal}</p>
                            </div>


                        </div>
                    </div>

                </div>










                {/* <h6 style={{ textAlign: "right" }}>Base Price : {data?.getaOrderById?.basePrice}</h6>
                {data?.getaOrderById?.coupon_id?.code && <div className="mb-2" style={{ textAlign: "end" }}>
                    <div className="pr-2">COUPON CODE : <strong> {data?.getaOrderById?.coupon_id?.code} ( {data?.getaOrderById?.coupon_id?.discount} ({data?.getaOrderById?.coupon_id?.discount_type === 'Percent' ? 'Percent' : 'Amount'}) )</strong></div>
                </div>}
                <h6 style={{ textAlign: "right" }}>Discount Amount : {data?.getaOrderById?.discount}</h6>
                {data?.getaOrderById?.shippingCost > 0 && <h5 style={{ textAlign: "right" }}>Shipping Cost : {data?.getaOrderById?.shippingCost}</h5>}

                <h5 style={{ textAlign: "right" }}>Grand Total :{data?.getaOrderById?.currency?.symbol} {data?.getaOrderById?.grandTotal}</h5> */}

            </div> : <div className="preloaderCount">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            {modalShow && <ReturnsModal
                show={modalShow}
                item={item}
                data={data}
                param={params.id}
                valData={valDatas}
                index={index}
                onHide={() => setModalShow(false)}
            />}

        </div>
    </div >
}
export default OrderDetail
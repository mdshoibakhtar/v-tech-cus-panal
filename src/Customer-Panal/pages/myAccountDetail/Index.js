import { useEffect, useState } from "react"
import { Button, Table } from "react-bootstrap"
import { GrView } from "react-icons/gr"
import { FcCancel } from "react-icons/fc"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { TbShoppingCartPlus } from "react-icons/tb"
import ModalCancel from "./ModalCancel"
import { useGetAllStatusOrdersQuery, useGetPickUpPointsQuery } from "../../components/products/productSlice"
function MyAccountDetail() {
    const isLogin = window.localStorage.getItem("isLogin")
    const idUser = window.localStorage.getItem("user_id")

    const navigate = useNavigate()
    useEffect(() => {
        if (isLogin === 'false') {
            navigate('/login')
            return
        }
    }, [])


    const [data, setData] = useState(null)

    const fechData = async () => {
        const res = await axios.get(`https://onlineparttimejobs.in/api/order/getorderbyuser/${idUser}`)
        setData(res.data);
    }
    useEffect(() => {
        fechData()
    }, [])

    window.localStorage.setItem('Invoice', '')

    const [modalShow, setModalShow] = useState(false);
    const [val, setVal] = useState(null);
    const sendValues = (val) => {
        setModalShow(true)
        setVal(val)
    }

    const sendCancel = () => {
        navigate('/customer/cancelOrders')
    }

    const { data: pickup, isLoading } = useGetAllStatusOrdersQuery()

    const getIdstatus = async (e) => {
        if (e.target.value === '1') {
            fechData()
        } else {
            const res = await axios.get(`https://onlineparttimejobs.in/api/orderStatusTransaction/filter/user/${idUser + '&' + e.target.value}`)
            setData(res.data);  
        }
       
    }


    return <div style={{width:"1000px", margin:"0 auto"}}>
        <h2 style={{ display: "flex", justifyContent: "center" }}>Purchase History</h2>
        <div style={{
            display: 'flex',
            justifyContent: 'start',
            width: '1000px',
            margin: 'auto',
            cursor: "pointer",
            justifyContent: "space-between"
        }}>
            <h5 onClick={sendCancel}>See Your Cancel Orders</h5>
            <div style={{ width: "300px" }}>
                <select class="form-select" onChange={getIdstatus} aria-label="Default select example">
                    <option value="1">All Status</option>
                    {pickup && pickup.map((item) => {
                        return <option key={item._id} value={item._id}>{item?.orderStatusName}</option>
                    })}
                </select>
            </div>
        </div >
        <div className="container classOverflow" style={{ margin: "20px auto" }} >
            <Table bordered hover className="table aiz-table mb-0 footable footable-1 breakpoint-xl">
                <thead>
                    <tr className="footable-header">
                        <th>Order Code</th>
                        <th>Order No</th>
                        <th>Order Date</th>
                        <th>Order Amount</th>
                        <th>Order Delivery Status</th>
                        <th>Order Payment Status</th>
                        <th>Delivery Type</th>
                        <th>Action</th>
                        <th>Cancel</th>
                        <th>Re-Order</th>
                    </tr>
                </thead>
                <tbody >
                    {data ? data.map((item, i) => {
                        return <tr key={i} className="showHidden">
                            <td>{item._id}</td>
                            <td>{item.order_referenceNo}</td>
                            <td>{item.createdAt}</td>
                            <td style={{ textAlign: "right", paddingRight: "20px" }}>{item?.currency?.symbol ? item?.currency?.symbol : 'ZK'} {item.grandTotal}</td>
                            <td>{item?.orderStatusTrans && <strong>{item?.orderStatusTrans[item.orderStatusTrans?.length - 1]?.orderStatusId?.orderStatusName}</strong>}</td>
                            <td>COD</td>
                            <td>{item?.products[0]?.deliveryType} {item?.products[0]?.pickupPoints?.pickupPoint_name}</td>
                            <td style={{ display: "table-cell" }}>
                                <Button variant=""> <Link to={`/customer/order-detail/${item._id}`}><GrView /></Link></Button>
                            </td>
                            <td style={{ display: "table-cell" }}>
                                <Button variant="" onClick={() => sendValues(item)}><FcCancel /></Button>
                            </td>
                            <td style={{ display: "table-cell" }}>
                                <Button variant=""> <TbShoppingCartPlus /></Button>
                            </td>
                        </tr>

                    }) : <tr>
                        <th><div className="preloaderCount">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div></th></tr>}


                </tbody>
            </Table>

            {modalShow && <ModalCancel
                show={modalShow}
                val={val}
                fechData={fechData}
                onHide={() => setModalShow(false)}
            />}
        </div>
    </div>
}
export default MyAccountDetail
import { useState } from "react"
import { Modal } from "react-bootstrap"
import { FaEdit } from "react-icons/fa"
import { useSetBillingActiveMutation } from "../../components/products/productSlice"
import FormBillAdd from "../../components/profile/FormBillAdd";
import EditAddress from "../../components/profile/EditAddress";
import axios from "axios";
import { useEffect } from "react";

function BillingAddress() {
    const userid = window.localStorage.getItem("user_id");
    const [data, setData] = useState(null)
    const [show, setShow] = useState(false);

    const [setActive, { isLoading, isSuccess }] = useSetBillingActiveMutation()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [state, setState] = useState(false)

    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/user/billAddress/${userid}`)
            setData(res.data.address)
        } catch (error) {
            alert('Server Error Failed To load Data')
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const setIdAddresdEdit = (id) => {
        window.localStorage.setItem('setIdEditAdress', id)
        handleShow()
    }

    useEffect(() => {
        if (isSuccess) {
            getData()
        }
    }, [isSuccess])

    const billingShippingActive = (item) => {
        setState(true)
        setActive({ itemId: item._id, userid: userid })
        setTimeout(() => {
            setState(false)
        }, 1000);
    }

    return <div className="addressInfo mt-3">

        {/* {isLoading && <div className="preloaderCount">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>} */}
        <h4 className="mb-0 h6">My Billing Address</h4>

        {/* {state && <div className="preloaderCount">
            <h4 style={{ color: "Black" }}><strong>Billing Address Active</strong> </h4>
        </div>} */}
        <div className="card container" style={{ margin: "10px auto" }}>
            <div className="card-header">
                <h5 className="mb-0 h6">Billing Address</h5>
            </div>
            <div className="card-body">
                <div className="col-lg-6 mx-auto">
                    <div className="border p-3 rounded mb-3 c-pointer text-center bg-light">
                        <i className="la la-plus la-2x" />
                        <div className="alpha-7" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Billing Address</div>
                    </div>
                </div>
                <div className="row gutters-10">

                    {!data && <div className="preloaderCount">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                    {data && data.map((item) => {
                        return <div className="col-lg-6" key={item._id} >
                            <div className="border p-3 pr-5 rounded mb-3 position-relative">
                                <h6 style={{ fontSize: "17px", fontWeight: "bold", display: "flex", justifyContent: "space-between" }} >Type :{item.type} Address
                                    <div className="form-check form-switch">
                                        <FaEdit style={{ margin: "0 -18px" }} onClick={() => { setIdAddresdEdit(item._id) }} />
                                        <input className="form-check-input" type="checkbox" checked={item?.active ? true : false} role="switch" id="flexSwitchCheckChecked" onClick={() => billingShippingActive(item)} />
                                    </div>
                                </h6>
                                <div>
                                    <span className="w-50 fw-600">Address:</span>
                                    <span className="ml-2">
                                        {item.province}
                                    </span>
                                </div>
                                <div>
                                    <span className="w-50 fw-600">Address Line 1:</span>
                                    <span className="ml-2">{item.addressLine1}</span>
                                </div>
                                <div>
                                    <span className="w-50 fw-600">Address Line 2:</span>
                                    <span className="ml-2">{item.addressLine2}</span>
                                </div>
                                <div>
                                    <span className="w-50 fw-600">Postal code:</span>
                                    <span className="ml-2">{item.zip}</span>
                                </div>
                                <div>
                                    <span className="w-50 fw-600">City:</span>
                                    <span className="ml-2">{item.city}</span>
                                </div>
                                <div>
                                    <span className="w-50 fw-600">State:</span>
                                    <span className="ml-2">{item.state}</span>
                                </div>
                                <div>
                                    <span className="w-50 fw-600">Country:</span>
                                    <span className="ml-2">{item.country}</span>
                                </div>


                                <div className="dropdown position-absolute right-0 top-0">
                                    {/* <button
                                        className="btn bg-gray px-2"
                                        type="button"
                                        data-toggle="dropdown"
                                    >
                                        <i className="la la-ellipsis-v" />
                                    </button> */}
                                    <div
                                        className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <a className="dropdown-item">Edit</a>
                                        <a
                                            className="dropdown-item"
                                            href=""
                                        >
                                            Make This Default
                                        </a>
                                        <a
                                            className="dropdown-item"
                                            href=""
                                        >
                                            Delete
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Address</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <FormBillAdd getData={getData} ship='billing' type='billing' />
                        </div>

                    </div>
                </div>
            </div>

            {/* edit modal */}

            <Modal show={show} style={{ padding: "20px" }} onHide={handleClose}>
                <EditAddress handleClose={handleClose} getData={getData} ship='billing' type='billing' />
            </Modal>
        </div>
    </div>
}
export default BillingAddress
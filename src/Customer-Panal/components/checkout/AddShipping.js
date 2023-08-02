import { useState } from "react"
import { useAddAddressDetailMutation } from "../products/productSlice"

function AddShipping({ setShowMoal }) {
    const [show, setShow] = useState(false)
    const [setShippingAdd, { isLoading }] = useAddAddressDetailMutation()
    const [state, setState] = useState({
        type: "shipping",
        country: "",
        state: "",
        city: "",
        zip: "",
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        province: "",
        email: "",
        phone: "",
        userid: window.localStorage.getItem('user_id')
    })

    const onchengeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const onsubmitData = () => {
        setShippingAdd(state)
        setTimeout(() => {
            setShowMoal(false)
        }, 1000);
    }



    return <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Shipping Address</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {isLoading && <div className="preloaderCount">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            <div className="modal-body">
                <form className="row" style={{ margin: "20px" }}>
                    {/* {!data && <div className="preloaderCount">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>} */}
                    <div className="mb-3 col-6">
                        <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                        <input type="text" className="form-control" name="country" value={state.country} onChange={onchengeHandle} aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3 col-6">
                        <label htmlFor="exampleInputEmail1" className="form-label">State</label>
                        <input type="text" className="form-control" name="state" value={state.state} onChange={onchengeHandle} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                        <input type="text" className="form-control" name="city" value={state.city} onChange={onchengeHandle} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="exampleInputEmail1" className="form-label">ZIP</label>
                        <input type="text" className="form-control" name="zip" value={state.zip} onChange={onchengeHandle} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="exampleInputEmail1" className="form-label">Province</label>
                        <input type="text" className="form-control" name="province" value={state.province} onChange={onchengeHandle} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="exampleInputEmail1" className="form-label">Address Line1</label>
                        <input type="text" className="form-control" name="addressLine1" value={state.addressLine1} onChange={onchengeHandle} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="exampleInputEmail1" className="form-label">Address Line2</label>
                        <input type="text" className="form-control" name="addressLine2" value={state.addressLine2} onChange={onchengeHandle} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="exampleInputEmail1" className="form-label">Landmark</label>
                        <input type="text" className="form-control" name="landmark" value={state.landmark} onChange={onchengeHandle} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                        <input type="number" className="form-control" name="phone" value={state.phone} onChange={onchengeHandle} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={state.email} onChange={onchengeHandle} aria-describedby="emailHelp" />
                    </div>

                    <button type="button" className="btn btn-primary" onClick={onsubmitData} data-bs-dismiss="modal" aria-label="Close">Submit  {show && <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>}</button>
                </form>

            </div>
            {/*<div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success">Save changes</button>
            </div> */}
        </div>
    </div>

}
export default AddShipping
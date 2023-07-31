import axios from "axios";
import { base_Url_cust } from "../../../../server";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

function ChallanDetails() {
  const [deliveryChallanData, setDeliveryChalan] = useState(null)
  const [statusData, setStatusData] = useState(null)
  const [statusItem, setStatusItem] = useState(null)
  const [errorHandle, setErrorHandle] = useState(null)
  const params = useParams()
  const getApiData = async (params) => {
    try {
      const response = await axios.get(`${base_Url_cust}serviceDeliveryChalan/${params.id}`)
      setDeliveryChalan(response.data?.deliveryChallan);
      setStatusData(response?.data)
    } catch (error) {
      console.log(error);
      setErrorHandle()
    }

  }


  const handleStatus = async () => {
    await axios.post(`${base_Url_cust}serviceStatus/add_Status${""}`)
  }


  useEffect(() => {
    getApiData(params)

  }, [params])



  const assetArr = deliveryChallanData && deliveryChallanData?.assets


  return (
    <>

      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="row mb-3">
              <div className="col-lg-6">
                <div className="card-header topCardHeader">
                  <h6 className="mb-0">Challan No - {deliveryChallanData?.chalanNo}</h6>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-header topCardHeader">
                  <h6 className="mb-0 order-creation-d">
                    Delivery Challan On - {deliveryChallanData?.updatedAt}
                  </h6>
                </div>
              </div>
            </div>

            <div className="row p-3 mb-3">
              <div className="col-lg-6 mb-5">
                <h6 className="heading-wrapper">General</h6>
                <div className="p-3 orderStatus">
                  <div className="d-flex align-items-center form-group">
                    <label htmlFor="update_delivery_status">
                      Challan Status :
                    </label>
                    <select
                      className="form-select"
                      disabled
                      name="orderStatusId"
                      aria-label="Default select example"
                      fdprocessedid="0pxgwrx"
                      style={{ height: 38, fontSize: 13 }}
                      onChange={handleStatus}
                    >
                      <option defaultValue={statusItem?.createdAt} >
                        status
                      </option>
                      <option defaultValue={statusItem?.updatedAt} >
                        Delivered
                      </option>
                      <option defaultValue={statusItem?.statusId} >
                        Ready to ship
                      </option>
                      <option defaultValue={statusItem?.deliveryChallan_id}>
                        Out for Delivery
                      </option>
                      {/* <option value={statusItem?.createdAt}>
                        Send to warehouse
                      </option> */}
                    </select>

                    <Button variant="success" className="ms-5">Send</Button>
                  </div>
                  {/* <div className="small-text-wraper">
                    <div className="customerName">
                      Customer Name: <span>Kumar Jain</span>
                    </div>
                  </div> */}
                </div>
                {/* <div className="btn-wrapper">
                  <button
                    type="button"
                    className="btn btn-primary"
                    fdprocessedid="b00f9m"
                  >
                    POD Entry
                  </button>
                </div> */}
              </div>
              <div className="col-lg-6 mb-6">
                <h6 className="heading-wrapper">Challan Notes</h6>

                {/* <div className="toggle-wrapper">
                  <label className="aiz-switch aiz-switch-success mb-0">
                    <input type="checkbox" defaultValue />
                    <span />
                  </label>
                  <span>Send to Customer</span>
                </div>
                <div className="btn-wrapper">
                  <button
                    type="button"
                    className="btn btn-primary"
                    fdprocessedid="s0y55k"
                  >
                    Submit
                  </button>
                </div> */}
              </div>
              <div className="col-md-4 mb-3">
                <div className="addressDetailSec">
                  {deliveryChallanData &&
                    <div className="addressDetailInfo">

                      <h6 className="heading-wrapper">Billing Address</h6>
                      <ul>
                        <li>
                          <strong>Address Line 1:</strong>
                          <span>{deliveryChallanData?.billingAddress?.addressLine1}</span>
                        </li>
                        <li>
                          <strong> Address Line 2: </strong>
                          <span>{deliveryChallanData?.billingAddress?.addressLine2}</span>
                        </li>
                        <li>
                          <strong>Province:</strong>
                          <span>{deliveryChallanData?.billingAddress?.province}</span>
                        </li>
                        <li>
                          <strong>ZIP:</strong>
                          <span>{deliveryChallanData?.billingAddress?.zip}</span>
                        </li>
                        <li>
                          <strong>City:</strong>
                          <span>{deliveryChallanData?.billingAddress?.city}</span>
                        </li>
                        <li>
                          <strong> State:</strong>
                          <span>{deliveryChallanData?.billingAddress?.state
                          }</span>
                        </li>
                        <li>
                          <strong>Country:</strong>
                          <span>{deliveryChallanData?.billingAddress?.country}</span>
                        </li>
                      </ul>
                    </div>}
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="addressDetailSec">
                  <div className="addressDetailInfo">
                    <h6 className="heading-wrapper">Shipping Address</h6>
                    <ul>
                      <li>
                        <strong>Address Line 1:</strong>{deliveryChallanData?.shippingAddress?.addressLine1}
                      </li>
                      <li>
                        <strong> Address Line 2: </strong>{deliveryChallanData?.shippingAddress?.addressLine2}
                      </li>
                      <li>
                        <strong>City:</strong>
                        <span>{deliveryChallanData?.shippingAddress?.city}</span>
                      </li>
                      <li>
                        <strong> State:</strong>
                        <span>{deliveryChallanData?.shippingAddress?.state}</span>
                      </li>
                      <li>
                        <strong>Province:</strong>
                        <span>{deliveryChallanData?.shippingAddress?.province}</span>
                      </li>
                      <li>
                        <strong>Country:</strong>
                        <span>{deliveryChallanData?.shippingAddress?.country}</span>
                      </li>
                      <li>
                        <strong>Email:</strong>
                        {deliveryChallanData?.shippingAddress?.email}
                        <span />
                      </li>
                      <li>
                        <strong>Phone:</strong>
                        {deliveryChallanData?.shippingAddress?.phone}
                        <span />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="addressDetailSec">
                  <div className="addressDetailInfo">
                    <h6 className="heading-wrapper">Seller Address</h6>
                    <ul>
                      <li>
                        <strong>Seller Name:</strong>
                        <span> {deliveryChallanData?.seller?.firstname}{deliveryChallanData?.seller?.lastname}</span>
                      </li>
                      <li>
                        <strong>Seller Company Name:</strong>
                        <span>{/* {`${deliveryChallanData?.seller}blank`} */}</span>
                      </li>
                      <li>
                        <strong>Address Line 1:</strong>
                        <span>{deliveryChallanData?.seller?.addressLine1}</span>
                      </li>
                      <li>
                        <strong>Address line 2:</strong>
                        <span>{deliveryChallanData?.seller?.addressLine2}</span>
                      </li>
                      <li>
                        <strong>City:</strong>
                        <span>{deliveryChallanData?.seller?.city}</span>
                      </li>
                      <li>
                        <strong>State:</strong>
                        <span>{deliveryChallanData?.seller?.state}</span>
                      </li>
                      <li>
                        <strong>Country:</strong>
                        <span>{deliveryChallanData?.seller?.country}</span>
                      </li>
                      <li>
                        <strong>Tax No:</strong>
                        <span>{deliveryChallanData?.seller?.province}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row p-3 mb-5">
              <div className="col-lg-8">
                <h6 className="heading-wrapper">Product Detail</h6>
                <div className="row input-search-wrapper" />
              </div>
              <div className="col-lg-4">
                <h6 className="heading-wrapper">Challan Logs</h6>
                <div className="order-date-sec">7/4/2023 9:7:56 Created</div>
              </div>
              <div
                className="col-lg-12 table-responsive"
                style={{ width: "600px" }}
              >
                <table
                  className="table-bordered aiz-table invoice-summary table footable footable-1 breakpoint-xl "
                  style={{ overflow: "auto" }}
                >
                  <thead>
                    <tr className="bg-trans-dark footable-header">
                      <th
                        data-breakpoints="lg"
                        className="min-col footable-first-visible"
                        style={{ display: "table-cell" }}
                      >
                        ID NO
                      </th>
                      <th width="10%" style={{ display: "table-cell" }}>
                        Product Image
                      </th>
                      <th
                        className="text-uppercase"
                        style={{ display: "table-cell" }}
                      >
                        Product
                      </th>
                      <th
                        className="text-uppercase"
                        style={{ display: "table-cell" }}
                      >
                        Service Tag
                      </th>
                      <th
                        data-breakpoints="lg"
                        className="min-col text-uppercase text-center"
                        style={{ display: "table-cell" }}
                      >
                        Model No
                      </th>
                      <th
                        data-breakpoints="lg"
                        className="min-col text-uppercase text-center"
                        style={{ display: "table-cell" }}
                      >
                        Unit Price
                      </th>
                      <th
                        data-breakpoints="lg"
                        className="min-col text-uppercase text-center"
                        style={{ display: "table-cell", textAlign: "center" }}
                      >
                        Year Of Valuation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {assetArr?.map((item, i) => {
                      return < tr key={i} style={{ textAlign: "center" }}>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          {item?.id}
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <a href="#">
                            <img
                              height={50}
                              src={item?.image?.url}
                            />
                          </a>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <strong>{item?.name}</strong>
                          <small />
                          <br />
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <strong>{item?.serviceTag}</strong>
                          <small />
                          <br />
                        </td>
                        <td style={{ display: "table-cell", textAlign: "center" }}>
                          {item?.modelNo}
                        </td>
                        <td style={{ display: "table-cell", textAlign: "center" }}>
                          <small>{item?.unit_price}</small>
                        </td>
                        <td
                          className="text-center"
                          style={{ display: "table-cell" }}
                        >
                          {item?.yearOfValuation}
                        </td>

                      </tr>
                    })}


                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
export default ChallanDetails;

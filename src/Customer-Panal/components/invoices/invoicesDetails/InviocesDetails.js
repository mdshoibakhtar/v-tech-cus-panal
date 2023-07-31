import { useEffect } from "react";
import { base_Url_cust } from "../../../../server";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function InvoicesDetails() {
  const params = useParams()
  const [invocesDetails, setInvocesDetails] = useState(null)
  const getInvoicesDetailsData = async () => {
    const response = await axios.get(`${base_Url_cust}serviceInvoice/${params.id}`)
    setInvocesDetails(response.data);
  }
  useEffect(() => {
    getInvoicesDetailsData()
  }, [params])
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="row mb-3">
              <div className="col-lg-6">
                <div className="card-header topCardHeader">
                  <h6 className="mb-0">Invoice No - {invocesDetails?.invoice_No}</h6>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-header topCardHeader">
                  <h6 className="mb-0 order-creation-d">
                    (Order)Invoices On - {invocesDetails?.invoice_Date}
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
                      Invoice Status :
                    </label>
                    <select
                      className="form-select"
                      disabled
                      name="orderStatusId"
                      aria-label="Default select example"
                      fdprocessedid="0pxgwrx"
                      style={{ height: 38, fontSize: 13 }}
                    >
                      <option>Delivered</option>
                      <option value="6423de502750beedd6aee26b">
                        Processing
                      </option>
                      <option value="6423de6c2750beedd6aee26f">
                        Delivered
                      </option>
                      <option value="6423dea82750beedd6aee277">
                        Ready to ship
                      </option>
                      <option value="6423debd2750beedd6aee279">
                        Out for Delivery
                      </option>
                      <option value="6423decd2750beedd6aee27b">
                        Send to warehouse
                      </option>
                      <option value="6423de9d2750beedd6aee275">
                        Packaging
                      </option>
                      <option value="6423de5e2750beedd6aee26d">
                        Dispatched
                      </option>
                      <option value="6423de942750beedd6aee273">Pickup</option>
                      <option value="6423dcfe2750beedd6aee25e">
                        Not Processed
                      </option>
                      <option value="6423dd0a2750beedd6aee260">
                        Cancelled
                      </option>
                      <option value="6423de8b2750beedd6aee271">Rejected</option>
                    </select>
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
                <h6 className="heading-wrapper">Invoice Notes</h6>

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
              <div className="col-md-4">
                <div className="addressDetailSec">
                  <div className="addressDetailInfo">
                    <h6 className="heading-wrapper">Billing Address</h6>
                    <ul>
                      <li>
                        <strong>Address Line 1:</strong>
                        <span>{invocesDetails?.billingAddress?.addressLine1}</span>
                      </li>
                      <li>
                        <strong> Address Line 2: </strong>
                        <span>{invocesDetails?.billingAddress?.addressLine2}</span>
                      </li>
                      <li>
                        <strong>Province:</strong>
                        <span>{invocesDetails?.billingAddress?.province}</span>
                      </li>
                      <li>
                        <strong>ZIP:</strong>
                        <span>{invocesDetails?.billingAddress?.zip}</span>
                      </li>
                      <li>
                        <strong>City:</strong>
                        <span>{invocesDetails?.billingAddress?.city}</span>
                      </li>
                      <li>
                        <strong> State:</strong>
                        <span>{invocesDetails?.billingAddress?.state}</span>
                      </li>
                      <li>
                        <strong>Country:</strong>
                        <span>{invocesDetails?.billingAddress?.country}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="addressDetailSec">
                  <div className="addressDetailInfo">
                    <h6 className="heading-wrapper">Shipping Address</h6>
                    <ul>
                      <li>
                        <strong>Address Line 1:</strong>{invocesDetails?.shippingAddress?.addressLine1}
                      </li>
                      <li>
                        <strong> Address Line 2: </strong>{invocesDetails?.shippingAddress?.addressLine2}
                      </li>
                      <li>
                        <strong>City:</strong>
                        <span>{invocesDetails?.shippingAddress?.city}</span>
                      </li>
                      <li>
                        <strong> State:</strong>
                        <span>{invocesDetails?.shippingAddress?.state}</span>
                      </li>
                      <li>
                        <strong>Province:</strong>
                        <span>{invocesDetails?.shippingAddress?.province}</span>
                      </li>
                      <li>
                        <strong>Country:</strong>
                        <span>{invocesDetails?.shippingAddress?.country}</span>
                      </li>
                      <li>
                        <strong>Email:</strong>
                        <span>{invocesDetails?.shippingAddress?.email}</span>
                      </li>
                      <li>
                        <strong>Phone:</strong>
                        <span>{invocesDetails?.shippingAddress?.phone}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="addressDetailSec">
                  <div className="addressDetailInfo">
                    <h6 className="heading-wrapper">Seller Address</h6>
                    <ul>
                      <li>
                        <strong>Seller Name:</strong>
                        <span>{invocesDetails?.shippingAddress?.firstname}</span>
                      </li>
                      <li>
                        <strong>Seller Company Name</strong>
                        <span>{invocesDetails?.shippingAddress?.lastname}</span>
                      </li>
                      <li>
                        <strong>Address Line 1</strong>
                        <span>{invocesDetails?.shippingAddress?.addressLine1}</span>
                      </li>
                      <li>
                        <strong>Address line 2,</strong>
                        <span>{invocesDetails?.shippingAddress?.addressLine2}</span>
                      </li>
                      <li>
                        <strong>City</strong>
                        <span>{invocesDetails?.shippingAddress?.city}</span>
                      </li>
                      <li>
                        <strong>State</strong>
                        <span>{invocesDetails?.shippingAddress?.state}</span>
                      </li>
                      <li>
                        <strong>Country</strong>
                        <span>{invocesDetails?.shippingAddress?.country}</span>
                      </li>
                      <li>
                        <strong>Tax No</strong>
                        <span>{invocesDetails?.shippingAddress?.taxNo}</span>
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
                <h6 className="heading-wrapper">Invoice Logs</h6>
                <div className="order-date-sec">{invocesDetails?.updatedAt
                } Updated
                </div>
              </div>
              <div
                className="col-lg-12 table-responsive"
                style={{ width: "600px" }}
              >
                {invocesDetails?.products &&
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
                          S.No
                        </th>
                        {/* <th width="10%" style={{ display: "table-cell" }}>
                        Product Image
                      </th> */}
                        <th
                          className="text-uppercase"
                          style={{ display: "table-cell" }}
                        >
                          Product Name
                        </th>
                        <th
                          className="text-uppercase"
                          style={{ display: "table-cell" }}
                        >
                          Variant
                        </th>
                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center"
                          style={{ display: "table-cell" }}
                        >
                          Quantity
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
                          style={{ display: "table-cell" }}
                        >
                          Sub Total
                        </th>
                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center"
                          style={{ display: "table-cell" }}
                        >
                          TAX
                        </th>
                        <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          Total
                        </th>
                        {/* <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          Delivery Type
                        </th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {invocesDetails?.products.map((item, i) => {
                        return <tr key={i}>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            {i + 1}
                          </td>
                          {/* <td style={{ display: "table-cell" }}>
                        <a href="#">
                          <img
                            height={50}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebj25c_sSO2ZbxXO9RCZNbi4PUarZ9tM7_WD-O85l_PljOdKHY5dYHiC32QS3J7mP-1U&usqp=CAU"
                          />
                        </a>
                      </td> */}
                          <td style={{ display: "table-cell" }}>
                            <strong>{item?.variantId?.productId?.name}</strong>
                            <small />
                            <br />
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <strong>grey</strong>
                            <small />
                            <br />
                          </td>
                          <td style={{ display: "table-cell", textAlign: "right" }}>
                            {item?.qty}
                          </td>
                          <td style={{ display: "table-cell", textAlign: "right" }}>
                            <small>{item?.unitPrice}</small>
                          </td>
                          <td
                            className="text-right"
                            style={{ display: "table-cell" }}
                          >
                            {item?.subTotal}
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell", textAlign: "right" }}
                          >
                            {item?.tax}
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            {item?.total}
                          </td>
                          {/* <td
                            className="text-center footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            HOME DELIVERY
                          </td> */}
                        </tr>
                      })}

                    </tbody>
                  </table>}
              </div>
              <div className="text-right">
                <div className="mb-2">
                  <big className="pr-2">
                    Shipping Cost:<strong> {invocesDetails?.shipping_Cost
                    }</strong>
                  </big>
                </div>
                <div>
                  <big className="pr-2">
                    Grand Total: <strong>{invocesDetails?.grandTotal}</strong>
                  </big>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto" /> */}
      </div>
    </>
  );
}
export default InvoicesDetails
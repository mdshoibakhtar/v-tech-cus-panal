import { useEffect, useState } from "react";
import { base_Url_cust } from "../../../../server";
import axios from "axios";
import { useParams } from "react-router-dom";

function QuotationDetails() {
  const [quotation, setQuotation] = useState(null);
  const params = useParams()

  const getApiData = async () => {
    try {
      const response = await axios.get(
        `${base_Url_cust}serviceQuotation/${params.id}`
      );
      setQuotation(response.data);
    } catch (error) { }
  };

  useEffect(() => {
    getApiData();
  }, [params]);

  console.log(quotation);
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="row mb-3">
              <div className="col-lg-6">
                <div className="card-header topCardHeader">
                  <h6 className="mb-0">Quotation No - {quotation?.referenceNo}</h6>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-header topCardHeader">
                  <h6 className="mb-0 order-creation-d">
                    Quotation On - {quotation?.updatedAt}
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
                      Quotation Status :
                    </label>
                    <select
                      className="form-select"
                      name="orderStatusId"
                      disabled
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
                <h6 className="heading-wrapper">Quotation Notes</h6>

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
              <div className="col-md-4 col-sm-12">
                <div className="addressDetailSec">
                  <div className="addressDetailInfo">
                    <h6 className="heading-wrapper">Billing Address</h6>
                    <ul>
                      <li>
                        <strong>Address Line 1:</strong>
                        <span>{quotation?.billingAddress?.addressLine1}</span>
                      </li>
                      <li>
                        <strong> Address Line 2: </strong>
                        <span>{quotation?.billingAddress?.addressLine2}</span>
                      </li>
                      <li>
                        <strong>Province:</strong>
                        <span>{quotation?.billingAddress?.province}</span>
                      </li>
                      <li>
                        <strong>ZIP:</strong>
                        <span>{quotation?.billingAddress?.zip}</span>
                      </li>
                      <li>
                        <strong>City:</strong>
                        <span>{quotation?.billingAddress?.city}</span>
                      </li>
                      <li>
                        <strong> State:</strong>
                        <span>{quotation?.billingAddress?.state}</span>
                      </li>
                      <li>
                        <strong>Country:</strong>
                        <span>{quotation?.billingAddress?.country}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="addressDetailSec">
                  <div className="addressDetailInfo">
                    <h6 className="heading-wrapper">Shipping Address</h6>
                    <ul>
                      <li>
                        <strong>Address Line 1:</strong>
                        <span>{quotation?.shippingAddress?.addressLine1}</span>
                      </li>
                      <li>
                        <strong> Address Line 2: </strong>
                        <span>{quotation?.shippingAddress?.addressLine2}</span>
                      </li>
                      <li>
                        <strong>Province:</strong>
                        <span>{quotation?.shippingAddress?.province}</span>
                      </li>
                      <li>
                        <strong>ZIP:</strong>
                        <span>{quotation?.shippingAddress?.zip}</span>
                      </li>
                      <li>
                        <strong>City:</strong>
                        <span>{quotation?.shippingAddress?.city}</span>
                      </li>
                      <li>
                        <strong> State:</strong>
                        <span>{quotation?.shippingAddress?.state}</span>
                      </li>
                      <li>
                        <strong>Country:</strong>
                        <span>{quotation?.shippingAddress?.country}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="addressDetailSec">
                  <div className="addressDetailInfo">
                    <h6 className="heading-wrapper">Seller Address</h6>
                    <ul>
                      <li>
                        <strong>Seller Name:</strong>
                        <span>{quotation?.seller_id?.firstname} {quotation?.seller_id?.lastname}</span>
                      </li>
                      {/* <li>
                        <strong>Seller Company Name</strong>
                        <span>{quotation?.seller_id?.firstname}</span>
                      </li> */}
                      {/* <li>
                        <strong>Address Line 1</strong>
                        <span>{quotation?.seller_id?.firstname}</span>
                      </li>
                      <li>
                        <strong>Address line 2,</strong>
                        <span>{quotation?.seller_id?.firstname}</span>
                      </li> */}
                      <li>
                        <strong>City:</strong>
                        <span>{quotation?.seller_id?.city}</span>
                      </li>
                      <li>
                        <strong>State:</strong>
                        <span>{quotation?.seller_id?.state}</span>
                      </li>
                      <li>
                        <strong>Country:</strong>
                        <span>{quotation?.seller_id?.country}</span>
                      </li>
                      {/*  <li>
                        <strong>Tax No:</strong>
                        <span>{quotation?.seller_id?.firstname}</span>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {quotation?.products &&
              <div className="row p-3 mb-5">
                <div className="col-lg-8">
                  <h6 className="heading-wrapper">Product Detail</h6>
                  <div className="row input-search-wrapper" />
                </div>
                <div className="col-lg-4">
                  <h6 className="heading-wrapper">Quotation Logs</h6>
                  <div className="order-date-sec">{quotation?.chalan_Date} Created</div>
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
                          S.No
                        </th>
                        {/* <th width="10%" style={{ display: "table-cell" }}>
                          Product Image
                        </th> */}
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
                        {/*  <th
                          data-breakpoints="lg"
                          className="min-col text-uppercase text-center footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          Delivery Type
                        </th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {quotation?.products?.map((item, i) => {
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
                            <strong>{item?.productId?.name}</strong>
                            <small />
                            <br />
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <strong>{item?.variantId?.weight}</strong>
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
                            {item?.variantId?._id}
                          </td> */}
                        </tr>
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="text-right">
                  <div className="mb-2">
                    <big className="pr-2">
                      Shipping Cost:<strong> {quotation?.shipping_Cost}</strong>
                    </big>
                  </div>
                  <div>
                    <big className="pr-2">
                      Grand Total: <strong>{quotation?.grandTotal}</strong>
                    </big>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </>
  );
}
export default QuotationDetails;
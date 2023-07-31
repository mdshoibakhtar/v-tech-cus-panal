import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { base_Url_cust } from "../../../server";
import { useEffect, useState } from "react";

import axios from "axios";


function QuotationDetails() {
  const [quotationData, setQuotationData] = useState(null)
  const getQuotationList = async () => {
    const response = await axios.get(`${base_Url_cust}serviceQuotation`)
    setQuotationData(response.data)
  }
  useEffect(() => {
    getQuotationList()
  }, [])


  return (
    <>
      <div className="aiz-user-panel">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Quotation</h1>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Quotation</h5>
          </div>
          <div className="card-body">
            <div className="table-tag">
              <table className="table aiz-table mb-0 footable">
                <thead>
                  <tr className="footable-header">
                    <th
                      data-breakpoints="lg"
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      Serial No
                    </th>
                    <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                      Quotation No
                    </th>
                    <th style={{ display: "table-cell" }}>Quotation Date</th>
                    <th style={{ display: "table-cell" }}>Customer Name </th>

                    <th style={{ display: "table-cell" }}>Total Item</th>
                    <th
                      data-breakpoints="lg"
                      className="footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      status
                    </th>
                    <th style={{ display: "table-cell" }}>action</th>
                  </tr>
                </thead>
                <tbody>
                  {quotationData?.map((item, i) => {
                    return <tr key={i}>
                      <td
                        className="footable-first-visible"
                        style={{ display: "table-cell" }}
                      >
                        {i + 1}
                      </td>
                      <td style={{ display: "table-cell" }}>{item?.quotation_No}</td>
                      <td style={{ display: "table-cell" }}>{item?.quotation_Date}</td>
                      <td style={{ display: "table-cell" }}>{item?.userid.firstname} &nbsp; &nbsp; {item?.userid.lastname}</td>
                      <td style={{ display: "table-cell" }}>{item?.grandTotal}</td>
                      {item?.status.map((value, i) => {
                        return <td
                          className="footable-last-visible"
                          style={{ display: "table-cell", }}
                          key={i}>
                          {/* {value?.orderStatusId?.orderStatusName} */}
                          <span class="badge badge-inline badge-danger" style={{ color: "black", backgroundColor: value?.orderStatusId?.orderStatusName === "Pending" ? "yellow" : value?.orderStatusId?.orderStatusName === 'Delivered' ? 'blue' : value?.orderStatusId?.orderStatusName === 'Rejected' ? 'red' : "transparent" }}>
                            {value?.orderStatusId?.orderStatusName}
                          </span>
                        </td>
                      })}

                      <td
                        className="footable-last-visible"
                        style={{ display: "table-cell" }}
                      >
                        <Link to={`quotation-details/${item?._id}`} className="view-details">
                          <BsEyeSlash className="eye-icon" />
                          View
                        </Link>
                      </td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
            <div className="aiz-pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default QuotationDetails;
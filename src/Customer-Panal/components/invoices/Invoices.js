import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { base_Url_cust } from "../../../server";
import { useEffect, useState } from "react";
import axios from "axios";

function Invoices() {
  const [invoiceData, setInvoiceData] = useState(null)
  const getInvoicesData = async () => {
    try {
      const response = await axios.get(`${base_Url_cust}serviceInvoice`)
      setInvoiceData(response.data);

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getInvoicesData()
  }, [])
  return (
    <>
      <div className="aiz-user-panel">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Invoices</h1>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Invoices</h5>
          </div>
          <div className="card-body">
            {invoiceData && <table
              className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
              style={{}}
            >
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
                    Invoices No
                  </th>
                  <th style={{ display: "table-cell" }}>Invoices Date</th>
                  <th style={{ display: "table-cell" }}>Purchase Order No </th>
                  <th
                    data-breakpoints="lg"
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >
                    Purchase Order Date
                  </th>
                  <th style={{ display: "table-cell" }}>Cycle: {"Durition"}</th>
                  <th style={{ display: "table-cell" }}>
                    Total Items
                  </th>
                  {/* <th style={{ display: "table-cell" }}>Status </th> */}
                  <th style={{ display: "table-cell" }}>Total Amount </th>
                  <th style={{ display: "table-cell" }}> Paid Amount </th>
                  <th style={{ display: "table-cell" }}> Balance Amount </th>
                  <th style={{ display: "table-cell" }}> Action </th>
                </tr>
              </thead>
              <tbody>
                {invoiceData?.map((item, i) => {
                  return <tr key={i}>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      {i + 1}
                    </td>
                    <td style={{ display: "table-cell" }}>{item?.invoice_No}</td>
                    <td style={{ display: "table-cell" }}>{item?.invoice_Date}</td>
                    <td style={{ display: "table-cell" }}>{item?.purchase_No}</td>
                    <td
                      className="footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      {item?.purchase_Date}
                    </td>
                    <td
                      className="footable-last-visible"
                      style={{ display: "table-cell" }}
                    > {item?.period} &nbsp;&nbsp; {item?.duration_type[0]?.name}
                    </td>
                    <td
                      className="footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      {item?.totalItem}
                    </td>
                    <td
                      className="footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      <span class="badge badge-inline badge-danger" style={{ color: "black", backgroundColor: item?.statusId[0]?.orderStatusName === "Pending" ? "yellow" : item?.statusId[0]?.orderStatusName === 'Delivered' ? 'blue' : item?.statusId[0]?.orderStatusName === 'Rejected' ? 'red' : "transparent" }}>
                        {item?.statusId[0]?.orderStatusName}
                      </span>
                    </td>
                    <td
                      className="footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      {item?.grandTotal}
                    </td>
                    <td
                      className="footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      {"500"}
                    </td>
                    <td
                      className="footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      {"290"}
                    </td>
                    <td
                      className="footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      <Link to={`invoices-details/${item?._id}`} className="view-details">
                        <BsEyeSlash className="eye-icon" />
                        View
                      </Link>
                    </td>
                  </tr>
                })}

              </tbody>
            </table>}

            <div className="aiz-pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Invoices;

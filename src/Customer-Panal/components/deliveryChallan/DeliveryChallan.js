import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { base_Url_cust } from "../../../server";
import { useEffect, useState } from "react";
import axios from "axios";

import './DeliveryChallan.css'
function DeliveryChallan() {
  const [deliverData, setDeliveryData] = useState(null)
  const getdeliveryChalan = async () => {
    const response = await axios.get(`${base_Url_cust}serviceDeliveryChalan`)
    setDeliveryData(response.data)
  }
  useEffect(() => {
    getdeliveryChalan()
  }, [])
  // console.log(deliverData);
  return (
    <>
      <div className="aiz-user-panel">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Delivery Challan</h1>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Delivery Challan</h5>
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
                      Challan No
                    </th>
                    <th style={{ display: "table-cell" }}>challan Date</th>
                    <th style={{ display: "table-cell" }}>invoice No</th>
                    <th style={{ display: "table-cell" }}>invoice Date</th>
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
                  {deliverData?.map((item, i) => {
                    return <tr key={i}>
                      <td
                        className="footable-first-visible"
                        style={{ display: "table-cell" }}
                      >
                        {i + 1}
                      </td>
                      <td style={{ display: "table-cell" }}>{item?.chalanNo}</td>
                      <td style={{ display: "table-cell" }}>{item.chalanDate}</td>
                      <td style={{ display: "table-cell" }}>{item?.invoiceNo}</td>
                      <td style={{ display: "table-cell" }}>{item?.invoiceDate}</td>
                      <td style={{ display: "table-cell" }}>{item?.totalItem}</td>
                      <td
                        className="footable-last-visible"
                        style={{ display: "table-cell", background: { item } }}
                      >
                        {/* {item?.status?.id[0]?.orderStatusName} */}
                        <span class="badge badge-inline badge-danger" style={{ color: "black", backgroundColor: item?.status?.id[0]?.orderStatusName === "Pending" ? "yellow" : item?.status?.id[0]?.orderStatusName === 'Delivered' ? 'blue' : item?.status?.id[0]?.orderStatusName === 'Rejected' ? 'red' : "transparent" }}>
                          {item?.status?.id[0]?.orderStatusName}
                        </span>
                      </td>
                      <td
                        className="footable-last-visible"
                        style={{ display: "table-cell" }}
                      >
                        <Link to={`challan-details/${item?._id}`} className="view-details">
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
export default DeliveryChallan;

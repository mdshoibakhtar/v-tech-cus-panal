import axios from "axios";
import Table from "react-bootstrap/Table";
import { base_Url_cust } from "../../../server";
import { useEffect } from "react";
import { useState } from "react";
function Agreement() {
  const [agreeMentList, setAgreementList] = useState(null)
  const getAgreementData = async () => {
    const response = await axios.get(`${base_Url_cust}serviceAgreement`)
    setAgreementList(response?.data);
  }
  useEffect(() => {
    getAgreementData()
  }, [])
  return (
    <>
      <div className="aiz-user-panel ">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Agreement</h1>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Agreement</h5>
          </div>
          <table className=" aiz-table mb-0 footable footable-1 breakpoint-xl">
            <thead>
              <tr className="footable-header">
                <th data-breakpoints="lg" className="footable-first-visible">
                  Serial No
                </th>
                <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                  Agreement Type
                </th>
                <th style={{ display: "table-cell" }}> Initial Term</th>
                <th style={{ display: "table-cell" }}> Renewal Term</th>
                <th
                  data-breakpoints="lg"
                  className="footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  Start Date
                </th>
                <th style={{ display: "table-cell" }}> End Date</th>
                <th style={{ display: "table-cell" }}>Status</th>
                <th style={{ display: "table-cell" }}>View Agreement Doc</th>
              </tr>
            </thead>
            <tbody>
              {agreeMentList?.map((item, i) => {
                return <tr key={i}>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    {i + 1}
                  </td>
                  <td style={{ display: "table-cell" }}>
                    {item?.type}
                  </td>
                  <td style={{ display: "table-cell" }}>
                    {item?.initialTerm}
                  </td>
                  <td style={{ display: "table-cell" }}>{item?.renewalTerm}</td>
                  <td
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >{item?.start_Date}</td>
                  <td
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >{item?.end_Date}</td>
                  <td
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  ><span class="badge badge-inline badge-danger" style={{ color: "black", backgroundColor: item?.status === "Pending" ? "yellow" : item?.status === 'Delivered' ? 'blue' : item?.status === 'approve' ? 'red' : "transparent",color:item.status === 'approve' ? "white" :"black" }}>
                      {item?.status}
                    </span></td>
                  <td
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >{"View-Document"}</td>
                </tr>
              })}
            </tbody>
          </table>

          <div className="aiz-pagination"></div>
        </div>
      </div>
    </>
  );
}
export default Agreement;

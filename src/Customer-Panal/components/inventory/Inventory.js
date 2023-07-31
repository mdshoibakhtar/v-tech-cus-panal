import axios from "axios";
import { useEffect } from "react";
import { base_Url_cust } from "../../../server";
import { useState } from "react";

function Inventory() {
  const [inventortDeatails, setInventoryDetails] = useState(null)
  const getInventoryData = async () => {
    const response = await axios.get(`${base_Url_cust}serviceInventory`)
    setInventoryDetails(response.data);
  }
  useEffect(() => {
    getInventoryData()
  }, [])
  return (
    <>
      <div className="aiz-user-panel">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Your Inventory</h1>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Your Inventory</h5>
          </div>
          <div className="card-body">
            {inventortDeatails && <table
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
                    Rent Per Month
                  </th>
                  <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                    Taxes
                  </th>
                  <th style={{ display: "table-cell" }}>
                    Total rent Per Month
                  </th>
                  <th style={{ display: "table-cell" }}>Date of Delivery</th>
                  <th
                    data-breakpoints="lg"
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >
                    Lock-in Period
                  </th>
                  <th style={{ display: "table-cell" }}>Remark</th>
                  <th style={{ display: "table-cell" }}>Edited BY</th>
                </tr>
              </thead>
              <tbody>
                {inventortDeatails?.map((items, i) => {
                  console.log(items);
                  return <tr key={i}>
                    <td
                      className="footable-first-visible"
                      style={{ display: "table-cell" }}
                    >
                      2500+
                    </td>
                    <td style={{ display: "table-cell" }}>18%</td>
                    <td style={{ display: "table-cell" }}>2950</td>
                    <td style={{ display: "table-cell" }}>12-02-2021</td>
                    <td
                      className="footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      1 months
                    </td>
                    <td
                      className="footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      SSD Upgrade on 23/06/2020
                    </td>
                    <td
                      className="footable-last-visible"
                      style={{ display: "table-cell" }}
                    >
                      Amir Pathan with date & time
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
export default Inventory;

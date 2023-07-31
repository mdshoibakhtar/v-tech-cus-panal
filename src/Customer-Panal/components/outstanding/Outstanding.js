function Outstanding() {
  return (
    <>
      <div className="aiz-user-panel">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Total Outstanding</h1>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h5 className="mb-0 h6">Total Outstanding</h5>
          </div>
          <div className="card-body" style={{ overflowX: "auto" }}>
            <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl">
              <thead>
                <tr className="footable-header">
                  <th
                    data-breakpoints="lg"
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    ID
                  </th>
                  <th data-breakpoints="lg" style={{ display: "table-cell" }}>
                    Invoice No
                  </th>
                  <th style={{ display: "table-cell" }}>Date</th>
                  <th style={{ display: "table-cell" }}>Amount</th>
                  <th
                    data-breakpoints="lg"
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >
                    Payment Status
                  </th>
                  <th style={{ display: "table-cell" }}>Remaining Payment</th>
                  <th style={{ display: "table-cell" }}>
                    Date of Payment Recived
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    1
                  </td>
                  <td style={{ display: "table-cell" }}>FY 2021-22/06</td>
                  <td style={{ display: "table-cell" }}>03/07/23</td>
                  <td style={{ display: "table-cell" }}>40000</td>
                  <td
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >
                    Received
                  </td>
                  <td
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >
                    0
                  </td>
                  <td
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >
                    04/07/23
                  </td>
                </tr>
                <tr>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    1
                  </td>
                  <td style={{ display: "table-cell" }}>FY 2021-22/05</td>
                  <td style={{ display: "table-cell" }}>03/07/23</td>
                  <td style={{ display: "table-cell" }}>100000</td>
                  <td
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >
                    Partly Received
                  </td>
                  <td
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >
                    50000
                  </td>
                  <td
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >
                    04/07/23
                  </td>
                </tr>
                <tr>
                  <td
                    className="footable-first-visible"
                    style={{ display: "table-cell" }}
                  >
                    3
                  </td>
                  <td style={{ display: "table-cell" }}>FY 2021-22/04</td>
                  <td style={{ display: "table-cell" }}>03/07/23</td>
                  <td style={{ display: "table-cell" }}>30000</td>
                  <td
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >
                    Payable
                  </td>
                  <td
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >
                    30000
                  </td>
                  <td
                    className="footable-last-visible"
                    style={{ display: "table-cell" }}
                  >
                    04/07/23
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="aiz-pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Outstanding;

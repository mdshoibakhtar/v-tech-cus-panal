import { Button } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";

function CustomerDashbord() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">
                  <strong>Customer Dashboard</strong>
                </h1>
              </div>
              <div className="col-md-6 text-md-right">
                <Button className="me-2">Get Unit</Button>
                <Button className="me-2">Bill Reports</Button>
                <Button className="me-2">Download</Button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Product Certificates</h5>
              <div className="col-md-6 text-md-right"></div>
            </div>
            <div className="card-body">
              <section className="form-section">
                <div className="row mb-4">
                  {/* <form action=""> */}
                  <div className="col-lg-6">
                    <div>
                      <label for="exampleInputcompany " class="form-label mr-3">
                        Company
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputcompany"
                        aria-describedby="emailHelp"
                        placeholder="search"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div>
                      <label for="exampleInputAcc " class="form-label mr-3">
                        Account Manager
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputAcc"
                        aria-describedby="emailHelp"
                        placeholder="search"
                      />
                    </div>
                  </div>

                  {/* </form> */}
                </div>
              </section>

              <div className="" style={{overflowX:"auto"}}>
                <table className="table table-3">
                  <thead>
                    <tr>
                      <th class="table-secondary" scope="col">
                        Cust Id
                      </th>
                      <th class="table-secondary" scope="col">
                        Name
                      </th>
                      <th class="table-secondary" scope="col">
                        Branch{" "}
                      </th>
                      <th class="table-secondary" scope="col">
                        Billing Company
                      </th>
                      <th class="table-secondary" scope="col">
                        Unit
                      </th>
                      <th class="table-secondary" scope="col">
                        Lease Amount
                      </th>
                      <th class="table-secondary" scope="col">
                        Due Amount
                      </th>
                      <th class="table-secondary" scope="col">
                        Pending Bill
                      </th>
                      <th class="table-secondary" scope="col">
                        Last Billing Date
                      </th>
                      <th class="table-secondary" scope="col">
                        Account Manager
                      </th>
                      <th class="table-secondary" scope="col">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>763526</td>
                      <td>SHAMA TECHNOLOGY INDIA PVT LTD</td>
                      <td>delhi</td>
                      <td>Active</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Amir Pune</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2"
                          title="delete"
                          fdprocessedid="yghhlt"
                        >
                          <AiFillEye />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>763526</td>
                      <td>SHAMA TECHNOLOGY INDIA PVT LTD</td>
                      <td>mumbai</td>
                      <td>Active</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Amir Pune</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2"
                          title="delete"
                          fdprocessedid="yghhlt"
                        >
                          <AiFillEye />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>763526</td>
                      <td>SHAMA TECHNOLOGY INDIA PVT LTD</td>
                      <td>laxmi Nagar</td>
                      <td>Active</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Amir Pune</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2"
                          title="delete"
                          fdprocessedid="yghhlt"
                        >
                          <AiFillEye />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>763526</td>
                      <td>SHAMA TECHNOLOGY INDIA PVT LTD</td>
                      <td>dwarika</td>
                      <td>Active</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Inactive</td>
                      <td>Amir Pune</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2"
                          title="delete"
                          fdprocessedid="yghhlt"
                        >
                          <AiFillEye />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="aiz-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CustomerDashbord;

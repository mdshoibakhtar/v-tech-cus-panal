import { BsEyeSlash } from "react-icons/bs";
import "./InventoryTable.css";
import { Link } from "react-router-dom";
function InventoryTable() {
  return (
    <>
      <div className="row  mb-5">
        <div className="col-lg-12 table-responsive">
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
                  serial No
                </th>
                <th width="10%" style={{ display: "table-cell" }}>
                  Brand Name
                </th>
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
                  Product Tupe
                </th>
                <th
                  data-breakpoints="lg"
                  className="min-col text-uppercase text-center"
                  style={{ display: "table-cell" }}
                >
                  Service Tag
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
                  Processor
                </th>
                <th
                  data-breakpoints="lg"
                  className="min-col text-uppercase text-center"
                  style={{ display: "table-cell" }}
                >
                  Sales Order No
                </th>
                <th
                  data-breakpoints="lg"
                  className="min-col text-uppercase  footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  Customer Name
                </th>
                <th
                  data-breakpoints="lg"
                  className="min-col text-uppercase text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  Account Manager
                </th>
                <th
                  data-breakpoints="lg"
                  className="min-col text-uppercase text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  Satus
                </th>
                <th
                  data-breakpoints="lg"
                  className="min-col text-uppercase text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  Location
                </th>
                <th
                  data-breakpoints="lg"
                  className="min-col text-uppercase text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  Transfer Status
                </th>
                <th
                  data-breakpoints="lg"
                  className="min-col text-uppercase text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  Service Start Date
                </th>
                <th
                  data-breakpoints="lg"
                  className="min-col text-uppercase text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  Service End Date
                </th>

                <th
                  data-breakpoints="lg"
                  className="min-col text-uppercase text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  Action
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
                <td
                  className="footable-first-visible"
                  style={{ display: "table-cell" }}
                >
                  Dell
                </td>
                <td
                  className="footable-first-visible"
                  style={{ display: "table-cell" }}
                >
                  Dell latitute 3490
                </td>
                <td style={{ display: "table-cell" }}>
                  <a href="#">
                    <img
                      height={50}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebj25c_sSO2ZbxXO9RCZNbi4PUarZ9tM7_WD-O85l_PljOdKHY5dYHiC32QS3J7mP-1U&usqp=CAU"
                    />
                  </a>
                </td>
                <td style={{ display: "table-cell" }}>4N845JJ</td>
                <td style={{ display: "table-cell" }}>laptop</td>
                <td style={{ display: "table-cell" }}>
                  core i5,7th gen, 8gb RAM, 256GB SSD,win 10
                </td>
                <td style={{ display: "table-cell" }}>
                  <small>180</small>
                </td>
                <td className="" style={{ display: "table-cell" }}>
                  180
                </td>
                <td
                  className=" footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  9
                </td>
                <td
                  className=" footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  189
                </td>
                <td
                  className="text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  HOME DELIVERY
                </td>
                <td
                  className="text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  Process
                </td>
                <td
                  className="text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  05 jan 2022
                </td>
                <td
                  className="text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  06 feb 2023
                </td>
                <td
                  className="footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  <Link to="#" className="view-details">
                    <BsEyeSlash className="eye-icon" />
                  </Link>
                  <Link to="#" className="view-details mt-1">
                    Return
                  </Link>
                </td>
              </tr>
              <tr>
                <td
                  className="footable-first-visible"
                  style={{ display: "table-cell" }}
                >
                  1
                </td>
                <td
                  className="footable-first-visible"
                  style={{ display: "table-cell" }}
                >
                  Dell
                </td>
                <td
                  className="footable-first-visible"
                  style={{ display: "table-cell" }}
                >
                  Dell latitute 3490
                </td>
                <td style={{ display: "table-cell" }}>
                  <a href="#">
                    <img
                      height={50}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebj25c_sSO2ZbxXO9RCZNbi4PUarZ9tM7_WD-O85l_PljOdKHY5dYHiC32QS3J7mP-1U&usqp=CAU"
                    />
                  </a>
                </td>
                <td style={{ display: "table-cell" }}>4N845JJ</td>
                <td style={{ display: "table-cell" }}>laptop</td>
                <td style={{ display: "table-cell" }}>
                  core i5,7th gen, 8gb RAM, 256GB SSD,win 10
                </td>
                <td style={{ display: "table-cell" }}>
                  <small>180</small>
                </td>
                <td className="" style={{ display: "table-cell" }}>
                  180
                </td>
                <td
                  className=" footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  9
                </td>
                <td
                  className=" footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  189
                </td>
                <td
                  className="text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  HOME DELIVERY
                </td>
                <td
                  className="text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  Process
                </td>
                <td
                  className="text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  05 jan 2022
                </td>
                <td
                  className="text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  06 feb 2023
                </td>
                <td
                  className="footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  <Link to="#" className="view-details">
                    <BsEyeSlash className="eye-icon" />
                  </Link>
                  <Link to="#" className="view-details mt-1">
                    Return
                  </Link>
                </td>
              </tr>
              <tr>
                <td
                  className="footable-first-visible"
                  style={{ display: "table-cell" }}
                >
                  1
                </td>
                <td
                  className="footable-first-visible"
                  style={{ display: "table-cell" }}
                >
                  Dell
                </td>
                <td
                  className="footable-first-visible"
                  style={{ display: "table-cell" }}
                >
                  Dell latitute 3490
                </td>
                <td style={{ display: "table-cell" }}>
                  <a href="#">
                    <img
                      height={50}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebj25c_sSO2ZbxXO9RCZNbi4PUarZ9tM7_WD-O85l_PljOdKHY5dYHiC32QS3J7mP-1U&usqp=CAU"
                    />
                  </a>
                </td>
                <td style={{ display: "table-cell" }}>4N845JJ</td>
                <td style={{ display: "table-cell" }}>laptop</td>
                <td style={{ display: "table-cell" }}>
                  core i5,7th gen, 8gb RAM, 256GB SSD,win 10
                </td>
                <td style={{ display: "table-cell" }}>
                  <small>180</small>
                </td>
                <td className="" style={{ display: "table-cell" }}>
                  180
                </td>
                <td
                  className=" footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  9
                </td>
                <td
                  className=" footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  189
                </td>
                <td
                  className="text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  HOME DELIVERY
                </td>
                <td
                  className="text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  Process
                </td>
                <td
                  className="text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  05 jan 2022
                </td>
                <td
                  className="text-center footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  06 feb 2023
                </td>
                <td
                  className="footable-last-visible"
                  style={{ display: "table-cell" }}
                >
                  <Link to="#" className="view-details">
                    <BsEyeSlash className="eye-icon" />
                  </Link>
                  <Link to="#" className="view-details mt-1">
                    Return
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default InventoryTable;

import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb() {
  return (
    <>
      {/* Start Page Title Area */}
      <nav aria-label="breadcrumb" className="breadcrumbSec">
        <div className="container">
          <ol className="breadcrumb ">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {/* <li className="breadcrumb-item">
              <a href="#">Product</a>
            </li> */}
            <li className="breadcrumb-item active" aria-current="page">
              Product
            </li>
          </ol>
        </div>
      </nav>
      {/* End Page Title Area */}
    </>
  );
}

export default Breadcrumb;

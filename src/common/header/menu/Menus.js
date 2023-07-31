import React from "react";
import { Link } from "react-router-dom";
import "./Menus.css";
function Menus() {
  return (
    <>
      
      <div
        className="collapse navbar-collapse mean-menu"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav m-0 p-0">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
              <i className="bx bx-chevron-down"></i>
            </Link>
            <div className="dropdown-menu">
              <div className="row">
                <div className="col-lg-3">
                  <div className="menuList">
                    <h4>Products</h4>
                    <ul>
                      <li className="nav-item">
                        <Link to="/products" className="nav-link">
                          Products
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/product-detail" className="nav-link">
                          Product Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/" className="nav-link">
              Brands
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/" className="nav-link">
              Seeds
              <i className="bx bx-chevron-down"></i>
            </Link>

            <ul className="dropdown-menu">
              <div className="row">
                <div className="col-lg-3">
                  <div className="menuList">
                    <h4>horticulture</h4>
                    <ul>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          flower seeds
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          vegetable seeds
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          fruits
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="menuList">
                    <h4>field crops</h4>
                    <ul>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          maize/corn
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          paddy
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          mustard
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          jowar
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          cotton
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="menuList">
                    <h4>special categories</h4>
                    <ul>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          exotics
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          playhouse
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          forages
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          home garden
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          microgreens
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="menuList">
                    <h4>saplings</h4>
                    <ul>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          papaya
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          coconut
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/" className="nav-link">
              Crop Protection
              <i className="bx bx-chevron-down"></i>
            </Link>
            <ul className="dropdown-menu">
              <div className="row">
                <div className="col-lg-3">
                  <div className="menuList">
                    <h4>chemicals</h4>
                    <ul>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          insecticides
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          fungicides
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          herbicides
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          bactericides
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          acaricides/miticides
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="menuList">
                    <h4>bio/organics</h4>
                    <ul>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          bio insecticides
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          bio fungicides
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          bio nematicides
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          bio viricides
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="menuList">
                    <h4>traps & lures</h4>
                    <ul>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          traps
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          lures
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="menuList">
                    <h4>others</h4>
                    <ul>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          mulching sheet
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          tarpaulins
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          animal repellants
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          flair lights
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          adjuvants
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          vegetable wash
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="#" className="nav-link">
              Crop Nutrition
              <i className="bx bx-chevron-down"></i>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="#" className="nav-link">
              Machinery
              <i className="bx bx-chevron-down"></i>
            </Link>
            <div className="dropdown-menu">
              <div className="row">
                <div className="col-lg-3">
                  <div className="menuList">
                    <ul>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          major nutrients
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          secondary nutrients
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          growth promoters
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          growth retardants
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          organic fertilizers
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          biofertilizers
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          anti stressing agents
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          micronutrients
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/" className="nav-link">
              Segments
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Knowledge
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menus;

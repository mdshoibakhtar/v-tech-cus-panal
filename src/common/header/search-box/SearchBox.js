import React, { useEffect, useState } from "react";

import brandLogo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import "./SearchBox.css";
import AsideBar from "../../../Customer-Panal/components/dashbord/AsideBar";

function SearchBox({ handleSidebar }) {
  const [show, setShow] = useState(false);
  const handlShow = () => {
    setShow(!show);
  };

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <section className="searchSec">
        <div className="container">
          <div className="searchItem">
            <div className="logo">
              <Link to="/">
                <img src={brandLogo} alt="logo" />
              </Link>
              <div className="bar">
                <FaBars onClick={handleSidebar} />
                {/* <FaBars onClick={() => setToggle(!toggle)}/>  */}
                {toggle && (
                  <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                  </ul>
                )}
              </div>
            </div>
            <div className="searchSec">
              <div className="searchInf">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onClick={handlShow}
                />
                <div className="rightSearchInfo">
                  <div className="allCategory">
                    <select name="" id="">
                      <option value="">All Category</option>
                      <option value="">All Category</option>
                    </select>
                  </div>
                  <div className="searchIcon">
                    <BiSearch />
                  </div>
                </div>
              </div>
              {show && (
                <div className="treandingSec">
                  <div className="trendingItem">
                    <h5 className="trendingTitle">Trending Seeds</h5>
                    <ul>
                      <li>
                        <a href="#">FLOWER SEEDS</a>
                      </li>
                      <li>
                        <a href="#">VEGETABLES SEEDS</a>
                      </li>
                      <li>
                        <a href="#">FRUITS</a>
                      </li>
                    </ul>
                  </div>
                  <div className="trendingItem">
                    <h5 className="trendingTitle">Discover more</h5>
                    <ul>
                      <li>
                        <a href="#">INSECTICIDES</a>
                      </li>
                      <li>
                        <a href="#">FUNGICIDES</a>
                      </li>
                      <li>
                        <a href="#">HERBICIDES</a>
                      </li>
                      <li>
                        <a href="#">BACTERICIDES</a>
                      </li>
                      <li>
                        <a href="#">ACARICIDES/MITICIDES</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="searchIcons">
              <div className="callDetail">
                <BiPhoneCall />
                <div className="callText">
                  <h6>call us now</h6>
                  <p>+123 4567 890</p>
                </div>
              </div>
              <div className="serchIconsItem">
                <ul>
                  <li>
                    <a href="#">
                      <AiOutlineUser />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <AiOutlineHeart />
                    </a>
                  </li>
                  <li className="countParent">
                    <a href="">
                      <BsHandbag />
                      <span className="count">3</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchBox;

import React from "react";

function BannerContent() {
  return (
    <>
      <div className="main-banner-content">
        <ul className="banner-list">
          <li>
            <i className="fa-regular fa-onion"></i>
            <sup>1</sup>
            <span>Vegetable</span>
          </li>
          <li>
            <i className="flaticon-fish-1"></i>
            <sup>2</sup>
            <span>Fish</span>
          </li>
          <li>
            <i className="flaticon-cow-1"></i>
            <sup>3</sup>
            <span>Cow</span>
          </li>
        </ul>

        <h1>Vegetables and Fruits Good For Health</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing incididunt ut
          laboredolore magna aliqua elsed tempomet, consectetur adipiscing.
        </p>

        <div className="banner-btn">
          <a href="#" className="default-btn">
            What We do
            <i className="flaticon-plus"></i>
            <span></span>
          </a>
          <a className="optional-btn" href="#">
            Visit our firm
            <i className="flaticon-plus"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default BannerContent;

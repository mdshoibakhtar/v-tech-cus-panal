import React from "react";
import Slider from "react-slick";
import african from "../../../assets/img/banner/african.jpg";

import "./Banner.css";
function Banner() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <section className="bannerSection">
        <Slider {...settings}>
          <div className="bannerItem">
            <div
              className="bannerDetail"
              style={{ backgroundImage: `url(${african})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bannerContent">
                      <div className="title">
                        <h6>find the boundaries. push through!</h6>
                        <h3>summer sale</h3>
                        <div className="percentOff">
                          <div className="priceSection">
                            <span className="text">starting at</span>
                            <span className="number">₹299</span>
                          </div>
                          <h1>55% off</h1>
                        </div>
                      </div>

                      <div className="shopNow">
                        <a href="#">shop now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bannerItem">
            <div
              className="bannerDetail"
              style={{ backgroundImage: `url(${african})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bannerContent">
                      <div className="title">
                        <h6>find the boundaries. push through!</h6>
                        <h3>summer sale</h3>
                        <div className="percentOff">
                          <div className="priceSection">
                            <span className="text">starting at</span>
                            <span className="number">₹199</span>
                          </div>
                          <h1>70% off</h1>
                        </div>
                      </div>

                      <div className="shopNow">
                        <a href="#">shop now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bannerItem">
            <div
              className="bannerDetail"
              style={{ backgroundImage: `url(${african})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bannerContent">
                      <div className="title">
                        <h6>find the boundaries. push through!</h6>
                        <h3>summer sale</h3>
                        <div className="percentOff">
                          <div className="priceSection">
                            <span className="text">starting at</span>
                            <span className="number">499</span>
                          </div>
                          <h1>59% off</h1>
                        </div>
                      </div>

                      <div className="shopNow">
                        <a href="#">shop now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}

export default Banner;

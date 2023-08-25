import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import african from "../../../assets/img/banner/african.jpg";
import fertilizingPlants from "../../../assets/img/banner/fertilizing-plants.jpg";
import fertilizerLeaf from "../../../assets/img/banner/fertilizer-leaf.jpg";

import "./Banner.css";
import { Link } from "react-router-dom";
import { useGetBannerQuery } from "./bannerSlice";
import axios from "axios";
import baner from "../../../assets/classBanner.png"
import img1 from "../../../assets/bann1.png"
import img2 from "../../../assets/bann2.png"
import img3 from "../../../assets/classBanner.png"
import img4 from "../../../assets/prductsImg/bn2.webp"

function Banner() {
  const [data, setData] = useState([
    { SliderTopHeading: "test1", bottomText: "test1", url: img1 },
    { SliderTopHeading: "test2", bottomText: "test2", url: img2 },
    { SliderTopHeading: "test3", bottomText: "test3", url: img3 },
    // { SliderTopHeading: "test3", bottomText: "test3", url: img4 },
  ])

  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const getData = async () => {
    try {
      const res = await axios.get(`https://onlineparttimejobs.in/api/banner/public`)
      setData(res.data)
    } catch (error) {
      alert('Server Error BannerList')
    }
  }
  useEffect(() => {
    // getData()
  }, [])
  return (
    <>
      <section className="bannerSection">
        <Slider {...settings}>
          {data && data.map((item) => {
            return <Link to='#'>
              <div className="bannerItem">
                <div
                  className="bannerDetail"
                  style={{ backgroundImage: `url(${baner})`, height: "550px" }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="bannerContent" style={{justifyContent:"space-between"}}>
                         <div>
                         <div className="title">
                            <h6>find the boundaries. push through!</h6>
                            <h3>{item?.SliderTopHeading}</h3>
                            <div className="percentOff">
                              <h1 style={{ color: "transparent" }}>.</h1>
                              <div className="priceSection">
                                {/* <span className="text">starting at</span> */}
                                <span className="number">{item?.bottomText}</span>
                              </div>


                            </div>
                          </div>

                          <div className="shopNow">
                            <Link to="/products">shop now</Link>
                          </div>
                         </div>
                          <div className="imgBn">
                            <img src={item.url} />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          })}



        </Slider>
      </section>
    </>
  );
}

export default Banner;

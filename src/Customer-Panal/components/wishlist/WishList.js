import { useEffect, useState } from "react";
import img1 from "../../../assets/img/wishlist/gallery-img-7.jpg";
import img2 from "../../../assets/img/wishlist/gallery-img-8.jpg";
import img3 from "../../../assets/img/wishlist/gallery-img-9.jpg";
import axios from "axios";

function WishList() {

  const userid = window.localStorage.getItem("user_id");

  const [data, setData] = useState(null)

  const getData = async () => {
    try {
      const res = await axios.get(`https://onlineparttimejobs.in/api/user/wishlist/${userid}`)
      setData(res.data)
    } catch (error) {
      alert('Fail to Load Wislist !')
    }
  }

  useEffect(() => {
    getData()
  }, [])



  const deleteItem = async (id) => {
    try {
      const res = await axios.delete(`https://onlineparttimejobs.in/api/product/wishlist/delete_wishlist/${id}`, {
        userid: userid
      })
      getData()
    } catch (error) {
      alert('Server error Wislist not remove !!')
    }
  }




  return (
    <>
      <div className="aiz-user-panel">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <b className="h4">Wishlist</b>
            </div>
          </div>
        </div>
        <div className="row gutters-5">

          {data?.length === 0 && <h4>No Item In WishList...</h4>}

          {data && data.map((item) => {
            return <div
              className="col-xxl-3 col-xl-4 col-lg-3 col-md-4 col-sm-6"
              id="wishlist_1"
            >
              <div className="card mb-2 shadow-sm">
                <div className="card-body">
                  <a
                    href="#"
                    className="d-block mb-3"
                  >
                    <img src={img1} className="img-fit h-140px h-md-200px" />
                  </a>
                  <h5 className="fs-14 mb-0 lh-1-5 fw-600 text-truncate-2">
                    <a
                      href="#"
                      className="text-reset"
                    >
                      Ram
                    </a>
                  </h5>
                  <div className="rating rating-sm mb-1">
                    <i className="las la-star" />
                    <i className="las la-star" />
                    <i className="las la-star" />
                    <i className="las la-star" />
                    <i className="las la-star" />
                  </div>
                  {/* <div className=" fs-14">
      <span className="fw-600 text-primary">ZK300.00</span>
    </div> */}
                </div>
                <div className="card-footer">
                  <a
                    href="#"
                    className="link link--style-3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Remove from wishlist"
                    onclick={deleteItem}
                  >
                    <i className="la la-trash la-2x" />
                  </a>
                  <button
                    type="button"
                    className="btn btn-sm btn-block btn-primary ml-3"
                    onclick="showAddToCartModal(2)"
                    fdprocessedid="6shmub"
                  >
                    <i className="la la-shopping-cart mr-2" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          })}


          {/* <div
            className="col-xxl-3 col-xl-4 col-lg-3 col-md-4 col-sm-6"
            id="wishlist_2"
          >
            <div className="card mb-2 shadow-sm">
              <div className="card-body">
                <a
                  href="#"
                  className="d-block mb-3"
                >
                  <img src={img2} className="img-fit h-140px h-md-200px" />
                </a>
                <h5 className="fs-14 mb-0 lh-1-5 fw-600 text-truncate-2">
                  <a
                    href="#"
                    className="text-reset"
                  >
                    Sound Card
                  </a>
                </h5>
                <div className="rating rating-sm mb-1">
                  <i
                    className="las la-star
                                    "
                  />
                  <i className="las la-star" />
                  <i className="las la-star" />
                  <i className="las la-star" />
                  <i className="las la-star" />
                </div>
                
              </div>
              <div className="card-footer">
                <a
                  href="#"
                  className="link link--style-3"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Remove from wishlist"
                  onclick="removeFromWishlist(2)"
                >
                  <i className="la la-trash la-2x" />
                </a>
                <button
                  type="button"
                  className="btn btn-sm btn-block btn-primary ml-3"
                  onclick="showAddToCartModal(1)"
                  fdprocessedid="ipcm5m"
                >
                  <i className="la la-shopping-cart mr-2" />
                  Add to cart
                </button>
              </div>
            </div>
          </div> */}

        </div>
        <div className="aiz-pagination"></div>
      </div>
    </>
  );
}
export default WishList;

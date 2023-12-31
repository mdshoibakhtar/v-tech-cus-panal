import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { setProfile } from "../products/productSlice";

function AsideBar({ showSidebar }) {
  const [state, setState] = useState(false);
  const [auction, setAution] = useState(false);
  const [wallet, setWallet] = useState(false)
  const names = window.localStorage.getItem('userName')
  const mobile = window.localStorage.getItem('mobile')
  const navigate = useNavigate()

  const  setProfiles = useSelector((state) => {
    return state.productList  
  })
  const dispacher = useDispatch()

  const removeData = ()=>{
    window.localStorage.setItem("token", '');
    window.localStorage.setItem("user_id", '');
    window.localStorage.setItem("isLogin", false);
    window.localStorage.setItem("email", '');
    window.localStorage.setItem("mobile", '');
    window.localStorage.setItem("userName", '');
    dispacher(setProfile(null))
    navigate('/loginPage')
  }
  return (
    <>
      <div
        className={`aiz-user-sidenav-wrap position-relative z-1 shadow-sm ${showSidebar ? "" : "active"
          }`}
      >
        <div className="aiz-user-sidenav rounded overflow-auto c-scrollbar-light pb-5 pb-xl-0">
          <div className="p-4 text-xl-center border-bottom bg-primary text-white position-relative lastWork lastWork-2">
            <span className="avatar avatar-md mb-3">

              {setProfiles?.profileData?.image?.url ?<img
                src={setProfiles?.profileData?.image?.url}
                className="image rounded-circle"
              /> :<img
                src={setProfiles?.profileData?.profilePhoto?.url}
                className="image rounded-circle"
              />}
              
            </span>
            <h4 className="h5 fs-16 mb-1 fw-600" style={{textTransform:"uppercase"}}>{setProfiles?.profileData?.firstname} {setProfiles?.profileData?.lastname}</h4>
            <div className="text-truncate opacity-60">{setProfiles?.profileData?.mobile}</div>
          </div>

          <div className="sidemnenu mb-3">
            <ul
              className="aiz-side-nav-list px-2 metismenu"
              data-toggle="aiz-side-menu"
            >
              <li className="aiz-side-nav-item">
                <Link
                  to="/customer"
                  className="aiz-side-nav-link"
                  onClick={() => {
                    setAution(!auction);
                  }}
                >
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Dashboard</span>
                  <span className="aiz-side-nav-arrow"></span>
                </Link>
                <ul
                  className={`aiz-side-nav-list level-2 mm-collapse ${auction ? "mm-show" : "extra"
                    }`}
                  id="product"
                >
                  <li className="aiz-side-nav-item">
                    <Link to="/customer" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">Dashbord</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="inventory-dashbord" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">
                        Inventory Dashbord
                      </span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link to="customer-dashbord" className="aiz-side-nav-link">
                      <span className="aiz-side-nav-text">
                        Customer Dashbord
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="agreement" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Agreement</span>
                </Link>
              </li>

              <li className="aiz-side-nav-item">
                <Link to="delivery-challan" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Delivery challan</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="allProducts" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">All Products</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="rental-allProducts" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Rental Products</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="rental-allProducts-cart" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Rental Products Cart</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="Quotation" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <i className="bi bi-heart "></i>
                  <span className="aiz-side-nav-text">Quotations</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="cart" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <i className="bi bi-heart"></i>
                  <span className="aiz-side-nav-text">My Cart</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="wishlists" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <i className="bi bi-heart"></i>
                  <span className="aiz-side-nav-text">My Wishlist</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="myOrders" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <i className="bi bi-heart"></i>
                  <span className="aiz-side-nav-text">My Orders</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="trackmyOrders" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <i className="bi bi-heart"></i>
                  <span className="aiz-side-nav-text">Track My Orders</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="rmahistor" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <i className="bi bi-heart"></i>
                  <span className="aiz-side-nav-text">RMA History</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="cancelOrders" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <i className="bi bi-heart"></i>
                  <span className="aiz-side-nav-text">Cancel Orders</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="Shipping" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <i className="bi bi-heart"></i>
                  <span className="aiz-side-nav-text">My Shipping Address</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="Billing" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <i className="bi bi-heart"></i>
                  <span className="aiz-side-nav-text">My Billing Address</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="purchase-order-list" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Purchase Order</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="#" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Inward Challan</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="inventory" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Your Inventory</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="invoices" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Invoices</span>
                </Link>
              </li>
              {/* <li className="aiz-side-nav-item">
                <Link className="aiz-side-nav-link" to="#" onClick={() => { setWallet(!wallet) }}>
                  <i className="las la-user-tie aiz-side-nav-icon" />
                  <span className="aiz-side-nav-text">Wallet</span>
                  <span className="aiz-side-nav-arrow" />
                </Link>
                <ul className={`aiz-side-nav-list level-2 mm-collapse ${wallet ? "mm-show" : "extra"}`}>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="add-money-to-wallet">
                      <span className="aiz-side-nav-text">Add Money To Wallet</span>
                    </Link>
                  </li>
                  <li className="aiz-side-nav-item">
                    <Link className="aiz-side-nav-link" to="add-wallet-summery">
                      <span className="aiz-side-nav-text">Add Wallet Summery</span>
                    </Link>
                  </li>

                </ul>
              </li> */}
              <li className="aiz-side-nav-item">
                <Link to="outstanding" className="aiz-side-nav-link ">
                  <i className="las la-home aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Total Outstanding</span>
                </Link>
              </li>
              {/* <li className="aiz-side-nav-item">
                <Link to="wishlists" className="aiz-side-nav-link ">
                  <i className="la la-heart-o aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Wishlist</span>
                </Link>
              </li> */}
              <li className="aiz-side-nav-item">
                <Link to="support-tiket" className="aiz-side-nav-link ">
                  <i className="las la-atom aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Support Ticket</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="profile" className="aiz-side-nav-link ">
                  <i className="las la-user aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Manage Profile</span>
                </Link>
              </li>
              <li className="aiz-side-nav-item">
                <Link to="changePass" className="aiz-side-nav-link ">
                  <i className="las la-user aiz-side-nav-icon"></i>
                  <span className="aiz-side-nav-text">Change Password</span>
                </Link>
              </li>


            </ul>
          </div>

          <div className="fixed-bottom d-xl-none bg-white border-top d-flex justify-content-between px-2">
            <a className="btn btn-sm p-2 d-flex align-items-center" href="#">
              <i className="las la-sign-out-alt fs-18 mr-2"></i>
              <span>Logout</span>
            </a>
            <button className="btn btn-sm p-2">
              <i className="las la-times la-2x"></i>
            </button>
          </div>

          <div className="btn-logout-container mt-3 mb-3">
            <button onClick={removeData} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </div>
      {/* <Outlet></Outlet> */}
    </>
  );
}
export default AsideBar;

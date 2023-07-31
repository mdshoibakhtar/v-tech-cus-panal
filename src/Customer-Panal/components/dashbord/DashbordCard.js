import { BsFillArrowRightCircleFill } from "react-icons/bs";

import assetIcon from "../../../assets/img/dashbord-iconic-pic/addnew.png";
import assetIcon1 from "../../../assets/img/dashbord-iconic-pic/request150x150.png";
import assetIcon3 from "../../../assets/img/dashbord-iconic-pic/Employee_80x.png";
import assetIcon4 from "../../../assets/img/dashbord-iconic-pic/images.jpg";
import axios from "axios";
import { base_Url_cust } from "../../../server";
import { useEffect, useState } from "react";

function DashbordCard() {
  const [listData, setListData] = useState(null)
  const [cardDataCount, setCardData] = useState(null)
  const getRecentListData = async () => {
    const response = await axios.get(`${base_Url_cust}assetReport/dashboardReport`)
    setListData(response.data);
  }
  const getRecentCardData = async () => {
    try {
      const response = await axios.get(`${base_Url_cust}assetReport/dashboard`)
      setCardData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getRecentCardData()
    getRecentListData()
  }, [])
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row gutters-10">
            <div className="col-lg-12">
              <div className="row gutters-10">
                <div className="col-lg-3 col-md-6">
                  <div
                    style={{ width: "100%", cursor: "pointer" }}
                    className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden d-flex"
                  >
                    <div className="p-3">
                      <div className="">
                        <img src={assetIcon} alt="k" className="card-img" />
                      </div>
                    </div>
                    <div className="px-1 pt-2">
                      <div className="opacity-50 card-text">
                        <span className="card-text d-block">Add</span>
                        New Asset
                      </div>
                      <div className="h3 fw-700 mb-1 ">+</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    style={{ width: "100%", cursor: "pointer" }}
                    className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden  d-flex"
                  >
                    <div className="p-3">
                      <div className="">
                        <img src={assetIcon1} alt="k" className="card-img" />
                      </div>
                    </div>
                    <div className="px-1 pt-2 ">
                      <div className="opacity-50 card-text">
                        <span className="card-text d-block">Total</span>
                        Request
                      </div>
                      <div className="h3 fw-700 mb-1 ">32</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    style={{ width: "100%", cursor: "pointer" }}
                    /* onClick={() => changeRoute('customer-list')} */ className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden d-flex"
                  >
                    <div className="p-3">
                      <div className="">
                        <img src={assetIcon3} alt="k" className="card-img" />
                      </div>
                    </div>
                    <div className="px-1 pt-2">
                      <div className="opacity-50 card-text">
                        <span className="card-text d-block">Total</span>
                        Employee
                      </div>
                      <div className="h3 fw-700 mb-1 ">{cardDataCount?.employeeCount}</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    style={{ width: "100%", cursor: "pointer" }}
                    /* onClick={() => changeRoute('categories')} */ className="bg-grad-1 text-white rounded-lg mb-4 overflow-hidden d-flex"
                  >
                    <div className="p-3">
                      <div className="">
                        <img src={assetIcon4} alt="k" className="card-img" />
                      </div>
                    </div>
                    <div className="px-1 pt-2">
                      <div className="opacity-50 card-text">
                        <span className="card-text d-block">Assigned </span>
                        Asset
                      </div>
                      <div className="h3 fw-700 mb-1 ">{cardDataCount?.totalAssignedAsset}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row gutters-10"></div>
            </div>
          </div>

          <div className="row gutters-10">
            <div className="col-md-3">
              <div className="card dasbord-card">
                <div className="card-header">
                  <h6 className="mb-0 fs-14">Top Product</h6>
                </div>
                <div className="card-body">
                  <div className="chartjs-size-monitor">
                    <div className="chartjs-size-monitor-expand">
                      {/* <div className /> */}
                    </div>
                    <div className="chartjs-size-monitor-shrink">
                      {/* <div className /> */}
                    </div>
                  </div>
                  <canvas
                    id="graph-1"
                    className="w-100 chartjs-render-monitor"
                    height={625}
                    width={676}
                    style={{ display: "block", height: 500, width: 541 }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card dasbord-card">
                <div className="card-header">
                  <h6 className="mb-0 fs-14">Top Seller</h6>
                </div>
                <div className="card-body">
                  <div className="chartjs-size-monitor">
                    <div className="chartjs-size-monitor-expand">
                      {/* <div className /> */}
                    </div>
                    <div className="chartjs-size-monitor-shrink">
                      {/* <div className /> */}
                    </div>
                  </div>
                  <canvas
                    id="graph-2"
                    className="w-100 chartjs-render-monitor"
                    height={625}
                    width={676}
                    style={{ display: "block", height: 500, width: 541 }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card dasbord-card">
                <div className="card-header">
                  <h6 className="mb-0 fs-14">Top Categories</h6>
                </div>
                <div className="card-body">
                  <div className="chartjs-size-monitor">
                    <div className="chartjs-size-monitor-expand">
                      {/* <div className /> */}
                    </div>
                    <div className="chartjs-size-monitor-shrink">
                      {/* <div className /> */}
                    </div>
                  </div>
                  <canvas
                    id="graph-2"
                    className="w-100 chartjs-render-monitor"
                    height={625}
                    width={676}
                    style={{ display: "block", height: 500, width: 541 }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card dasbord-card">
                <div className="card-header">
                  <h6 className="mb-0 fs-14">Top Pickup Point sell</h6>
                </div>
                <div className="card-body">
                  <div className="chartjs-size-monitor">
                    <div className="chartjs-size-monitor-expand">
                      {/* <div className /> */}
                    </div>
                    <div className="chartjs-size-monitor-shrink">
                      {/* <div className /> */}
                    </div>
                  </div>
                  <canvas
                    id="graph-2"
                    className="w-100 chartjs-render-monitor"
                    height={625}
                    width={676}
                    style={{ display: "block", height: 500, width: 541 }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h5>
              <strong>Recent List</strong>
            </h5>
          </div>

          {listData &&
            <div className="table-tag" style={{ overflowX: "auto" }}>
              <table className="table table-3 position-relative">
                <thead>
                  <tr>
                    <th className="table-secondary" scope="col">
                      {" "}
                      Id
                    </th>
                    <th className="table-secondary" scope="col">
                      Image
                    </th>
                    <th className="table-secondary" scope="col">
                      {" "}
                      Asset Id{" "}
                    </th>
                    <th className="table-secondary" scope="col">
                      Service Tag
                    </th>
                    <th className="table-secondary" scope="col">
                      Name
                    </th>
                    <th className="table-secondary" scope="col">
                      Unit Price
                    </th>
                    <th className="table-secondary" scope="col">
                      Date of Purchase
                    </th>
                    <th className="table-secondary" scope="col">
                      Date of Manufacture
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listData?.topAssetList?.map((item) => {
                    return <tr key={item?._id}>
                      <td>{item._id}</td>
                      <td className="r-list-img">
                        <span className="">
                          <img
                            src={
                              item?.image
                            }
                            alt="asset img"
                          />
                        </span>
                      </td>
                      <td>{item.modelNo}</td>
                      <td>{item?.serviceTag}</td>
                      <td>{item?.name}</td>
                      <td>{item?.unit_price}</td>
                      <td>{item?.dateOfPurchase}</td>
                      <td>{item.dateOfManufacture}</td>
                    </tr>
                  })}

                </tbody>
              </table>
            </div>}

          <div className="col-xs-12 my-3">
            <div
              className="panel panel-bd d-flex justify-content-center "
              style={{ backgroundColor: "white", borderRadius: "4px" }}
            >
              <div className="panel-body p-2">
                <div className="statistic-box text-center">
                  <span className="">
                    <h4>Total Asset: {cardDataCount?.Asset_count}</h4>
                  </span>
                  <div
                    className="   bg-info"
                    style={{
                      borderRadius: "100%",
                      padding: "150px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row gutters-10">
            <div className="col-lg-12">
              <div className="row gutters-10">
                <div className="col-4">
                  <div
                    style={{ width: "100%", cursor: "pointer" }}
                    className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden"
                  >
                    <div className=" pt-3">
                      <div className="h3 px-3 fw-700 mb-3">{cardDataCount?.userCount}</div>
                      <div className=" px-3 opacity-50 card-text py-4">
                        <span className="card-text d-block">
                          <strong>Total Users</strong>
                        </span>
                      </div>
                      <div className="opacity-50 card-text border-top text-end bg-primary  p-2">
                        <span className="card-text d-block">
                          <strong>More Info</strong>{" "}
                          <BsFillArrowRightCircleFill />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 ">
                  <div
                    style={{ width: "100%", cursor: "pointer" }}
                    className="bg-grad-3 text-white rounded-lg mb-4 overflow-hidden "
                  >
                    <div className=" pt-3">
                      <div className="h3 px-3 fw-700 mb-3">{cardDataCount?.userActive}</div>
                      <div className=" px-3 opacity-50 card-text py-4">
                        <span className="card-text d-block">
                          <strong>Active Users</strong>
                        </span>
                      </div>
                      <div className="opacity-50 card-text border-top text-end bg-primary  p-2">
                        <span className="card-text d-block">
                          <strong>More Info</strong>{" "}
                          <BsFillArrowRightCircleFill />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    style={{ width: "100%", cursor: "pointer" }}
                    className="bg-grad-2 text-white rounded-lg mb-4 overflow-hidden"
                  >
                    <div className=" pt-3">
                      <div className="h3 px-3 fw-700 mb-3">{cardDataCount?.InActiveUser}</div>
                      <div className=" px-3 opacity-50 card-text py-4">
                        <span className="card-text d-block">
                          <strong>In Active Users</strong>
                        </span>
                      </div>
                      <div className="opacity-50 card-text border-top text-end bg-primary  p-2">
                        <span className="card-text d-block">
                          <strong>More Info</strong>{" "}
                          <BsFillArrowRightCircleFill />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h5>
              <strong>Recent Registered</strong>
            </h5>
          </div>
          {listData &&
            <div className="table-tag" style={{ overflowX: "auto" }}>
              <table className="table table-3 position-relative  rounded-4">
                <thead>
                  <tr>
                    <th className="table-secondary" scope="col">
                      Profile Id
                    </th>
                    <th className="table-secondary" scope="col">
                      Profile Pictures
                    </th>
                    <th className="table-secondary" scope="col">
                      First Name
                    </th>
                    <th className="table-secondary" scope="col">
                      Last Name
                    </th>
                    <th className="table-secondary" scope="col">
                      Phone Number
                    </th>
                    <th className="table-secondary" scope="col">
                      Email
                    </th>
                    <th className="table-secondary" scope="col">
                      Created Date
                    </th>
                    <th className="table-secondary" scope="col">
                      Created By
                    </th>
                  </tr>
                </thead>
                <tbody>{
                  listData?.recentCustomer?.map((item, i) => {
                    return <tr key={i}>
                      <td>{item?._id}</td>
                      <td className="r-list-img">
                        <span className="r-list-img">
                          <img
                            src={
                              item?.profilePhoto?.url
                            }
                            alt="asset img"
                          />
                        </span>
                      </td>
                      <td>{item?.firstname}</td>
                      <td>{item?.lastname}</td>
                      <td>{item?.mobile}</td>
                      <td>{item?.email}</td>
                      <td>{item?.createdAt}</td>
                      <td>owner</td>
                    </tr>
                  })
                }

                </tbody>
              </table>
            </div>}
        </div>

      </div>
    </>
  );
}
export default DashbordCard;

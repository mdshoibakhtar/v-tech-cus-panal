import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillEdit, AiFillFile } from 'react-icons/ai'
import { BiSolidEnvelopeOpen, BiTransferAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { base_Url_cust } from '../../../server'

function PurchaseOrderList() {
    const [prchaseData, setPurchaseData] = useState()
    const getPurchaseOrderListData = async () => {
        const response = await axios.get(`${base_Url_cust}servicePurchase`)
        setPurchaseData(response.data);
    }
    useEffect(() => {
        getPurchaseOrderListData()
    }, [])
    return <div className="aiz-main-content col-lg-12 col-md-12">
        <div className="px-15px px-lg-25px">

            <div className="aiz-titlebar text-left mt-2 mb-3">
                <div className="row align-items-center">
                    {/* <div className="col-md-6">
                  <h1 className="h3">Asset Categorie List</h1>
              </div> */}
                    {/* <div className="col-md-6 text-md-right">
          <Link to="/admin/roles/create" className="btn btn-circle btn-info">
              <span>Add New Role</span>
          </Link>
      </div> */}
                </div>
            </div>
            <div className="card">
                <div className="card-header"> <h5 className="mb-0 h6">Purchase Order List</h5>
                </div>
                <div className="card-body">
                    {prchaseData &&
                        <table className="table table-3 position-relative">
                            <thead>
                                <tr>
                                    <th className="table-secondary" scope="col">Serial No</th>
                                    <th className="table-secondary" scope="col">Purchase Order No</th>
                                    <th className="table-secondary" scope="col">Purchase Order Date</th>
                                    <th className="table-secondary" scope="col">Quotation No</th>
                                    <th className="table-secondary" scope="col">Quotation Date</th>
                                    <th className="table-secondary" scope="col">Customer  Name</th>
                                    <th className="table-secondary" scope="col">Total Items</th>
                                    <th className="table-secondary" scope="col"> Status</th>
                                    <th className="table-secondary" scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {prchaseData?.map((item, i) => {
                                    return <tr key={i}>
                                        <td >{i + 1}</td>
                                        <td>{item?.purchase_No}</td>
                                        <td>{item?.purchase_Date}</td>
                                        <td>{item?.quotation_No}
                                        </td>
                                        <td>{item?.quotation_Date}</td>
                                        <td>{item?.userFirstname} &nbsp; &nbsp; {item?.userlastname}</td>
                                        <td>{item?.total}</td>
                                        <td >
                                            <span class="badge badge-inline badge-danger" style={{ color: "black", backgroundColor: item?.statusId[0]?.orderStatusName === "Pending" ? "yellow" : item?.statusId[0]?.orderStatusName === 'Delivered' ? 'blue' : item?.statusId[0]?.orderStatusName === 'Rejected' ? 'red' : "transparent" }}>
                                                {item?.statusId[0]?.orderStatusName}
                                            </span>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-soft-danger btn-icon btn-circle btn-sm btn-circle-2" title="delete" fdprocessedid="yghhlt">
                                                <AiFillFile />
                                            </button>
                                            <Link className="btn btn-soft-primary btn-icon btn-circle btn-sm me-2 btn-circle-2" title="View" href="/admin/add-asset-category">
                                                <AiFillEdit className="icon-icon" />
                                            </Link>

                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </table>}
                </div>
            </div>
        </div>

    </div>
}

export default PurchaseOrderList

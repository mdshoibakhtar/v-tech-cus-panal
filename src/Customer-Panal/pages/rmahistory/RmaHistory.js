import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

function RmaHistory() {
    const userid = window.localStorage.getItem("user_id");
    const [data, setData] = useState()

    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/rma/user/${userid}`)
            setData(res.data)
        } catch (error) {
            alert('Server Error Failed To load Data')
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return <div className="container">
        <div className="aiz-user-panel">
            <div className="aiz-titlebar mt-2 mb-4">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h3>Rma History</h3>
                    </div>
                </div>
            </div>

            <div className="card">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Product Name</th>
                            {/* <th scope="col">Image</th> */}
                            <th scope="col">SKU</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Order Id</th>
                            <th scope="col">Resulution Type</th>
                            <th scope="col">Rma Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, i) => {
                            console.log(item);
                            return <tr key={item._id}>
                                <th scope="row">{1 + i}</th>
                                <td>{item?.createdAt}</td>
                                <td>{item?.product_id?.name}</td>
                                {/* <td>
                                    <img src={item?.product_id?.mainimage_url?.url} />
                                </td> */}
                                <td>{item?.variant_id?.sku}</td>
                                <td>{item?.variant_id?.weight}</td>
                                <td>{item?.orderId}</td>
                                <td>{item?.resulution_type}</td>
                                <td>{item?.status}</td>
                            </tr>
                        })}


                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
export default RmaHistory
import axios from "axios"
import { useState } from "react"
import { Button, Spinner } from "react-bootstrap"
import { FaKey } from "react-icons/fa"

function ChangePassword() {
    const idUser = window.localStorage.getItem("user_id")
    const [storeValue, setStoreValue] = useState({
        userid: idUser,
        oldPassword: "",
        password: "",
        confirmPassword: ""
    })

    const changeHandelVal = (e) => {
        const clone = { ...storeValue }
        clone[e.target.name] = e.target.value
        setStoreValue(clone)
    }

    const [isloading, setIsloading] = useState(false)
    const [iserror, setIserror] = useState(false)
    const [issusess, setissuss] = useState(false)
    const [errmsg, seterrmsg] = useState(null)

    const sendData = async () => {
        setIsloading(true)
        try {
            const res = await axios.put(` https://onlineparttimejobs.in/api/user/password`, storeValue)
            setIsloading(false)
            setissuss(true)
            setIserror(false)
        } catch (error) {
            seterrmsg(error.response.data.message)
            setIsloading(false)
            setIserror(true)
        }
    }


    return <div className="container">
        <div className="row login-container">
            <div className="col" style={{ margin: "10px 0" }}>
                <div style={{ width: "500px", margin: "auto" }}>
                    <h3 style={{color:"white"}}><FaKey /> Change Password</h3>
                    <div style={{ margin: "10px 0" }}>
                        <label style={{color:"white",fontSize:"larger"}}>Old Password </label>
                        <input onChange={changeHandelVal} name="oldPassword" className="form-control" type="text" />
                    </div>
                    <div style={{ margin: "10px 0" }}>
                        <label style={{color:"white",fontSize:"larger"}}>New Password </label>
                        <input onChange={changeHandelVal} name="password" className="form-control" type="password" />
                    </div>
                    <div style={{ margin: "10px 0" }}>
                        <label style={{color:"white",fontSize:"larger"}}>Conform New Password </label>
                        <input onChange={changeHandelVal} name="confirmPassword" className="form-control" type="password" />
                    </div>
                    {iserror && <h5 style={{ color: "black" }}>{errmsg} Password Not Change !</h5>}
                    {issusess && <h5 style={{ color: "black" }}>Password Change Successfully</h5>}
                    <Button style={{ display: "flex", alignItems: "center" }} variant="success" onClick={sendData}>{isloading && <Spinner animation="border" />} <span style={{ margin: "0 5px" }}>Change Password</span></Button>
                </div>
            </div>
        </div>
    </div>
}
export default ChangePassword
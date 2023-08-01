import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import img2 from "../assets/img/vtech.png";
import axios from "axios";
import { setProfile } from "../Customer-Panal/components/products/productSlice";
import { useDispatch } from "react-redux";

function LoginSection({ signin }) {


    const [loginData, setLoginData] = useState({
        email: "", password: ""
    })
    const [isSucces, setIsSucces] = useState(false)
    const [isEmail, setIsEmail] = useState(false)

    const navigateCustomer = useNavigate()
    const handleInputChange = (e) => {
        const inputVal = e.target.value
        const inputName = e.target.name
        const cloneData = { ...loginData }
        cloneData[inputName] = inputVal
        setLoginData(cloneData)
    }
    const dispacher = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/user/login`, loginData)
        
            setIsSucces(true)
            setTimeout(() => {
                navigateCustomer("/customer")
            }, 1000);
            window.localStorage.setItem("token", res.data.token);
            window.localStorage.setItem("user_id", res.data._id);
            window.localStorage.setItem("isLogin", true);
            window.localStorage.setItem("email", res.data.email);
            window.localStorage.setItem("mobile", res.data.mobile);
            // window.localStorage.setItem("profilePic", data?.image?.url);
            window.localStorage.setItem("userName", `${res?.data.firstname} ${res?.data.lastname}`);
            dispacher(setProfile(res.data))
        } catch (error) {
            setIsEmail(true)
        }
    }

    return <div className=' d-flex align-items-center login-container' style={{ height: "90Vh", justifyContent: "center" }}>
        <div>
            <div className='text-center p-2 bg-dark text-white my-2'><h3 >Welcome  login please </h3></div>
            <div className='d-flex p-3  align-items-center' style={{ backgroundColor: "#004ea2" }}>
                <div className='login  overflow-hidden p-3' style={{ width: "250px", borderRadius: "8px 0 0 8px" }}>
                    <img src={img2} alt='login wrap' width={100 + "%"} />
                </div>

                <div>
                    <div>
                        <Form.Label htmlFor="email">
                            <strong className="">E-mail Id</strong>
                        </Form.Label>
                    </div>
                    <Form.Control
                        value={loginData.email} name='email' type='email' placeholder='Enter User Id' onChange={handleInputChange}
                    />
                    <br />
                    <div>
                        <Form.Label htmlFor="pass"><strong className="">Password</strong></Form.Label>
                    </div>
                    <Form.Control
                        value={loginData.password} name='password' type='password' placeholder='Password' onChange={handleInputChange}
                    />
                    <div style={{ display: "flex" }}>
                        <div className="my-3" style={{ marginRight: "5px" }}>
                            <Button onClick={handleSubmit}>Login</Button>
                        </div>
                        <div className="my-3">
                            <Link to='/register' className="btn btn-primary">Register</Link>
                        </div>
                    </div>
                </div>


            </div>

            {isSucces &&
                <div className='p-3 bg-info text-white mt-5 text-center'><span><b>Login Success</b></span></div>

            }
            {isEmail &&
                <div className='p-3 bg-info text-white mt-5 text-center'><span><b>Login Fail..</b></span></div>
            }
           
        </div>
    </div >

}
export default LoginSection
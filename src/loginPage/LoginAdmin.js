import { useEffect, useState } from "react"
import login from "../assets/img/login.png";
import { Link, useNavigate } from "react-router-dom";
/* import { AiOutlineGoogle } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa"; */
import { Button, Form } from "react-bootstrap";
import img2 from "../assets/img/vtech.png";
// import axios from "axios";
import { useLoginStaffsMutation, useSellerLoginMutation } from "../Customer-Panal/components/all-products/allproductsApi/allProductsApi";
import axios from "axios";

function LoginSection({ signin }) {


    const [loginData, setLoginData] = useState({
        email: "", password: ""
    })
    const [isSucces, setIsSucces] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const login = {
        email: "admin@gmail.com", password: "12345678"
    }
    const navigateCustomer = useNavigate()
    const handleInputChange = (e) => {
        const inputVal = e.target.value
        const inputName = e.target.name
        const cloneData = { ...loginData }
        cloneData[inputName] = inputVal
        setLoginData(cloneData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/user/login`, loginData)
            setIsEmail(false)
            setIsPassword(false)
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
        } catch (error) {
            setIsEmail(true)
        }

        // if (login.email === loginData.email && login.password === loginData.password) {

        // }
        // else if (login.email !== loginData.email) {

        // }
        // else if (login.password !== loginData.password) {
        //     setIsEmail(false)
        //     setIsPassword(true)
        // }
        // signin()
    }

    /* const navigate = useNavigate()
    const [getLogin, { data, isError, isSuccess, isLoading }] = useLoginStaffsMutation()

    const getLoginAdmin = window.localStorage.getItem('showMainadmin')
    const getLoginStaf = window.localStorage.getItem('adminIslogin')

    const [showSeller, setHowSeller] = useState(false)


    useEffect(() => {
        // if (getLoginAdmin === 'true' || getLoginStaf === 'true') {
        //     navigate('/admin')
        // }
    }, [])

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const handleChangeLogin = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const cloneData = { ...loginForm };
        cloneData[name] = value;
        setLoginForm(cloneData);
    };


    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        getLogin(loginForm)
    };

    useEffect(() => {
        setshow(false)
    }, [])
    const [sellerLog, { data: sellerData, isLoading: sellerLoading, isError: isSellerErr, isSuccess: isSellerSucc }] = useSellerLoginMutation()

    const setAllData = (data) => {
        // window.localStorage.setItem('adminId', data.findStaff._id)
        // window.localStorage.setItem('adminToken', data.token)
        window.localStorage.setItem('adminIslogin', false)
        window.localStorage.setItem('showMainadmin', false)
        window.localStorage.setItem('isSellerLogin', false)
        window.localStorage.setItem('isSellerName', null)
        window.localStorage.setItem('isPickupManagerLogin', false)
        window.localStorage.setItem('isPickupManagerId', null)
        window.localStorage.setItem('isPickupManagerName', null)
        window.localStorage.setItem('adminId', '')
        window.localStorage.setItem('isSellerId', null)
        window.localStorage.setItem('isDeleveryBoy', false)
        window.localStorage.setItem('DeleveryBoyId', null)
        window.localStorage.setItem('DeleveryBoyName', null)

        if (data?.finddeliveryBoy?.role_id.role_name === 'delevery boy') {
            window.localStorage.setItem('isDeleveryBoy', true)
            window.localStorage.setItem('DeleveryBoyId', data?.finddeliveryBoy?._id)
            window.localStorage.setItem('DeleveryBoyName', data?.finddeliveryBoy?.firstname + " " + data?.finddeliveryBoy?.lastname)

        }

        else if (data?.findStaff?.role_id.role_name === 'Pickup Point Manager') {
            window.localStorage.setItem('isPickupManagerLogin', true)
            window.localStorage.setItem('isPickupManagerId', data?.findStaff?._id)
            window.localStorage.setItem('pickIds', data?.pickIds[0])
            window.localStorage.setItem('isPickupManagerName', data?.findStaff?.firstname + " " + data?.findStaff?.lastname)

        }
        else if (data?.findStaff?.role_id.name === 'Super Admin') {
            window.localStorage.setItem('showMainadmin', true)
            window.localStorage.setItem('adminId', data?.findStaff?._id)
            window.localStorage.setItem('superAdminName', data?.findStaff?.firstname + " " + data?.findStaff?.lastname)
        }

        else {
            window.localStorage.setItem('isSellerLogin', true)
            window.localStorage.setItem('isSellerId', data?.findSeller?._id)
            window.localStorage.setItem('isSellerName', data?.findSeller?.firstname + " " + data?.findSeller?.lastname)
        }
        setTimeout(() => {
            navigate('/admin')
        }, 1000);
    }

    useEffect(() => {
        if (data) {
            setAllData(data)
        }
    }, [isSuccess, data])

    useEffect(() => {
        if (sellerData) {
            setAllData(sellerData)
        }
    }, [sellerData, sellerLoading])

    const ShowSellerLogin = () => {
        setHowSeller(!showSeller)
    }



    const SendSellerInfo = () => {
        sellerLog(loginForm)
    }

    const [delevery, setDelevry] = useState(true)
    const showDelvery = () => {
        setDelevry(!delevery)
    }

    const sendDelevery = async () => {
        try {
            const res = await axios.post('https://onlineparttimejobs.in/api/deliveryBoy/login', loginForm)
            setAllData(res.data)
        } catch (error) {
            alert('Login Fail')
        }
    } */


    return <div className=' d-flex align-items-center login-container' style={{ height: "90Vh", justifyContent: "center" }}>
        <div>
            <div className='text-center p-2 bg-dark text-white my-2'><h3 >Welcome  login please </h3></div>
            <div className='d-flex p-3  align-items-center' style={{ backgroundColor: "#004ea2" }}>
                <div className='login  overflow-hidden p-3' style={{ width: "250px", borderRadius: "8px 0 0 8px" }}>
                    <img src={img2} alt='login wrap' width={100 + "%"} />
                </div>
                {/* <form className='bg-white p-2 rounded-right' style={{ borderRadius: "0 8px 8px 0" }} >
                    <div>
                        <label type="text">email</label>
                    </div>
                    <input value={loginData.email} name='email' type='email' placeholder='Enter User Id' onChange={handleInputChange} />
                    <div>
                        <label>password</label>
                    </div>
                    <input value={loginData.password} name='password' type='password' placeholder='Password' onChange={handleInputChange} />

                    <div>
                        <Button onClick={handleSubmit}>Login</Button>
                    </div>
                </form> */}



                {/* ================================================ */}

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
        {/* 
        <div className="container">
            <div className="registrationInfo">
                <div className="registerContent">
                    <div className="contentHeader">
                        <h3>Stay Updated on your professional world</h3>
                        <p>Sign in with your mobile number to get started</p>
                    </div>
                    <div className="contentFooter">
                        <img src={login} alt="Login" className="img-fluid" />
                    </div>
                </div>
                <div className="registerForm">
                    <h4 className="mb-4">Login to your account.</h4>
                    <form className="registerFormField">
                        <div className="mb-3">
                            <input
                                type="email"
                                placeholder="email"
                                className="form-control"
                                autoComplete="off"
                                name="email"
                                onChange={handleChangeLogin}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                autoComplete="off"
                                name="password"
                                onChange={handleChangeLogin}
                            />
                        </div>
                        <div className="form-check mb-3 forgotInfo">
                            <div className="rememberText">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    id="flexCheckDefault"
                                />
                                <label
                                    className="form-check-label agreeCheck"
                                    htmlFor="flexCheckDefault"
                                >
                                    Remember Me
                                </label>
                            </div>
                            <div className="forgotText">
                                <Link to="#">Forgot password?</Link>
                            </div>
                        </div>
                        {isError && <h4 style={{ color: "red" }}>login Fail ! </h4>}
                        {isSuccess && <h4>login Successfully !</h4>}
                        {isSellerErr && <h4 style={{ color: "red" }}>login Fail ! </h4>}
                        {isSellerSucc && <h4>login Successfully !</h4>}
                        {!delevery ? <button className="btn btn-primary createAccount" type="button" onClick={sendDelevery} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            login Delivery Boy
                        </button> : showSeller ? <button className="btn btn-primary createAccount" type="button" onClick={SendSellerInfo} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            login Seller
                            {sellerLoading && <Spinner style={{ marginLeft: "7px" }} animation="border" />}
                        </button> : <button className="btn btn-primary createAccount" type="button" onClick={handleLoginSubmit} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            login
                            {isLoading && <Spinner style={{ marginLeft: "7px" }} animation="border" />}
                        </button>}

                    </form>
                    {!showSeller ? <div className="forgotText" style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
                        <Link to="#" onClick={ShowSellerLogin}>Login Seller</Link>

                    </div> : <div className="forgotText" style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
                        <Link to="#" onClick={ShowSellerLogin}>Login Admin</Link>
                    </div>}

                    {!delevery ? <Link to="#" onClick={showDelvery}>Login Admin</Link> : <Link to="#" onClick={showDelvery}>Login As Delevery Boy</Link>}
                    <div className="joinWith">
                        <span>or login with</span>
                    </div>
                    <div className="connectWith">
                        <ul>
                            <li>
                                <a href="https://mmslfashions.in/" className="facebook">
                                    <FaFacebookF />
                                </a>
                            </li>

                            <li>
                                <a href="https://mmslfashions.in/" className="twitter">
                                    <BsTwitter />
                                </a>
                            </li>

                            <li>
                                <a href="https://mmslfashions.in/" className="google">
                                    <AiOutlineGoogle />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div> */}
    </div >

    // return <div className="aiz-main-wrapper d-flex">
    //     <div className="flex-grow-1">
    //         <div className="h-100 bg-cover bg-center py-5 d-flex align-items-center" style={{background:}}>

    //         </div>
    //     </div>
    // </div>
}
export default LoginSection
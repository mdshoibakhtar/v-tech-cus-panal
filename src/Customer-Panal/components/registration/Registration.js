import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
// import { useGetCurrencyQuery, useGetLanguageQuery, useSetRegisterMutation } from "../products/productSlice";
import { Spinner } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import '../registration/registeration.css'

function Registration() {
  const [show, setShow] = useState(false)

  const [isLoading, setisLoading] = useState(false)
  const [isError, setisError] = useState(false)
  const [isSuccess, setisSuccess] = useState(false)

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    conform_password: "",
    currency: "643aedb211b57e222dffe64e",
    language: "63fb926bba4c51937001628a",
    refer_code: '',
    long: "",
    lat: "",

  });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const cloneData = { ...formData }
    cloneData[name] = value;
    setFormData(cloneData)
  }

  const [file, setFile] = useState(null)
  const onchagePhoto = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setisLoading(true)
    setisError(false)
    const formDatas = new FormData();

    formDatas.append('firstname', formData.firstname);
    formDatas.append('lastname', formData.lastname);
    formDatas.append('email', formData.email);
    formDatas.append('mobile', formData.mobile);
    formDatas.append('password', formData.password);
    formDatas.append('conform_password', formData.conform_password);
    formDatas.append('refer_code', formData.refer_code);
    formDatas.append('currency', formData.currency);
    formDatas.append('language', formData.language);
    formDatas.append('long', formData.long);
    formDatas.append('lat', formData.lat);
    
    formDatas.append('image', file);

    try {
      const res = await axios.post(`https://onlineparttimejobs.in/api/user/register`, formDatas)
      setisLoading(false)
      setisSuccess(false)
      setTimeout(() => {
        navigate("/loginPage");
      }, 1000);
    } catch (error) {
      setisLoading(false)
      setisError(true)
      setisSuccess(false)
    }


  }

  return (
    <>
      <Helmet>
        <title>Registration | Fertilizer Multi Vendor</title>
        <meta
          name="keyword"
          content="Fertilizer, Agricultural, Seeds, Machinery, Nutrition"
        />
        <meta
          name="description"
          content="Buy Agricultural Products and Machinery Online at ETG. We Offering broad range of Seeds, Plant Nutrition, Plant Protection and Agri Implements."
        />
      </Helmet>
      <div className="registrationDetail" style={{ height: "1015px" }}>
        <div className="registrationInfo">
          <div className="registerContent">
            <div className="contentHeader">
              {isLoading && <div className="preloaderCount">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>}
              <h3>Looks like you're new here!</h3>
              <p>Sign up with your mobile number to get started</p>
            </div>
            <div className="contentFooter">
              {/* <img src={login} alt="Login" className="img-fluid" /> */}
            </div>
          </div>
          <div className="registerForm">
            <h4 className="mb-4">Create an account.</h4>
            <form className="registerFormField" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="file"
                  placeholder="First Name"
                  className="form-control"
                  name="file"
                  onChange={onchagePhoto}
                  autoComplete="off"
                  
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  name="firstname"
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                  name="lastname"
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  placeholder="Mobile"
                  className="form-control"
                  required
                  name="mobile"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="example@123"
                  className="form-control"
                  required
                  name="email"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

{/* 
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Refer Code"
                  className="form-control"
                  
                  name="refer_code"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div> */}



              {/* <div style={{ margin: "10px 0" }}>
                <select class="form-select" name="language" onChange={handleChange} aria-label="Default select example">
                  <option selected>Select Language</option>
                  {language && language.map((item) => {
                    return <option value={item._id}>{item.name}</option>
                  })}
                </select>
              </div>

              <div style={{ margin: "10px 0" }}>
                <select class="form-select" name="currency" onChange={handleChange} aria-label="Default select example">
                  <option selected>Select Language</option>
                  {currency && currency.map((item) => {
                    return <option value={item._id}>{item.name}</option>
                  })}
                </select>
              </div> */}






              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  required
                  name="password"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="conform_password"
                  className="form-control"
                  required
                  name="conform_password"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>


              <div className="mb-3">
                <input
                  type="text"
                  placeholder="longitude"
                  className="form-control"
                  
                  name="long"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Latitude"
                  className="form-control"
                  
                  name="lat"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>


              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                  checked={show}
                  onClick={() => { setShow(!show) }}
                />
                <label
                  className="form-check-label agreeCheck"
                  htmlFor="flexCheckDefault"
                >
                  By signing up you agree to our terms and conditions.
                </label>
              </div>
              {isError && <h4 style={{ color: "red" }}>Registration Fail ! </h4>}
              {isSuccess && <h4>Registration Successfully !</h4>}
              <button disabled={!show} className="btn btn-primary createAccount" type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                Create Account
                {isLoading && <Spinner style={{ marginLeft: "7px" }} animation="border" />}
              </button>
            </form>
            {/* <div className="joinWith">
              <span>or join with</span>
            </div>
            <div className="connectWith">
              <ul>
                <li>
                  <Link to="https://mmslfashions.in/" className="facebook">
                    <FaFacebookF />
                  </Link>
                </li>

                <li>
                  <Link to="https://mmslfashions.in/" className="twitter">
                    <BsTwitter />
                  </Link>
                </li>

                <li>
                  <Link to="https://mmslfashions.in/" className="google">
                    <AiOutlineGoogle />
                  </Link>
                </li>
              </ul>
            </div> */}
            <div className="alreadyAccount">
              <p>Already have an account?</p>
              <Link to="/loginPage" className="btn btn-primary">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration

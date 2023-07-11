import React from 'react';
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/SignUp.css";
// import Facebook from "./SignInWithFacebook";
// import Google from "./SignInWithGoogle";




export default function SignIn({ updateIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [passwordMode, setPasswordMode] = useState(true);
  const [errorResponse, setErrorResponse] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form inputs
    const validationErrors = validateForm({ email, password});
    setErrors(validationErrors);

    // If there are errors, stop the submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    const formData = {
      email,
      password,
      errors,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        formData
      );
      
      const { token } = response.data;

      // Save the token to local storage

      localStorage.setItem("token", token);
        
      // Save the token to local storage
      console.log("Data sent successfully");
      updateIsLogin(true);
      navigate("/");
    } catch (error) {
      console.log("Error:", error.message);
      setErrorResponse(JSON.stringify(error.response.data)); // Set error response

    }
    setEmail("");
    setPassword("");
  };
 
  function handlePasswordMode() {
    setPasswordMode(!passwordMode);
  }
  const validateForm = (values) => {
    const errors = {};


    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    } else if (!/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email domain";
    }

    if (!values.password.trim()) {
      errors.password = "Password is required";
    } else {
      if (!/(?=.*[a-z])/.test(values.password)) {
        errors.password = "Password must include at least one lowercase letter";
      }
      if (!/(?=.*[A-Z])/.test(values.password)) {
        errors.password = "Password must include at least one uppercase letter";
      }
      if (!/(?=.*\d)/.test(values.password)) {
        errors.password = "Password must include at least one digit";
      }
      if (!/(?=.*\W)/.test(values.password)) {
        errors.password = "Password must include at least one special character";
      }
      if (values.password.length < 9) {
        errors.password = "Password must be at least 9 characters long";
      }
    }


    return errors;
  };



  
    return (
       < >
      <div className="row bg-gray-100 text-gray-900 justify-content-center mx-0">
        <div className="row max-w-screen-lg m-0 m-sm-20 bg-white shadow-sm rounded-lg justify-content-center">
          <div className="col-lg-5 col-md-7 col-10">
            <div className="mt-12 d-flex flex-column align-items-center">
              <h1
                className="text-2xl text-xl-3xl font-weight-bold text-blue-600"
                style={{ color: "black" }}
              >
                Sign In
              </h1>
              {errorResponse && (
                <div className="m-2 my-8 max-w-sm rounded-lg border border-gray-100 bg-white px-12 py-6 shadow-md">
                  <button className="close text-gray-400" type="button" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                 </button>
                 <p className="mb-1 font-medium">
                   <span className="badge badge-danger rounded-xl">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-3 w-3">
                    <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                   </span>
                   <span className="text-sm text-danger">{errorResponse}.</span>
                  </p>
              </div>
            )}
              <div className="w-100 flex-1 mt-8">
               
                <br/>
                <form onSubmit={handleSubmit} >
                  <div className="mx-auto max-w-xs">
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className={`block mb-2 text-sm font-weight-medium"`}
                      >
                        Email
                      </label>
                      <input
                        
                        type="email"
                        id="email"
                        name='email'
                        className={`form-control rounded-lg`}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}

                   
                      />
                      <span> {errors.email && (
                        <p className="text-red-500 mt-1">{errors.email}</p>
                       )}</span>
                
                    </div>
                  
                    <div className="password">
                      <label
                        htmlFor="password"
                        className={`block mb-2 text-sm font-weight-medium"`}
                      >
                        Password
                      </label>
                      <input
                     
                        type={passwordMode ? "password" : "text"}
                        id="password"
                        name='password'
                        className={`form-control rounded-lg `}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}

                 
                      />
                      <span className="eye" onClick={handlePasswordMode}>
                        <i
                          className={`fas fa-eye ${
                            passwordMode ? "d-block" : "d-none"
                          }`}
                          id="showEye"
                        />
                        <i
                          className={`fas fa-eye-slash ${
                            passwordMode ? "d-none" : "d-block"
                          }`}
                          id="hideEye"
                        />
                      </span>
                      {errors.password && (
                        <p className="text-red-500 mt-1">{errors.password}</p>
                       )}
                    </div>
                    <button
                      type="submit"
                      className={`mt-3 btn w-100 py-3 rounded-lg d-flex align-items-center justify-content-center Abd`}
                      style={{ backgroundColor: "#F45757" }}
                    >
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ color: "white" }}
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                      </svg>
                      <span className="ml-3" style={{ color: "white" }}>
                        Sign in
                      </span>
                    </button>
                  
                    <p className={`mt-2 text-sm`}>
                      Don't have an account!
                      <Link
                        to="/signup"
                          
                
                        className={`font-weight-bold text-primary-600`}
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                  <div className="mt-3 d-flex flex-column align-items-center">
                    <div className="w-100 mt-2">
                      <div className="my-4 border-bottom text-center">
                        <div className="px-2 d-inline-block text-lg text-secondary font-weight-medium bg-white translate-middle-y">
                          Or Sign In With
                        </div>
                      </div>
                      {/* <div className="d-flex flex-column align-items-center">
                        <Facebook
                          massage={"Sign in with Facebook"}
                          selectedUserType={selectedUserType}
                        />
                        <Google
                          massage={"Sign in with Google"}
                          selectedUserType={selectedUserType}
                        />
                      </div> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}



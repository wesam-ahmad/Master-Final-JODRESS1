import "./css/SignUp.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup({ updateIsLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [userRole, setUserRole] = useState(false);
  const [serviceProviderRole, setServiceProviderRole] = useState(true);
  // const [message, setMessage] = useState('');
  const [passwordMode, setPasswordMode] = useState(true);
  const [errorResponse, setErrorResponse] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    const validationErrors = validateForm({ name, email, password, phone , address});
    setErrors(validationErrors);

    // If there are errors, stop the submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Create an object with the form data
    const formData = {
      name,
      email,
      password,
      phone,
      address,
      role: userRole ? "user" : "serviceProvider",
    };

    try {
      // Send the form data to the server
      const response = await axios.post(
        "http://localhost:8000/register",
        formData
      );

      console.log("Data sent successfully");
     
      // Save the token to local storage
      localStorage.setItem("token", response.data.token);

   
     updateIsLogin(true);

      console.log("Data sent successfully");
      setErrorResponse(""); // Clear any previous error response
      // setMessage('Registration successful'); // Set success message

      // Reset form fields
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setAddress("");
      setUserRole(false);
      setServiceProviderRole(false);
      setErrors({});
      navigate("/");
    } catch (error) {
      console.log("Error:", error.message);
      setErrorResponse(JSON.stringify(error.response)); // Set error response
      // setMessage(''); // Clear success message
    }
  };
  
  function handlePasswordMode() {
    setPasswordMode(!passwordMode);
  }
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    if (id === "user") {
      setUserRole(checked);
      setServiceProviderRole(false);

    } else if (id === "service-provider") {
      setUserRole(false);
      setServiceProviderRole(checked);
    }
  };

  const validateForm = (values) => {
    const errors = {};
  
    if (!values.name.trim()) {
      errors.name = "Name is required";
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
  
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    } else if (!/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email domain";
    }
  
    if (!values.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/i.test(values.phone)) {
      errors.phone = "Invalid phone number";
    }
  
    if (!values.address.trim()) {
      errors.address = "Address is required";
    }
  
    return errors;
  };
  

  return (
    <div className="container-fluid">
    <div className="row bg-gray-100 text-gray-900 justify-content-center ">
      <div className="col-lg-8 col-md-8 w-100">
        <div className="row m-0 m-sm-20 bg-white shadow-sm rounded-lg d-flex justify-content-center">
          <div className="col-lg-5 col-md-12">
            <div className="mt-12 d-flex flex-column align-items-center">
              <h1
                className="text-2xl text-xl-3xl font-weight-bold"
                style={{ color: "black" }}
              >
                Sign Up to Join Us!
              </h1>
              {errorResponse && (
                <div className="m-2 my-8 max-w-sm rounded-lg border border-gray-100 bg-white px-12 py-6 shadow-md">
                  <button className="close text-gray-400" type="button" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                 </button>
                 <p className="mb-1 font-medium">
                   <span className="badge badge-danger rounded-xl">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" claclassNamess="h-3 w-3">
                    <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                   </span>
                   <span className="text-sm text-danger">{errorResponse}.</span>
                  </p>
              </div>
            )}

              <div className="w-100 flex-1 mt-8">
                <form onSubmit={handleSubmit}>
                  <div className="mx-auto max-w-xs">
                    <div className="d-flex flex-wrap mt-4 align-items-center justify-content-around border  border-opacity-50 rounded-3">
                      <div className="form-check my-3">
                        <label
                          htmlFor="user"
                          className="form-check-label block text-sm font-weight-medium"
                        >
                          User
                        </label>
                        <input
                          onChange={handleCheckboxChange}
                          value="provider"
                          checked={userRole}
                          type="radio"
                          id="user"
                          name="user"
                          className="form-check-input"
                        />
                      </div>
                      <div className="form-check">
                        <label
                          htmlFor="service-provider"
                          className="form-check-label block text-sm font-weight-medium"
                        >
                         Service Provider
                        </label>
                        <input
                          onChange={handleCheckboxChange}
                          value="customer"
                          checked={serviceProviderRole}
                          type="radio"
                          id="service-provider"
                          name="user"
                          className="form-check-input"
                        />
                      </div>
                    </div>
                  
                    <div className="mb-3">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-weight-medium"
                      >
                        User name
                      </label>
                      <input
                        
                        type="text"
                        id="login-name"
                        name="name"
                        className="form-control rounded-lg"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    required
                      />
                      {errors.username && (
                  <p style={{ color: "red", fontSize: "13px" }}>
                    {errors.username}
                  </p>
                )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-weight-medium"
                      >
                        Phone
                      </label>
                      <input
                        
                        type="tel"
                        id="phone"
                        className="form-control rounded-lg"
                        placeholder="Enter your phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                     {errors.phone && (
                  <p style={{ color: "red", fontSize: "13px" }}>
                    {errors.phone}
                  </p>
                )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-weight-medium"
                      >
                        Email
                      </label>
                      <input
                         onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        className="form-control rounded-lg"
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                  <p style={{ color: "red", fontSize: "13px" }}>
                    {errors.email}
                  </p>
                )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="address"
                        className="block mb-2 text-sm font-weight-medium"
                      >
                        Address
                      </label>
                      <input
                         onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        id="address"
                        value={address}
                        className="form-control rounded-lg"
                        placeholder="Enter your address"
                      />
                      {errors.address && (
                  <p style={{ color: "red", fontSize: "13px" }}>
                    {errors.address}
                  </p>
                )}
                    </div>
                    <div className="mb-3 password">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-weight-medium"
                      >
                        Password
                      </label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={passwordMode ? "password" : "text"}
                        id="password"
                        className="form-control rounded-lg"
                        placeholder="Enter your password"
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
                  <p style={{ color: "red", fontSize: "13px" }}>
                    {errors.password}
                  </p>
                )}
                    </div>
                    
                    <button
                      type="submit"
                      className="mt-3 btn w-100 py-3 rounded-lg d-flex align-items-center justify-content-center Abd"
                      style={{ backgroundColor: "#F45757" }}
                    >
                      <svg
                        className="w-6 h-6 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ color: "white" }}
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>

                      <span style={{ color: "white" }}>Sign Up</span>
                    </button>
                   
                    <p className="mt-2 text-sm">
                      You already have an account! &nbsp;
                      <Link
                        to="/signIn"
                        className="font-weight-bold text-primary-600"
                      >
                        SignIn
                      </Link>
                    </p>
                  </div>
                  <div className="mt-3 d-flex flex-column align-items-center">
                   
                    {/* <div className="w-100 mt-4">
                      <div className="d-flex flex-column align-items-center">
                        <Facebook
                          massage={"Sign in with Facebook"}
                          selectedUserType={selectedUserType}
                        />
                        <Google
                          massage={"Sign in with Google"}
                          selectedUserType={selectedUserType}
                        />
                      </div>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

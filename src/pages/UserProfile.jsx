import { useState, useEffect } from "react";
import axios from "axios";
//import bcrypt from 'bcryptjs';
// const bcrypt = require("bcrypt");
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { Link } from "react-router-dom";
const UserProfile = () => {
  const [User, setUser] = useState();
  const [user_name, setUser_name] = useState("");
  const [user_email, setUser_email] = useState("");
  const [user_phone, setUser_phone] = useState("");
  const [user_address, setUser_address] = useState("");
  const [user_password, setUser_password] = useState("");
  const [new_password, setNew_password] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState("nav-home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const getUser = async () => {
    const token = localStorage.getItem("token") || "";
    let cus = {};

    try {
      const response = await axios.get(`http://localhost:8000/get-user-data`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      cus = response.data;
      setUser_name(cus.user_name);
      setUser_email(cus.user_email);
      setUser_phone(cus.user_phone);
      setUser_address(cus.user_address);
      setUser_password(cus.user_password);
      setUser(cus);
    } catch (error) {
      console.error(error);
    }
    return cus;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    const validationErrors = validateForm({ user_name, user_email, user_phone , user_address});
    setErrors(validationErrors);

    // // If there are errors, stop the submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // // Create an object with the form data
    const formData = {
      user_name,
      user_email,
      user_phone,
      user_address
        };
    const token = localStorage.getItem("token") || "";

    try {
      // Send the form data to the server
      const response = await axios.put(
        "http://localhost:8000/UpdateUser",formData,{
        headers: {
          authorization: `Bearer ${token}`,
        }}
        
      );
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: ' Your Data Updated  successfully',
      });

      console.log("Data Updated  successfully");
      getUser();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to Update Your Data.',
      });
      console.log("Error:", error.message);
    }
  };
  const validateForm = (values) => {
    const errors = {};
    if (!values.user_name) {
      errors.user_name = "Name is required";
    }
    if (!values.user_email.trim()) {
      errors.user_email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)) {
      errors.user_email = "Invalid email address";
    } else if (!/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,}$/i.test(values.user_email)) {
      errors.user_email = "Invalid email domain";
    }
    if (!values.user_phone.trim()) {
      errors.user_phone = "Phone is required";
    } else if (!/^\d{10}$/i.test(values.user_phone)) {
      errors.user_phone = "Invalid phone number";
    }
    if (!values.user_address.trim()) {
      errors.user_address = "Address is required";
    }
    return errors;
  };


  const handleSubmit2 = async (e) => {
    e.preventDefault();

    // Validate form inputs
    const validationErrors2 = validateForm2({  new_password, confirm_password });
    setErrors(validationErrors2);

    // // If there are errors, stop the submission
    if (Object.keys(validationErrors2).length > 0) {
      return;
    }

    // // Create an object with the form data
    const formData = {      
      new_password
        };
    const token = localStorage.getItem("token") || "";

    try {
      // Send the form data to the server
      const response = await axios.put(
        "http://localhost:8000/UpdatePass",formData,{
        headers: {
          authorization: `Bearer ${token}`,
        }}
        
      );

      console.log("Data Updated  successfully");
      getUser();
    } catch (error) {
      console.log("Error:", error.message);
    }
  };
  const validateForm2 = (values) => {
    const errors = {};
    // //  const bcrypt = require("bcrypt");
    //  const saltRounds = 10;
    //  const salt =  bcrypt.genSalt(saltRounds);
    //  const hashedPassword =  bcrypt.hashSync(values.new_password, salt);
    // //  bcrypt.hash(new_password, saltRounds, (err, hash) => {
    // //   // Now we can store the password hash in db.
    // //   alert(new_password);
    // //   alert(hash);
    // // });

    // alert(JSON.stringify(hashedPassword));
    // alert(user_password);

    /*else if (hashedPassword !=  user_password){
      errors.current_password = "Current Password is incorrect"; 
    }*/
    if (!values.new_password) {
      errors.new_password = "New Password is required";
    }else {
      if (!/(?=.*[a-z])/.test(values.new_password)) {
        errors.new_password = "New Password must include at least one lowercase letter";
      }
      if (!/(?=.*[A-Z])/.test(values.new_password)) {
        errors.new_password = "New Password must include at least one uppercase letter";
      }
      if (!/(?=.*\d)/.test(values.new_password)) {
        errors.new_password = "New Password must include at least one digit";
      }
      if (!/(?=.*\W)/.test(values.new_password)) {
        errors.new_password = "New Password must include at least one special character";
      }
      if (values.new_password.length < 9) {
        errors.new_password = "New Password must be at least 9 characters long";
      }
    }
    if (!values.confirm_password) {
      errors.confirm_password = "Confirm Password is required";
    }else{
      if (values.new_password != values.confirm_password) {
        errors.confirm_password = "Confirm Password must be same as new password";
      }
    }

    return errors;
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container mt-2">
      <div className="row flex-lg-nowrap">
        <div className="col">
          <div className="row">
            <div className="col mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="e-profile">
                    <div className="row">
                      <div className="col-12 col-sm-auto mb-3">
                        <div className="mx-auto" style={{ width: 140 }}>
                          <div
                            className="d-flex justify-content-center align-items-center rounded"
                            style={{
                              height: 140,
                              backgroundColor: "rgb(233, 236, 239)",
                            }}
                          >
                            <span
                              style={{
                                color: "rgb(166, 168, 170)",
                                fontWeight: "bold",
                                fontSize: "8pt",
                              }}
                            >
                              <img
                                src="./images/profile.png"
                                width="100"
                                height="100"
                              ></img>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div className="text-center text-sm-start mb-2 mb-sm-0">
                          <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                            {User?.user_name}
                          </h4>
                          <p className="mb-0"> {User?.user_email} </p>
                          <div className="col-12">
                            <Link to = "/addproudect">
                                    <button
                                      className="btn btn-primary"
                                      type="submit"
                                      style={{ backgroundColor: '#F45757' ,color:"black"}}
                                    >
                                      Add Dress
                                    </button>
                                    </Link>
                                  </div>
                        </div>
                        
                        <div className="text-center text-sm-end">
                          <span className="badge bg-secondary">
                            {User?.role == "serviceProvider"
                              ? "Service Provider"
                              : "User"}
                          </span>
                          <div className="text-muted">
                            <small>
                              Joind at {User?.create_at.substring(0, 10)}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <nav>
                        <div
                          className="nav nav-tabs"
                          id="nav-tab"
                          role="tablist"
                        >
                          <button
                            className={`nav-link ${
                              activeTab === "nav-home" ? "active" : ""
                            }`}
                            id="nav-home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-home"
                            type="button"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected={activeTab === "nav-home"}
                            onClick={() => handleTabClick("nav-home")}
                          >
                            Personal Info
                          </button>
                          <button
                            className={`nav-link ${
                              activeTab === "nav-profile" ? "active" : ""
                            }`}
                            id="nav-profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile"
                            type="button"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected={activeTab === "nav-profile"}
                            onClick={() => handleTabClick("nav-profile")}
                          >
                            Password
                          </button>
                        </div>
                      </nav>
                      <div className="tab-content mt-3" id="nav-tabContent">
                        <div
                          className={`tab-pane fade ${
                            activeTab === "nav-home" ? "show active" : ""
                          }`}
                          id="nav-home"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                        >
                          <form
                            onSubmit={handleSubmit}
                            className="form"
                            noValidate=""
                          >
                            <div className="row">
                              <div className="col-8">
                              <div className="mb-4">
                                <b>Change Personal Info</b>
                              </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="row">
                                      <div className="col">
                                        <div className="form-group">
                                          <label htmlFor="user_name">
                                            Full Name
                                          </label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            id="user_name"
                                            name="user_name"
                                            onChange={(e) =>
                                              setUser_name(e.target.value)
                                            }
                                            placeholder={User?.user_name}
                                            defaultValue={User?.user_name}
                                          />
                                          {errors.user_name && (
                                              <p style={{ color: "red", fontSize: "13px" }}>
                                                       {errors.user_name}
                                                                        </p>
                                                                        )}
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="form-group">
                                          <label htmlFor="user_phone">
                                            Phone
                                          </label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            id="user_phone"
                                            name="user_phone"
                                            onChange={(e) =>
                                              setUser_phone(e.target.value)
                                            }
                                            placeholder={User?.user_phone}
                                            defaultValue={User?.user_phone}
                                          />
                                             {errors.user_phone && (
                                                      <p style={{ color: "red", fontSize: "13px" }}>
                                                               {errors.user_phone}
                                                                                </p>
                                                               )}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col">
                                        <div className="form-group">
                                          <label htmlFor="user_email">
                                            Email
                                          </label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            name="user_email"
                                            id="user_email"
                                            onChange={(e) =>
                                              setUser_email(e.target.value)
                                            }
                                            placeholder={User?.user_email}
                                            defaultValue={User?.user_email}
                                          />
                                           {errors.user_email && (
                                                     <p style={{ color: "red", fontSize: "13px" }}>
                                                                {errors.user_email}
                                                             </p>
                                                                 )}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col mb-3">
                                        <div className="form-group">
                                          <label htmlFor="user_address">
                                            Address
                                          </label>
                                          <textarea
                                            className="form-control"
                                            id="user_address"
                                            onChange={(e) =>
                                              setUser_address(e.target.value)
                                            }
                                            rows={5}
                                            placeholder={User?.user_address}
                                            defaultValue={User?.user_address}
                                          />
                                          {errors.user_address && (
                                                    <p style={{ color: "red", fontSize: "13px" }}>
                                                         {errors.user_address}
                                                            </p>
                                                           )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 d-flex justify-content-end ">
                                <div className="row">
                                  <div className="col-12">
                                    <button
                                      className="btn btn-primary"
                                      type="submit"
                                      style={{ backgroundColor: '#F45757' ,color:"black"}}
                                    >
                                      Save Changes
                                    </button>
                                    
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <form
                            onSubmit={handleSubmit2}
                            className="form"
                            noValidate=""
                          >
                        <div
                          className={`tab-pane fade ${
                            activeTab === "nav-profile" ? "show active" : ""
                          }`}
                          id="nav-profile"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                         >
                            
                          <div className="row">
                            <div className="col-8">
                              <div className="mb-4">
                                <b>Change Password</b>
                              </div>
                         
             
                              <div className="row">
                                <div className="col">
                                  <div className="form-group">
                                    <label htmlFor="new_password">
                                      New Password
                                    </label>
                                    <input
                                      className="form-control"
                                      type="password"
                                      id="new_password"
                                      name="new_password"
                                      onChange={(e) =>
                                        setNew_password(e.target.value)
                                      }
                                      placeholder="••••••"
                                    />
                                       {errors.new_password && (
                                                 <p style={{ color: "red", fontSize: "13px" }}>
                                                {errors.new_password}
                                               </p>
                                                 )}
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="form-group">
                                    <label htmlFor="confirm_password">
                                      Confirm Password
                                    </label>
                                    <input
                                      className="form-control"
                                      type="password"
                                      id="confirm_password"
                                      name="confirm_password"
                                      onChange={(e) =>
                                        setConfirm_password(e.target.value)
                                      }
                                      placeholder="••••••"
                                    />
                                      {errors.confirm_password && (
                                           <p style={{ color: "red", fontSize: "13px" }}>
                                              {errors.confirm_password}
                                              </p>
                                        )}
                                  </div>
                                </div>
                              </div>
                            
                            </div>
                            <div className="col-4 d-flex justify-content-end ">
                              <div className="row">
                                <div className="col-12">
                                  <button
                                    className="btn "
                                    type="submit"
                                    style={{ backgroundColor: '#F45757' ,color:"black" }}
                                  >
                                    Save Changes
                                  </button>
                                </div>
                              </div>
                            </div>
                            
                          </div>

                     
                        </div>
                        </form>
                      </div>
                      
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

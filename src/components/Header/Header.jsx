import React from 'react';
import { Outlet, Link ,useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import  "./../../pages/css/Main.css";
import { Icon } from '@iconify/react';
import { useState ,useEffect} from "react";

const Header = ({isLogin,updateIsLogin}) => {
    useEffect(() => {
      
    }, [isLogin]);
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    let username = "";
    let role = "";
 
    if (isLogin) {
        try {
          const decodedToken = jwtDecode(token);
          username = decodedToken.username;
          role = decodedToken.role;
          // Use the extracted username and role variables as needed
        } catch (error) {
          console.error("Error decoding token:", error);
          // Handle the error (e.g., show an error message, redirect the user, etc.)
        }
      } else {
        console.error("No token found in localStorage");
        // Handle the case where there is no token (e.g., show an error message, redirect the user, etc.)
      }
    return (
        <div>
            <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
        {/* MDB */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.3.0/mdb.min.css" rel="stylesheet" />
        <title>Document</title>
      </div>
      
      <header>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: '#FBC5C5'}}>
          {/* Container wrapper */}
          <div className="container">
            {/* Collapsible wrapper */}
            <div id="navbarSupportedContent">
              {/* Navbar brand */}
              <a className="navbar-brand mt-2 mt-lg-0" href="#">
                <img src="./images/1.png" height={25} width="130px" alt="Logo" loading="lazy" />
              </a>
            </div>
            {/* Collapsible wrapper */}
            {/* Right elements */}
            <form className="d-flex">
                {token && role == "user" ? (
            <Link to="Cart">
        <button className="btn btn-outline-dark" type="submit">
          <i className="bi-cart-fill me-1" />
          Cart
          <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
        </button>
        </Link>
                ): null}
                {token == null ? (  
                <Link to="SignIn">
                <button className="btn btn-outline-dark" type="submit">
                  <i className="bi-cart-fill me-1" />
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                </button>
                </Link>):null}
      </form>
      <div className="col-lg-2 col-md-3 col-sm-0 d-flex align-items-center justify-content-end gap-2">

 
          {token ? (
            <Link to="/userprofile" className=" m-8 ">
             <button className="header__btn btn" style={{color: 'black', backgroundColor: '#F45757'}}>
                  
                  <Icon  icon="ri:user-line" />
                     
                     </button>
            </Link>
          ): null}
      <div className="d-flex align-items-center">
               {token === null ? (
              <Link to="/SignIn" className="text-decoration-none">
                <button className="btn btn-secondary bs-btn-hover-color:gray;"  style={{color: 'black', backgroundColor: '#F45757', borderColor: 'black'}}>Login</button>
                 </Link>
                    ) : (
                      
                      <button
                         className="btn btn-secondary bs-btn-hover-color:gray;"  style={{color: 'black', backgroundColor: '#F45757', borderColor: 'black'}}
                          onClick={() => {
                            localStorage.clear();
                            updateIsLogin(false);
                            navigate("/"); 

                                     }}
                       >
                           Logout
                       </button>)}
             </div>
             </div>
            
            {/* Right elements */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderBottom: 'solid 1px', height: '45px', boxShadow: '0 0 7px'}}>
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCenteredExample">
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
              {/* Left links */}
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item" style={{paddingRight: '50px'}}>    
                  <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                </li>
                <li className="nav-item" style={{paddingRight: '50px'}}>
                <Link className="nav-link" to="#accordionExample">HOW IT WORK</Link>
                </li>
                <li className="nav-item" style={{paddingRight: '50px'}}>
                 
                  <Link className="nav-link" to="/Shop">SHOP</Link>
                </li>
                <li className="nav-item" style={{paddingRight: '50px'}}>
                  <Link className="nav-link" to="/aboutus">ABOUT US</Link>
                </li>
                <li className="nav-item" style={{paddingRight: '50px'}}>             
                  <Link className="nav-link" to="/Contact">CONTACT US</Link>

                </li>
              </ul>
            </div>
            {/* Collapsible wrapper */}
          </div>
          {/* Container wrapper */}
        </nav>
      </header>
        </div>
    );
}

export default Header;

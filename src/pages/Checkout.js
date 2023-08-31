import React from 'react';
import { useState, useEffect } from "react";

import axios from "axios";
import { MDBContainer } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
const insertbooking= async (element) => {
  const token = localStorage.getItem("token") || "";
  element.image='';
  try {


    const response99 = await axios.post(
    "http://localhost:8000/makecheckout",element,{
    headers: {
      authorization: `Bearer ${token}`,
    }}
    
  );
} catch (error) {
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: 'Failed to insert booking.',
  });
};
};
const makeCheckout= async (e) => {
  e.preventDefault();
  const formData = JSON.parse(localStorage.getItem('cart'));
  const token = localStorage.getItem("token") || "";
  const formdata2 = [];

  try {
    // Send the form data to the server
     formData.forEach(element => { 
      element.image ='';
      formdata2.push(element);
      insertbooking(element);
    
       });
  // const response = await axios.post(
  //   "http://localhost:8000/makecheckout",formdata2,{
  //   headers: {
  //     authorization: `Bearer ${token}`,
  //   }}
    
 // );
 
  // insertbooking(formData);
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: ' Your Payment done successfully',
    });

    console.log("Data Updated  successfully");
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Failed to make payment.',
    });
    console.log("Error:", error.message);
  }

  localStorage.removeItem("cart");
 
};
const Checkout = () => {

    return (
        <MDBContainer>
        <main>
        
        <div className="py-5 text-center">
          <h2>Checkout </h2>
        </div>
        <div className="row g-5">
         
          <div className="col-md-7 col-lg-12 ">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" onSubmit={makeCheckout}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">First name</label>
                  <input type="text" className="form-control" id="firstName"   required />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="lastName"   required />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-12">
                
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="Enter your address" required />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

              </div>
              <hr className="my-4" />
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="same-address" />
                <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="save-info" />
                <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
              </div>
              <hr className="my-4" />
              <h4 className="mb-3">Payment</h4>
              <div className="my-3">
                <div className="form-check">
                  <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
                  <label className="form-check-label" htmlFor="credit">Credit card</label>
                </div>
                {/* <div className="form-check">
                  <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                  <label className="form-check-label" htmlFor="debit">Debit card</label>
                </div>
                <div className="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                  <label className="form-check-label" htmlFor="paypal">Paytm</label>
                </div>
                <div className="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                  <label className="form-check-label" htmlFor="paypal">Phonepe</label>
                </div> */}
              </div>
              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">Name on card</label>
                  <input type="text" className="form-control" id="cc-name" placeholder required />
                  <small className="text-muted">Full name as displayed on card</small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">Credit card number</label>
                  <input type="text" className="form-control" id="cc-number" placeholder required />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                  <input type="text" className="form-control" id="cc-expiration" placeholder="09/24" maxLength="5" required />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">CVV</label>
                  <input type="text" className="form-control" id="cc-cvv" placeholder required />
                  <div className="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <button className="w-100 btn btn-danger btn-lg" submit>Continue to checkout</button>
            </form>
          </div>
        </div>
      </main>
      <br>
      </br>
      </MDBContainer>
    );
}

export default Checkout;

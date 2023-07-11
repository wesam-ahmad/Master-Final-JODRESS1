import  "./css/Contact.css";
import React from "react";
import  { useEffect, useState } from "react";
import { useRef } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");



  const [msg, setMsg] = useState({
    msg: '',
    theme: ''
  });


  const sendEmail = async (event) => {
    event.preventDefault();
    
   
    const patternEmail = /^[A-z0-9\.]+@[A-z0-9]+\.[A-z]{3,5}$/;

    if (!email || !name || !message || !subject ) {
      setMsg({ msg: 'Please fill in all fields', theme: 'red' });
      return;
    }

    if (!patternEmail.test(email)) {
      setMsg({ msg: '', theme: 'red' });
      return;
    }

    try {
      const res = await axios.post('http://localhost:8000/message', { name, email, subject,message });
      console.log(res);
      event.target.reset();
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Message  has been sent successfully.',
      });
  
   
    } catch (error) {
      // Display error message
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to send the message.',
      });
  
      console.error(error.message);
    }
  };
    return( 
      <div>
      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs">
        <div className="page-header d-flex align-items-center" style={{backgroundImage: 'url("./images/1.jpeg")' }}>
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
             
            </div>
          </div>
        </div>
      </div>{/* End Breadcrumbs */}
      <br1>
        <br /></br1>
        <br />
        <br />
      <section id="contact" className="contact ">
        <div className="container">
          <div className="form">
            <form id="form" ref={form} onSubmit={sendEmail}>
              <div className="row ">
                <div className="col-md-9 col-sm-12">
                  <div className="row">
                    <div className="col-md-8 form-group">
                      <input type="text" name="name" className="form-control form-control-lg"
                        onChange={(e) => setName(e.target.value)}
                      id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-4 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control form-control-lg" name="email" 
                         onChange={(e) => setEmail(e.target.value)}
                      id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control form-control-lg"
                     onChange={(e) => setSubject(e.target.value)}
                    name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control form-control-lg" style={{height:171 }}
                                         onChange={(e) => setMessage(e.target.value)}
                    name="message" rows={6} placeholder="Message" required defaultValue={""} />
                  </div>
                  <br />
                  <div className="text-center">
                    <button type="submit" style={{backgroundColor: '#F45757'}}>Send Message</button></div>
                  {/* <p className={`font-bold mt-3 text-${msg.theme}-500`} >{msg.msg}</p> */}
                  <br />
                </div>
                <div className="col-md-3 col-sm-12 contact-info">
                  <ul className="list-unstyled mb-0">
                    <li><i className="fas fa-map-marker-alt fa-2x" />
                      <p>Jordan-Zarqa</p>
                    </li>
                    <li><i className="fas fa-phone mt-4 fa-2x" />
                      <p>+ 01 234 567 89</p>
                    </li>
                    <li><i className="fas fa-envelope mt-4 fa-2x" />
                      <p>contact@example.com</p>
                    </li>
                  </ul>
                </div> 
              </div></form>
          </div>
          <br />
        </div></section>{/* End Contact Us Section */}
      <br />
      <br />
    </div>
    
    );
  };
  
  export default Contact;
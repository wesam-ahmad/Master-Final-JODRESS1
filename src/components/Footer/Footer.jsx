import React from 'react';

const Footer = () => {
    return (
//         <div>
            
//       <footer style={{backgroundColor: '#f8d5d5'}}>
//         <div className="container">
//           <section className="row" style={{backgroundColor: '#f8d5d5', paddingTop: '10px'}}>
//             {/* Left */}
//             <div className="col-md-6 col-12" style={{color: '#000000'}}>
//               <span>Get connected with us on social networks:</span>
//             </div>
//             {/* Left */}
//             {/* Right */}
//             <div className="col-md-6 col-12 justify-content-end d-flex">
//               <a href className="text-white me-4">
//                 <i className="fab fa-facebook-f" style={{color: '#000000'}} />
//               </a>
//               <a href className="text-white me-4">
//                 <i className="fab fa-twitter" style={{color: '#000000'}} />
//               </a>
//               <a href className="text-white me-4">
//                 <i className="fab fa-google" style={{color: '#000000'}} />
//               </a>
//               <a href className="text-white me-4">
//                 <i className="fab fa-instagram" style={{color: '#000000'}} />
//               </a>
//               <a href className="text-white me-4">
//                 <i className="fab fa-linkedin" style={{color: '#000000'}} />
//               </a>
//               <a href className="text-white me-4">
//                 <i className="fab fa-github" style={{color: '#000000'}} />
//               </a>
//             </div>
//             {/* Right */}
//           </section>
//           <br />
//           <div className="row">
//             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-3">
//               <div>
//                 <h3>About Us</h3>
//                 <p className="mb-30 footer-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta facilis
//                   eos quia optio iusto odit atque eum tempore, quisquam officiis vero veniam hic,
//                 </p>
//               </div>
//             </div>
//             <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6 col-sm-3">
//               <div className>
//                 <h4>Quick Link</h4>
//                 <ul className="list-unstyled">
//                   <li>
//                     <a href="#" className="text-decoration-none" style={{color: '#000000'}}>Home</a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-decoration-none" style={{color: '#000000'}}>About Us</a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-decoration-none" style={{color: '#000000'}}>Service</a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-decoration-none" style={{color: '#000000'}}>Contact</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-xl-3 col-lg-3 col-md-6 col-sm-3">
//               <div>
//                 <h4>Service</h4>
//                 <ul className="list-unstyled">
//                   <li>
//                     <a href="#" className="text-decoration-none">Marketing</a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-decoration-none">Branding</a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-decoration-none">Web Design</a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-decoration-none">Graphics Design</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-xl-3 col-lg-3 col-md-6 col-sm-3">
//               <div>
//                 <h4>Newsletter</h4>
//                 <div>
//                   <label htmlFor="Newsletter" className="form-label">Subscribe To Our Newsletter</label>
//                   <input type="text" className="form-control" placeholder="Enter Your Email" />
//                   <button className="btn btn-danger mt-3">Subscribe</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="d-flex justify-content-center">
//             <div>
//               © 2023 Copyright
//             </div>
//           </div>
//         </div>
//       </footer>
      
//       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
//       <script
//   type="text/javascript"
//   src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.3.0/mdb.min.js"
// ></script>
//         </div>

<footer className="bg-light text-center text-white" >
{/* Grid container */}
<div className="container p-4 pb-0">
  {/* Section: Social media */}
  <section className="mb-4">
  
    {/* Google */}
    <a
      className="btn text-white btn-floating m-1"
      style={{ backgroundColor: "#dd4b39" }}
      href="mail to :wesamajarma411@gmail.com"
      role="button"
    >
      <i className="fab fa-google" />
    </a>
  
    {/* Linkedin */}
    <a
      className="btn text-white btn-floating m-1"
      style={{ backgroundColor: "#0082ca" }}
      href="https://www.linkedin.com/in/wesam-ajarma-50229225b/"
      role="button"
    >
      <i className="fab fa-linkedin-in" />
    </a>
    {/* Github */}
    <a
      className="btn text-white btn-floating m-1"
      style={{ backgroundColor: "#333333" }}
      href="https://github.com/wesam-ahmad"
      role="button"
    >
      <i className="fab fa-github" />
    </a>
  </section>
  {/* Section: Social media */}
</div>
{/* Grid container */}
{/* Copyright */}
<div
  className="text-center p-3"
  style={{ backgroundColor: "#f8d5d5" , color:"black"}}
>
  © 2023 Copyright:   powered by Wesam Ajarma 
  <a className="text-white" href="#!">
  
  </a>
</div>
{/* Copyright */}
</footer>

    );
}

export default Footer;

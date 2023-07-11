import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReletedProduct from './../components/ReletedProduct'
const SingleProudect = () => {

 
    const [product, setProduct] = useState(null);
    const [rproduct, setrProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/products/${id}`); // Replace 1 with the actual product ID
          setProduct(response.data);
          try {
            
            const response2 = await axios.get(`http://localhost:8000/get-related/1`); // Replace 1 with the actual product ID
            console.log(response2.data);
            setrProduct(response2.data);
          } catch (error) {
            console.error('Error fetching related product:', error);
          }
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
  
      fetchProduct();
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, [id]);
    // const fetchReletedProduct = async () => {
    //   try {
    //     const response = await axios.get(`http://localhost:8000/get-related/${product?.cat_id}`); // Replace 1 with the actual product ID
    //     setrProduct(response.data);
    //   } catch (error) {
    //     console.error('Error fetching product:', error);
    //   }
    // };


    useEffect(() => {
   
    }, []);






    return (
        <div>
        <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
        {product ? (
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={`data:image/jpeg;base64, ${product.image}`}  alt="..." /></div>
            <div className="col-md-6">
            
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="small mb-1">By: <span style={{color: 'black'}}>{product.user_name}</span></div>
              <div className="fs-5 mb-5">
               
                <span>{product.price}JD</span>
                <div className="small mb-1" style={{color: '#F45757'}}>3 Days</div>
                <div className><i className="fa-solid fa-circle-check" />  <b>Available</b> in your dates</div>
                <div className><i className="fa-solid fa-circle-check" /> <b>SEWABLE</b></div>
                <div className="row">
                  <div className="col-6">SIZE</div>
                  <div className="col-6 justify-content-end d-flex"> {product.size}</div>
                </div>
                <div className="row">
                  <div className="col-6"> COLOR : {product.color}</div>
                  <div className="col-6 justify-content-end d-flex"> 
                    <label className="btn btn-white mb-1 px-1" style={{border: 'solid 1px #000000', width: '60px', backgroundColor: 'yellow', height: '30px'}} htmlFor="btn-check4" />
                  </div>
                </div>
              </div>
              <p className="lead">{product.description}</p>
              <div className="d-flex">
                <input className="form-control text-center me-3" id="inputQuantity" type="num" defaultValue={1} style={{maxWidth: '3rem'}} />
                <button className="btn btn-outline-dark flex-shrink-0" type="button">
                  <i className="bi-cart-fill me-1" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>): (
          <div>Loading...</div>
        )}
        </div>
      </section>
    
      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">Related products</h2>
          {rproduct?(
           <ReletedProduct data={rproduct}/>
          ):""}
         
        </div>
      </section>
      </div>
    )};



export default SingleProudect;

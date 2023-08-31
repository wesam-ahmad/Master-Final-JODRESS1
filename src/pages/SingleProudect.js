import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReletedProduct from './../components/ReletedProduct'
import DateRangePickerComponent from './../components/DateRangePickerComponent';


const SingleProudect = () => {

 
  const [product, setProduct] = useState(null);
  const [bookingdates, setBookingdates] = useState(null);
  const [rproduct, setrProduct] = useState([]);
  const { id } = useParams();
   
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/products/${id}`); // Replace 1 with the actual product ID
          setProduct(response.data);
          try {
            
            const response2 = await axios.get(`http://localhost:8000/get-related/${response.data.cat_id}`); // Replace 1 with the actual product ID
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
      const getday = async () => {
        try {
          const response = await axios.get (`http://localhost:8000/get-booking-dates/${id}`);
         let days=response.data;
         const BookingDates_array = [];
         days.forEach(element => {
          BookingDates_array.push(new Date(element.generate_series));
         });
         setBookingdates(BookingDates_array);
        } catch (error) {
          // Display error message      
          console.error(error.message);
        }
      }
      getday();
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });




    }, [id]);

    // function add_to_cart (){
    //   let cartId = [];
    //   if(localStorage.getItem('cart') == null){
    //    cartId = [
    //     id
    //   ];
    // }else{
    //    cartId =  JSON.parse(localStorage.getItem('cart'));
    //    if(!cartId.includes(id)){
    //     cartId.push(id);
    //    }
    // }
    //   // Convert the products array to a JSON string
    //   let cartJSON = JSON.stringify(cartId);
      
    //   // Store the JSON string in localStorage
    //   localStorage.setItem('cart', cartJSON);


    // }
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
   
              <DateRangePickerComponent data={bookingdates}  product={product} />

             
                

                <div className><i className="fa-solid fa-circle-check" />  <b>Available</b> in your dates</div>
                <div className><i className="fa-solid fa-circle-check" /> <b>SEWABLE</b></div>
                <div className="row">
                  <div className="col-6">SIZE : {product.size}</div>
                  {/* <div className="col-6 justify-content-end d-flex"> {product.size}</div> */}
                </div>
                <div className="row">
                  <div className="col-6"> COLOR : {product.color}</div>
                  {/* <div className="col-6 justify-content-end d-flex"> 
                    <label className="btn btn-white mb-1 px-1" style={{border: 'solid 1px #000000', width: '60px', backgroundColor: 'yellow', height: '30px'}} htmlFor="btn-check4" />
                  </div> */}
                </div>
              </div>
              <p className="lead" id="description">{product.description}</p>
            </div>
          </div>): (
          <div>
               <div className="row pt-5" id="loader">
                <div className="col-4">
                  <img src="../images/Loading.gif" height="100px" width="200px"/>
                </div>
              </div>


          </div>
        )}
        </div>
      </section>
    
      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">Related products</h2>
          {rproduct?(
           <ReletedProduct data={rproduct}/>
          ): (
            <div>
                 <div className="row pt-5" id="loader">
                  <div className="col-4">
                    <img src="../images/Loading.gif" height="100px" width="200px"/>
                  </div>
                </div>
  
  
            </div>
          )}
         
        </div>
      </section>
      </div>
    )};



export default SingleProudect;

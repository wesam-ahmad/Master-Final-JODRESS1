import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Shopcard from '../components/shopcard';
import ReletedProduct from './../components/ReletedProduct'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
  useSearchParams,
} from 'react-router-dom';
const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let cat_id = 0;
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    if(param == 'cat_id'){
      cat_id = value;
    }
  }
  
  const [rproduct, setrProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
        try {
          
          const response = await axios.get(`http://localhost:8000/get-related/${cat_id}`); // Replace 1 with the actual product ID
          setrProduct(response.data);
        } catch (error) {
          console.error('Error fetching related product:', error);
        }
   
    };

    fetchProduct();
  




  }, []);



    return (
       
        <section className>
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <div className="col-lg-3" style={{marginTop: '92px'}}>
              {/* Toggle button */}
              <button className="btn btn-outline-secondary mb-3 w-100 d-lg-none" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span>Show filter</span>
              </button>
              {/* Collapsible wrapper */}
              <div className="collapse card d-lg-block mb-5" id="navbarSupportedContent">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button text-dark bg-light" type="button" data-mdb-toggle="collapse" data-mdb-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Categories
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo">
                      <div className="accordion-body">
                        <div>
                          {/* Checked checkbox */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked1" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckChecked1">Wedding dress</label>
                            {/* <span className="badge badge-secondary float-end">120</span> */}
                          </div>
                          {/* Checked checkbox */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked2" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckChecked2">Islamic dress</label>
                            {/* <span className="badge badge-secondary float-end">15</span> */}
                          </div>
                          {/* Checked checkbox */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked3" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckChecked3">Evening dress</label>
                            {/* <span className="badge badge-secondary float-end">35</span> */}
                          </div>
                          {/* Checked checkbox */}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked4" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckChecked4">Other</label>
                            {/* <span className="badge badge-secondary float-end">89</span> */}
                          </div>
                          {/* Default checkbox */}
                          {/* <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Honda</label>
                            <span className="badge badge-secondary float-end">30</span>
                          </div> */}
                          {/* Default checkbox */}
                          {/* <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Suzuki</label>
                            <span className="badge badge-secondary float-end">30</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button text-dark bg-light" type="button" data-mdb-toggle="collapse" data-mdb-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                        Color 
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                      <div className="accordion-body">
                        <input type="checkbox" className="btn-check border justify-content-center" id="btn-check1" defaultChecked autoComplete="off" />
                        <label className="btn btn-white mb-1 px-1" style={{width: '60px', backgroundColor: 'red', height: '30px'}} htmlFor="btn-check1" />
                        <input type="checkbox" className="btn-check border justify-content-center" id="btn-check2" defaultChecked autoComplete="off" />
                        <label className="btn btn-white mb-1 px-1" style={{width: '60px', backgroundColor: 'green', height: '30px'}} htmlFor="btn-check2" />
                        <input type="checkbox" className="btn-check border justify-content-center" id="btn-check3" defaultChecked autoComplete="off" />
                        <label className="btn btn-white mb-1 px-1" style={{width: '60px', backgroundColor: 'blue', height: '30px'}} htmlFor="btn-check3" />
                        <input type="checkbox" className="btn-check border justify-content-center background-color: red; height: 30px;" id="btn-check4" defaultChecked autoComplete="off" />
                        <label className="btn btn-white mb-1 px-1" style={{width: '60px', backgroundColor: 'yellow', height: '30px'}} htmlFor="btn-check4" />
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button text-dark bg-light" type="button" data-mdb-toggle="collapse" data-mdb-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Price
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                      <div className="accordion-body">
                        <div className="range">
                          <input type="range" className="form-range" id="customRange1" />
                        </div>
                        <div className="row mb-3">
                          <div className="col-6">
                            <p className="mb-0">
                              Min
                            </p>
                            <div className="form-outline">
                              <input type="number" id="typeNumber" className="form-control" />
                              <label className="form-label" htmlFor="typeNumber">$0</label>
                            </div>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">
                              Max
                            </p>
                            <div className="form-outline">
                              <input type="number" id="typeNumber" className="form-control" />
                              <label className="form-label" htmlFor="typeNumber">$1,0000</label>
                            </div>
                          </div>
                        </div>
                        <button type="button" className="btn btn-white w-100 border border-secondary">apply</button>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button text-dark bg-light" type="button" data-mdb-toggle="collapse" data-mdb-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                        Size
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                      <div className="accordion-body">
                        <input type="checkbox" className="btn-check border justify-content-center" id="btn-check1" defaultChecked autoComplete="off" />
                        <label className="btn btn-white mb-1 px-1" style={{width: '60px'}} htmlFor="btn-check1">XS</label>
                        <input type="checkbox" className="btn-check border justify-content-center" id="btn-check2" defaultChecked autoComplete="off" />
                        <label className="btn btn-white mb-1 px-1" style={{width: '60px'}} htmlFor="btn-check2">SM</label>
                        <input type="checkbox" className="btn-check border justify-content-center" id="btn-check3" defaultChecked autoComplete="off" />
                        <label className="btn btn-white mb-1 px-1" style={{width: '60px'}} htmlFor="btn-check3">LG</label>
                        <input type="checkbox" className="btn-check border justify-content-center" id="btn-check4" defaultChecked autoComplete="off" />
                        <label className="btn btn-white mb-1 px-1" style={{width: '60px'}} htmlFor="btn-check4">XXL</label>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button text-dark bg-light" type="button" data-mdb-toggle="collapse" data-mdb-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                        Ratings
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                      <div className="accordion-body">
                        {/* Default checkbox */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            <i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" />
                            <i className="fas fa-star text-warning" />
                          </label>
                        </div>
                        {/* Default checkbox */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            <i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" />
                            <i className="fas fa-star text-secondary" />
                          </label>
                        </div>
                        {/* Default checkbox */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            <i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /><i className="fas fa-star text-secondary" />
                            <i className="fas fa-star text-secondary" />
                          </label>
                        </div>
                        {/* Default checkbox */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            <i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /><i className="fas fa-star text-secondary" /><i className="fas fa-star text-secondary" />
                            <i className="fas fa-star text-secondary" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* sidebar */}
            {/* content */}
            <div className="col-lg-9">
              <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                {/* <strong className="d-block py-2">32 Items found </strong> */}
                <div className="ms-auto">
                </div>
              </header>
              <div className="row">
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
               {/* <Shopcard data={123}/> */}
              </div>
              <hr />
              {/* Pagination */}
              <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-3">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#" style={{color: '#000000', backgroundColor: '#F45757'}}>1</a></li>
                  <li className="page-item"><a className="page-link" href="#" style={{color: '#090909'}}>2</a></li>
                  <li className="page-item"><a className="page-link" href="#" style={{color: '#090909'}}>3</a></li>
                  <li className="page-item"><a className="page-link" href="#" style={{color: '#090909'}}>4</a></li>
                  <li className="page-item"><a className="page-link" href="#" style={{color: '#090909'}}>5</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next" style={{color: '#090909'}}>
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* Pagination */}
            </div>
          </div>
        </div>
      </section>
    );
  }   
    

export default Shop;

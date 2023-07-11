import React from 'react';
import "./css/Cart.css";
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <section className="h-100 h-custom" style={{backgroundColor: '#eee'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Continue shopping</a></h5>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have 4 items in your cart</p>
                        </div>
                        <div>
                          <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1" /></a></p>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img src="./images/image13.PNG" className="img-fluid rounded-3" alt="Shopping item" style={{width: '65px'}} />
                              </div>
                              <div className="ms-3">
                                <h5>dress name</h5>
                                <p className="small mb-0">descraption</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{width: '50px'}}>
                                <h5 className="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{width: '80px'}}>
                                <h5 className="mb-0">$900</h5>
                              </div>
                              <a href="#!" style={{color: '#cecece'}}><i className="fas fa-trash-alt" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img src="./images/image13.PNG" className="img-fluid rounded-3" alt="Shopping item" style={{width: '65px'}} />
                              </div>
                              <div className="ms-3">
                                <h5>dress name </h5>
                                <p className="small mb-0">descraption</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{width: '50px'}}>
                                <h5 className="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{width: '80px'}}>
                                <h5 className="mb-0">$900</h5>
                              </div>
                              <a href="#!" style={{color: '#cecece'}}><i className="fas fa-trash-alt" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img src="./images/image13.PNG" className="img-fluid rounded-3" alt="Shopping item" style={{width: '65px'}} />
                              </div>
                              <div className="ms-3">
                                <h5>dress name</h5>
                                <p className="small mb-0">descraption</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{width: '50px'}}>
                                <h5 className="fw-normal mb-0">1</h5>
                              </div>
                              <div style={{width: '80px'}}>
                                <h5 className="mb-0">$1199</h5>
                              </div>
                              <a href="#!" style={{color: '#cecece'}}><i className="fas fa-trash-alt" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-3 mb-lg-0">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img src="./images/image13.PNG" className="img-fluid rounded-3" alt="Shopping item" style={{width: '65px'}} />
                              </div>
                              <div className="ms-3">
                                <h5>dress name</h5>
                                <p className="small mb-0">descraption</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{width: '50px'}}>
                                <h5 className="fw-normal mb-0">1</h5>
                              </div>
                              <div style={{width: '80px'}}>
                                <h5 className="mb-0">$1799</h5>
                              </div>
                              <a href="#!" style={{color: '#cecece'}}><i className="fas fa-trash-alt" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      {/* <div class="card text-white rounded-3" style="background-color:#FBC5C5; ">
                        <div class="card-body" style="color: black;">
                          <div class="d-flex justify-content-between align-items-center mb-4">
                            <h5 class="mb-0">Card details</h5>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              class="img-fluid rounded-3" style="width: 45px;" alt="Avatar">
                          </div>
      
                          <p class="small mb-2">Card type</p>
                          <a href="#!" type="submit" class="text-white"><i
                              class="fab fa-cc-mastercard fa-2x me-2" style="color: black;"></i></a>
                          <a href="#!" type="submit" class="text-white"><i
                              class="fab fa-cc-visa fa-2x me-2" style="color: black;"></i></a>
                      
                          <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x" style="color: black;"></i></a>  */}
                      {/* <form class="mt-4">
                            <div class="form-outline form-white mb-4">
                              <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                                placeholder="Cardholder's Name" />
                              <label class="form-label" for="typeName" style="color: black;">Cardholder's Name</label>
                            </div>
      
                            <div class="form-outline form-white mb-4">
                              <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
                                placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                              <label class="form-label" for="typeText" style="color: black;">Card Number</label>
                            </div>
      
                            <div class="row mb-4">
                              <div class="col-md-6">
                                <div class="form-outline form-white" >
                                  <input  type="text" id="typeExp" class="form-control form-control-lg"
                                    placeholder="MM/YYYY" size="7" id="exp" minlength="7" maxlength="7"  />
                                  <label class="form-label" for="typeExp" style="color: black;">Expiration</label>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-outline form-white">
                                  <input type="password" id="typeText" class="form-control form-control-lg"
                                    placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                  <label class="form-label" for="typeText" style="color: black;">Cvv</label>
                                </div>
                              </div>
                            </div>
      
                          </form> */}
                      <hr className="my-5" />
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">$4798.00</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Shipping</p>
                        <p className="mb-2">$20.00</p>
                      </div>
                      <div className="d-flex justify-content-between mb-4">
                        <p className="mb-2">Total(Incl. taxes)</p>
                        <p className="mb-2">$4818.00</p>
                      </div>
                      <Link to="/Checkout" >
                      <button type="button" className="btn btn-info btn-block btn-lg" style={{backgroundColor: '#F45757'}}>
                        <div className="d-flex justify-content-between">
                          <span>$4818.00</span>
                          <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2" /></span>
                        </div>
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Cart;

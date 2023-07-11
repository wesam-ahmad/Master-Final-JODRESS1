import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from "axios";
import Products from './../components/Products'
import Cats from './../components/Cats'
const Home = () => {
  const [activeTab, setActiveTab] = useState("nav-Featured");
 const [FeaturedData, setFeaturedData] = useState([]);
 const [arrivalData, setarrivalData] = useState([]);
 const [CatData, setCat] = useState([]);

  const handleTabClick = async(tab) => {
    setActiveTab(tab);
    let cus = {};
    try {
    const response = await axios.get(`http://localhost:8000/get-`+tab);

    cus = response.data;
      if(tab == 'nav-Featured'){
        setFeaturedData(cus);
      }else{
        setarrivalData(cus);

      }

    
  } catch (error) {
    console.error(error);
  }

  };

  const GetCat = async() => {
 
    let cus = {};
    try {
    const response = await axios.get(`http://localhost:8000/get-cat`);

    cus = response.data;
    setCat(cus);

    
  } catch (error) {
    console.error(error);
  }

  };
  useEffect(() => {
    handleTabClick(activeTab);
    GetCat();
  }, []);
    return( 
        <main>
        <div>
          {/* Carousel */}
          <div id="demo" className="carousel slide" data-bs-ride="carousel" style={{ marginBottom: '10px'}}>
            {/* Indicators/dots */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
              <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
              <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
            </div>
            {/* The slideshow/carousel */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./images/slider3.jpg" alt="Los Angeles" className="d-block" style={{width: '100%', maxHeight: '700px'}} />
                <div className="carousel-caption" style={{backgroundColor: 'rgb(254,236,236,54%)', bottom: '25%', color: 'black', borderRadius: '10px'}}>
                  <h1>WELCOME IN JO-DRESS</h1>
                  <p style={{fontSize: 'large'}}>A JO-DRESS is an online platform that allows individuals to rent designer dresses for a specific occasion or event. </p>
                  <a className="btn btn-outline-light btn-lg" href="./html/login.html" role="button" style={{textDecoration: 'none', border: 'solid black 3px'}}>Find Your Dress</a>
                </div>
              </div>    
              <div className="carousel-item">
                <img src="./images/slider1.jpg" alt="Chicago" className="d-block" style={{width: '100%', maxHeight: '700px'}} />
                <div className="carousel-caption" style={{backgroundColor: 'rgb(254,236,236,54%)', bottom: '25%', color: 'black', borderRadius: '10px'}}>
                  <h1>WELCOME IN JO-DRESS</h1>
                  <p>Now you can take advantage of your one-time used dresses and offer them for rent on our website</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./images/slider6.jpg" alt="New York" className="d-block" style={{width: '100%', maxHeight: '700px'}} />
                <div className="carousel-caption" style={{backgroundColor: 'rgb(254,236,236,54%)', bottom: '25%', color: 'black', borderRadius: '10px'}}>
                  <h1>WELCOME IN JO-DRESS</h1>
                  <div className="row ">
                    <div className="col-4"><hr /></div>
                    <div className="col-4 text-center" style={{fontSize: 'x-large'}}>For Any Occasion</div>
                    <div className="col-4"><hr /></div>
                  </div>
                  <p style={{fontSize: 'xx-large'}}> Dresses For Rent </p>
                </div>
              </div>
            </div>
            {/* Left and right controls/icons */}
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" />
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
              <span className="carousel-control-next-icon" />
            </button>
          </div>
          <br />
          <br />
          <br />
          <div className=" container ftr-product">
            <div className="tab-box d-flex justify-content-between">
              <div className="sec-title">
                <h1>Items you might like</h1>
              </div>
              {/* Nav tabs */}
                   <nav>
                        <div
                          className="nav nav-tabs"
                          id="nav-tab"
                          role="tablist"
                        >
                          <button
                            className={`nav-link ${
                              activeTab === "nav-Featured" ? "active" : ""
                            }`}
                            id="nav-home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-Featured"
                            type="button"
                            role="tab"
                            aria-controls="nav-Featured"
                            aria-selected={activeTab === "nav-Featured"}
                            onClick={() => handleTabClick("nav-Featured")}
                          >
                            Featured
                          </button>
                          <button
                            className={`nav-link ${
                              activeTab === "nav-arrival" ? "active" : ""
                            }`}
                            id="nav-profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-arrival"
                            type="button"
                            role="tab"
                            aria-controls="nav-arrival"
                            aria-selected={activeTab === "nav-arrival"}
                            onClick={() => handleTabClick("nav-arrival")}
                          >
                            New arrival
                          </button>

                        </div>
                      </nav>
            </div>
            <br />
            <br />
            <br />
            <div className="tab-content mt-3" id="nav-tabContent">
                        <div
                          className={`tab-pane fade ${
                            activeTab === "nav-Featured" ? "show active" : ""
                          }`}
                          id="nav-Featured"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                        >
                     



                            <Products data={FeaturedData}/>






                </div>
                <div
                          className={`tab-pane fade ${
                            activeTab === "nav-arrival" ? "show active" : ""
                          }`}
                          id="nav-arrival"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                         >
                             <Products data={arrivalData}/>
                          </div>


          
                          
            </div>
          </div>
          </div> 
          
        <br />
        <br />
        

        <div className="container">
          <div className="row">
            <div className="sec-title">
              <h1>Categories</h1>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

<Cats data={CatData}></Cats>

        <br />
        <br /> 
        <br />
        <br />
        <br />
        <br />
        <div className="tr-product">
          <div className="container" style={{}}>
            <div className="tab-box d-flex justify-content-between">
              <div className="sec-title">
                <h1>How It Works</h1>
              </div>
              {/* Nav tabs */}
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#all">Buyer</a>
                </li>
                <li className="nav-item">
                  <a style={{color: 'gray'}} className="nav-link" data-toggle="tab" href="#elec">Seller</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container" style={{borderRadius: '20px'}}>
            <br />
            <br />
            <section style={{backgroundColor: '#f8d5d5', borderRadius: '20px', marginBottom: '20px', paddingBottom: '20px'}}>
              <div className="container ">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-12">
                    <div className="accordion" id="accordionExample" style={{marginTop: '40px'}}>
                      <div className="steps">
                        <progress id="progress" style={{backgroundColor: '#cabfbf'}} value={100} max={100} />
                        <div className="step-item">
                          <button className="step-button text-center collapsed" style={{backgroundColor: '#D9B86F'}} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            1
                          </button>
                          <div className="step-title">
                            first Step
                          </div>
                        </div>
                        <div className="step-item">
                          <button className="step-button text-center collapsed" style={{backgroundColor: '#D9B86F'}} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            2
                          </button>
                          <div className="step-title">
                            Second Step
                          </div>
                        </div>
                        <div className="step-item">
                          <button className="step-button text-center collapsed" style={{backgroundColor: '#D9B86F'}} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            3
                          </button>
                          <div className="step-title">
                            Third Step
                          </div>
                        </div>
                        <div className="step-item">
                          <button className="step-button text-center collapsed" style={{backgroundColor: '#D9B86F'}} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            4
                          </button>
                          <div className="step-title">
                            fourth Step
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 justify-content-center d-flex">
                    <i className="fas fa-sign-in fa-3x" />
                  </div>
                  <div className="col-3 justify-content-center d-flex">
                    <i className="fas fa-shirt fa-3x" />
                  </div>
                  <div className="col-3 justify-content-center d-flex">
                    <i className="fas fa-clipboard-check fa-3x" />
                  </div>
                  <div className="col-3 justify-content-center d-flex">
                    <i className="fas fa-undo-alt fa-3x" style={{color: '#000000'}} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 justify-content-center d-flex">
                    <h5>Join-Us</h5>
                  </div>
                  <div className="col-3 justify-content-center d-flex">
                    <h5>Select a Style</h5>
                  </div>
                  <div className="col-3 justify-content-center d-flex">
                    <h5>Book your Outfit</h5>
                  </div>
                  <div className="col-3 justify-content-center d-flex">
                    <h5>Return It</h5>
                  </div>
                </div>
              </div>
            </section></div>
        </div></main>
    
    );
  };
  
  export default Home;
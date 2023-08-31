import React from 'react';
import { Link } from 'react-router-dom'
const shopcard = ({ data }) => {
 
  return (
    <Link to={`/SingleProudect/${data.id}`}>
      <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div className="card w-100 my-2 shadow-2-strong">
                    <img src="./images/dress11.PNG" className="card-img-top" />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">$43.50</h5>
                      <p className="card-text">Summer New Men's Denim Jeans Shorts</p>
                      <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                        <a href="#!" className="btn  shadow-0 me-1" style={{backgroundColor: '#F45757'}}>Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
  </Link>
  );
};

export default shopcard
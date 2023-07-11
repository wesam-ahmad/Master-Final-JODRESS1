import React from 'react';
import { Link } from 'react-router-dom'
const ReletedProductCard = (data) => {
    return (
        <div>
          
            <div className="col mb-5">
            <Link to={`/SingleProudect/${data.id}`}>
              <div className="card h-100">
                {/* Product image*/}
                <img className="card-img-top" src={`data:image/jpeg;base64, ${data.image}`} alt="..." />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">{data.name}</h5>
                    {/* Product price*/}
                    {data.price}
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add To Cart</a></div>
                </div>
              </div>
              </Link>
            </div> 
           </div> 
    );
}

export default ReletedProductCard;

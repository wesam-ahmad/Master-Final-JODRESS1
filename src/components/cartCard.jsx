import React from 'react';
import { Link } from 'react-router-dom'
const CartCard = ({ data }) => {
 
  return (
    <Link to={`/SingleProudect/${data.id}`}>
    <div className="card mb-3">
    <div className="card-body">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <div>
            <img src={`data:image/jpeg;base64, ${data.image}`}className="img-fluid rounded-3" alt="Shopping item" style={{width: '65px'}} />
          </div>
          <div className="ms-3">
            <h5>{data.name}</h5>
            <p className="small mb-0">{data.description}</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center">
          <div style={{width: '50px'}}>
            <h5 className="fw-normal mb-0">{data.daterange} Days</h5>
          </div>
          <div style={{width: '80px'}}>
            <h5 className="mb-0">{data.price} JD</h5>
          </div>
          <a href="#!" style={{color: '#cecece'}}><i className="fas fa-trash-alt" /></a>
        </div>
      </div>
    </div>
  </div>
  </Link>
  );
};

export default CartCard
import React from 'react'
import { Link } from 'react-router-dom'

const CatCard=(data) =>{

  return (
    <a href={`Shop/${data.id}`}>
    <div className="col-md-3 col-sm-6 col-6">
    <div className="product">
      <div className="product-card"> 
        <span className="sale">{data.name}</span>  <img src={`data:image/jpeg;base64, ${data.image}`} className="rounded img-fluid" />
      </div>
    </div>
  </div>
  </a>
  )
}

export default CatCard;
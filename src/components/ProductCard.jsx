import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard=(data) =>{

  return (
    <div className="col-md-3 col-sm-6">
    <Link to={`/SingleProudect/${data.id}`}>
    <div className="product-grid">
      <div className="product-image">
        <a href="#" className="image">
           <img src={`data:image/jpeg;base64, ${data.image}`}  width={317} height={442}/> 
        </a>
        <a href className="add-to-cart">Add to Cart</a>
      </div>
      <div className="product-content">
        <h3 className="title"> {data.name} </h3>
        <div className="price">{data.price} </div>
      </div>
    </div>
    </Link>
  </div>
  )
}

export default ProductCard;
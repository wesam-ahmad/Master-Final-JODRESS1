import React from 'react';
import ProductCard from './ProductCard';
const Products = ({ data }) => {
  return (
    <div className='row'>
      {data && data.map((item) => (
    
        <ProductCard id={item.id} name={item.name} price={item.price} image={item.image}></ProductCard>
    
      ))}
    </div>
  );
};

export default Products
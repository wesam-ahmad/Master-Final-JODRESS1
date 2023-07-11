import React from 'react';
import ReletedProductCard from './ReletedProductCard';
const ReletedProudect = ({ data }) => {
  return (
    <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
      {data && data.map((item) => (
    
        <ReletedProductCard id={item.id} name={item.name} price={item.price} image={item.image}></ReletedProductCard>
    
      ))}
    </div>
  );
};

export default ReletedProudect
import React from 'react';
import CatCard from './CatCard';
const Cats = ({ data }) => {
  return (
        <div className="container tab-box d-flex justify-content-between">
          <div className="row ">
      {data && data.map((item) => (
    
        <CatCard id={item.id} name={item.name} image={item.image}></CatCard>
    
      ))}
      </div>
    </div>
  );
};

export default Cats
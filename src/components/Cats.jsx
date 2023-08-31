import React from 'react';
import CatCard from './CatCard';
const Cats = ({ data }) => {
  return (
    <div className="row">

      {data && data.map((item) => (
    
        <CatCard id={item.id} name={item.name} image={item.image}></CatCard>
    
      ))}
              </div>


  );
};

export default Cats
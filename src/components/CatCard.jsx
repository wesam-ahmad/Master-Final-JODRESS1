import React from 'react'
import { Link } from 'react-router-dom'
import "../pages/css/cat.css"

const nameToImageMapArr=[];
nameToImageMapArr[1]='./images/wedding-dress.jpg';//wedding
nameToImageMapArr[2]='./images/wearing-hijab.jpg';//islamic
nameToImageMapArr[3]='./images/evening-dress.jpg';//evening
nameToImageMapArr[4]='./images/beige-background.jpg';//other

const CatCard=(data) =>{
  //console.log(nameToImageMapArr[data.id]);

  const imageUrl = nameToImageMapArr[data.id] ;


  return (
    <div className="col-md-3 col-sm-6 col-6">

<Link to= {`Shop?cat_id=${data.id}`} className="product-link">

    <div className="product">
      <div className="product-card"> 
        <span className="sale">{data.name}</span> 
         <img src={imageUrl} className="rounded img-fluid" />
      </div>
      </div>
  
  </Link>
  </div>

  )
}

export default CatCard;
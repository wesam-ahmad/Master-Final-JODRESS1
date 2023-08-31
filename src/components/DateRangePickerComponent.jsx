import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';

function DateRangePickerComponent({data,product}) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [daterange, setDaterange] = useState(false);



  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if(end != null) {
        let diffDays = parseInt((end - start) / (1000 * 60 * 60 * 24))+1;
        setDaterange(diffDays);
    setIsOpen(false);
    }
        
};

const handleClick = (e) => {
    e.preventDefault();
    if(isOpen == true) {
        setIsOpen(false);
        }else{
        setIsOpen(true);
        }
  };

  function add_to_cart (){
    let cartProduct = {};
    if(startDate == null || endDate == null){
      alert("Please select a date range");
      return;
    }
    cartProduct['id'] = product.id;
    cartProduct['startDate'] = startDate;
    cartProduct['endDate'] = endDate;
    cartProduct['price'] = daterange*product.price;
    cartProduct['daterange'] = daterange;
    cartProduct['description'] = product.description;
    cartProduct['color'] = product.color;
    cartProduct['size'] = product.size;
    cartProduct['image'] = product.image;
    cartProduct['name'] = product.name;
    cartProduct['user_name'] = product.user_name;

    let cart = [];
    if(localStorage.getItem('cart') != null){
        cart =  JSON.parse(localStorage.getItem('cart'));
        let index = 0 ;
        cart.forEach(element => {
            if(element.id==product.id){
                cart.splice(index, 1);

            }
            index++;
            
        });
  }
 
  cart.push(cartProduct);

    // Convert the products array to a JSON string
    let cartJSON = JSON.stringify(cart);
    
    // Store the JSON string in localStorage
    localStorage.setItem('cart', cartJSON);
    alert("Added to cart successfully."); 

  }
  return (
    <div className="row">
    <div className="col-6">
    <div>
      <div className="mb-3">
      <button className="form-control text-center me-3"
       onClick={handleClick}
       >
        Chose dates
      </button>

      {isOpen && (
      <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            excludeDates={data}
            selectsDisabledDaysInRange
            showDisabledMonthNavigation
            minDate={new Date()}
            inline
            className="form-control"

        />)}
        
      </div>
      <p>
        {startDate && startDate.toLocaleDateString("en-GB") }{ startDate && ' - '}
        {endDate && endDate.toLocaleDateString("en-GB")}
      </p>
      <div className="small mb-1" style={{color: '#F45757'}}> {daterange} {daterange && ' Days'}</div>
      <span>{daterange > 0 && daterange*product.price} {daterange && ' JD'} </span>
    </div>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-outline-dark flex-shrink-0"  onClick={add_to_cart} type="button">
                      <i className="bi-cart-fill me-1" />
                      Add to cart
                    </button>
                    </div>
                  </div>
  );
}

export default DateRangePickerComponent;

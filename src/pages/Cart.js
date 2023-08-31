import React from 'react';
import axios from 'axios';
import "./css/Cart.css";
import { Link } from 'react-router-dom';
import CartCard from './../components/cartCard';
import { useEffect } from 'react';





const Cart = () => {
  const cart_count_storage = localStorage.getItem("cart");
 
//const [product, setProduct] = useState(null);

let cart_count_tmp =[];
let cart_count = 0;
let total_price= 0;
let total_shipping= 3;
let total_tax= 0;
let tax= 0;

if(cart_count_storage != null){
  cart_count_tmp =JSON.parse(cart_count_storage);
  cart_count = cart_count_tmp.length;
  cart_count_tmp?.forEach(element => {
    total_price += element.price;
  });
  tax = 10 /100 *total_price ;

  total_tax = total_price + 10 /100 *total_price +total_shipping;

}

useEffect(() => {
  // const fetchProduct = async () => {
  //   try {
  //     let ids='';
  //     cart_count_tmp.forEach(element => {
  //       ids =ids + element.id + ',';
  //     });
  //     const response = await axios.get(`http://localhost:8000/products/${ids}`); // Replace 1 with the actual product ID
  //     console.log(response.data);
      
  //   } catch (error) {
  //     console.error('Error fetching product:', error);
  //   }
  // };
  // fetchProduct();
/*useEffect(() => {
function fetchProduct(id) {
  try {
    const response =  axios.get(`http://localhost:8000/products/${id}`); // Replace 1 with the actual product ID
    return (response.data);
  } catch (error) {
    console.error('Error fetching product:', error);

  }
};

function fetchProductsFromLocalStorage() {
  const localStorageData = localStorage.getItem('cart'); // Assuming your cart data is stored as an array of IDs
  const cartItems = JSON.parse(localStorageData) || [];
  console.log(cartItems);
  const productPromises = cartItems.map(id => fetchProduct(id));

  // Promise.all(productPromises)
  //   .then(products => {
  //     // Here, 'products' is an array containing the fetched product data
  //     console.log(products);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching products:', error);
  //   });
    
}fetchProductsFromLocalStorage();*/
});
    return (
        <section className="h-100 h-custom" style={{backgroundColor: '#eee'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Continue shopping</a></h5>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have {cart_count} items in your cart</p>
                        </div>
                      
                      </div>

                      {cart_count > 0 && cart_count_tmp.map((item) => (
  
    <CartCard data={item} ></CartCard>

  ))}

                    </div>
                    <div className="col-lg-5">
                      {/* <div class="card text-white rounded-3" style="background-color:#FBC5C5; ">
                        <div class="card-body" style="color: black;">
                          <div class="d-flex justify-content-between align-items-center mb-4">
                            <h5 class="mb-0">Card details</h5>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              class="img-fluid rounded-3" style="width: 45px;" alt="Avatar">
                          </div>
      
                          <p class="small mb-2">Card type</p>
                          <a href="#!" type="submit" class="text-white"><i
                              class="fab fa-cc-mastercard fa-2x me-2" style="color: black;"></i></a>
                          <a href="#!" type="submit" class="text-white"><i
                              class="fab fa-cc-visa fa-2x me-2" style="color: black;"></i></a>
                      
                          <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x" style="color: black;"></i></a>  */}
                      {/* <form class="mt-4">
                            <div class="form-outline form-white mb-4">
                              <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                                placeholder="Cardholder's Name" />
                              <label class="form-label" for="typeName" style="color: black;">Cardholder's Name</label>
                            </div>
      
                            <div class="form-outline form-white mb-4">
                              <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
                                placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                              <label class="form-label" for="typeText" style="color: black;">Card Number</label>
                            </div>
      
                            <div class="row mb-4">
                              <div class="col-md-6">
                                <div class="form-outline form-white" >
                                  <input  type="text" id="typeExp" class="form-control form-control-lg"
                                    placeholder="MM/YYYY" size="7" id="exp" minlength="7" maxlength="7"  />
                                  <label class="form-label" for="typeExp" style="color: black;">Expiration</label>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-outline form-white">
                                  <input type="password" id="typeText" class="form-control form-control-lg"
                                    placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                  <label class="form-label" for="typeText" style="color: black;">Cvv</label>
                                </div>
                              </div>
                            </div>
      
                          </form> */}
                      <hr className="my-5" />
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">${total_price} JD</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Shipping</p>
                        <p className="mb-2">${total_shipping} JD</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Tax</p>
                        <p className="mb-2">${tax} JD</p>
                      </div>
                      <div className="d-flex justify-content-between mb-4">
                        <p className="mb-2">Total(Incl. taxes)</p>
                        <p className="mb-2">${total_tax} JD</p>
                      </div>
                      <Link to="/Checkout" >
                      <button type="button" className="btn btn-info btn-block btn-lg" style={{backgroundColor: '#F45757'}}>
                        <div className="d-flex justify-content-between">
                          <span>{total_tax} JD </span>
                          <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2" /></span>
                        </div>
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Cart;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Cart from './pages/Cart';
import SingleProudect from './pages/SingleProudect';
import Checkout from './pages/Checkout';
import './index.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import UserProfile from './pages/UserProfile';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import AddProudect from './pages/AddProudect';
import AboutUs from './pages/AboutUs';


export default function App() {
  const [isLogin, updateIsLogin] = useState(localStorage.getItem("token") ? true : false);
  return (
    
    <BrowserRouter>
          <Header isLogin={isLogin} updateIsLogin={updateIsLogin} />
      <Routes >
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/SingleProudect/:id" element={<SingleProudect />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Signup" element={<SignUp updateIsLogin={updateIsLogin} />} />
        <Route path="/SignIn" element={<SignIn updateIsLogin={updateIsLogin} />}/>
        <Route path="/providerprofile" element={<UserProfile />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/addproudect" element={<AddProudect />} />
        <Route path="/aboutus" element={<AboutUs />} />
        
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

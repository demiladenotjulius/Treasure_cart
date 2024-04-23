import React from "react";
import Login from "./Pages/User/LogIn/LogIn";
import Register from './Pages/User/Register/Register';
import { Route, Routes } from "react-router"
import Home from "./Pages/Home/Home";
import Checkout from "./Components/Checkout/checkout";
import './App.css'
import {ProductImageProvider} from './Components/productContext/productContext'
// import Cart from './Components/CART/cart'

function App() {
  return (
      <ProductImageProvider>

        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          {/* <Route path="/cart" element={<Cart />}></Route> */}

        </Routes>
      </ProductImageProvider>

    
  );
}

export default App;


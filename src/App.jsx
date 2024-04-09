import React from "react";
import Login from "./Pages/User/LogIn/LogIn";
import Register from './Pages/User/Register/Register';
import {Route, Routes } from "react-router"
import Home from "./Pages/Home/Home";
import Checkout from "./Components/Checkout/checkout";
import './App.css'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>

        </Routes>
      </div>
    </>
  );

}

export default App;

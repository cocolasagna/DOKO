import React from "react";
import { BrowserRouter as Router, Switch, Route , Routes } from "react-router-dom";


import SellerDashboard from "./pages/SellerDashboard/SellerDashboard";
import ProductForm from "./pages/ProductForm/ProductForm";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Login from "./pages/Login/Login";
import Signup from './pages/signup/Signup';
function App() {
  return (
    <Router>
        <Routes>
          <Route exact path = '/seller/dashboard' element = {<SellerDashboard/>}/>
          <Route exact path = '/seller/product/new' element = {<ProductForm/>}/>
          <Route exact path = '/product/:id' element = {<ProductDetail/>}/>
          <Route exact path = '/seller/login' element = {<Login/>}/>
          <Route exact path = '/seller/signup' element = {<Signup/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;

import React from "react";
import Home from "./pages/home/Home";

import ProductForm from "./pages/ProductForm/ProductForm";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/Signup";
import HomeSeller from "./pages/homeseller/HomeSeller";
import Update from "./pages/update/update";
import Category from "./pages/category/Category";
import Addtocart from "./pages/addtocart/Addtocart";
import Wishlist from "./pages/wishlist/Wishlist";
import Aboutus from "./pages/aboutus/Aboutus";
import Profile from "./pages/profile/Profile";
import Notification from "./pages/notification/Notification";
import Product from "./pages/product/Product";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      {/*<Route exact path = '/seller/dashboard' element = {<SellerDashboard/>}/> */}
      <Route exact path="/seller/product/new" element={<ProductForm />} />
      <Route exact path="/product/:id" element={<ProductDetail />} />
      <Route exact path="/seller/login" element={<Login />} />
      <Route exact path="/seller/signup" element={<Signup />} />
      <Route exact path="/product/update/:id" element={<Update />} />
      <Route exact path="/seller/dashboard" element={<HomeSeller />} />
      <Route
        path="/category-page-electronics"
        element={<Category title1="Electronics" id={1} />}
      />
      <Route
        path="/category-page-sports"
        element={<Category title1="Sports" id={2} />}
      />

      <Route
        path="/category-page-food"
        element={<Category title1="Food" id={3} />}
      />
      <Route
        path="/category-page-clothing"
        element={<Category title1="Clothing" id={4} />}
      />
      <Route
        path="/category-page-furniture"
        element={<Category title1="Furniture" id={5} />}
      />
      <Route path="/" element={<Signup />} />
      <Route path="/login-page" element={<Login />} />
      <Route path="/home-page" element={<Home />} />
      <Route path="/mero-doko" element={<Addtocart />} />
      <Route path="/wishlist-page" element={<Wishlist />} />
      <Route path="/aboutus-page" element={<Aboutus />} />
      <Route path="/profile-page" element={<Profile />} />
      <Route path="/notification-page" element={<Notification />} />
      <Route path="/product-page" element={<Product />} />
    </Routes>
  );
}

export default App;

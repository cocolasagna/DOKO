import Advert from "../Advert/Advert";
import Categorylist from "../CategoryList/Categorylist";
import Productlist from "../ProductList/Productlist";
import classes from "./homefeed.module.css";
import Endblock from "../EndBlock/Endblock";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
/*
const products = [
  // ELectronics = 1  Sports = 2 Food =3 Clothing = 4 Furniture = 5
  {
    id: "p1",
    image: "./images/product1.jpg",
    productName: "Iphone 14 pro max",
    categoryID: 1,
    description: "Iphone 14 pro max",
    price: "$1000",
  },

  {
    id: "p2",
    image: "./images/product2.jpg",
    productName: "Addidas Boots",
    categoryID: 2,
    description: "Comfortable Boots",
    price: "$130",
  },

  {
    id: "p2",
    image: "./images/product3.jpg",
    productName: "Lays Chips",
    categoryID: 3,
    description: "Onion and Sour Cream Flavour",
    price: "$2",
  },

  {
    id: "p2",
    image: "./images/product4.jpg",
    productName: "Nike Hoodie",
    categoryID: 4,
    description: "Black comforatble Hoodie",
    price: "$50",
  },

  {
    id: "p2",
    image: "./images/product5.jpg",
    productName: "Queen Bed",
    categoryID: 5,
    description: "Comfortable Bed",
    price: "$1300",
  },

  {
    id: "p2",
    image: "./images/product6.jpg",
    productName: "Addidas Shoes",
    categoryID: 2,
    description: "Running Shoes",
    price: "$140",
  },
];
*/

function Homefeed() {
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:5000/seller/product" ,
        {
          withCredentials:true
        });
      setProducts(response.data.products);
   
    };
    fetchProducts();
  }, []);
  return (
    <div className={classes.homeWrapper}>
      <Advert />

      <Productlist product={products}  />
      <Endblock />
    </div>
  );
}

export default Homefeed;

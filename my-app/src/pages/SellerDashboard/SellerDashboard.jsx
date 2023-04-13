import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SellerDashboard() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:5000/seller/product" ,
        {
          withCredentials:true
        });
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
     
      <Link to="/seller/product/new">Create Product</Link>
      <h2>My Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SellerDashboard;
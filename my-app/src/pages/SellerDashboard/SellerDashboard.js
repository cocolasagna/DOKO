import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SellerDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/seller/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>My Products</h2>
      <Link to="/seller/product/new">Create Product</Link>
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
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:5000/seller/product/${id}` , {
        withCredentials:true
      });
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
              <h2>{product.name}</h2>
    <h4>Desciption</h4>  <p>{product.description}</p>
     <h4>Price</h4> <p>${product.price}</p>
    </div>
  );
}

export default ProductDetail;
import React, { useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function UpdateForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
    const {id} = useParams()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
try {
      const response = await axios.patch(`http://localhost:5000/seller/product/update/${id}`, {
        name,
        description,
        price
        
      }, {
        withCredentials:true
      });
      console.log(response.data);
      window.location.href = "/seller/dashboard"
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateForm;
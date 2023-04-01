import React, { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie'



const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

   
    try {
      const response = await axios.post("http://localhost:5000/seller/login", {
        email,
        password,
      },  {
        withCredntials: true,
        credentials: 'include'
      }
   
      );

      // Assuming the server responds with a JWT token upon successful authentication
      const token = response.data.token;
    
      // Store the token in local storage or a cookie
      //localStorage.setItem("token", token);
    Cookies.set('jwtToken', token)
      
      // Redirect the user to the home page or dashboard
      window.location.href = "/seller/dashboard";
    } catch (error) {
      console.error(error);
      alert("Failed to login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
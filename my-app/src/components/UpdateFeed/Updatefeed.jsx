import classes from "./updatefeed.module.css";
import Endblock from "../EndBlock/Endblock";
import axios from 'axios'
import React, {  useRef } from 'react';

function Updatefeed() {
  const name = useRef()
  const address = useRef()
  const phone = useRef()

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const updateProfile = {
      name : name.current.value,
      address:address.current.value,
      phone :phone.current.value
    }
    try {
      
      const response = await axios.patch(`http://localhost:5000/user/updateprofile`, updateProfile, {
        withCredentials:true
       
      });
      console.log(response.data);
      window.location.href = "/seller/dashboard"
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={classes.updateWrapper}>
      <form onSubmit={handleSubmit} className={classes.updateForm}>
        <div className={classes.inputBox}>
          <label htmlFor="username">Username</label>
          <input
          ref = {name}
            type="text"
            required
            id="username"
            placeholder="Enter Username"
          />
        </div>

        <div className={classes.inputBox}>
          <label htmlFor="shipping-address">Address</label>
          <input
          ref = {address}
            type="text"
            required
            id="shipping-address"
            placeholder="Enter Shipping Address"
          />
        </div>

        <div className={classes.inputBox}>
          <label htmlFor="phone-number">Phone No</label>
          <input
          ref = {phone}
            type="integer"
            required
            id="phone-number"
            placeholder="Enter Phone Number"
          />
        </div>

      
        <button type="submit">Update Profile</button>
      </form>

      <Endblock />
    </div>
  );
}

export default Updatefeed;

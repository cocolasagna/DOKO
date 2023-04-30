import classes from "./productitem.module.css";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Productitem(props) {
  const PF = 'http://localhost:5000/images/'
  console.log('image', PF+props.image)
  const handleClick = async(e)=>{
        const id = props.Id
        e.preventDefault()
        try {
          const response = await axios.delete(`http://localhost:5000/seller/product/${id}` , {
            withCredentials: true
          })
          console.log(response)
          window.location.href = "/seller/dashboard"
        } catch (error) {
          console.log(error)
        }
  }

  return (
  
    <div className={classes.itemCover}>
        <Link to={`/product/${props.Id}`}>
           
      <li>
        <div className={classes.itemImage}>
       
          <img src={PF+props.image} alt="no image" />
        </div>
     
        <div className={classes.itemInfo}>
          <div className={classes.infoUp}>
            <h2>{props.productName}</h2>
          </div>

          <div className={classes.infoDown}>
            <span>{props.price}</span>

            <button className={classes.addBtn} onClick={handleClick}>
              <ShoppingBasketOutlinedIcon className={classes.icon} />
            </button>
          
            <button className={classes.bargainBtn}>
            <Link to={`/product/update/${props.Id}`}>
            <LocalOfferIcon className={classes.icon} />
            </Link>
            </button>
           
          </div>
        </div>
      </li>
      </Link> 
    </div>

  );
}

export default Productitem;

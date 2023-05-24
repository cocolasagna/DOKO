import classes from "./bidlist.module.css";
import Biditem from "../BidItem/Biditem.jsx";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function BidList(props) {


  return (
    <div className={classes.bidlistCover}>
      <h1>Offers</h1>
      <ul className={classes.bidlist}>
        {
        props.product.map((p) => (
         
          <Biditem 
           id = {p._id}
           bid = {p.bidAmount}
           price = {p.price}
           name = {p.product.name}
           least = {p.product.bid}
           image = {p.product.image}
           bidAccept = {p.bidAccept}
          />
          
        ))}
      </ul>
    </div>
  );
}

export default BidList;

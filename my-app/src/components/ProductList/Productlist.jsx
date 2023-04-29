import classes from "./productlist.module.css";
import Productitem from "../ProductItem/Productitem";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Productlist(props) {


  return (
    <div className={classes.listCover}>
      <h1>New Arrivals</h1>
      <ul className={classes.list}>
        {
        props.product.map((p) => (
          <Productitem
          id={p._id}
          image={p.image}
          productName={p.name}
          price={p.price}
          description = {p.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default Productlist;

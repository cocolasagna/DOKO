import classes from "./productlist.module.css";
import Productitem from "../ProductItem/Productitem";
import { Link } from "react-router-dom";

function Productlist(props) {
  return (
    <div className={classes.listCover}>
      <h1>Your Product</h1>
      <ul className={classes.list}>
        {props.product.map((p) => (
          <Productitem
            image={p.image}
            Id={p._id}
            productName={p.name}
            price={p.price}
          />
        ))}
      </ul>
    </div>
  );
}

export default Productlist;

import classes from "./productlist.module.css";
import Productitem from "../ProductItem/Productitem";

function Productlist(props) {
  return (
    <div className={classes.listCover}>
      <h1>Your Products</h1>
      <ul className={classes.list}>
        {props.product.map((p) => (
          <Productitem
            image={p.image}
            productName={p.name}
            price={p.price}
          />
        ))}
      </ul>
    </div>
  );
}

export default Productlist;

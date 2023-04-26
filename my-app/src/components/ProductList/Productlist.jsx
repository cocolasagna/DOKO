import classes from "./productlist.module.css";
import Productitem from "../ProductItem/Productitem";

function Productlist(props) {
  return (
    <div className={classes.listCover}>
      <h1>{props.title}</h1>
      <ul className={classes.list}>
        {props.product.map((p) => (
          <Productitem
            id={p.id}
            image={p.image}
            productName={p.productName}
            price={p.price}
          />
        ))}
      </ul>
    </div>
  );
}

export default Productlist;

import classes from "./categoryproductlist.module.css";
import Productitem from "../ProductItemSeller/ProductitemSeller";

function Categoryproductlist(props) {
  const Id = props.category;
  return (
    <div className={classes.listCover}>
      <h1>{props.categoryTitle}</h1>
      <hr />

      <ul className={classes.list}>
        {props.product.map((p) => {
          if (p.categoryID === Id) {
            return (
              <Productitem
                image={p.image}
                productName={p.productName}
                price={p.price}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Categoryproductlist;

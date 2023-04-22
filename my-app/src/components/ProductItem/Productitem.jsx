import classes from "./productitem.module.css";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

function Productitem(props) {
  return (
    <div className={classes.itemCover}>
      <li>
        <div className={classes.itemImage}>
          <img src={props.image} alt="" />
        </div>

        <div className={classes.itemInfo}>
          <div className={classes.infoUp}>
            <h2>{props.productName}</h2>
          </div>

          <div className={classes.infoDown}>
            <span>{props.price}</span>
            <button className={classes.addBtn}>
              <ShoppingBasketOutlinedIcon className={classes.icon} />
            </button>
            <button className={classes.bargainBtn}>
              <LocalOfferIcon className={classes.icon} />
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Productitem;

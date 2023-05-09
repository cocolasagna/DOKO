import { useContext } from "react";
import classes from "./cartfeed.module.css";
import Advert from "../Advert/Advert";
import Endblock from "../EndBlock/Endblock";
import CartContext from "../../store/cart-context";
import HistoryContext from "../../store/history-context";
import Productlist from "../ProductList/Productlist";

function Cartfeed() {
  const cartCtx = useContext(CartContext);
  const historyCtx = useContext(HistoryContext);
  let total;
  let content;

  function checkoutHandler() {
    historyCtx.itemsbought = cartCtx.itemsAdded.map((item) => ({
      id: item.id,
      image: item.image,
      productName: item.productName,
      price: item.price,
    }));

    historyCtx.totalItemsBought = historyCtx.totalItemsBought + 1;

    console.log(historyCtx.itemsbought);

    // cartCtx.cartCheckout();
    // total = 0; // Not sure if it works need to test with real Database.
    // window.location.reload(false);
  }

  if (cartCtx.totalItemsAdded === 0) {
    content = <span className={classes.displayText}>No Items in Cart</span>;
    total = 0;
  } else {
    content = <Productlist title="Mero Doko" data={cartCtx.itemsAdded} />;
    total = cartCtx.totalAmount();
  }

  return (
    <div className={classes.cartWrapper}>
      <Advert />
      <div className={classes.content}>{content}</div>
      <div className={classes.checkoutInfo}>
        <span>total Amount = ${total} </span>
        <button className={classes.checkoutBtn} onClick={checkoutHandler}>
          CheckOut
        </button>
      </div>

      <Endblock />
    </div>
  );
}

export default Cartfeed;

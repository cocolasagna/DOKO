import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./productitem.module.css";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CartContext from "../../store/cart-context";
import NotificationContext from "../../store/notification-context";
import ProductContext from "../../store/product-context";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import DoNotDisturbOnOutlinedIcon from "@mui/icons-material/DoNotDisturbOnOutlined";

function Productitem(props) {
  const cartCtx = useContext(CartContext);
  const notiCtx = useContext(NotificationContext);
  const productCtx = useContext(ProductContext);
  const itemIsAdded = cartCtx.itemInCart(props.id);
  const itemisWished = cartCtx.itemInWish(props.id);
 const PF = 'http://localhost:5000/images/'


  function productPageHandler() {
 
    productCtx.productClicked = {
      id: props.id,
      image: props.image,
      productName: props.productName,
      price: props.price,
      description : props.description,
      seller : props.seller
    };

  }

  function notificationAccept() {
    notiCtx.addNotification({
      id: props.id,
      image: props.image,
      productName: props.productName,
      price: props.price,
    });

    notiCtx.acceptNotification();
  }

  function notificationReject() {
    notiCtx.addNotification({
      id: props.id,
      image: props.image,
      productName: props.productName,
      price: props.price,
    });
    notiCtx.rejectNotification();
  }

  function toggleWishAddStatusHandler() {
    if (itemisWished) {
      cartCtx.removeWish(props.id);
      const data = JSON.parse(localStorage.getItem('Wish'))
      const index = data.findIndex(item =>item.id === props.id)
      if (index !== -1) {
        data.splice(index, 1);
        localStorage.setItem('Wish', JSON.stringify(data));
      }
    } else {
      cartCtx.addWish({
        id: props.id,
        image: props.image,
        productName: props.productName,
        price: props.price,
      });
    }
  }

  function toggleItemAddStatusHandler() {
    if (itemIsAdded) {
      cartCtx.removeItem(props.id);
      const data = JSON.parse(localStorage.getItem('cart'))
      const index = data.findIndex(item =>item.id === props.id)
      if (index !== -1) {
        data.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(data));
      }
    } else {
      cartCtx.addItem({
        id: props.id,
        image: props.image,
        productName: props.productName,
        price: props.price,
      });
    }
  }

  return (
    <div className={classes.itemCover}>
      <li>
        <Link to="/product-page">
          <div className={classes.itemImage} onClick={productPageHandler}>
            <img src={PF+props.image} alt="" />
          </div>
        </Link>

        <div className={classes.itemInfo}>
          <div className={classes.infoUp}>
            <h2>{props.productName}</h2>
          </div>

          <div className={classes.infoDown}>
            <span>${props.price}</span>
            <button
              className={classes.addBtn}
              onClick={() => {
                toggleItemAddStatusHandler();
                notificationAccept();
              }}
            >
              {" "}
              {itemIsAdded ? (
                <RemoveShoppingCartOutlinedIcon className={classes.icon} />
              ) : (
                <ShoppingBasketOutlinedIcon className={classes.icon} />
              )}
            </button>
            <button
              className={classes.bargainBtn}
              onClick={() => {
                toggleWishAddStatusHandler();
                notificationReject();
              }}
            >
              {itemisWished ? (
                <DoNotDisturbOnOutlinedIcon className={classes.icon} />
              ) : (
                <LocalOfferIcon className={classes.icon} />
              )}
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Productitem;

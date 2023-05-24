import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./biditem.module.css";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CartContext from "../../store/cart-context";
import NotificationContext from "../../store/notification-context";
import ProductContext from "../../store/product-context";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function BidItem(props) {
    const productCtx= useContext(ProductContext)
    const PF = 'http://localhost:5000/images/'


    return (
        <div className={classes.itemCover}>
            <li>
                <Link to="/product-page">
                    <div className={classes.itemImage}>
                        <img src="my-app\public\images\product6.jpg" alt="" />
                    </div>
                </Link>

                <div className={classes.itemInfo}>
                    <div className={classes.infoUp}>
                        <h2>{props.name}</h2>
                    </div>
                    <div className={classes.infoDown}>
                    <span>price:${props.price}</span>
                </div>
                <div className={classes.infoDown}>
                    <span>Least amount: {props.least}</span>
                </div>
                <div className={classes.infoDown}>
                    <span>Bid recieved:{props.bid}</span>
                    <button className={classes.addBtn}>
                        <CheckCircleIcon className={classes.icon}/>
                        
                    </button>
                    <button className={classes.addBtn}><CancelIcon className={classes.icon}/></button>
                </div>
                

                
                </div>
            </li>
        </div>
        
      );

}

export default BidItem;
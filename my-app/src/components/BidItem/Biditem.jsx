import { useContext } from "react";
import { Link ,useParams } from "react-router-dom";
import classes from "./biditem.module.css";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CartContext from "../../store/cart-context";
import NotificationContext from "../../store/notification-context";
import ProductContext from "../../store/product-context";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from "axios";

function BidItem(props) {
    const productCtx= useContext(ProductContext)
    const PF = 'http://localhost:5000/images/'
    const notiCtx = useContext(NotificationContext);

    const {id} = useParams()

    const handleClickAccept = async(req,res)=>{
        try {
            const bidAccepted  = true
         const updateBid = {
     bidAccept: bidAccepted
    }
            const response = await axios.patch(`http://localhost:5000/seller/bid/update/${props.id}`, updateBid, {
                withCredentials:true
               
              });
        props.onBidAcceptChange(true);
        console.log('clicked')
        } catch (error) {
            console.log(error)
        }
    }
    const handleClickReject = async(req,res)=>{
        try {
            const bidAccepted  = false
         const updateBid = {
     bidAccept: bidAccepted
    }
            const response = await axios.patch(`http://localhost:5000/seller/bid/update/${props.id}`, updateBid, {
                withCredentials:true
               
              });
           console.log('clicked')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={classes.itemCover}>
            <li>
                <Link to="/product-page">
                    <div className={classes.itemImage}>
                        <img src="" alt="" />
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
                    <span>Least amount: ${props.least}</span>
                </div>
                <div className={classes.infoDown}>
                    <span>Bid recieved:${props.bid}</span>
                    <button className={classes.addBtn}
                    onClick={()=>{
                        
                        handleClickAccept();
                      
                    }} 
                    >
                        <CheckCircleIcon className={classes.icon}/>
                        
                    </button>
                    <button onClick = {()=>{
                        handleClickReject();
                        
                    }}
                         className={classes.addBtn}>
                        <CancelIcon className={classes.icon}/>
                        </button>
                </div>
            
                
                </div>
            </li>
        </div>
        
      );

}

export default BidItem;
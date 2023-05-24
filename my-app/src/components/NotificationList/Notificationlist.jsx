import classes from "./notificationlist.module.css";
import Notificationitem from "../NotificationItem/Noitficationitem";
<<<<<<< HEAD
import BidItem from "../BidItem/Biditem";
import { useState } from "react";
=======
>>>>>>> 050254c3ad4513b7529d7640df84e5e270400941

function Notificationlist(props) {

  const [bidAccept, setBidAccept] = useState(false);

  const handleBidAcceptChange = (value) => {
    setBidAccept(value);
  };

  return (
    <div className={classes.listCover}>
      <h1>Notifications</h1>
      <ul className={classes.list}>
<<<<<<< HEAD
        {props.notification.map((n) => (
          <Notificationitem
            bidAccept = {bidAccept}
            id={n.id}
            image={n.image}
            productName={n.productName}
            price={n.price}
          />
=======
        {props.Bid.map((n) => (
        
            <Notificationitem
              key={n.id}
              id={n.id}
              bidAccept = {n.bidAccept}
              image={n.product.image}
              productName={n.product.name}
              price={n.product.price}
              bidAmount = {n.bidAmount}
            />
         
>>>>>>> 050254c3ad4513b7529d7640df84e5e270400941
        ))}
        <BidItem
        bidAccept={bidAccept} 
        onBidAcceptChange={handleBidAcceptChange}
        />
      </ul>
    </div>
  );
}

export default Notificationlist;
import classes from "./notificationlist.module.css";
import Notificationitem from "../NotificationItem/Noitficationitem";
import BidItem from "../BidItem/Biditem";
import { useState } from "react";

function Notificationlist(props) {

  const [bidAccept, setBidAccept] = useState(false);

  const handleBidAcceptChange = (value) => {
    setBidAccept(value);
  };

  return (
    <div className={classes.listCover}>
      <h1>Notifications</h1>
      <ul className={classes.list}>
        {props.notification.map((n) => (
          <Notificationitem
            bidAccept = {bidAccept}
            id={n.id}
            image={n.image}
            productName={n.productName}
            price={n.price}
          />
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

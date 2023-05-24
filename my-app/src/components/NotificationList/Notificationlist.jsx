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
        {props.Bid.map((n) => (
          <Notificationitem
            key={n.id}
            id={n.id}
            bidAccept={n.bidAccept}
            image={n.product.image}
            productName={n.product.name}
            price={n.product.price}
            bidAmount={n.bidAmount}
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

import classes from "./notificationlist.module.css";
import Notificationitem from "../NotificationItem/Noitficationitem";


function Notificationlist(props) {
  return (
    <div className={classes.listCover}>
      <h1>Notifications</h1>
      <ul className={classes.list}>
        {props.notification.map((n) => (
          <Notificationitem
            id={n.id}
            image={n.image}
            productName={n.productName}
            price={n.price}
          />
        ))}
      </ul>
    </div>
  );
}

export default Notificationlist;

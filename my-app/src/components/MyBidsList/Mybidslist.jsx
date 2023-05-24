import classes from "./mybidslist.module.css";
import Mybidsitem from "../MyBidsItem/Mybidsitem";

function Mybidslist(props) {
  return (
    <div className={classes.listCover}>
      <h1>My Bids</h1>
      <ul className={classes.list}>
        {props.notification.map((n) => (
          <Mybidsitem
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

export default Mybidslist;

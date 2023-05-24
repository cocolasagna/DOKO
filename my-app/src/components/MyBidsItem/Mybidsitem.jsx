import classes from "./mybidsitem.module.css";
import { useContext } from "react";

function Mybidsitem(props) {
  return (
    <li>
      <div className={classes.myBidsItemCover}>
        <div className={classes.startContent}>
          <img src={props.image} alt="" />
        </div>
        <div className={classes.midContent}>
          <div className={classes.infoUp}>
            <span>{props.productName} </span>
          </div>

          <div className={classes.infoDown}>
            <span>${props.price}</span>
          </div>
        </div>
        <div className={classes.endContent}>
          <div className={classes.responseCover}></div>
        </div>
      </div>
    </li>
  );
}

export default Mybidsitem;

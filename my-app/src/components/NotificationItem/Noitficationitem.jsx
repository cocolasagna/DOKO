import classes from "./notificationitem.module.css";
import { useContext } from "react";
import NotificationContext from "../../store/notification-context";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

function Notificationitem(props) {
  const notiCtx = useContext(NotificationContext);
  const PF = 'http://localhost:5000/images/'
  return (
    <li>
      <div className={classes.notificationCover}>
        <div className={classes.startContent}>
          <img src={PF+props.image} alt="" />
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
          <div className={classes.responseCover}>
            {notiCtx.notificationToggle ? (
              <CheckCircleOutlineOutlinedIcon className={classes.icon} />
            ) : (
              <CancelOutlinedIcon className={classes.icon} />
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default Notificationitem;

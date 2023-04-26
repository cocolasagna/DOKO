import classes from "./notificationfeed.module.css";
import Endblock from "../EndBlock/Endblock";
import Notificationlist from "../NotificationList/Notificationlist";
import { useContext } from "react";
import NotificationContext from "../../store/notification-context";

let content;

function NotificationFeed() {
  const notiCtx = useContext(NotificationContext);

  if (notiCtx.totalNotifications === 0) {
    content = <span className={classes.displayText}>No New Notifications</span>;
  } else {
    content = <Notificationlist notification={notiCtx.notifications} />;
  }

  return (
    <div className={classes.notificationWrapper}>
      <div className={classes.content}>{content}</div>

      <Endblock />
    </div>
  );
}

export default NotificationFeed;

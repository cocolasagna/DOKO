import classes from "./notification.module.css";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Sidebar from "../../components/SideBar/Sidebar";
import NotificationFeed from "../../components/NotificationFeed/Notificationfeed";

function Notification() {
  return (
    <>
      <MainNavbar />
      <div className={classes.notificationContainer}>
        <Sidebar name="Sahil Tuladhar" id="17912" />
        <NotificationFeed />
      </div>
    </>
  );
}

export default Notification;

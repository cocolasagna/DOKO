import classes from "./notification.module.css";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Sidebar from "../../components/SideBar/Sidebar";
import NotificationFeed from "../../components/NotificationFeed/Notificationfeed";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";

function Notification() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.notificationContainer}>
        <Sidebar name={usernameCtx.name} />
        <NotificationFeed />
      </div>
    </>
  );
}

export default Notification;

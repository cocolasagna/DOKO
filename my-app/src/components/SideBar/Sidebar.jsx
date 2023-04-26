import classes from "./sidebar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CartContext from "../../store/cart-context";
import NotificationContext from "../../store/notification-context";

function Sidebar(props) {
  const cartCtx = useContext(CartContext);
  const notiCtx = useContext(NotificationContext);

  return (
    <div className={classes.sidebarMain}>
      <Link to="/profile-page">
        <div className={classes.profileWrapper}>
          <div className={classes.imgWrapper}>
            <img src="./images/profile-pic1.jpg" alt="profile picture" />
          </div>

          <div className={classes.nameWrapper}>
            <h1>{props.name}</h1>
            <span>{props.id}</span>
          </div>
        </div>
      </Link>

      <div className={classes.optionsWrapper}>
        <div className={classes.optionCover}>
          <Link to="/home-page">
            <HomeOutlinedIcon className={classes.icon} />
            <span>Home</span>
          </Link>
        </div>
        <hr />

        <div className={classes.optionCover}>
          <Link to="/mero-doko">
            <ShoppingBasketOutlinedIcon className={classes.icon} />
            <span>Mero Doko</span>
            <span className={classes.badge}>{cartCtx.totalItemsAdded}</span>
          </Link>
        </div>
        <hr />

        <div className={classes.optionCover}>
          <Link to="/notification-page">
            <NotificationsNoneOutlinedIcon className={classes.icon} />
            <span>Notifications</span>
            <span className={classes.badge}>{notiCtx.totalNotifications}</span>
          </Link>
        </div>
        <hr />

        <div className={classes.optionCover}>
          <SettingsOutlinedIcon className={classes.icon} />
          <span>Settings</span>
        </div>
        <hr />

        <div className={classes.optionCover}>
          <Link to="/wishlist-page">
            <AutoAwesomeOutlinedIcon className={classes.icon} />
            <span>Wishlist</span>
            <span className={classes.badge}>{cartCtx.totalItemsWished}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

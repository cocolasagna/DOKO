import classes from "./sidebar.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { Link } from "react-router-dom";


function Sidebar(props) {
  return (
    <div className={classes.sidebarMain}>
      <div className={classes.profileWrapper}>
        <div className={classes.imgWrapper}>
          <img src="/images/profile-pic1.jpg" alt="profile picture" />
        </div>

        <div className={classes.nameWrapper}>
          <h1>{props.name}</h1>
         <span>{props.id}</span> 
        </div>
      </div>

      <div className={classes.optionsWrapper}>
        <div className={classes.optionCover}>
          <HomeOutlinedIcon className={classes.icon} />
          <span>Home</span>
        </div>
        <hr />

        <div className={classes.optionCover}>
          <ShoppingBasketOutlinedIcon className={classes.icon} />
          <span>Mero Doko</span>
        </div>
        <hr />

        <div className={classes.optionCover}>
          <NotificationsNoneOutlinedIcon className={classes.icon} />
          <span>Notifications</span>
        </div>
        <hr />

        <div className={classes.optionCover}>
          <SettingsOutlinedIcon className={classes.icon} />
          <span>Settings</span>
        </div>
        <hr />

        <div className={classes.optionCover}>
        <Link to="/seller/product/new">
          <AutoAwesomeOutlinedIcon className={classes.icon} />
          <span>Create Product</span>
          </Link>
        </div>
     
      </div>
    </div>
  );
}

export default Sidebar;

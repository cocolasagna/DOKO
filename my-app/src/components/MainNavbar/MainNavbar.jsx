import classes from "./mainnavbar.module.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function MainNavbar(props) {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarleft}>
        <img src="./images/dokologohorizontal.png" alt="Doko Logo" />
      </div>

      <div className={classes.navbarmid}>
        <nav>
          <ul>
            <li>
              <Link to="/home-page">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/category-page">Categories</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/login-page">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.navbarright}>
        <div className={classes.searchbar}>
          <form>
            <SearchOutlinedIcon className={classes.icon} />
            <input type="text" placeholder="Search for Items, Categories" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;

import classes from "./mainnavbar.module.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import axios from "axios";
import Cookies from "js-cookie";

function MainNavbarBuyer(props) {
  const handleLogout = async (req, res) => {
    try {
      const response = await axios.post("http://localhost:5000/user/logout",{},{
        withCredentials:true
      });
      //Cookies.remove("buyer_token", { path: "/" });
      console.log(response);
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.navbarleft}>
        <img src="/images/dokologohorizontal.png" alt="Doko Logo" />
      </div>

      <div className={classes.navbarmid}>
        <nav>
          <ul>
            <li>
              <Link to="/seller/dashboard">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <span onClick={handleLogout}>Logout</span>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/aboutus-page">About Us</Link>
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

export default MainNavbarBuyer;

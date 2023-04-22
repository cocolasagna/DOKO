import classes from "./Home.module.css";
import SideBar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Homefeed from "../../components/HomeFeed/Homefeed";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <MainNavbar />
      <div className={classes.homeContainer}>
      <Link to="/seller/product/new">Create Product</Link>
        <SideBar name="Sahil Tuladhar" id="17912" />
        <Homefeed />
      </div>
    </>
  );
}

export default Home;

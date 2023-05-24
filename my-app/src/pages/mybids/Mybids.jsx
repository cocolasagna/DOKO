
import classes from "./mybids.module.css";
import Sidebar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Mybidsfeed from "../../components/MyBidsFeed/Mybidsfeed";

function Mybids() {
  return (
    <>
      <MainNavbar />
      <div className={classes.myBidsContainer}>
        <Sidebar name="Sahil Tuladhar" id="17912" />
        <Mybidsfeed />
      </div>
    </>
  );
}

export default Mybids;

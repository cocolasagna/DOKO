import classes from "./aboutus.module.css";
import SideBar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Aboutusfeed from "../../components/AboutUsFeed/Aboutusfeed";

function Aboutus() {
  return (
    <>
      <MainNavbar />
      <div className={classes.aboutUsContainer}>
        <SideBar name="Sahil Tuladhar" id="17912" />
        <Aboutusfeed />
      </div>
    </>
  );
}

export default Aboutus;

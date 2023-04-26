import classes from "./Home.module.css";
import SideBar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Homefeed from "../../components/HomeFeed/Homefeed";


function Home() {
  return (
    <>
      <MainNavbar />
      <div className={classes.homeContainer}>
        <SideBar name="Sahil Tuladhar" id="17912" />
        <Homefeed />
      </div>
    </>
  );
}

export default Home;

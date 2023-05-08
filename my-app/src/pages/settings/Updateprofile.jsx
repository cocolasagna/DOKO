import classes from "./updateprofile.module.css";
import Sidebar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Updatefeed from "../../components/UpdateFeed/Updatefeed";

function Updateprofile() {
  return (
    <>
      <MainNavbar />
      <div className={classes.updateContainer}>
        <Sidebar name="Sahil Tuladhar" id="17912" />
        <Updatefeed />
      </div>
    </>
  );
}

export default Updateprofile;

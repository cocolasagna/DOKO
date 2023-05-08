import classes from "./changepassword.module.css";
import Sidebar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Changepwfeed from "../../components/ChangePwFeed/Changepwfeed";

function Changepassword() {
  return (
    <>
      <MainNavbar />
      <div className={classes.settingsContainer}>
        <Sidebar name="Sahil Tuladhar" id="17912" />
        <Changepwfeed />
      </div>
    </>
  );
}

export default Changepassword;

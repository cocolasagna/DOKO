import classes from "./profile.module.css";
import MainNavbarBuyer from "../../components/MainNavbarBuyer/MainNavbarBuyer";
import Sidebar from "../../components/SideBar/Sidebar";
import Profilefeed from "../../components/ProfileFeed/Profilefeed";

function Profile() {
  return (
    <>
      <MainNavbarBuyer />
      <div className={classes.profileContainer}>
        <Sidebar name="Sahil Tuladhar" id="17912" />
        <Profilefeed />
      </div>
    </>
  );
}

export default Profile;

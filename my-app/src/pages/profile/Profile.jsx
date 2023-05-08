import classes from "./profile.module.css";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Sidebar from "../../components/SideBar/Sidebar";
import Profilefeed from "../../components/ProfileFeed/Profilefeed";

function Profile() {
  return (
    <>
      <MainNavbar />
      <div className={classes.profileContainer}>
        <Sidebar name="Sahil Tuladhar" id="17912" />
        <Profilefeed />
      </div>
    </>
  );
}

export default Profile;

import classes from "./settings.module.css";
import Sidebar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Settingsfeed from "../../components/SettingsFeed/Settingsfeed";

function Settings() {
  return (
    <>
      <MainNavbar />
      <div className={classes.settingsContainer}>
        <Sidebar name="Sahil Tuladhar" id="17912" />
        <Settingsfeed />
      </div>
    </>
  );
}

export default Settings;

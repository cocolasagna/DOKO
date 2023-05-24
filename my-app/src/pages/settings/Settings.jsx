import classes from "./settings.module.css";
import Sidebar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Settingsfeed from "../../components/SettingsFeed/Settingsfeed";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";

function Settings() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.settingsContainer}>
        <Sidebar name={usernameCtx.name} />
        <Settingsfeed />
      </div>
    </>
  );
}

export default Settings;

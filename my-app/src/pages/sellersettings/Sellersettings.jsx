import classes from "./sellersettings.module.css";
import SidebarSeller from "../../components/SideBarSeller/SidebarSeller";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Sellersettingsfeed from "../../components/SellerSettingsFeed/Sellersettingsfeed";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";

function Sellersettings() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.settingsContainer}>
        <SidebarSeller name={usernameCtx.name} />
        <Sellersettingsfeed />
      </div>
    </>
  );
}

export default Sellersettings;

import classes from "./changepasswordseller.module.css";
import SidebarSeller from "../../components/SideBarSeller/SidebarSeller";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";
import Changepwfeedseller from "../../components/ChangePwFeedSeller/Changepwfeedseller";

function Changepasswordseller() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.settingsContainer}>
        <SidebarSeller name={usernameCtx.name} />
        <Changepwfeedseller />
      </div>
    </>
  );
}

export default Changepasswordseller;

import classes from "./updateprofileseller.module.css";
import SidebarSeller from "../../components/SideBarSeller/SidebarSeller";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Updatefeedseller from "../../components/UpdateFeedSeller/Updatefeedseller";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";

function Updateprofileseller() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.updateContainer}>
        <SidebarSeller name={usernameCtx.name} />
        <Updatefeedseller />
      </div>
    </>
  );
}

export default Updateprofileseller;

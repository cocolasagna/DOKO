import classes from "./mybids.module.css";
import Sidebar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Mybidsfeed from "../../components/MyBidsFeed/Mybidsfeed";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";

function Mybids() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.myBidsContainer}>
        <Sidebar name={usernameCtx.name} />
        <Mybidsfeed />
      </div>
    </>
  );
}

export default Mybids;

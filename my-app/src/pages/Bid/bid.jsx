import classes from "./bid.module.css";
import SideBar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import UsernameContext from "../../store/username-context";
import Bidfeed from "../../components/BidFeed/Bidfeed";
import { useContext } from "react";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [userName, setUserName] = useState([]);
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.bidContainer}>
        <SideBar name={usernameCtx.name} />
        <Bidfeed />
      </div>
    </>
  );
}

export default Home;

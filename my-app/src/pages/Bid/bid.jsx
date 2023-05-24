import classes from "./bid.module.css";
import SideBar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";

import Homefeed from "../../components/HomeFeed/Homefeed";
import Bidfeed from "../../components/BidFeed/Bidfeed"
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

function Home() {
  const [userName,setUserName] = useState([])

  return (
    <>
      <MainNavbar />
      <div className={classes.bidContainer}>
        <SideBar name= {userName } />
        <Bidfeed/>
        
      </div>
     
    </>
  );
}

export default Home;

import classes from "./Home.module.css";
import SideBar from "../../components/SideBar/Sidebar";
import MainNavbarBuyer from "../../components/MainNavbarBuyer/MainNavbarBuyer";
import Homefeed from "../../components/HomeFeed/Homefeed";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [userName, setUserName] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/product/getallproduct", {
        withCredentials: true,
      })
      .then((res) => {
        setUserName(res.data.userName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <MainNavbarBuyer />
      <div className={classes.homeContainer}>
        <SideBar name={userName} />
        <Homefeed />
      </div>
    </>
  );
}

export default Home;

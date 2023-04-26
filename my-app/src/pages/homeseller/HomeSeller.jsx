import classes from "./Home.module.css";
import SideBarSeller from "../../components/SideBarSeller/SidebarSeller";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import HomefeedSeller from "../../components/HomeFeedSeller/HomefeedSeller";

import { useContext, useState, useEffect } from "react";
import axios from "axios";

function HomeSeller() {
  const [seller, setSeller] = useState();

  useEffect(() => {
    const fetchSeller = async () => {
      const response = await axios.get("http://localhost:5000/seller/product", {
        withCredentials: true,
      });
      setSeller(response.data.sellerName);
    };
    fetchSeller();
  }, []);
  return (
    <>
      <MainNavbar />
      <div className={classes.homeContainer}>
        <SideBarSeller name={seller} />
        <HomefeedSeller />
      </div>
    </>
  );
}

export default HomeSeller;

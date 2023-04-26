import classes from "./addtocart.module.css";
import SideBar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Cartfeed from "../../components/CartFeed/Cartfeed";

function Addtocart() {
  return (
    <>
      <MainNavbar />
      <div className={classes.addToCartContainer}>
        <SideBar name="Sahil Tuladhar" id="17912" />
        <Cartfeed />
      </div>
    </>
  );
}
export default Addtocart;

import classes from "./addtocart.module.css";
import SideBar from "../../components/SideBar/Sidebar";
import MainNavbarBuyer from "../../components/MainNavbarBuyer/MainNavbarBuyer";
import Cartfeed from "../../components/CartFeed/Cartfeed";
//this is add to carts
function Addtocart() {
  return (
    <>
      <MainNavbarBuyer />
      <div className={classes.addToCartContainer}>
        <SideBar name="Sahil Tuladhar" id="17912" />
        <Cartfeed />
      </div>
    </>
  );
}
export default Addtocart;

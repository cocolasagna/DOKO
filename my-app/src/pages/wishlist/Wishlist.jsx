import classes from "./wishlist.module.css";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import SideBar from "../../components/SideBar/Sidebar";
import Wishlistfeed from "../../components/WishlistFeed/Wishlistfeed";

function Wishlist() {
  return (
    <>
      <MainNavbar />
      <div className={classes.wishListContainer}>
        <SideBar name="Sahil Tuladhar" id="17912" />
        <Wishlistfeed />
      </div>
    </>
  );
}

export default Wishlist;

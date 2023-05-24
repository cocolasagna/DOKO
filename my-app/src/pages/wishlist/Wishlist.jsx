import classes from "./wishlist.module.css";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import SideBar from "../../components/SideBar/Sidebar";
import Wishlistfeed from "../../components/WishlistFeed/Wishlistfeed";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";

function Wishlist() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.wishListContainer}>
        <SideBar name={usernameCtx.name} />
        <Wishlistfeed />
      </div>
    </>
  );
}

export default Wishlist;

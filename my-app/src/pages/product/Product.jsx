import classes from "./product.module.css";
import Sidebar from "../../components/SideBar/Sidebar";
import MainNavbarBuyer from "../../components/MainNavbarBuyer/MainNavbarBuyer";
import Productfeed from "../../components/ProductFeed/Productfeed";

function Product() {
  return (
    <>
      <MainNavbarBuyer />
      <div className={classes.productContainer}>
        <Sidebar name="Sahil Tuladhar" id="17912" />
        <Productfeed />
      </div>
    </>
  );
}

export default Product;

import classes from "./product.module.css";
import Sidebar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Productfeed from "../../components/ProductFeed/Productfeed";

function Product() {
  return (
    <>
      <MainNavbar />
      <div className={classes.productContainer}>
        <Sidebar name="Sahil Tuladhar" id="17912" />
        <Productfeed />
      </div>
    </>
  );
}

export default Product;

import classes from "./category.module.css";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import SideBar from "../../components/SideBar/Sidebar";
import Categoryfeed from "../../components/CategoryFeed/Categoryfeed";

function Category(props) {

    

  return (
    <>
      <MainNavbar />
      <div className={classes.categoryContainer}>
        <SideBar name="Sahil Tuladhar" id="17912" />
        <Categoryfeed title={props.title1} CategoryId={props.id} />
      </div>
    </>
  );
}

export default Category;

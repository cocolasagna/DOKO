import classes from "./search.module.css";
import SideBar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Searchfeed from "../../components/SearchFeed/Searchfeed";

function Search() {
  return (
    <>
      <MainNavbar />
      <div className={classes.searchContainer}>
        <SideBar name="Sahil Tuladhar" id="17912" />
        <Searchfeed />
      </div>
    </>
  );
}

export default Search;

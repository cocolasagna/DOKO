import classes from "./Home.module.css";
import SideBar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Homefeed from "../../components/HomeFeed/Homefeed";

import { useContext , useState  , useEffect} from "react";
import axios from "axios";





function Home() {
  const [seller, setSeller] = useState();
 

  useEffect(() => {
    
    const fetchSeller = async () => {
      const response = await axios.get("http://localhost:5000/seller/product" ,
        {
          withCredentials:true
        });
      setSeller(response.data.sellerName);
   
    };
    fetchSeller();
  }, []);
  return (
    <>
      <MainNavbar />
      <div className={classes.homeContainer}>
     
        <SideBar name= {seller} />
        <Homefeed />
      </div>
    </>
  );
}

export default Home;

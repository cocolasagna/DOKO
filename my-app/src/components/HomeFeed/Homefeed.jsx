import Advert from "../Advert/Advert";
import Categorylist from "../CategoryList/Categorylist";
import Productlist from "../ProductList/Productlist";
import classes from "./homefeed.module.css";
import Endblock from "../EndBlock/Endblock";
import axios from "axios";
import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import { useEffect } from "react";
import { useState } from "react";

function Homefeed() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/product/getallproduct", {
        withCredentials: true,
      })
      .then((res) => {
        /*const sortedProducts = res.data.products.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setProduct(sortedProducts);*/
        const sortedProducts = res.data.products.sort(
          (a, b) => a.price - b.price
        );
        setProduct(sortedProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={classes.homeWrapper}>
      <Advert />
      <Categorylist />
      <div className={classes.titleContainer}>
        <button className={classes.sortPriceBtn}>
          <AbcOutlinedIcon className={classes.icon} />
        </button>
        <button className={classes.sortNameBtn}>
          <PriceChangeOutlinedIcon className={classes.icon} />
        </button>
      </div>

      <Productlist title="New Arrivals" data={product} />
      <Endblock />
    </div>
  );
}

export default Homefeed;

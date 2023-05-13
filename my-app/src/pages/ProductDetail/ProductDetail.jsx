import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "./productdetail.module.css";
import Endblock from "../../components/EndBlock/Endblock";
import MainNavBar from "../../components/MainNavbar/MainNavbar";
function ProductDetail() {
  const PF = "http://localhost:5000/images/";
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:5000/seller/product/${id}`,
        {
          withCredentials: true,
        }
      );
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className={classes.productFeedWrapper}>
      <MainNavBar />
      <div className={classes.productWrapper}>
        <div className={classes.imageContent}>
          <div className={classes.imageWrapper}>
            <img src={PF + product.image} alt="" />
          </div>
        </div>

        <div className={classes.infoContent}>
          <div className={classes.infoUp}>
            <div className={classes.itemInfoUp}>
              <h1>{product.name}</h1>
              <span className={classes.description}>
                <h1>{product.description}</h1>
                {/* {" "}
              Very Good Mobile Phone */}
              </span>
            </div>
            <div className={classes.itemInfoDown}>
              <span> Price: ${product.price}</span>
            </div>
            <br />
            <div className={classes.itemInfoDown}>
              <span> Quantity: {product.quantity}</span>
            </div>
          </div>
        </div>
      </div>
      <Endblock />
    </div>
  );
}

export default ProductDetail;

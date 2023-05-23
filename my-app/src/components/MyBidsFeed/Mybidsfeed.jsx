import classes from "./mybidsfeed.module.css";
import Advert from "../Advert/Advert";
import Endblock from "../EndBlock/Endblock";
import Mybidslist from "../MyBidsList/Mybidslist";
import Profileproductlist from "../ProfileProductList/Profileproductlist";
import { useContext } from "react";
import BidContext from "../../store/bids-context";

let content;

function Mybidsfeed() {
  const bidCtx = useContext(BidContext);

  if (bidCtx.totalBids === 0) {
    content = <span className={classes.displayText}>No New Bids</span>;
  } else {
    content = <Profileproductlist title="My Bids" data={bidCtx.bids} />;
  }

  return (
    <div className={classes.myBidFeedWrapper}>
      <Advert />
      <div className={classes.bidContent}>{content}</div>
      <Endblock />
    </div>
  );
}

export default Mybidsfeed;

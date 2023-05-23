import classes from "./mybidsfeed.module.css";
import Advert from "../Advert/Advert";
import Endblock from "../EndBlock/Endblock";

function Mybidsfeed() {
  return (
    <div className={classes.myBidFeedWrapper}>
      <Advert />
      <Endblock />
    </div>
  );
}

export default Mybidsfeed;

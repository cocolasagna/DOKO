import classes from "./profilefeed.module.css";
import Advert from "../Advert/Advert";
import Endblock from "../EndBlock/Endblock";
import { useContext } from "react";
import HistoryContext from "../../store/history-context";
import Profileproductlist from "../ProfileProductList/Profileproductlist";

function Profilefeed() {
  const historyCtx = useContext(HistoryContext);
  let content;

  if (historyCtx.totalItemsBought === 0) {
    content = <span className={classes.displayText}>No Items Bought Yet.</span>;
  } else {
    content = (
      <Profileproductlist title="Recent Orders" data={historyCtx.itemsbought} />
    );
  }

  return (
    <div className={classes.profileFeedWrapper}>
      <Advert />
      <div className={classes.profileContent}>{content}</div>
      <Endblock />
    </div>
  );
}

export default Profilefeed;

// import classes from "./profilefeed.module.css";
// import Advert from "../Advert/Advert";
// import Endblock from "../EndBlock/Endblock";
// import Productlist from "../ProductListSeller/ProductlistSeller";
// import { useContext } from "react";
// import HistoryContext from "../../store/history-context";

// function Profilefeed() {
//   const historyCtx = useContext(HistoryContext);
//   let content;

//   if (historyCtx.totalItemsBought === 0) {
//     content = <span className={classes.displayText}>No Items Bought Yet.</span>;
//   } else {
//     content = (
//       <Productlist title="Recent Orders" data={historyCtx.itemsbought} />
//     );
//   }

//   return (
//     <div className={classes.profileFeedWrapper}>
//       <Advert />
//       <div className={classes.profileContent}>{content}</div>
//       <Endblock />
//     </div>
//   );
// }

// export default Profilefeed;

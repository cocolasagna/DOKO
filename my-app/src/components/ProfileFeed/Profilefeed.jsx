import classes from "./profilefeed.module.css";
import Endblock from "../EndBlock/Endblock";
import Userinfo from "../UserInfo/Userinfo";
import Profileproductlist from "../ProfileProductList/Profileproductlist";
import { useContext } from "react";
import HistoryContext from "../../store/history-context";
import UsernameContext from "../../store/username-context";

function Profilefeed() {
  const historyCtx = useContext(HistoryContext);
  const usernameCtx = useContext(UsernameContext);
  const history = JSON.parse(localStorage.getItem("history"));
  console.log("data", history);
  let content;

  if (!history || history.length === 0) {
    content = <span className={classes.displayText}>No Items Bought Yet.</span>;
  } else {
    content = <Profileproductlist title="Recent Orders" data={history} />;
  }

  return (
    <div className={classes.profileFeedWrapper}>
      <Userinfo
        name={usernameCtx.name}
        address="Lazimpat,Kathmandu"
        number="9869577154"
      />
      <hr className={classes.line}/>
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

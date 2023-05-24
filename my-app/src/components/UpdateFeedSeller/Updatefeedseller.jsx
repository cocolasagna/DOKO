import classes from "./updatefeedseller.module.css";
import Endblock from "../EndBlock/Endblock";

function Updatefeedseller() {
  return (
    <div className={classes.updateWrapper}>
      <form className={classes.updateForm}>
        <div className={classes.inputBox}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            required
            id="username"
            placeholder="Enter Username"
          />
        </div>

        <div className={classes.inputBox}>
          <label htmlFor="phone-number">Phone No</label>
          <input
            type="integer"
            required
            id="phone-number"
            placeholder="Enter Phone Number"
          />
        </div>
      </form>

      <Endblock />
    </div>
  );
}

export default Updatefeedseller;

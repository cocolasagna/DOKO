import classes from "./updatefeed.module.css";
import Endblock from "../EndBlock/Endblock";

function Updatefeed() {
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
          <label htmlFor="shipping-address">Address</label>
          <input
            type="text"
            required
            id="shipping-address"
            placeholder="Enter Shipping Address"
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

        <div className={classes.inputBox}>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            required
            id="email"
            placeholder="Enter E-mail Address"
          />
        </div>
      </form>

      <Endblock />
    </div>
  );
}

export default Updatefeed;

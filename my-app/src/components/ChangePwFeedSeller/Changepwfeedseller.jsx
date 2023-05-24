import classes from './changepwfeedseller.module.css'
import Endblock from "../EndBlock/Endblock";

function Changepwfeedseller(){
 return (
   <div className={classes.changeWrapper}>
     <div className={classes.formInfo}>
       <form className={classes.pwForm}>
         <div className={classes.inputBox}>
           <label htmlFor="old-password">Old Password</label>
           <input
             type="text"
             required
             id="old-password"
             placeholder="Enter Old Password"
           />
         </div>

         <div className={classes.inputBox}>
           <label htmlFor="new-password">New Password</label>
           <input
             type="text"
             required
             id="new-password"
             placeholder="Enter New Password"
           />
         </div>

         <div className={classes.inputBox}>
           <label htmlFor="retype-new-password">Re-enter Password</label>
           <input
             type="text"
             required
             id="retype-new-password"
             placeholder="Re-enter New Password"
           />
         </div>
       </form>
     </div>

     <Endblock />
   </div>
 );
}

export default Changepwfeedseller;
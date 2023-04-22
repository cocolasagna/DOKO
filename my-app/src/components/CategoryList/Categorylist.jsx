import classes from "./categorylist.module.css";
import TvIcon from "@mui/icons-material/Tv";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import BedIcon from "@mui/icons-material/Bed";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import Smallcover from "../ui/SmallCover/Smallcover";

function Categorylist() {
  return (
    <>
      <div className={classes.listCover}>
        <h1>Categories</h1>
        <ul className={classes.list}>
          <li className={classes.itemCover}>
            <Smallcover>
              <div className={classes.coverUp}>
                <TvIcon className={classes.icon} />
              </div>
              <div className={classes.coverDown}>
                <h2>Electronics</h2>
              </div>
            </Smallcover>
          </li>

          <li className={classes.itemCover}>
            <Smallcover>
              <div className={classes.coverUp}>
                <SportsSoccerIcon className={classes.icon} />
              </div>
              <div className={classes.coverDown}>
                <h2>Sports</h2>
              </div>
            </Smallcover>
          </li>

          <li className={classes.itemCover}>
            <Smallcover>
              <div className={classes.coverUp}>
                <FastfoodIcon className={classes.icon} />
              </div>
              <div className={classes.coverDown}>
                <h2>Food</h2>
              </div>
            </Smallcover>
          </li>

          <li className={classes.itemCover}>
            <Smallcover>
              <div className={classes.coverUp}>
                <BedIcon className={classes.icon} />
              </div>
              <div className={classes.coverDown}>
                <h2>Furniture</h2>
              </div>
            </Smallcover>
          </li>

          <li className={classes.itemCover}>
            <Smallcover>
              <div className={classes.coverUp}>
                <CheckroomIcon className={classes.icon} />
              </div>
              <div className={classes.coverDown}>
                <h2>Clothing</h2>
              </div>
            </Smallcover>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Categorylist;

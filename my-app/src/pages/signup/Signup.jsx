import "./signup.css";
import Navbar from "../../components/LoginNavbar/Navbar";
import AccountCircleIconOutlined from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

function Signup() {
  return (
    <>
      <Navbar />
      <div className="body">
        <div className="background">
          <div className="center-block">
            <div className="center-block-left">
              <img
                className="loginImage"
                src="../public/images/dokologovertical.png"
                alt=""
              />
            </div>

            <div className="center-block-right">
              <div className="signup-form">
                <h1 className="signup-title">Sign Up</h1>
                <form className="input-form">
                  <div className="input-box">
                    <div className="inner-wrapper">
                      <AccountCircleIconOutlined className="icon" />
                      <input
                        type="text"
                        className="input-value"
                        placeholder="Enter Full Name"
                      />
                    </div>
                  </div>
                  <div className="input-box">
                    <div className="inner-wrapper">
                      <EmailOutlinedIcon className="icon" />
                      <input
                        type="text"
                        className="input-value"
                        placeholder="Enter E-mail Address"
                      />
                    </div>
                  </div>
                  <div className="input-box">
                    <div className="inner-wrapper">
                      <LocalPhoneOutlinedIcon className="icon" />
                      <input
                        type="text"
                        className="input-value"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </div>
                  <div className="input-box">
                    <div className="inner-wrapper">
                      <HomeOutlinedIcon className="icon" />
                      <input
                        type="text"
                        className="input-value"
                        placeholder="Enter Address"
                      />
                    </div>
                  </div>

                  <div className="input-box">
                    <div className="inner-wrapper">
                      <PasswordOutlinedIcon className="icon" />
                      <input
                        type="text"
                        className="input-value"
                        placeholder="Enter New Password"
                      />
                    </div>
                  </div>

                  <div className="input-box">
                    <div className="inner-wrapper">
                      <CheckOutlinedIcon className="icon" />
                      <input
                        type="text"
                        className="input-value"
                        placeholder="Re-enter New Password"
                      />
                    </div>
                  </div>
                  <button className="signup-button">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

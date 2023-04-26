import "./loginnavbar.css";

function LoginNavbar(props) {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="./images/dokologohorizontal.png" alt="Doko Logo" />
      </div>

      <div className="navbar-right">
        <button className="navbar-button">{props.buttontext}</button>
      </div>
    </div>
  );
}

export default LoginNavbar;

import "./navbar.css";

function Navbar() {
 const  handleClick = ()=>{
    window.location.href = 'seller/login'
  }
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="./images/dokologohorizontal.png" alt="Doko Logo" />
      </div>

      <div className="navbar-right">
        <span className="navbar-options">Home</span>
        <span className="navbar-options">About Us</span>
        <span className="navbar-options">Contact Us</span>
        <button className="navbar-button" onClick={handleClick} >Log In</button>
      </div>
    </div>
  );
}

export default Navbar;

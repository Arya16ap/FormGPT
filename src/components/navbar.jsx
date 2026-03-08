import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        FormGPT
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/digilocker">DigiLocker</Link>
        <Link to="/form">Form</Link>
      </div>
    </nav>
  );
}

export default Navbar;
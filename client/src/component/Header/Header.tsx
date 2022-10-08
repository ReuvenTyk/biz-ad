import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-primary bg-primary d-flex justify-content-between">
      <ul className="navbar-nav flex-row text-light ms-2">
        <li className="nav-item mx-2">
          <NavLink to="/main" className="nav-link text-light">
            <i className="bi bi-building text-light">BizAd</i>
          </NavLink>
        </li>
        <li className="nav-item mx-2">
          {
            <NavLink to="/services" className="nav-link text-light">
              Services
            </NavLink>
          }
        </li>
        <li className="nav-item mx-2">
          <NavLink to="/about" className="nav-link text-light">
            About
          </NavLink>
        </li>
      </ul>

      <ul className="navbar-nav flex-row me-3">
        <li className="nav-item mx-2">
          {
            <NavLink to="/signup" className="nav-link text-light">
              Sign Up
            </NavLink>
          }
        </li>
        <li className="nav-item mx-2">
          <NavLink to="/login" className="nav-link text-light">
            Login
          </NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink to="/logout" className="nav-link text-light">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

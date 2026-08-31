import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const [loginLogout, setLoginLogout] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li className="login">
            <button
              className="login-btn"
              onClick={() => {
                loginLogout === "Login"
                  ? setLoginLogout("Logout")
                  : setLoginLogout("Login");
              }}
            >
              {loginLogout}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

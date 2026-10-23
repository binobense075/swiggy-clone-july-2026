import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [loginLogout, setLoginLogout] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cart = useSelector((store) => store.cart.items);

  console.log(cart);

  return (
    <div className="flex justify-between items-center m-0.5 px-6 border border-orange-100">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex text-base items-center [&>li]:m-2.5 [&>li]:p-2.5 [&>li]:bg-orange-100 [&>li]:rounded-lg [&>li]:border [&>li]:border-orange-200 [&>li]:hover:bg-orange-200 transition-colors cursor-pointer">
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart {cart.length}</Link>
          </li>
          <li className="font-bold text-red-500">{loggedInUser}</li>
          <li>
            <button
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

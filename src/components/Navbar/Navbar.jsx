import "./Navbar.css";

import { Link, useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import { useAuth } from "../../contexts/auth-context";

export const Navbar = () => {
  const { authData, setAuthData } = useAuth();
  const navigate = useNavigate();

  function LogoutHandler() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthData((authData) => ({
      user: null,
      token: null,
      isAuthenticated: false,
    }));
    navigate("/home");
  }
  return (
    <header className="header--std">
      <nav className="nav--std flex__wrap--wrap">
        <ul className="header__list--align-start">
          <li className="header__title">
            <Link to="/home">Pendown</Link>
          </li>
        </ul>
        <Search />
        <ul className="header__list--align-end">
          <li className="color--primary header__btn m--x-0-5">
            {authData.isAuthenticated ? (
              <Link to="/home" className="p--x-1" onClick={LogoutHandler}>
                Logout
              </Link>
            ) : (
              <Link to="/login" className="p--x-1">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

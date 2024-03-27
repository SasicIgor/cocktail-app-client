import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authActions } from "../redux/slice/authSlice";


const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <header className="header_wrapper">
      <div>Logo</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="cocktails">Cocktails</NavLink>
          </li>
          {user && (
            <li>
              <NavLink to={`cocktails/contributor/${user}`}>Contributor</NavLink>
            </li>
          )}
          <li>
            <NavLink to="contributor">About</NavLink>
          </li>
          <li>
            <NavLink to="contributor">History</NavLink>
          </li>
        </ul>
        {!user && (
          <ul className="login">
            <li>
              <NavLink to="users/signup" className="marked_link">
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="users/signin">Sign In</NavLink>
            </li>
          </ul>
        )}
        {user && (
          <ul className="login">
            <li>
              <NavLink
                className="marked_link"
              >
                Logout
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authActions } from "../redux/slice/authSlice";
import './../styles/header.scss'

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <header className="header_wrapper">
      <div>Logo</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({isActive})=> isActive ? "active" : "link"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="cocktails" className={({isActive})=> isActive ? "active" : "link"}>Cocktails</NavLink>
          </li>
          {user && (
            <li>
              <NavLink to={`cocktails/contributor/${user}`} className={({isActive})=> isActive ? "active" : "link"}>Contributor</NavLink>
            </li>
          )}
          {/* <li>
            <NavLink to="contributor" className={({isActive})=> isActive ? "active" : "link"}>About</NavLink>
          </li>
          <li>
            <NavLink to="contributor" className={({isActive})=> isActive ? "active" : "link"}>History</NavLink>
          </li> */}
        </ul>
        {!user && (
          <ul className="login">
            <li>
              <NavLink to="users/signup" className="marked_link">
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="users/signin" className={({isActive})=> isActive ? "active" : "link"}>Sign In</NavLink>
            </li>
          </ul>
        )}
        {user && (
          <ul className="login">
            <li>
              <NavLink
                className="marked_link"
                onClick={()=>dispatch(authActions.logout())}
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

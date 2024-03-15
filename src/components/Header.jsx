import { NavLink } from "react-router-dom";

const Header = () => {
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
          <li>
            <NavLink to="contributor">Contributor</NavLink>
          </li>
          <li>
            <NavLink to="contributor">About</NavLink>
          </li>
          <li>
            <NavLink to="contributor">History</NavLink>
          </li>
        </ul>
        <ul className="login">
          <li>
            <NavLink to="signup" className="marked_link">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="signin">Sign In</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

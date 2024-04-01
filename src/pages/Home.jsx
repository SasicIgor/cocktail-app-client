import { useSelector } from "react-redux";
import "./../styles/home.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="home">
      {!user && (
        <>
          <h1>Welcome to the wonderful world of cocktails!</h1>
          <p>join us today so we can help you grow your bartending skills</p>
          <div className="buttons">
            <div className="button_wrapper">
              <NavLink to="users/signup" className="sign_link">
                Sign up
              </NavLink>
            </div>
            <div className="button_wrapper">
              <NavLink to="users/signin" className="sign_link">
                Sign in
              </NavLink>
            </div>
          </div>
        </>
      )};
      {user && <>
          <h1>Welcome back {`${user}`}, glad to see you again!</h1>
          <div className="buttons">
            <div className="button_wrapper">
              <NavLink to="cocktails" className="sign_link">
                Cocktails
              </NavLink>
            </div>
            <div className="button_wrapper">
              <NavLink to={`cocktails/contributor/${user}`} className="sign_link">
                Contribute
              </NavLink>
            </div>
          </div>
        </>}
    </div>
  );
};

export default Home;

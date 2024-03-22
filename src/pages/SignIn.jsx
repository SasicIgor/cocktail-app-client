import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const dispatch = useDispatch();

  const inputChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue }));
      if(user){
        navigate("/")
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Sign in form</h2>
        <div>
          <input
            type="text"
            value={email}
            required
            name="email"
            placeholder="Enter your email"
            onChange={inputChange}
          ></input>
        </div>
        <div>
          <input
            type="password"
            value={password}
            required
            name="password"
            placeholder="Enter your password"
            onChange={inputChange}
          ></input>
        </div>
        <div>
          <button type="submit">Submit registration</button>
        </div>
      </form>
    </>
  );
};

export default SignIn;

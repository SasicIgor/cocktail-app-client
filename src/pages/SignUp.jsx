import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/slice/authSlice";

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmed: "",
};

const SignUp = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { username, email, password, passwordConfirmed } = formValue;

  const dispatch = useDispatch();

  const handleInputChange=(e)=>{
    e.preventDefault();
    let {name,value}=e.target;
    setFormValue({...formValue,[name]:value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(username&&email&&password&&passwordConfirmed){
      dispatch(register({formValue}));
    }
  }

  return (
    <div className="form_wrapper">
      <form onSubmit={handleSubmit} className="login_form">
      <h2>Sign up form</h2>
        <div className="input_wrapper">
          <input
            type="text"
            value={username}
            required
            name="username"
            placeholder="Enter your username"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="input_wrapper">
          <input
            type="text"
            value={email}
            required
            name="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="input_wrapper">
          <input
            type="password"
            value={password}
            required
            name="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="input_wrapper">
          <input
            type="password"
            value={passwordConfirmed}
            required
            name="passwordConfirmed"
            placeholder="Enter confirmation passowrd"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="input_wrapper">
          <button type="submit">Submit registration</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

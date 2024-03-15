import { useState } from "react";
import { useDispatch } from "react-redux";

const initialState = {
    name: "",
    email: "",
    password: "",
    passwordConfirmed: "",
  };
  
const SignIn = () =>{
    const [formValue, setFormValue] = useState(initialState);

  const { name, email, password, passwordConfirmed } = formValue;

  const dispatch = useDispatch();

  const inputChange=(e)=>{
    e.preventDefault();
    let {name,value}=e.target;
    setFormValue({...formValue,[name]:value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name&email&password&passwordConfirmed){
      dispatch(formValue);
    }
  }

    return     <>
    <h2>Sign up form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={name}
          required
          name="name"
          placeholder="Enter your username"
          onChange={inputChange}
        ></input>
      </div>
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
          type="text"
          value={password}
          required
          name="password"
          placeholder="Enter your password"
          onChange={inputChange}
        ></input>
      </div>
      <div>
        <input
          type="text"
          value={passwordConfirmed}
          required
          name="passwordConfirmed"
          placeholder="Enter confirmation passowrd"
          onChange={inputChange}
        ></input>
      </div>
      <div>
        <button type="submit">Submit registration</button>
      </div>
    </form>
  </>
}

export default SignIn;
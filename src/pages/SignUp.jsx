import { useState } from "react";
import { useDispatch } from "react-redux";
import { register, login } from "../redux/slice/authSlice";
import { Form, useLocation, useNavigate } from "react-router-dom";
import {
  isEmail,
  isPasswordConfirmed,
  isValidPassword,
  isValidUsername,
} from "../components/validations";
import Input from "../components/Input";
import Button from "../components/Button";

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmed: "",
};

const initialBlurState = {
  username: false,
  email: false,
  password: false,
  passwordConfirmed: false,
};

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  //using path to determine which form is active signin or signup
  const location = useLocation();
  const type =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  //state for collecting the form value
  const [formValue, setFormValue] = useState(initialState);

  //state for displaying error messages in case user input is invalid
  const [didEdit, setDidEdit] = useState(initialBlurState);

  //state to control that submitted form is valid
  const [validForm, setValidForm] = useState(true);

  //validations for each user input
  const emailIsInvalid = didEdit.email && !isEmail(formValue.email);
  const passwordIsInvalid =
    didEdit.password && !isValidPassword(formValue.password);
  const passwordsDontMatch =
    didEdit.password &&
    didEdit.passwordConfirmed &&
    !isPasswordConfirmed(formValue.password, formValue.passwordConfirmed);
  const usernameIsInvalid =
    didEdit.username && !isValidUsername(formValue.username);

  //function to store user input in a state
  const handleInputChange = (e) => {
    setDidEdit((prev) => ({
      ...prev,
      [e.target.name]: false,
    }));
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  //input to confirm that user interacted with the input before displaying the error
  const handleInputBlur = (name) => {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [name]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailIsInvalid) {
      setValidForm(false);
      return;
    }
    if (usernameIsInvalid) {
      setValidForm(false);
      return;
    }
    if (passwordIsInvalid) {
      setValidForm(false);
      return;
    }
    if (passwordsDontMatch) {
      setValidForm(false);
      return;
    }
    if (type == "signup") {
      return dispatch(register({ formValue })).unwrap().then(()=>navigate("/"));
    } else if (type == "signin") {
      return dispatch(login({ formValue })).unwrap().then(()=>navigate('/'));
      
    }

    throw new Error("Internal server problem");
  };

  return (
    <div className="form_wrapper">
      
      {!validForm && (
        <p>
          You have submited invalid form. Please follow the guidelines and try
          again.
        </p>
      )}
      <Form onSubmit={handleSubmit}>
        {type == "signup" && (
          <>
            <Input
              id="username"
              type="text"
              label="Username"
              name="username"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => handleInputBlur(e.target.name)}
              required
            />
            {usernameIsInvalid && (
              <p>
                Username must starts with capital letter, have 5-13 charcters,
                numbers and letters
              </p>
            )}
          </>
        )}
        <Input
          id="email"
          type="email"
          label="Email"
          name="email"
          onChange={(e) => handleInputChange(e)}
          onBlur={(e) => handleInputBlur(e.target.name)}
          required
        />
        {emailIsInvalid && <p>please enter a valid email</p>}
        <Input
          id="password"
          type="password"
          label="Password"
          name="password"
          onChange={(e) => handleInputChange(e)}
          onBlur={(e) => handleInputBlur(e.target.name)}
          required
        />
        {passwordIsInvalid && <p>password must have between 8-20 characters</p>}
        {type == "signup" && (
          <>
            <Input
              id="passwordConfirmed"
              type="password"
              label="Confirm password"
              name="passwordConfirmed"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => handleInputBlur(e.target.name)}
              required
            />
            {passwordsDontMatch && <p>two passwords have to match</p>}
          </>
        )}
        {type == "signup" && <Button type="submit" label="Register" />}
        {type != "signup" && <Button type="submit" label="Login" />}
      </Form>
      
    </div>
  );
};

export default SignUp;

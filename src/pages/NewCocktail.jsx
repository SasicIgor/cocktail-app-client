import { Form } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { glasses, method } from "../helpers/initialLocalStorage";
import manageIngredients from "../helpers/ingredients";
import { useDispatch, useSelector } from "react-redux";
import { newCocktail } from "../redux/slice/cocktailSlice";

const initialIngredientsInputState = [
  {
    ingredient: "",
    amount: "",
  },
];

const startGlassValue = ["0", "Choose glass"];
const startMethodValue = ["0", "Choose method"];

const NewCocktail = () => {
  const user=useSelector(state=> state.auth.user)
  const dispatch=useDispatch();
  //state for an input field for ingredients, displaying it dynamically
  const [ingredientInput, setIngredientInput] = useState([
    initialIngredientsInputState,
  ]);
  const handleIngInputAdd = () => {
    setIngredientInput([...ingredientInput, { ingredient: "", amount: "" }]);
  };

  const glassOptions = Object.entries(glasses[0]);
  glassOptions.unshift(startGlassValue);
  const methodOptions = Object.entries(method[0]);
  methodOptions.unshift(startMethodValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    const dat=manageIngredients(data);
   dat.author=user

   console.log(dat)
   dispatch(newCocktail(dat))
   


  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Please share your creation with us by filling up this form</h2>
      <Input
        label="Enter cocktail name"
        name="name"
        type="text"
        required
      />
      <Input label="Add image" name="image" type="img" />
      <div className="select_wrapper">
        <select name="glass" id="glass">
          {glassOptions.map((item, index) => (
            <option key={index} value={item[0]}>
              {item[1]}
            </option>
          ))}
        </select>
        <select name="method" id="method">
          {methodOptions.map((item, index) => (
            <option key={index} value={item[0]}>
              {item[1]}
            </option>
          ))}
        </select>
      </div>
      <h3>Add ingredients:</h3>
      {ingredientInput.map((item, index) => (
        <div key={index}>
          <Input
            label={`Ingreditent ${index + 1}`}
            name={`Ingreditent ${index + 1}`}
            type="text"
            required
          />
          <Input
            label={`Ingreditent ${index + 1} amount`}
            name={`Ingreditent ${index + 1} amount`}
            type="text"
            required
          />
        </div>
      ))}
      <Button
        type="button"
        label="Add more ingredients"
        handleClick={handleIngInputAdd}
      />
      <Input label="What do you use to decorate" name="decoration" type="text"/>
      <h3>Describe how you make a cocktail in a few steps:</h3>
      <textarea
        name="description"
        id=""
        cols="30"
        rows="5"
        placeholder="1. Text goes here..."
      />
      <button type="submit">submit form</button>
    </Form>
  );
};

export default NewCocktail;

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./../styles/singleCocktail.scss";
import Button from "../components/Button";
import { deleteUserCocktail } from "../redux/slice/cocktailSlice";


const SingleCocktail = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const cocktailId = useParams().id;
  const cocktail = useSelector((state) =>
    state.cocktail.cocktails.find(
      (oneCocktail) => oneCocktail._id == cocktailId
    )
  );
  const user=useSelector(state=>state.auth.user)

  const methods = JSON.parse(localStorage.getItem("method"))[0];
  const specificMethod= methods[cocktail.method]
  const glasses = JSON.parse(localStorage.getItem("glass"))[0];
  const specificGlass= glasses[cocktail.glass]
  console.log(cocktail)

  const handleDelete=()=>{
    dispatch(deleteUserCocktail(cocktailId)).unwrap()
    .then(() => navigate("/"))
  }
  const handleNavigation=()=>{
    navigate(`./editCocktail`)
  }

  const type=typeof cocktail.description;
  console.log(type);

  return (
    <div className="single_cocktail_wrapper">
      <div className="cocktail_info_field">
        <div className="cocktail_image">
          <img src={cocktail.image} alt={`${cocktail.name} image`} />
        </div>
        <div className="cocktail_info">
          <h2>{cocktail.name}</h2>
          <div className="cocktail_method">
            <p>method:{specificMethod}</p>
            <p>glass: {specificGlass}</p>
            <p>dificulty: 3</p>
          </div>
          <h3>Ingredients:</h3>
          <ul>
            {Object.entries(cocktail.ingredients.spirits).map(
              ([key, value]) => (
                <li key={key}>
                  {key}:{value}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="cocktail_description_field">{type=='string'? cocktail.description : Object.entries(cocktail.description).map(([key, value])=>(
        <p key={key}>{key}:{value}</p>
      ))
      }</div>
      {user==cocktail.author? <div className="buttons"><Button type="button" label="Edit" handleClick={handleNavigation}/><Button type="button" label="Delete" handleClick={handleDelete}/></div>: ""}
    </div>
  );
};

export default SingleCocktail;

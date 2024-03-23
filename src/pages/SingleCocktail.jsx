import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import fetchingCocktails from "../helpers/fetch";

const SingleCocktail = () => {
  const cocktailId = useParams().id;
  const cocktail = useSelector((state) =>
    state.cocktail.cocktails.find(
      (oneCocktail) => oneCocktail._id == cocktailId
    )
  );
console.log(Object.entries(cocktail.ingredients.spirits))
  return (
    <div className="display_field">
          <h2>{cocktail.name}</h2>
      <div className="cocktail_info_field">
        <div className="cocktail_image">
          <img src={cocktail.image} alt={`${cocktail.name} image`} />
        </div>
        <div className="cocktail_info">
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
      <div className="cocktail_description_field"></div>
    </div>
  );
};

export default SingleCocktail;

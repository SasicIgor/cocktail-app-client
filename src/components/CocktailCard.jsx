import { Link } from "react-router-dom";

const CocktailCard = ({ cocktail }) => {
  const methods = JSON.parse(localStorage.getItem("method"))[0];
  const specificMethod= methods[cocktail.method]
  const glasses = JSON.parse(localStorage.getItem("glass"))[0];
  const specificGlass= glasses[cocktail.glass]

  return (
    <div className="card_field" key={cocktail._id}>
      <img src={cocktail.image} alt="cocktail image" />
      <div className="cocktail_info">
        <h2>{cocktail.name}</h2>
        <div className="short_preview">
          <p>Glass: {specificGlass}</p>
          <p>Method: {specificMethod}</p>
          <p>Difficulty: 3</p>
        </div>
        <Link className="button" to={cocktail._id}>
          Explore more
        </Link>
      </div>
    </div>
  );
};

export default CocktailCard;

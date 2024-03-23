import { Link } from "react-router-dom";

const CocktailCard = ({ cocktail }) => {
  return (
    <div className="card_field" key={cocktail._id}>
      <img src={cocktail.image} alt="cocktail image" />
      <div className="cocktail_info">
        <h2>{cocktail.name}</h2>
        <div className="short_preview">
          <p>Glass: {cocktail.glass}</p>
          <p>Method: {cocktail.method}</p>
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

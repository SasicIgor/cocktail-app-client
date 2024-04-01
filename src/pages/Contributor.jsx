import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { cocktailActions } from "../redux/slice/cocktailSlice";
import CocktailCard from "../components/CocktailCard";
import "./../styles/contributor.scss";
const Contributor = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cocktailActions.setCocktailByAuthor());
  }, []);

  const cocktailList = useSelector((state) => state.cocktail.cocktailsByAuthor);

  return (
    <div className="contribution_page">
      <div className="contribution_headline">
        <h1>Thank you for your contributions</h1>
        <p>You want to help us grow bigger? Share your creations with us</p>
        <NavLink className="link" to="makeCocktail">
          Create cocktail
        </NavLink>
      </div>
      <div className="contribution_cocktails">
        {cocktailList.map((cocktail) => (
          <CocktailCard key={cocktail._id} cocktail={cocktail}></CocktailCard>
        ))}
      </div>
    </div>
  );
};

export default Contributor;

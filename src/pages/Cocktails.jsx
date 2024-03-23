import { useEffect, useState } from "react";
import CocktailCard from "../components/CocktailCard";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../redux/slice/cocktailSlice";
import Sidebar from "../components/Sidebar";


const Cocktails = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const cocktailList = useSelector((state) => state.cocktail.cocktails);

  useEffect(() => {
    setIsLoading(true);
    async function fetchingCocktails() {
      try {
        dispatch(getCocktails());
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchingCocktails();
  }, []);

  return (
    <>
      <Sidebar/>
      <div className="display_field">
        {isLoading && <p>still loading...</p>}
        {!isLoading && !cocktailList.length && (
          <p>there is no cocktails here</p>
        )}
        {!isLoading &&
          cocktailList.map((cocktail) => (
            <CocktailCard key={cocktail._id} cocktail={cocktail}></CocktailCard>
          ))}
      </div>
    </>
  );
};

export default Cocktails;

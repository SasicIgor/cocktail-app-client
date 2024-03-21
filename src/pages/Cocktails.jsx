import { useEffect, useState } from "react";
import fetchingCocktails from "../helpers/fetch";

const Cocktails = () => {
  const [cocktailList, setCocktailList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchCocktails() {
      try {
        const response = await fetchingCocktails();
        setCocktailList(response.data.cocktails);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCocktails();
  }, []);

  return (
    <div className="display_field">
      {isLoading && <p>still loading...</p>}
      {!isLoading && cocktailList.length === 0 && (
        <p>there is no cocktails here</p>
      )}
      {!isLoading &&
        cocktailList.map((cocktail) => {
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
                  <button type="button" className="button">
                    Explore more
                  </button>
                </div>
              </div>
            
          );
        })}
    </div>

    // <div className="display_field">
    //   <div className="card_field">
    //     <img src="/negroni.jpg" alt="cocktail image" />
    //     <div className="cocktail_info">
    //       <h2>Manhattan</h2>
    //       <div className="short_preview">
    //         <p>Glass: Nick & Nora</p>
    //         <p>Method: Stir</p>
    //         <p>Difficulty: 3</p>
    //       </div>
    //       <button type="button" className="button">
    //         Explore more
    //       </button>
    //     </div>
    //   </div>
    //   <div className="card_field">
    //     <img src="pexels-photo-2615326.webp" alt="cocktail image" />
    //     <div className="cocktail_info">
    //       <h2>Manhattan</h2>
    //       <div className="short_preview">
    //         <p>Glass: Nick & Nora</p>
    //         <p>Method: Stir</p>
    //         <p>Difficulty: 3</p>
    //       </div>
    //       <button type="button" className="button">
    //         Explore more
    //       </button>
    //     </div>
    //   </div>
    //   <div className="card_field">
    //     <img src="/cocktail.avif" alt="cocktail image" />
    //     <div className="cocktail_info">
    //       <h2>Manhattan</h2>
    //       <div className="short_preview">
    //         <p>Glass: Nick & Nora</p>
    //         <p>Method: Stir</p>
    //         <p>Difficulty: 3</p>
    //       </div>
    //       <button type="button" className="button">
    //         Explore more
    //       </button>
    //     </div>
    //   </div>
    //   <div className="card_field">
    //     <img src="/negroni.jpg" alt="cocktail image" />
    //     <div className="cocktail_info">
    //       <div>
    //         <h2>Manhattan</h2>
    //       </div>
    //       <div className="short_preview">
    //         <p>Glass: Nick & Nora</p>
    //         <p>Method: Stir</p>
    //         <p>Difficulty: 3</p>
    //       </div>
    //       <div>
    //         <button type="button" className="button">
    //           Explore more
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Cocktails;

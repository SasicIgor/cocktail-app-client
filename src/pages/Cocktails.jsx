import { useEffect, useState } from "react";
import CocktailCard from "../components/CocktailCard";
import { useDispatch, useSelector } from "react-redux";
import { getCocktails } from "../redux/slice/cocktailSlice";
import { cocktailActions } from "../redux/slice/cocktailSlice";
import Sidebar from "../components/Sidebar";
import { Spinner } from "../components/Spinner";
import "./../styles/cocktailPage.scss";
import { NavLink } from "react-router-dom";

const Cocktails = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.cocktail.loading);
  const [searchInputText, setSearchInputText] = useState("");
  const [filterByMethod, setFilterByMethod] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const cocktailList = useSelector((state) => state.cocktail.cocktails);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const display = cocktailList.slice(firstIndex, lastIndex);
  const npage = Math.ceil(cocktailList.length / itemsPerPage);
  let pages = [];
  for (let i = 0; i < npage; i++) {
    pages.push(i + 1);
  }
  const changePage = (n) => {
    console.log(n)
    setCurrentPage(n);
  };

  useEffect(() => {
    function fetchingCocktails() {
      try {
        if (localStorage.getItem("cocktails")) {
          dispatch(cocktailActions.setCocktailList());
          return;
        }
        dispatch(getCocktails());
      } catch (err) {
        console.log(err);
      }
    }
    fetchingCocktails();
  }, []);

  const handleSearchChange = (value) => {
    setSearchInputText(value);
  };

  const sortByName = () => {
    setIsSorted(!isSorted);
  };

  const handleCheckboxMethod = (value, checked) => {
    setFilterByMethod((prevState) => {
      if (checked) {
        return [...prevState, value];
      } else {
        return prevState.filter((method) => method != value);
      }
    });
  };

  return (
    <div className="cocktail_page_wrapper">
      {cocktailList.length && (
        <Sidebar
          search={handleSearchChange}
          methodFilter={handleCheckboxMethod}
          sort={sortByName}
          isSorted={isSorted}
        />
      )}
      <div className="cocktail_card_wrapper">
        {isLoading && <Spinner />}
        {!isLoading && !cocktailList.length && (
          <p>Im sorry but there is no cocktail here</p>
        )}
        {!isLoading &&
          display
            .filter((cocktail) => {
              if (searchInputText === "") {
                return cocktail;
              }
              if (
                cocktail.name
                  .toLowerCase()
                  .includes(searchInputText.toLowerCase())
              ) {
                return cocktail;
              }
            })
            .filter((cocktail) => {
              if (filterByMethod === "") {
                return cocktail;
              }
              if (cocktail.method.toString().includes(filterByMethod)) {
                return cocktail;
              }
            })
            .sort(isSorted ? (a, b) => a.name.localeCompare(b.name) : undefined)
            .map((cocktail) => (
              <CocktailCard
                key={cocktail._id}
                cocktail={cocktail}
              ></CocktailCard>
            ))}
      </div>
      <div className="pagination">
        <ul>
          {pages.map((n, i) => (
            <li key={i}>
              <NavLink className='page' onClick={() => changePage(n)}>{n}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cocktails;

const SearchFilter = ({ search }) => {
  return (
    <div className="search_wrapper">
      <label htmlFor="search">Search </label>
      <input
        type="search"
        name="search"
        placeholder="search cocktail names"
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;

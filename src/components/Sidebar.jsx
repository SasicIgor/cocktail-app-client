import Button from "./Button";
import FilterByMethod from "./filters/FilterByMethod";
import SearchFilter from "./filters/Search";


const SideBar = ({ search, methodFilter, sort, isSorted }) => {
  
  return (
    <div className="sidebar_wrapper">
      <h1>Filter your cocktails</h1>
      <div className="filter_field">
        <div className="filter_wrapper">
          <SearchFilter search={search} />
        </div>
        <div className="filter_wrapper">
          <FilterByMethod methodFilter={methodFilter} />
        </div>
        <div className="filter_wrapper">
          <Button type="button" label={isSorted ? "cancel sorting" : "sort by name"} handleClick={sort} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

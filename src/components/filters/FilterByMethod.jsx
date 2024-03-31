const FilterByMethod = ({ methodFilter }) => {
  return (
    <>
      <div className="method_filter_container">
        <h2>Filter cocktails by method:</h2>
        <div className="method_filter_wrapper">
          <div className="method_filter">
            <label htmlFor="shake">Shake</label>
            <input
              type="checkbox"
              name="shake"
              value="1"
              onChange={(e) => methodFilter(e.target.value, e.target.checked)}
            />
          </div>
          <div className="method_filter">
            <label htmlFor="stir">Stir</label>
            <input
              type="checkbox"
              name="stir"
              value="2"
              onChange={(e) => methodFilter(e.target.value, e.target.checked)}
            />
          </div>
          <div className="method_filter">
            <label htmlFor="direct">Direct</label>
            <input
              type="checkbox"
              name="direct"
              value="3"
              onChange={(e) => methodFilter(e.target.value, e.target.checked)}
            />
          </div>
          <div className="method_filter">
          <label htmlFor="muddle">Muddle</label>
          <input
            type="checkbox"
            name="muddle"
            value="4"
            onChange={(e) => methodFilter(e.target.value, e.target.checked)}
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByMethod;

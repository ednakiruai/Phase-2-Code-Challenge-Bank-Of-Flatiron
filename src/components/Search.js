import React from "react";

function Search({search,handleChange}) {
  
    return (
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Search your Recent Transactions"
          name="search"
          // value={search}
          onChange={handleChange}
        />
      </div>
    );
  }
  export default Search;
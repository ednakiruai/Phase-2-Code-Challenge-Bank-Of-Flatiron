import React from "react";

function Search({search,setSearch}) {

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };
  
    return (
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Search your Recent Transactions"
          name="search"
          value={search}
          onChange={onSearchChange}
        />
      </div>
    );
  }
  export default Search;
import React from "react";

const Search = ( { value, changeHandler }) => {
  return (
    <div>
      <form className="search">
        <input type="text" placeholder="search beers" value={ value } onChange={ changeHandler} />
      </form>
    </div>
  )
};

export default Search;

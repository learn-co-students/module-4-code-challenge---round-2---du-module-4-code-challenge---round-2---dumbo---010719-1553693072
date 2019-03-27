import React from "react";

const Search = (props) => {
  return <form className="search">
    <input type="text" placeholder="search beers" value={props.value} onChange={props.searchChangeHandler}/>
  </form>;
};

export default Search;

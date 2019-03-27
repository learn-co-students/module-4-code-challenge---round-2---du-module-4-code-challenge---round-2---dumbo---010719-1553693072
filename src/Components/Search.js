import React from "react";

const Search = (props) => {

  return (
    <form className="search">
    <input type='text' placeholder="Search Beers" value={props.input} onChange={props.handleChange}/>
    </form>
  );
};

export default Search;

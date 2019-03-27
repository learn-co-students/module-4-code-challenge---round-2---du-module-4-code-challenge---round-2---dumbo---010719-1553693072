import React from "react";

const Search = props => {
  return <form className="search">{
    <input type= "text" value= {props.userInput} placeholder= "Search Here" onChange={props.onChange}/>
  }</form>;
};

export default Search;

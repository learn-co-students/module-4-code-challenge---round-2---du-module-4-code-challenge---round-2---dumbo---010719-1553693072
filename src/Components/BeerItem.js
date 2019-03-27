import React from "react";

const BeerItem = ( { beer, handleClick }) => {
  return (
    <li className="beer-item" onClick={() => handleClick(beer)}>
      { beer.name }
    </li>
  );
};

export default BeerItem;

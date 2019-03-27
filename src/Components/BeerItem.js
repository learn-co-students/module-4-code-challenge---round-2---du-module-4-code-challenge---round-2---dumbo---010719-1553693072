import React from "react";

const BeerItem = props => {
  return (
    <li className="beer-item" onClick={()=>props.onClick(props.beerObj)}>
      {props.beerObj.name}
    </li>
  );
};

export default BeerItem;

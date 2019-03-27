import React from "react";

const BeerDetail = (props) => {

  return (
    <div className="beer-card">
      <img alt="beer" src={props.clickedBeer.image_url} />
      <p>{props.clickedBeer.name}</p>
        <p>{props.clickedBeer.tagline}</p>
        <p>{props.clickedBeer.description}</p>
        <p>{props.clickedBeer.first_brewed}</p>
    </div>
  );
};

export default BeerDetail;

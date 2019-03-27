import React from "react";

const BeerDetail = ( { beers }) => {
  return (
    <div className="beer-card">
      <img alt={ beers.nam } src={ beers.image_url } />
      <p>{ beers.description }</p>
    </div>
  );
};

export default BeerDetail;

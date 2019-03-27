import React from "react";

const BeerDetail = (props) => {
  return (
    <div className="beer-card">
      <img alt="" src={props.singleBeer.image_url} />
      <p>{props.singleBeer.description}</p>
    </div>
  );
};

export default BeerDetail;

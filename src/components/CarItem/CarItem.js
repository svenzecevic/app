import React from "react";

function CarItem(props) {
  return (
    <div>
      <h1>{props.item.make}</h1>
      <p>{props.item.model}</p>
    </div>
  );
}

export default CarItem;

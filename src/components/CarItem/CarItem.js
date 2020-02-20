import React from "react";
import "./index.css";

function CarItem(props) {
  return (
    <div className="make">
      <h1>{props.item.make}</h1>
      <p>{props.item.model}</p>
    </div>
  );
}

export default CarItem;

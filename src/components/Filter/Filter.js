import React from "react";
import "./index.css";

function Filter() {
  return (
    <div class="filter">
      <p class="filter-item1">Refine your results!</p>
      <br />
      <label class="filter-item"> Filter</label>
      <br />
      <input
        type="text"
        placeholder="Filter through cars"
        class="filter-item"
      />

      <label class="filter-item">Sort order</label>
      <select>
        <option class="filter-item">Choose...</option>
        <option class="filter-item">Alfa Romeo</option>
        <option class="filter-item">BMW</option>
      </select>
    </div>
  );
}

export default Filter;

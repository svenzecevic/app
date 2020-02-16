import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import CarItem from "./components/CarItem/CarItem";
import carsData from "./carsData";
import Filter from "./components/Filter/Filter";

function App() {
  const carItems = carsData.map(item => <CarItem key={item.id} item={item} />);
  return (
    <div className="container">
      <div className="header">
        <Header />
        <Filter />
      </div>
      <div> {carItems} </div>
    </div>
  );
}

export default App;

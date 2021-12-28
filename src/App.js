import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Card from "./Components/TraveCard.js";
import Data from "./TravelData.js";

function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <Nav />
      <header className="card-list">{cards}</header>
    </div>
  );
}

export default App;

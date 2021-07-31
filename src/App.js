import React, { useState } from "react";
import "./App.css";
import { data } from "./data";
import Card from "./Card";
import Button from "./Button";

function App() {
  const [cards, setCards] = useState(data);

  const cats = ["all", ...new Set(data.map((item) => item.category))];

  const filter = (cat) => {
    if (cat === "all") {
      setCards(data);
      return;
    }
    setCards(data.filter((card) => card.category === cat));
  };

  return (
    <div className="App">
      <h1>Filter Search</h1>
      <Button categories={cats} handleFilter={filter} />
      <Card carditems={cards} />
    </div>
  );
}

export default App;

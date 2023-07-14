import React, { useEffect, useState } from "react";
import CardsList from "./CardsList";

let informationCards = [
  {
    url: "1.jpeg",
  },
  {
    url: "2.jpeg",
  },
  {
    url: "3.jpeg",
  },
  {
    url: "4.jpeg",
  },
  {
    url: "5.jpeg",
  },
  {
    url: "6.jpeg",
  },
  {
    url: "7.jpeg",
  },
  {
    url: "8.jpeg",
  },
];

informationCards = [...informationCards, ...informationCards];

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    for (let i = informationCards.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [informationCards[i], informationCards[j]] = [
        informationCards[j],
        informationCards[i],
      ];
      informationCards[i].key = Math.random();
    }
    setCards(informationCards);
  }, []);

  return (
    <div className="mt-4">
      <h1>Memory Game</h1>
      <h2>Score: 0</h2>
      <CardsList cards={cards} />
    </div>
  );
};

export default App;

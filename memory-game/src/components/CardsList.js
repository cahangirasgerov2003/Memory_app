import React from "react";

const CardsList = ({ cards }) => {
  return cards.map((card) => {
    return (
      <div className="card" key={card.key}>
        <img src={`./image/${card.url}`} alt=""></img>
        <img src="./image/cover.jpeg" alt=""></img>
      </div>
    );
  });
};

export default CardsList;

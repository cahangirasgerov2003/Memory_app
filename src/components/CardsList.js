import React from "react";

const CardsList = ({
  cards,
  handleSelected,
  controlClickCard,
  firstClickCard,
  secondClickCard,
}) => {
  return (
    <div className="cardsContainer">
      {cards.map((card) => {
        return (
          <div className="imagesContainer" key={card.key}>
            <div
              className={
                firstClickCard?.key === card.key ||
                secondClickCard?.key === card.key ||
                card.selected
                  ? "rotated"
                  : ""
              }
            >
              <img
                className={`backImage`}
                src={`./image/${card.url}`}
                alt=""
              ></img>
              <img
                className={`frondImage`}
                src="./image/cover.jpeg"
                alt=""
                onClick={() => {
                  return controlClickCard ? handleSelected(card) : null;
                }}
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardsList;

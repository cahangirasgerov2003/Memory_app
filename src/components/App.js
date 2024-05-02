import React, { useEffect, useState } from "react";
import CardsList from "./CardsList";

let informationCards = [
  {
    url: "1.jpeg",
    selected: false,
  },
  {
    url: "2.jpeg",
    selected: false,
  },
  {
    url: "3.jpeg",
    selected: false,
  },
  {
    url: "4.jpeg",
    selected: false,
  },
  {
    url: "5.jpeg",
    selected: false,
  },
  {
    url: "6.jpeg",
    selected: false,
  },
  {
    url: "7.jpeg",
    selected: false,
  },
  {
    url: "8.jpeg",
    selected: false,
  },
];

let score = 0;
let trueSelected = 0;

const App = () => {
  const [cards, setCards] = useState([]);
  const [firstClickCard, setfirstClickCard] = useState(null);
  const [secondClickCard, setsecondClickCard] = useState(null);
  const [controlClickCard, setcontrolClickCard] = useState(true);
  const [record, setRecord] = useState("No record");
  const sortingCards = () => {
    setCards(
      [...informationCards, ...informationCards]
        .sort(() => Math.random() - 0.5)
        .map((card) => {
          return { ...card, key: Math.random() };
        })
    );

    score = 0;
    trueSelected = 0;

    setfirstClickCard(null);
    setsecondClickCard(null);
  };

  const handleSelected = (card) => {
    firstClickCard
      ? card.key !== firstClickCard.key
        ? setsecondClickCard(card)
        : setsecondClickCard(null)
      : setfirstClickCard(card);
  };

  const resetState = () => {
    setfirstClickCard(null);
    setsecondClickCard(null);
    setcontrolClickCard(true);
  };

  // const changeRecord = (score) => {
  //   setTimeout(() => {
  //     // if (typeof record === "string" || score < record) {
  //     //   setRecord(score);
  //     // }

  //     setRecord((prevRecord)=>{
  //        if(typeof prevRecord === "string" || score < record){
  //            return score;
  //        }
  //     });
  //   }, 1000);
  // };

  useEffect(() => {
    const myRecord = window.localStorage.getItem("record");

    if (myRecord) {
      setRecord(JSON.parse(myRecord));
    }
    sortingCards();
  }, []);

  useEffect(() => {
    if (firstClickCard && secondClickCard) {
      setcontrolClickCard(false);

      score = score + 1;

      if (firstClickCard.url === secondClickCard.url) {
        trueSelected = trueSelected + 1;

        if (trueSelected === 8) {
          // changeRecord(score);
          setRecord((prevRecord) => {
            setTimeout(() => {
              if (typeof prevRecord === "string" || score < prevRecord) {
                return score;
              }
            }, 1000);
          });
        }

        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.url === firstClickCard.url) {
              return {
                ...card,
                selected: true,
              };
            }
            return card;
          });
        });

        setTimeout(() => {
          resetState();
        }, 1000);
      } else {
        setTimeout(() => {
          resetState();
        }, 1000);
      }
    }
  }, [firstClickCard, secondClickCard]);

  useEffect(() => {
    window.localStorage.setItem("record", JSON.stringify(record));
  }, [record]);

  return (
    <div className="containerApp">
      <h1>Memory Game</h1>
      <h2 className="h5 mt-2">Your Record : {record}</h2>
      <button onClick={sortingCards} className="btn btn-success mt-2">
        Play Game
      </button>
      <CardsList
        cards={cards}
        handleSelected={handleSelected}
        controlClickCard={controlClickCard}
        firstClickCard={firstClickCard}
        secondClickCard={secondClickCard}
        score={score}
      />
    </div>
  );
};

export default App;

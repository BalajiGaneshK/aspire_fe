import { useEffect, useState } from "react";

import "./Cards.scss";
import EyeIcon from "../Assets/Cards/Eye-Icon.svg";
import CardsCarousel from "./CardsCarousel.js";

function CardsView() {
  const showCardTextOptions = ["Show Card Number", "Hide Card Number"];
  const [viewCardNumber, setViewCardNumber] = useState(false);
  const [showCardText, setShowCardText] = useState(showCardTextOptions[0]);
  useEffect(() => {
    let text = viewCardNumber ? showCardTextOptions[1] : showCardTextOptions[0];
    setShowCardText(text);
  }, [viewCardNumber]);

  return (
    <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview">
      <div
        className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview__showtextcontainer"
        onClick={() => {
          setViewCardNumber(!viewCardNumber);
        }}
      >
        <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview__showtextcontainer__logo">
          <img src={EyeIcon} alt="Show Icon" />
        </div>
        <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview__showtextcontainer__text">
          {showCardText}
        </div>
      </div>
      <CardsCarousel viewCardNumber={viewCardNumber} />
    </div>
  );
}

export default CardsView;

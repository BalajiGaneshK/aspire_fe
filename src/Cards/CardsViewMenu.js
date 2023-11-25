import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Cards.scss";
import Freeze_Card_Icon from "../Assets/Cards/Freeze-Card-Icon.svg";
import Set_Spend_Limit_Icon from "../Assets/Cards/Set-Spend-Limit-Icon.svg";
import Gpay_Icon from "../Assets/Cards/GPay-Icon.svg";
import Replace_Card_Icon from "../Assets/Cards/Replace-Card-Icon.svg";
import Cancel_Card_Icon from "../Assets/Cards/Cancel-Card-Icon.svg";
import { toggleFreeze } from "./Redux/Actions";
import { cardsSelector } from "./Redux/Selectors";

function CardsViewMenu() {
  const dispatch = useDispatch();
  let currentCardId = useSelector(cardsSelector.getCurrentCardId);
  const handleToggleFreeze = () => {
    dispatch(toggleFreeze(currentCardId));
  };
  return (
    <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu">
      <div
        className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem"
        style={{ marginLeft: 0 }}
        onClick={() => {
          handleToggleFreeze();
        }}
      >
        <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem__icon">
          <img src={Freeze_Card_Icon} alt="Freeze_Card_Icon"></img>
        </div>
        <div
          className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem__menuname"
          style={{ marginLeft: "-7px" }}
        >
          Freeze Card
        </div>
      </div>
      <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem">
        <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem__icon">
          <img src={Set_Spend_Limit_Icon} alt="Freeze_Card_Icon"></img>
        </div>
        <div
          className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem__menuname"
          style={{ marginLeft: "-19px" }}
        >
          Set Spend Limit
        </div>
      </div>
      <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem">
        <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem__icon">
          <img src={Gpay_Icon} alt="Freeze_Card_Icon"></img>
        </div>
        <div
          className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem__menuname"
          style={{ marginLeft: "-8px" }}
        >
          Add to GPay
        </div>
      </div>
      <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem">
        <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem__icon">
          <img src={Replace_Card_Icon} alt="Freeze_Card_Icon"></img>
        </div>
        <div
          className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem__menuname"
          style={{ marginLeft: "-8px" }}
        >
          Replace Card
        </div>
      </div>
      <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem">
        <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem__icon">
          <img src={Cancel_Card_Icon} alt="Freeze_Card_Icon"></img>
        </div>
        <div
          className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem__menuname"
          style={{ marginLeft: "-6px" }}
        >
          Cancel Card
        </div>
      </div>
    </div>
  );
}

export default CardsViewMenu;

import { useSelector, useDispatch } from "react-redux";

import "./Cards.scss";
import Freeze_Card_Icon from "../Assets/Cards/Freeze-Card-Icon.svg";
import Set_Spend_Limit_Icon from "../Assets/Cards/Set-Spend-Limit-Icon.svg";
import Gpay_Icon from "../Assets/Cards/GPay-Icon.svg";
import Replace_Card_Icon from "../Assets/Cards/Replace-Card-Icon.svg";
import Cancel_Card_Icon from "../Assets/Cards/Cancel-Card-Icon.svg";
import { toggleFreeze, cancelCard } from "./Redux/Actions";
import { cardsSelector } from "./Redux/Selectors";
import ConfirmationModal from "../Components/ConfirmationModal";
import { useState } from "react";

function CardsViewMenu() {
  const dispatch = useDispatch();
  const [modalSettings, setModalSettings] = useState({
    isModalOpen: false,
    message: "",
    action: null,
  });
  let currentCardId = useSelector(cardsSelector.getCurrentCardId);
  const handleToggleFreeze = () => {
    setModalSettings({
      isModalOpen: true,
      message: "Are you sure you want to Freeze this Card?",
      action: () => {
        dispatch(toggleFreeze(currentCardId));
      },
    });
  };
  const handleCancelCard = () => {
    setModalSettings({
      isModalOpen: true,
      message: "Are you sure you want to Cancel this Card?",
      action: () => {
        dispatch(cancelCard(currentCardId));
      },
    });
  };
  return (
    <div>
      <ConfirmationModal
        isOpen={modalSettings.isModalOpen}
        message={modalSettings.message}
        onRequestClose={setModalSettings}
        action={modalSettings.action}
      />
      <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu">
        <div
          className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem"
          style={{ marginLeft: 0 }}
          onClick={() => {
            if (currentCardId !== null) handleToggleFreeze();
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
        <div
          className="cards__dashboard__content__mydebitcards__leftcontainer__cardsviewmenu_menuitem"
          onClick={() => {
            if (currentCardId !== null) handleCancelCard();
          }}
        >
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
    </div>
  );
}

export default CardsViewMenu;

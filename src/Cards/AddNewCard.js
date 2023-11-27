import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./Cards.scss";
import AddNewCardModal from "./AddNewCardModal";
import AddIcon from "../Assets/Cards/Plus-AddNewCard-Button-Icon.svg";
import { addNewCard } from "./Redux/Actions";

function AddNewCard() {
  const dispatch = useDispatch();
  const [modalSettings, setModalSettings] = useState({
    isModalOpen: false,
    message: "Add New Card",
    action: null,
  });
  const generateCardDetails = (cardName) => {
    return {
      name: cardName,
      id: uuidv4(),
      thru: "12/30",
      cardNumber: Math.ceil(Math.random() * 10000000000000000)
        .toString()
        .replace(/(\d{4})(?=\d)/g, "$1 "),
      cvv: Math.ceil(Math.random() * 1000).toString(),
    };
  };
  const handleAddNewCard = () => {
    setModalSettings({
      isModalOpen: true,
      message: "",
      action: (cardName) => {
        //Generate 16 digit Card Number, thru & cvv details
        let fullCardDetails = generateCardDetails(cardName);
        //1.call addNewCard API to persistently store card data to DB.
        //Eg:axios.post('https://aspire.com/addNewCard',{fullCardDetails});

        //2.Store the new Card data to Redux store
        //Here we use Redux only as DB so
        dispatch(addNewCard(fullCardDetails));
      },
    });
  };
  return (
    <div>
      <div
        className="cards__cardsheader__addcardbutton"
        onClick={() => handleAddNewCard()}
      >
        <div className="cards__cardsheader__addcardbutton__addicon">
          <img src={AddIcon} alt="Add Icon" />
        </div>
        <div className="cards__cardsheader__addcardbutton__buttontext">
          New Card
        </div>
      </div>
      <AddNewCardModal
        isOpen={modalSettings.isModalOpen}
        message={modalSettings.message}
        onRequestClose={setModalSettings}
        action={modalSettings.action}
      />
    </div>
  );
}

export default AddNewCard;

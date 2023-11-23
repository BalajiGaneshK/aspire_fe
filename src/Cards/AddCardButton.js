import "./Cards.scss";
import AddIcon from "../Assets/Cards/Plus-AddNewCard-Button-Icon.svg";

function AddCardButton() {
  return (
    <div className="cards__cardsheader__addcardbutton">
      <div className="cards__cardsheader__addcardbutton__addicon">
        <img src={AddIcon} alt="Add Icon" />
      </div>
      <div className="cards__cardsheader__addcardbutton__buttontext">
        New Card
      </div>
    </div>
  );
}

export default AddCardButton;

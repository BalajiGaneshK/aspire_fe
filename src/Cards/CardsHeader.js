import "./Cards.scss";
import Balance from "./Balance";
import AddCardButton from "./AddNewCard";

function CardsHeader() {
  return (
    <div className={"cards__cardsheader"}>
      <Balance />
      <AddCardButton />
    </div>
  );
}

export default CardsHeader;

import "./Cards.scss";
import Balance from "./Balance";
import AddCardButton from "./AddCardButton";

function CardsHeader() {
  return (
    <div className={"cards__cardsheader"}>
      <Balance />
      <AddCardButton />
    </div>
  );
}

export default CardsHeader;

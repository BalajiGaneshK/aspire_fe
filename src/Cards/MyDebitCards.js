import "./Cards.scss";
import CardsView from "./CardsView";
import CardsViewMenu from "./CardsViewMenu";

function MyDebitCards() {
  return (
    <div className="cards__dashboard__content__mydebitcards">
      <div className="cards__dashboard__content__mydebitcards__leftcontainer">
        <CardsView />
        <CardsViewMenu />
      </div>
      <div className="cards__dashboard__content__mydebitcards__rightcontainer">
        My Debit Cards Contents-right
      </div>
    </div>
  );
}

export default MyDebitCards;

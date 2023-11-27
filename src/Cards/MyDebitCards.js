import "./Cards.scss";
import CardsView from "./CardsView";
import CardsViewMenu from "./CardsViewMenu";
import CardDetails from "./CardDetails";
import RecentTransactions from "./RecentTransactions";

function MyDebitCards() {
  return (
    <div className="cards__dashboard__content__mydebitcards">
      <div className="cards__dashboard__content__mydebitcards__leftcontainer">
        <CardsView />
        <CardsViewMenu />
      </div>
      <div className="cards__dashboard__content__mydebitcards__rightcontainer">
        <CardDetails />
        <RecentTransactions />
      </div>
    </div>
  );
}

export default MyDebitCards;

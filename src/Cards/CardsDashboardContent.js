import "./Cards.scss";
import MyDebitCards from "./MyDebitCards.js";
import AllCompanyCards from "./AllCompanyCards.js";

function CardsDashboardContent(props) {
  const { selectedTab } = props;
  return (
    <div className="cards__dashboard__content">
      {selectedTab === 0 ? (
        <MyDebitCards />
      ) : selectedTab === 1 ? (
        <AllCompanyCards />
      ) : null}
    </div>
  );
}

export default CardsDashboardContent;

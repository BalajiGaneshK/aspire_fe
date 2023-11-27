import "./Cards.scss";
import CardDetails_Icon from "../Assets/Cards/CardDetails-Icon.svg";
import DownArrow_Icon from "../Assets/Cards/Down-Arrow-Icon.svg";

function CardDetails() {
  return (
    <div className="cards__dashboard__content__mydebitcards__rightcontainer__carddetails">
      <div className="cards__dashboard__content__mydebitcards__rightcontainer__carddetails__icon">
        <img src={CardDetails_Icon} alt="CardDetails_Icon" />
      </div>
      <div className="cards__dashboard__content__mydebitcards__rightcontainer__carddetails__text">
        Card Details
      </div>
      <div className="cards__dashboard__content__mydebitcards__rightcontainer__carddetails__arrow">
        <img src={DownArrow_Icon} alt="CardDetails_Icon" />
      </div>
    </div>
  );
}

export default CardDetails;

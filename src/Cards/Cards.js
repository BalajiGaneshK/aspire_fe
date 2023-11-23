import "./Cards.scss";

import CardsHeader from './CardsHeader'
import CardsDashboard from "./CardsDashboard";

function Cards() {
  return (
    <div className="cards">
      <CardsHeader/>
      <CardsDashboard/>

    </div>
  );
}

export default Cards;

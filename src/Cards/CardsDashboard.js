import { useState } from "react";

import "./Cards.scss";
import CardsDashboardTabs from "./CardsDashboardTabs";
import CardsDashboardContent from "./CardsDashboardContent";

function CardsDashboard() {
  const [selectedTab, setSelectedTab]= useState(0);
  return (
    <div className="cards__dashboard">
      <CardsDashboardTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <CardsDashboardContent selectedTab={selectedTab}/>
    </div>
  );
}

export default CardsDashboard;

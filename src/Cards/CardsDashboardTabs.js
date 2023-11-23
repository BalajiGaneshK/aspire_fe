import React from "react";

import "./Cards.scss";

function CardsDashboardTabs(props) {
  const { selectedTab, setSelectedTab } = props;
  return (
    <div className="cards__dashboard__tabs">
      <div
        className={
          selectedTab === 0
            ? "cards__dashboard__tabs__tabitem--selected"
            : "cards__dashboard__tabs__tabitem--notselected"
        }
        onClick={() => {
          setSelectedTab(0);
        }}
      >
        My Debit Cards
      </div>
      <div
        className={
          selectedTab === 1
            ? "cards__dashboard__tabs__tabitem--selected"
            : "cards__dashboard__tabs__tabitem--notselected"
        }
        onClick={() => {
          setSelectedTab(1);
        }}
      >
        All Company Cards
      </div>
    </div>
  );
}

export default CardsDashboardTabs;

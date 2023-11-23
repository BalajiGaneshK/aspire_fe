import React, { useState, useEffect } from "react";
import "./Cards.scss";
import { fetchBalanceData } from "../MockAPI/GetBalance";
import Loader from "../Components/Loader";

function Balance() {
  const userId = "100DXYZ"; //to be fetched from Login
  const [balanceData, setBalanceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (userId) => {
      try {
        const data = await fetchBalanceData(userId);
        setBalanceData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(userId);
  }, []);
  return (
    <div className={"cards__cardsheader__balance"}>
      <div>Available Balance</div>
      <div className={"cards__cardsheader__balance__data"}>
        <div className={"cards__cardsheader__balance__data__dollaricon"}>
          <div style={{ marginTop: "3px" }}>S$</div>
        </div>
        <div className={"cards__cardsheader__balance__data__value"}>
          {loading ? (
            <Loader width="67px" height="36px" />
          ) : (
            balanceData.balance
          )}
        </div>
      </div>
    </div>
  );
}

export default Balance;

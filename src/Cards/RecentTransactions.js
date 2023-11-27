import "./Cards.scss";
import RecentTransactions_Icon from "../Assets/Cards/RecTransactions-Icon.svg";
import DownArrow_Icon from "../Assets/Cards/Down-Arrow-Icon.svg";
import UpArrow_Icon from "../Assets/Cards/Up-Arrow-Icon.svg";
import House_Icon from "../Assets/Cards/House-Icon.svg";
import Flight_Icon from "../Assets/Cards/Flight-Icon.svg";
import Megaphone_Icon from "../Assets/Cards/Megaphone-Icon.svg";
import CardDetails_Icon from "../Assets/Cards/TransDetail-Icon.svg";
import RightArrow_Icon from "../Assets/Cards/Right-Icon.svg";

import { useEffect, useState } from "react";
import { getRecentTransactions } from "../MockAPI/GetRecentTransactions";

function RecentTransactions() {
  const [isOpen, toggleOpenTransactions] = useState(false);
  const [recTransactions, setTransactions] = useState([]);
  const getTransactions = async () => {
    //Fetch Recent transactions Data from API
    const data = await getRecentTransactions();
    console.log(data);
    setTransactions(data);
  };
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactions">
        <div className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactions__icon">
          <img src={RecentTransactions_Icon} alt="RecentTransactions_Icon" />
        </div>
        <div className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactions__text">
          Recent Transactions
        </div>
        <div
          className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactions__arrow"
          onClick={() => {
            toggleOpenTransactions(!isOpen);
          }}
        >
          <img
            src={isOpen ? UpArrow_Icon : DownArrow_Icon}
            alt="RecentTransactions_Icon"
          />
        </div>
      </div>
      {isOpen && (
        <div>
          <div className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactionslist">
            {recTransactions.map((transaction) => {
              return (
                <div
                  key={transaction.id}
                  className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactionslist__transaction"
                >
                  <div
                    style={{
                      backgroundColor:
                        transaction.category === "house"
                          ? "#009DFF1A"
                          : transaction.category === "travel"
                          ? "#00D6B51A"
                          : "#F251951A",
                    }}
                    className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactionslist__transaction__icon"
                  >
                    <div className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactionslist__transaction__icon__innericon">
                      <img
                        src={
                          transaction.category === "house"
                            ? House_Icon
                            : transaction.category === "travel"
                            ? Flight_Icon
                            : Megaphone_Icon
                        }
                        alt="Category_Icon"
                      />
                    </div>
                  </div>
                  <div className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactionslist__transaction__details">
                    <div className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactionslist__transaction__details__name">
                      {transaction.name}
                    </div>
                    <div className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactionslist__transaction__details__date">
                      {transaction.date}
                    </div>
                    <div className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactionslist__transaction__details__description">
                      <div className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactionslist__transaction__details__description__icon">
                        <div className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactionslist__transaction__details__description__icon__innericon">
                          <img src={CardDetails_Icon} alt={"desc_icon"} />
                        </div>
                      </div>
                      <div className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactionslist__transaction__details__description__text">
                        {transaction.description}
                      </div>
                    </div>
                  </div>
                  <div className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactionslist__transaction__value">
                    <div
                      style={
                        transaction.type === "debit"
                          ? { color: "#222222" }
                          : { color: "#01D167" }
                      }
                      className={
                        "cards__dashboard__content__mydebitcards__rightcontainer__recenttransactionslist__transaction__value__text"
                      }
                    >
                      {transaction.type === "debit"
                        ? `-S$ ${transaction.value}`
                        : `+S$ ${transaction.value}`}
                    </div>
                    <div className="cards__dashboard__content__mydebitcards__rightcontainer__recenttransactionslist__transaction__value__rightarrow">
                      <img src={RightArrow_Icon} alt="right_icon" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cards__dashboard__content__mydebitcards__rightcontainer__viewalltransactions">
            <div style={{ margin: "16px 103px" }}>
              View all Card Transactions
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecentTransactions;

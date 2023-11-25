import Slider from "react-slick";
import { useState, useEffect } from "react";

import "./Cards.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aspire_White_Logo from "../Assets/Cards/Aspire-Logo-Card.svg";
import Visa_Logo from "../Assets/Cards/Visa-Logo.svg";
import WhiteDots from "../Components/WhiteDots";
import { fetchUserCards } from "../MockAPI/GetAllCards";
import Loader from "../Components/Loader";
function CardsCarousel(props) {
  const [loading, setLoading] = useState(true);
  const [allCards, setCards] = useState(null);
  let { viewCardNumber } = props;
  const userId = "100DXYZ"; //to be fetched from Login
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  useEffect(() => {
    const fetchData = async (userId) => {
      try {
        const data = await fetchUserCards(userId);
        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(userId);
  }, []);
  return (
    <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview__cardscarouselcontainer">
      <Slider {...carouselSettings}>
        {loading ? (
          <Loader width={50} height={50} />
        ) : (
          allCards.map((card) => {
            return (
              <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview__cardscarouselcontainer__carousel">
                <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview__cardscarouselcontainer__carousel__aspirelogo">
                  <img src={Aspire_White_Logo} alt="Aspire Logo" />
                </div>
                <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview__cardscarouselcontainer__carousel__name">
                  {card.name}
                </div>
                <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview__cardscarouselcontainer__carousel__cardnumber">
                  {card.cardNumber.split(" ").map((fragment, i = 0) => {
                    ++i;
                    return (
                      <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview__cardscarouselcontainer__carousel__cardnumber__fragment">
                        {i === 4 || viewCardNumber === true ? (
                          fragment
                        ) : (
                          <WhiteDots />
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview__cardscarouselcontainer__carousel__moredetails">
                  <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview__cardscarouselcontainer__carousel__moredetails__thru">
                    Thru:&nbsp;{card.thru}
                  </div>
                  <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview__cardscarouselcontainer__carousel__moredetails__cvv">
                    CVV:&nbsp;{viewCardNumber === true ? card.cvv : "***"}
                  </div>
                </div>
                <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview__cardscarouselcontainer__carousel__visalogo">
                  <img src={Visa_Logo} alt="Visa Logo" />
                </div>
              </div>
            );
          })
        )}
      </Slider>
    </div>
  );
}

export default CardsCarousel;

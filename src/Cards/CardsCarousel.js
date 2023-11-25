import Slider from "react-slick";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Cards.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aspire_White_Logo from "../Assets/Cards/Aspire-Logo-Card.svg";
import Visa_Logo from "../Assets/Cards/Visa-Logo.svg";
import WhiteDots from "../Components/WhiteDots";
import { fetchUserCards } from "../MockAPI/GetAllCards";
import Loader from "../Components/Loader";
import { setCurrentCardId, storeCardsData } from "./Redux/Actions";
import { cardsSelector } from "./Redux/Selectors";

function CardsCarousel(props) {
  const [loading, setLoading] = useState(true);
  let allCards = useSelector(cardsSelector.getAllCards);
  const dispatch = useDispatch();
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
  const fetchCardsData = async (userId) => {
    try {
      //This is our Mock API
      const data = await fetchUserCards(userId);
      //Dispatch action to store API data in redux
      dispatch(storeCardsData(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCardsData(userId);
  }, []);
  const handleCardChange = (index) => {
    console.log(index, allCards[index]);
    dispatch(setCurrentCardId(allCards[index].id));
  };
  return (
    <div className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview__cardscarouselcontainer">
      <Slider {...carouselSettings} afterChange={handleCardChange}>
        {loading ? (
          <Loader width={50} height={50} />
        ) : (
          allCards.map((card) => {
            return (
              <div
                key={card.id}
                className={
                  card.freeze
                    ? "cards__dashboard__content__mydebitcards__leftcontainer__cardsview__cardscarouselcontainer__carousel cards__dashboard__content__mydebitcards__leftcontainer__cardsview__cardscarouselcontainer__carousel--freeze"
                    : "cards__dashboard__content__mydebitcards__leftcontainer__cardsview__cardscarouselcontainer__carousel"
                }
              >
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
                      <div
                        key={i}
                        className="cards__dashboard__content__mydebitcards__leftcontainer__cardsview__cardscarouselcontainer__carousel__cardnumber__fragment"
                      >
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

import { CARDS_ACTION_TYPES } from "./ActionTypes";

const initialState = {
  allCards: [
    {
      id: 1,
      name: "Mark Henry",
      cardNumber: "1023 4507 8545 2020",
      thru: "12/20",
      cvv: "820",
      freeze: false,
    },
    {
      id: 2,
      name: "Tim Cook",
      cardNumber: "9099 4507 3545 2021",
      thru: "12/28",
      cvv: "312",
      freeze: true,
    },
  ],
  currentCardId: null,
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARDS_ACTION_TYPES.TOGGLE_FREEZE_CARD:
      return {
        ...state,
        allCards: state.allCards.map((card) =>
          card.id === action.payload.cardId
            ? { ...card, freeze: !card.freeze }
            : card
        ),
      };
    case CARDS_ACTION_TYPES.SET_CURRENT_CARD_ID:
      return {
        ...state,
        currentCardId: action.payload.cardId,
      };
    case CARDS_ACTION_TYPES.STORE_CARDS_DATA:
      return {
        ...state,
        allCards: action.payload.cardData,
        currentCardId: action.payload.cardData[0].id,
      };

    case CARDS_ACTION_TYPES.CANCEL_CARD:
      const resultCards = state.allCards.filter(
        (card) => card.id !== action.payload.cardId
      );
      return {
        ...state,
        allCards: resultCards,
        currentCardId: resultCards[0]?.id ? resultCards[0].id : null,
      };
    case CARDS_ACTION_TYPES.ADD_NEW_CARD:
      const finalCards = [...state.allCards, action.payload.cardData];
      return {
        ...state,
        allCards: finalCards,
        currentCardId: finalCards[0]?.id ? finalCards[0].id : null,
      };
    default:
      return state;
  }
};

export default cardsReducer;

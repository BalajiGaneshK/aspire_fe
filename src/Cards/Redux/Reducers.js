import { CARDS_ACTION_TYPES } from "./ActionTypes";

const initialState = {
  allCards: [],
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
    default:
      return state;
  }
};

export default cardsReducer;

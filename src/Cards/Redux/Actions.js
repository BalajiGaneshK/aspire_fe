import { CARDS_ACTION_TYPES } from "./ActionTypes";

export const toggleFreeze = (cardId) => ({
  type: CARDS_ACTION_TYPES.TOGGLE_FREEZE_CARD,
  payload: { cardId },
});

export const setCurrentCardId = (cardId) => ({
  type: CARDS_ACTION_TYPES.SET_CURRENT_CARD_ID,
  payload: { cardId },
});
export const cancelCard = (cardId) => ({
  type: CARDS_ACTION_TYPES.CANCEL_CARD,
  payload: { cardId },
});
export const storeCardsData = (cardData) => ({
  type: CARDS_ACTION_TYPES.STORE_CARDS_DATA,
  payload: { cardData },
});

export const addNewCard = (cardData) => ({
  type: CARDS_ACTION_TYPES.ADD_NEW_CARD,
  payload: { cardData },
});

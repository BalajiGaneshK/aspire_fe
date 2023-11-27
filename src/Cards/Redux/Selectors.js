export const cardsSelector = {
  getAllCards: (state) => state.cards.allCards,
  getCurrentCardId: (state) => state.cards.currentCardId,
  getCurrentCardDetails: (state) =>
    state.cards.allCards.filter(
      (card) => card.id === state.cards.currentCardId
    ),
};

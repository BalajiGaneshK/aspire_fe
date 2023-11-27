import store from '../Redux/Store';
import { cardsSelector } from '../Cards/Redux/Selectors';

// const getUserCards = (userId) => {
// //   let allCardsMockData = ;
//   return allCardsMockData;
// };

export const fetchUserCards = (userId) => {
  return new Promise((resolve) => {
    // Simulate an asynchronous fetch operation
    setTimeout(() => {
      resolve(cardsSelector.getAllCards(store.getState()));
    }, 1000); // Simulating a 1-second delay
  });
};


const getUserCards = (userId) => {
  let allCardsMockData = [
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
  ];
  return allCardsMockData;
};

export const fetchUserCards = (userId) => {
  return new Promise((resolve) => {
    // Simulate an asynchronous fetch operation
    setTimeout(() => {
      resolve(getUserCards(userId));
    }, 1000); // Simulating a 1-second delay
  });
};

const getBalanceData = (userId) => {
  return {
    balance: "3,000",
  };
};

export const fetchBalanceData = (userId) => {
  return new Promise((resolve) => {
    // Simulate an asynchronous fetch operation
    setTimeout(() => {
      resolve(getBalanceData(userId));
    }, 1000); // Simulating a 1-second delay
  });
};

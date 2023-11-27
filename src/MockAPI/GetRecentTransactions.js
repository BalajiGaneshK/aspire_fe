const fetchRecentTransactions = (userId) => {
  let recentTransactionsMockData = [
    {
      id: 1,
      name: "Hamleys",
      date: "20 May 2023",
      value: 150,
      description: "Refund on Debit Card",
      type: "credit",
      category: "house",
    },
    {
      id: 2,
      name: "Qatar Airways",
      date: "19 May 2023",
      value: 200,
      description: "Charged to Debit Card",
      type: "debit",
      category: "travel",
    },
    {
      id: 3,
      name: "Telecom Company",
      date: "17 May 2023",
      value: 150,
      description: "Charged to Debit Card",
      type: "debit",
      category: "communication",
    },
    {
      name: "Hamleys",
      date: "16 May 2023",
      value: 300,
      description: "Charged to Debit Card",
      type: "debit",
      category: "house",
    },
  ];
  return recentTransactionsMockData;
};

export const getRecentTransactions = (userId) => {
  return new Promise((resolve) => {
    // Simulate an asynchronous fetch operation
    setTimeout(() => {
      resolve(fetchRecentTransactions(userId));
    }, 1000); // Simulating a 1-second delay
  });
};

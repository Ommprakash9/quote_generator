const quotes = [
    "The best way to predict the future is to create it.",
    "Dream big and dare to fail.",
    "Action is the foundational key to all success.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Your time is limited, don't waste it living someone else's life."
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
  }
  
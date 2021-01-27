const isConsecutive = (cards) => {
  const letterCard = { A: "1", J: "11", Q: "12", K: "13" };

  return cards
    .map((card) =>
      Object.keys(letterCard).includes(card) ? letterCard[card] : card
    )
    .sort((a, b) => a - b)
    .every((card, index, array) => {
      return Math.abs(card - (array[index + 1] || array[index - 1])) === 1;
    });
};

const tally = (cards) => {
  const output = {};
  cards.forEach((card) => {
    output[card] = (output[card] || 0) + 1;
  });
  return output;
};

const hasMatch = (count, cards) => Object.values(tally(cards)).includes(count);

const isValid = (cards) => {
  const letterCard = ["A", "K", "Q", "J"];
  return cards.every(
    (card) => (card >= 2 && card <= 10) || letterCard.includes(card)
  );
};

/**
 * # 5 cards only
 **/
const poker = (cards) => {
  if (!isValid(cards)) throw "Error: some cards are invalid!";

  if (cards.length > 5) throw "Error: 5 cards only!";

  if (hasMatch(5, cards)) return "Impossible";

  if (hasMatch(4, cards)) return "Four of a Kind";

  if (hasMatch(2, cards) && hasMatch(3, cards)) return "Full House";

  if (isConsecutive(cards)) return "Straight";

  if (hasMatch(3, cards)) return "Three of a Kind";

  if (hasMatch(2, cards)) return "One Pair";

  return "Nothing";
};

module.exports = poker;

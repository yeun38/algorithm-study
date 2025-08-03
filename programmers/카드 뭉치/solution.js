function solution(card1, card2, goal) {
  for (const word of goal) {
    if (card1.length > 0 && word === card1[0]) {
      card1.shift();
    } else if (card2.length > 0 && word === card2[0]) {
      card2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}

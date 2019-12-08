function writeCards(namesList, occasion) {
  let cards = []
  for (let i = 0; i < namesList.length; i++) {
    cards.push(`Thank you, ${namesList[i]}, for the wonderful ${occasion} gift!`);
  }
  return cards
}

function countDown(max) {
  let i = max;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}

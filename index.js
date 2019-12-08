// Code your solutions in this file
const array = [];

function writeCards(arr, event) {
  for (let i = 0; i < arr.length; i++) {
    array.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
  }
  return array;
}

function countDown(count) {
  while (count > 0) {
    console.log(count);
    count -= 1;
  }
  console.log(count);
}

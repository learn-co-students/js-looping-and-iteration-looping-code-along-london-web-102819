// Code your solutions in this file


// let array = ["Ada", "Brendan", "Ali"];
// let eventName = "birthday";

function writeCards(array, eventName) {
    let thankYouNotes = []
    for (let i = 0; i < array.length; i++) {
        thankYouNotes.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYouNotes;
}

function countDown(startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber-- 
    }
    console.log( startingNumber );
  }
  
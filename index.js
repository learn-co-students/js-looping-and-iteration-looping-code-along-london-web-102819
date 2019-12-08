// Code your solutions in this file
let message = []
function writeCards(arr, name){
    for(let i = 0; i < arr.length; i++) {
        message.push(`Thank you, ${arr[i]}, for the wonderful ${name} gift!`)
    }
    return message
}

function countDown(number) {
    while(number >= 0) {
      console.log(number--)
    }
}
    
countDown(10)
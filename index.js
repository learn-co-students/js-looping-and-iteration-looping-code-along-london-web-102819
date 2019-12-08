// Code your solutions in this file

function writeCards(toThank, reason){
    let thankYouCards=[ ]
    for (let i = 0; i<toThank.length; i++){
        thankYouCards.push(`Thank you, ${toThank[i]}, for the wonderful ${reason} gift!`);
    }
    return thankYouCards
};

function countDown(num){
    while(num >0){
     console.log(num);
     num-=1;
 }
 console.log(num);
};


// Code your solutions in this file

function writeCards(names, greeting){

    let customGreetings = [];

    for(let i = 0; i < names.length; i++ ){
        customGreetings.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }

    return customGreetings;
}


function countDown(number){
    while (number >= 0) {
        console.log(number);
        number -= 1;
    }
} 
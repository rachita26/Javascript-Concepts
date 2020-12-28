var card = 'XXXXXXXX1234';

//XXXXXXXXXX34

function f(card){
    card = card.replace(card.charAt(8),'X');
    card = card.replace(card.charAt(9),'X');
    return card;
}
console.log(f(card));
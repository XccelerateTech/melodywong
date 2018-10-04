//Write a function that contains an array for every set (spades, diamond etc).
var poker_deck = [
    ['Spade', 'A'], ['Heart', 'A'], ['Diamond', 'A'], ['Club', 'A'],
    ['Spade', '2'], ['Heart', '2'], ['Diamond', '2'], ['Club', '2'],
    ['Spade', '3'], ['Heart', '3'], ['Diamond', '3'], ['Club', '3'],
    ['Spade', '4'], ['Heart', '4'], ['Diamond', '4'], ['Club', '4'],
    ['Spade', '5'], ['Heart', '5'], ['Diamond', '5'], ['Club', '5'],
    ['Spade', '6'], ['Heart', '6'], ['Diamond', '6'], ['Club', '6'],
    ['Spade', '7'], ['Heart', '7'], ['Diamond', '7'], ['Club', '7'],
    ['Spade', '8'], ['Heart', '8'], ['Diamond', '8'], ['Club', '8'],
    ['Spade', '9'], ['Heart', '9'], ['Diamond', '9'], ['Club', '9'],
    ['Spade', '10'], ['Heart', '10'], ['Diamond', '10'], ['Club', '10'],
    ['Spade', 'J'], ['Heart', 'J'], ['Diamond', 'J'], ['Club', 'J'],
    ['Spade', 'Q'], ['Heart', 'Q'], ['Diamond', 'Q'], ['Club', 'Q'],
    ['Spade', 'K'], ['Heart', 'K'], ['Diamond', 'K'], ['Club', 'K'],
];

//The function receives two parameter, the deck and the deck value (spades, 8).

function removeCard(card) {
        
    return card === ['Heart', 'K'];
}
console.log(poker_deck.findIndex(removeCard));

function luck(deck,value){
    
    /*deck=deck.splice((where-1),where);
    console.log(deck)*/
}

//Remove the corresponding card from the array.

//You play a limited version of poker, where you only aim for pair, two pair or three of a kind

//Write a function so it takes your initial cards (of the case 1, 2, 3.. until 5 cards) and 

//calculates the probability of having PAIR, TWO PAIRS and THREE OF A KIND in the the NEXT Card

luck(poker_deck,['Spade','8'])
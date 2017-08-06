/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
function handValue (hand) {
  let total = 0;
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === "K" || hand[i] ==="Q" || hand[i] ==="J"){
      total = total + 10;

    }
    else if ( hand[i] === "A" ){
      if ( total <= 10){
        total = total + 11;
      }
      else{
        total = total + 1;
      }
    }
    else {
      total += Number(hand[i]);
    }
  }
  return total;
}
console.log(handValue(["2", "2", "8"]));
/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

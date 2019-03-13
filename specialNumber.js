const specialNumber = 21; 
let GuessNumber = null; 
let isOutOfGuess = false; 
let GuessCounter = 0; 
let GuessLimits = 2; 


while (specialNumber !== GuessNumber && !isOutOfGuess){
  if(GuessCounter < GuessLimits){
    GuessNumber = +prompt('Enter an special number :'); 
    GuessCounter++; 
  }else{
    isOutOfGuess = true; 
  }; 
}; 

if(!isOutOfGuess){
  console.log('you have win this game')
  }
  else{
    console.log('you have lost this game')
  }
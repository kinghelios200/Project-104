// random value generated
  var y = Math.floor(Math.random() * 10 + 1)
// counting the number of guesses
var guess = 1

function submit(){
    var x = document.getElementById("guessField").value;
    if(x == y){
        alert("CONGRATS!!!!" + playername + " YOU GUESSED IT RIGHT IN" + guess + " GUESS");
        guess = 1;
    }
    else if(x > y){
        guess++
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else{
        guess++
        alert("OOPS SOORY!! TRY A GREATER NUMBER")
    }
}
// made for correct Guess
function playagain(){
    y = Math.floor(Math.random() * 10 + 1);
}
  
// function for number guessed by user     


    window.onload = function() {
        
    }
    
    var words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"];
    var wins = 0;
    var losses = 0;
    var compChoice = []; 
    var compChoice = words[Math.floor(Math.random() * words.length)].split('');         console.log(compChoice)
    var guesses = compChoice.length + 3;
    var guessesLeft = guesses;
    var guessedLetters = [];
    var underscores = [];
    for (u = 0; u < compChoice.length; u++) {
        underscores = underscores + "_ "
    };

    
    

  
   


    
    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        var thekeycode = event.keyCode;
        if (guessedLetters.includes(userGuess)) {}

        else if (thekeycode >= 65 && thekeycode <= 90) {    
            guessedLetters.push(userGuess);
                // if (guesses === 0) {losses++; new compChoice; guessleft = compChoice.length + 2;
                if (compChoice.includes(userGuess)) {
                    guessesLeft--;
                }


                //          else if (userGuess === indexOf(computerGuess)) {
        }
            
        var displayGuesses = guessedLetters.join(', ');   
        document.getElementById("previousguesses").innerHTML = displayGuesses;   
        document.getElementById("idguessesLeft").innerHTML = guessesLeft;
        document.getElementById("mysteryword").innerHTML = underscores;
        }
    
    

    




    


   




 
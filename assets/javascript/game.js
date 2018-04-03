
window.onload = function() {
        
    var words = ["catboy", "connor", "gecko", "ninja",                         // Random word options
    "red", "blue", "green", "romeo", "amaya", "purple", 
    "pajamas", "owlette", "luna", "greg", "speed", "camo",
    "fly"];          
    var wins =  0;                                                       // Wins
    var losses = 0;                                                     // Losses
    var compChoice = words[Math.floor(Math.random()* words.length)];    // Random word
    var guesses = compChoice.length + 3;                                // Amount of guesses per word
    var guessesLeft = guesses;                                          // Guesses
    var guessedLetters = [];                                            // Guessed incorrect letters array
    var underscores = [];                                               // Hidden word
    var compChoiceArray = [];                                           // Word array of random word chosen
        for (u = 0; u < compChoice.length; u++) {
            underscores.push("_");
            compChoiceArray.push(compChoice[u]);
        };

    // Joins...
    var displayGuessedLetters = guessedLetters.join(' ');                                                      
    var displayUnderscores = underscores.join(' ');

    // Get elements...
    var idPreviousGuesses = document.getElementById("previousguesses");
    var idGuessesLeft = document.getElementById("idguessesleft");
    var idMysteryWord = document.getElementById("mysteryword");
    var message = document.getElementById("font");

    // Reset guesses, inputs, and hidden word...
    var reset = {
        resetnow: function () {
            compChoice = words[Math.floor(Math.random()* words.length)];                
            guesses = compChoice.length + 3;
            guessesLeft = guesses;
            underscores = []; 
            compChoiceArray = [];
                for (u = 0; u < compChoice.length; u++) {
                    underscores.push("_");
                    compChoiceArray.push(compChoice[u]);
                };
            displayUnderscores = underscores.join(' ');
            idMysteryWord.innerHTML = displayUnderscores;
            guessedLetters = [];
            displayGuessedLetters = guessedLetters.join(' ');
            idPreviousGuesses.innerHTML = displayGuessedLetters;
        }
    }

    // Add stats to page...
    idPreviousGuesses.innerHTML = displayGuessedLetters;   
    idGuessesLeft.innerHTML = guessesLeft;
    idMysteryWord.innerHTML = displayUnderscores;

    // Run when key pressed...     
    document.onkeyup = function(event) {                                                        
        var userGuess = event.key.toLowerCase();                                                
        var theKeyCode = event.keyCode;                                                         
        
        // Don't do anything if letter already used for current attempt...
        if (guessedLetters.includes(userGuess)) {                                                
        }

        // Subtract a guess, log user input, and reset if no more guesses...
        else if (theKeyCode >= 65 && theKeyCode <= 90 && compChoice.indexOf(userGuess) == -1) {
            guessedLetters.push(userGuess); 
            guessesLeft--;
            idGuessesLeft.innerHTML = guessesLeft;
            var displayGuessedLetters = guessedLetters.join(' ');   
            idPreviousGuesses.innerHTML = displayGuessedLetters;
            if (guessesLeft === 0) {
                message.innerHTML = "The word was " + compChoice + ". Try again!";
                losses++;
                document.getElementById("idlosses").innerHTML = losses;
                reset.resetnow();
                idGuessesLeft.innerHTML = guessesLeft;
            }
        }

        // Reveal letter(s) if correct guesses and reset if word completely guessed...
        else if (theKeyCode >= 65 && theKeyCode <= 90) {                                       
            var displayGuessedLetters = guessedLetters.join(' ');                             
            var compChoicelength = compChoice.length;                                          
            idPreviousGuesses.innerHTML = displayGuessedLetters;      
            for (j = 0; j < compChoicelength; j++) {                                           
                compChoice[j];
                if (compChoice[j] === userGuess) {                                             
                    underscores[j] = (userGuess);
                    var displayUnderscores = underscores.join(' '); 
                    idMysteryWord.innerHTML = displayUnderscores;  
                    if (underscores.toString() === compChoiceArray.toString()) {
                        message.innerHTML = "You Won! The word was " + compChoice + "."
                        wins++;
                        document.getElementById("idwins").innerHTML = wins;
                        reset.resetnow();
                        idGuessesLeft.innerHTML = guessesLeft;
                        ;
                    };
                };
            };
        };
    };
};
    


   




 
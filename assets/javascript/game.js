
    var words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"];
    var wins = 0;
    var losses = 0;
    var compchoice = words[Math.floor(Math.random()* words.length)];    console.log(compchoice) 
    var guesses = compchoice.length + 3;
    var guessesleft = guesses;
    var guessedletters = []

    function logArray(list) {
        for (i = 0; i < list.length; i++) { 
            list[i];
        }
    }

    var underscores = [];
        for (u = 0; u < compchoice.length; u++) {
            underscores = underscores + "_ "
        };
    document.getElementById("mysteryword").innerHTML = underscores;
    document.getElementById("idguessesleft").innerHTML = guessesleft;
    document.getElementById("idlosses").innerHTML = losses;
    document.getElementById("idwins").innerHTML = wins;
   
      
    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        var thekeycode = event.keyCode;
        if (guessedletters.includes(userGuess)) {}

        else if (thekeycode >= 65 && thekeycode <= 90) {    
            guessedletters.push(userGuess);
                // if (guesses === 0) {losses++; new compchoice; guessleft = compchoice.length + 2;

                //          else if (userGuess === indexOf(computerGuess)) {
        }
            
        var displayguesses = guessedletters.join(', ');   
        document.getElementById("previousguesses").innerHTML = displayguesses;   

        }
    
    

    




    


   




 
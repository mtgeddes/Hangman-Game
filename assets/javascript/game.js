
    window.onload = function() {
        
    var words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"];
    var wins = 0;
    var losses = 0;
    var compchoice = words[Math.floor(Math.random()* words.length)];    console.log(compchoice) 
    var guesses = compchoice.length + 3;
    var guessesleft = guesses;
    var guessedletters = [];
    var underscores = [];
    var compchoicearray = [];
        for (u = 0; u < compchoice.length; u++) {
            underscores.push("_");
            compchoicearray.push(compchoice[u]);
        };
        console.log(compchoicearray);
        console.log(underscores);
     
    document.onkeyup = function(event) {                                                        // I want something to happen when a key is pressed.
        var userGuess = event.key.toLowerCase();                                                    // Every key pressed is registered as lowercase.
        var thekeycode = event.keyCode;                                                         //
        
        if (guessedletters.includes(userGuess)) {                                               // Has user choice already been selected? If so, do nothing. 
        }

        else if (thekeycode >= 65 && thekeycode <= 90 && compchoice.indexOf(userGuess) == -1) {
            guessedletters.push(userGuess); 
            guessesleft--;
            document.getElementById("idguessesleft").innerHTML = guessesleft;
            var displayguessedletters = guessedletters.join(' ');   
            document.getElementById("previousguesses").innerHTML = displayguessedletters;
            if (guessesleft === 0) {
                losses++;
                document.getElementById("idlosses").innerHTML = losses
                compchoice = words[Math.floor(Math.random()* words.length)];                console.log(compchoice)
                guesses = compchoice.length + 3;
                guessesleft = guesses;
                underscores = [];
                compchoicearray = [];
                    for (u = 0; u < compchoice.length; u++) {
                        underscores.push("_");
                        compchoicearray.push(compchoice[u]);
                displayunderscores = underscores.join(' ');
                document.getElementById("mysteryword").innerHTML = displayunderscores;
                guessedletters = [];
                displayguessedletters = guessedletters.join(' ');
                document.getElementById("previousguesses").innerHTML = displayguessedletters;
                };
            }
        }

        else if (thekeycode >= 65 && thekeycode <= 90) {                                       // Does the key pressed have a keycode between this range? If so, ...
            var displayguessedletters = guessedletters.join(' ');                              // ... join each new array item with a space ...
            var compchoicelength = compchoice.length;                                          // 
            document.getElementById("previousguesses").innerHTML = displayguessedletters;      // ... add the array (guessed letters) to the HTML within the div with id previousguesses 
            
            for (j = 0; j < compchoicelength; j++) {                                           // ... search through the index of the randomly generated word. 
                compchoice[j];
                
                if (compchoice[j] === userGuess) {                                             // ... 
                    underscores[j] = (userGuess);
                    var displayunderscores = underscores.join(' '); 
                    document.getElementById("mysteryword").innerHTML = displayunderscores  
                    if (underscores.toString() === compchoicearray.toString()) {
                        wins++;
                        console.log("wins " + wins);
                        document.getElementById("idwins").innerHTML = wins;
                        compchoice = words[Math.floor(Math.random()* words.length)];                console.log(compchoice)
                        guesses = compchoice.length + 3;
                        guessesleft = guesses;
                        underscores = [];
                        compchoicearray = [];
                            for (u = 0; u < compchoice.length; u++) {
                                underscores.push("_");
                                compchoicearray.push(compchoice[u]);
                        displayunderscores = underscores.join(' ');
                        document.getElementById("mysteryword").innerHTML = displayunderscores;
                        guessedletters = [];
                        displayguessedletters = guessedletters.join(' ');
                        document.getElementById("previousguesses").innerHTML = displayguessedletters;
                        };
                    }
                };
            };

            console.log(underscores);
        }
        
        }
            
        var displayguessedletters = guessedletters.join(' ');   
        var displayunderscores = underscores.join(' ');   
        document.getElementById("previousguesses").innerHTML = displayguessedletters;   
        document.getElementById("idguessesleft").innerHTML = guessesleft;
        document.getElementById("mysteryword").innerHTML = displayunderscores;
        document.getElementById("idlosses").innerHTML;
 
    }
    


   




 
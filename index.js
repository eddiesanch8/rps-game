// variables for hidden message, score, and reset button 

const gameMessage = document.getElementById(`game-msg__hidden`);
const compScore = document.getElementById(`pc-score`);
const playerScore = document.getElementById(`player-score`);
const resetButton = document.getElementById(`reset-btn`);

// used to manipulate innerHTML of counter
let pcCount = 0 ; 
let playerCount = 0; 

// We need an event listener for when someone clicks on rock, paper, and scissors 



buttonList = document.querySelectorAll(`.btns`)

//Step 3, loop through each button, check the index
buttonList.forEach( (button, index) => {

    button.addEventListener(`click`, ()=> {  
   
    // Creating a List for Our AI Now we need to create a function to get that random num 
        let gameList= [`Rock`, `Paper`, `Scissors`]; 
    // randomizing an index based off the length of our list
        let randomIndex = Math.floor(Math.random() * gameList.length); 
    // store the output of our Computer
        let compOutput = gameList[randomIndex];
        

        if (index === 0 && compOutput === `Rock`){
            // This is start of rock btn chain 
        gameMessage.innerHTML = `It's a tie! Computer Chose ${compOutput}!`

    } else if (index === 0 && compOutput === `Paper`){

    gameMessage.innerHTML = `You Lose! Computer Chose: ${compOutput}`
    pcCount++; 
    compScore.textContent = pcCount; 

   
    } else if (index === 0 && compOutput === `Scissors`){

    gameMessage.innerHTML = `You Win! Computer chose: ${compOutput}`
    playerCount++; 
    playerScore.textContent = playerCount;


    } else if (index === 1 && compOutput === `Rock`){

        // This is start of paper btn chain 

    gameMessage.innerHTML = `You Win! Computer Chose: ${compOutput}`
    playerCount++; 
    playerScore.textContent = playerCount;


    } else if ( index === 1 && compOutput === `Paper`){

    gameMessage.innerHTML = `You Tied! Computer Chose: ${compOutput}`


    } else if (index === 1 && compOutput === `Scissors`){

    gameMessage.innerHTML = `You Lose! Computer Chose: ${compOutput}`
    pcCount++; 
    compScore.textContent = pcCount; 

    } else if (index === 2 && compOutput === `Rock`){

        // this is start of scissors btn chain 

    gameMessage.innerHTML = `You Lose! Computer Chose: ${compOutput}`
    pcCount++; 
    compScore.textContent = pcCount; 

    } else if (index === 2 && compOutput === `Paper`){

    gameMessage.innerHTML = `You Win! Computer Chose: ${compOutput}`
    playerCount++; 
    playerScore.textContent = playerCount;


    } else if (index === 2 && compOutput === `Scissors`){

    gameMessage.innerHTML = `Its a tie! Computer Chose: ${compOutput}`

}




    })

 
    
});


resetButton.addEventListener(`click`, (event) => {

playerCount = 0 ; 
pcCount = 0; 
playerScore.textContent = 0;
compScore.textContent = 0; 
gameMessage.innerHTML = " "

})




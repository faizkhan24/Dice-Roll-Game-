const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();


let player1Score = 0;
let player2Score = 0;
let round_num = 0;
let player1Turn = true;


const diceResult = document.querySelector(".dice-result");
const scoreboard1 = document.querySelector(".scoreboard1");
const scoreboard2 = document.querySelector(".scoreboard2");
const roundNum = document.querySelector(".round_num");
const rollBtn  = document.querySelector(".dice-roll");
const resetBtn = document.querySelector(".dice-reset");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

rollBtn.addEventListener("click", function(){
    const randomNum = Math.floor(Math.random() * 6) + 1
    const playerDice = `dice${randomNum}.png`;
    document.getElementById('check1').setAttribute('src', playerDice); 
    
    if (player1Turn){
        player1Score += randomNum
        diceResult.textContent = randomNum
        img1.classList.add("active1")
        img2.classList.remove("active2")
        scoreboard1.textContent = player1Score
        
    } else {
        player2Score += randomNum
        diceResult.textContent = randomNum
        img2.classList.add("active2")
        img1.classList.remove("active1")
        scoreboard2.textContent = player2Score

    }

    if (player1Score >= 20) {
        diceResult.textContent = "Player 1 has won!"
        resetBtn.style.display = "block"
        jsConfetti.addConfetti();
    } else if (player2Score >= 20) {
        diceResult.textContent = "Player 2 has Won!"
        resetBtn.style.display = "block"
        jsConfetti.addConfetti();
    }
    

    // ! is a logical operator that will convert a value to its opposite boolean
    player1Turn = !player1Turn
})

resetBtn.addEventListener("click", function(){
    resetBtn.style.display = "none"
    player1Score = 0;
    player2Score = 0;
    player1Turn = true
   diceResult.src = " "; 
    scoreboard1.textContent = 0;
    scoreboard2.textContent = 0;
    img1.classList.remove("active2")
    img2.classList.remove("active2")
})

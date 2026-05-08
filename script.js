function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        choice = "Rock";
    }
    else if (choice === 1) {
        choice = "Paper";
    }
    else if (choice === 2) {
        choice = "Scissor";
    }

    return choice;
}


const roundNum = document.querySelector(".round");
const humanscore = document.querySelector(".human-score");
const computerscore = document.querySelector(".computer-score");
const announcement = document.querySelector(".announcement");
let roundNum_text = 1;
let humanscore_text = 0;
let computerscore_text = 0;
let announcement_text = 0;

const buttons = document.querySelectorAll("button");
let humanSelection = 0;

roundNum.textContent = roundNum_text;
humanscore.textContent = humanscore_text;
computerscore.textContent = computerscore_text;
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        humanSelection = btn.id;
        computerSelection = getComputerChoice();
        let announcement_text = calculateScore(computerSelection, humanSelection);
        roundNum.textContent = roundNum_text++;
        humanscore.textContent = humanscore_text;
        computerscore.textContent = computerscore_text;
        if(announcement_text === "You Win! Paper beats Rock!" || 
            announcement_text === "You Win! Scissor beats Paper!" || 
            announcement_text === "You Win! Rock beats Scissor!"){
                announcement.setAttribute("style","color: green;");
            }else{
                announcement.setAttribute("style","color: red;");
            }
        announcement.textContent = announcement_text;
    });
    btn.addEventListener("mouseenter", () => {
        if(btn.id === "Rock"){
            btn.style.backgroundColor = "green";
        }
        else if(btn.id === "Paper"){
            btn.style.backgroundColor = "blue";
        }
        else{
            btn.style.backgroundColor = "red";
        }
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.backgroundColor = "";
    });
});


function calculateScore(computerSelection, humanSelection) {
    let result = 0;

    if (computerSelection === "Rock" && humanSelection === "Rock") {
        result = "Tie! You both did Rock!";
    }
    else if (computerSelection === "Rock" && humanSelection === "Paper") {
        result = "You Win! Paper beats Rock!";
        humanscore_text++;
    }
    else if (computerSelection === "Rock" && humanSelection === "Scissor") {
        result = "You Lose! Rock beats Scissor!";
        computerscore_text++;
    }
    else if (computerSelection === "Paper" && humanSelection === "Rock") {
        result = "You Lose! Paper beats Rock!";
        computerscore_text++;
    }
    else if (computerSelection === "Paper" && humanSelection === "Paper") {
        result = "Tie! You both did Paper!";
    }
    else if (computerSelection === "Paper" && humanSelection === "Scissor") {
        result = "You Win! Scissor beats Paper!";
        humanscore_text++;
    }
    else if (computerSelection === "Scissor" && humanSelection === "Rock") {
        result = "You Win! Rock beats Scissor!";
        humanscore_text++;
    }
    else if (computerSelection === "Scissor" && humanSelection === "Paper") {
        result = "You Lose! Scissor beats Paper!";
        computerscore_text++;
    }
    else if (computerSelection === "Scissor" && humanSelection === "Scissor") {
        result = "Tie! You both did Scissor!";
    }

    return result;
}





//let playerSelection;
//let computerSelection;
const loss = "Вы проиграли.";
const victory = "Вы победили.";

function computerPlay () {
    let signsGame = ["камень", "ножницы", "бумага"];
    return signsGame[Math.floor(Math.random() * signsGame.length)]
}

function playRound (playerSelection, computerSelection) {
    playerSelection = prompt("Введите свой выбор").toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection === "камень" && computerSelection === "ножницы") {
        return  loss;
    }
    else if (playerSelection === "камень" && computerSelection === "бумага") {
        return  victory;
    }
    else if (playerSelection === "ножницы" && computerSelection === "камень") {
        return  loss;
    }
    else if (playerSelection === "ножницы" && computerSelection === "бумага") {
        return  victory;
    }
    else if (playerSelection === "бумага" && computerSelection === "ножницы") {
        return  loss;
    }
    else if (playerSelection === "бумага" && computerSelection === "камень") {
        return  victory;
    }
 return "Ничья";

}

function game () {
    let victoryCompyter = 0;
    let victoryPlayer = 0; 

    for (let i = 0; i < 5; i++) {
       let round = playRound (playerSelection, computerSelection);
       if (round === "Ничья") {
           console.log("Раунд завершился ничьей ");
       }
       else if (round === loss) {
           victoryCompyter++
           console.log("Вы проиграли раунд");
       }
       else if (round === victory) {
           victoryPlayer++
           console.log("Вы выйграли раунд");
       }

    }

    if (victoryCompyter > victoryPlayer) {
            return console.log("Вы проиграли.");
    }
    else if (victoryCompyter < victoryPlayer) {
            return console.log("Вы победили");
    }
    

 return console.log("Ничья");

} 

console.log(game());
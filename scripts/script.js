function computerPlay () {
    let signsGame = ["Камень", "Ножницы", "Бумага"];
    return signsGame[Math.floor(Math.random() * 3)]
}

console.log(computerPlay());
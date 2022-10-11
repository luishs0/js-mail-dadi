let numberUser = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
let numberComputer = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;

console.log(numberUser, numberComputer);

let userMsg = document.querySelector(".numberUser");
let computerMsg = document.querySelector(".numberComputer");

userMsg.innerHTML = `Your number is ${numberUser}`;
computerMsg.innerHTML = `The computer's number is ${numberComputer}`;

let finalMsg = document.querySelector(".msg");

let victory = false;


if (numberUser > numberComputer) {
    victory = true
} else if (numberUser === numberComputer) {
    victory = "";
}

if (victory) {
    finalMsg.innerHTML = `<strong class="${victory}">YOU ARE THE WINNER</strong>`
} else if (victory === false) {
    finalMsg.innerHTML = `<strong class="${victory}">YOU LOOSE</strong>`
} else {
    finalMsg.innerHTML = "TIE"
}
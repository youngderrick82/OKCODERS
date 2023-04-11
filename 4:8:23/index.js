var startingCountPrompt = prompt("How many bottles would you like to start with?")
const beerCounter = document.getElementById("beer-counter");

const newP = document.createElement("p");
const beerSlogan = " BOTTLES OF BEER ON THE WALL!!!"

let bottleSound = new Audio('Audio/Project 1 - 4:11:23, 3.21 PM.mp3');

document.body.onload = startingBottleCount;

function startingBottleCount() {
    newP.textContent = String(startingCountPrompt) + beerSlogan;
    beerCounter.appendChild(newP);
}

console.log(startingBottleCount());

let currentBottle = startingCountPrompt;
const takeOneText = "TAKE ONE DOWN AND PASS IT AROUND"

function takeOneDown() {
    bottleSound.play();

    currentBottle--;

    if (currentBottle > -1) {
    newP.textContent = takeOneText;
    beerCounter.appendChild(newP);
    
    newP.textContent = String(currentBottle) + beerSlogan;
    beerCounter.appendChild(newP);
    }
}
var className = "ok-coders";
var testNumber = 1;
var testNumber2 = 2.0;
var myOtherClassName;

// code comment here
console.log(className)

var basicMath = 1 + 1
var advancedMath = basicMath * 2

navigator.geolocation.getCurrentPosition(position => {
console.log(position)
}, error => {
console.log(error)
})

var userIconElement = document.getElementById("user-icon");
console.log(userIconElement);
userIconElement.addEventListener('click', () => {
    console.log("I was clicked!")
})

// var userName = prompt("What is your name?");
// var firstNameInitial = userName[0];
// var spacePosition = userName.indexOf(" ");
// var lastNameInitial = userName[spacePosition + 1];
// console.log(userName);

// var avatarStringTag = document.getElementById("avatar-string");
// console.log(avatarStringTag);
// avatarStringTag.textContent = firstNameInitial + lastNameInitial;

var h1MessageTag = document.getElementById("message");

function clickHandler() {

    h1MessageTag.textContent = message;
}

// var userAge = prompt("What is your age?");
// console.log(userAge);
// var message = "Hello " + userName + ", you are " + userAge;
// console.log(message)

const myArray = [1, 2, 3, 4, 5]
const mySecondArray = ["zach", "susan", "tom", "roger", "sally"]

const shoppingCart = [];

const shoppingCartElement = document.getElementById("shopping-cart");

function addItemToCart(itemName) {
    shoppingCart.push(itemName);
    shoppingCartElement.textContent = shoppingCart.length;
}

const pants = document.getElementById("pants")
const tShirt = document.getElementById("t-shirt")
const hat = document.getElementById("hat")

pants.addEventListener('click', () => addItemToCart('pants'))
tShirt.addEventListener('click', () => addItemToCart('t-shirt'))
hat.addEventListener('click', () => addItemToCart('hat'))

console.log(shoppingCart);
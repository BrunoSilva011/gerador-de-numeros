const num1 = document.querySelector("p#num1");
const num2 = document.querySelector("p#num2");
const num3 = document.querySelector("p#num3");
const num4 = document.querySelector("p#num4");
const num5 = document.querySelector("p#num5");
const num6 = document.querySelector("p#num6");


function sortear () {
    num1.innerHTML = randomNumber()
    num2.innerHTML = randomNumber()
    num3.innerHTML = randomNumber()
    num4.innerHTML = randomNumber()
    num5.innerHTML = randomNumber()
    num6.innerHTML = randomNumber()
}

function randomNumber() {
    return Math.floor(Math.random() * (60 - 1 +1) +1)
}
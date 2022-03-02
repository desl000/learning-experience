var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var number = document.getElementById("number");
var randomButton = document.getElementById("Random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }

function randomColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	setGradient();
}

setGradient();

function getRandomNumber() {
	let colorCode = '#';
	colorCode = Math.random().toString(16).slice(2,8);
	console.log(colorCode);
	return colorCode;
}

function randomNumbers(n) { 
	// console.log("testtest");
	console.log(n);
	if (n === 1) {
		number1.innerHTML = getRandomNumber();
	}
	else if (n === 2) {
		number2.innerHTML = getRandomNumber();
	}
	else {
		number1.innerHTML = getRandomNumber();
		number2.innerHTML = getRandomNumber();
	}

}

randomNumbers();

color1.addEventListener("input", setGradient);
color1.addEventListener("input", randomNumbers,1);

color2.addEventListener("input", setGradient);
color2.addEventListener("input", randomNumbers,2);

randomButton.addEventListener("click", randomColors);
randomButton.addEventListener("click", randomNumbers);
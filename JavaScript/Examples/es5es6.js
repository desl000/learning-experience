// Template strings

const name = "John Snow";
const age = 34;
const pet = "horse";

const greetingBest = 'Hello ${name} you seem to be ${age-10}. What a lovely horse you have';

// Default arguments

function greet(name='', age=30, pet='cat') {
	return 'Hello ${name} you seem to be ${age-10}. What a lovely horse you have';
}


// arrow functions

function add(a, b) {
	return a + b;
}

const add2 = (a, b) => a + b;


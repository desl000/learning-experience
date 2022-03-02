// reference type

var object1 = { value: 10};
var object2 = object1;
var object3 = { vlaue: 10};

// var object1 = Box1
// var object2 = object1
// var object3 = Box3
// Array[] = Box - data structure

// context vs scope

function a() {
	console.log(this);
}
// a() - Window
// context: Window

const object4 = {
	a: function() {
		console.log(this);
	}
}
// object4.a() - {a: f}
// context: object4


// instantiation
class Player {
	constructor(name, type) {
		console.log('player', this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I am a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
		console.log('wizard', this);
	}
	play() {
		console.log(`WEEEEEE I am a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// output wizard1: 
// player, Wizard{};
// wizard, wizard{name: "Shelly", type: "Healer"}


// Classical Inheritance

var Player = function(name, type) {
	this.name = name;
	this.type = type;
}

Player.prototype.introduce = function() {
	console.log(`Hi I am ${this.name}, I am a ${this.type}`);
}

var wizard1 = new Player('Shelly', 'Healer');
var wizard2 = new Player('Shawn', 'Dark Magic');

wizard1.play = function() {
	console.log(`WEEEEEE I am a ${this.type}`);
}

wizard2.play = function() {
	console.log(`WEEEEEE I am a ${this.type}`);
}



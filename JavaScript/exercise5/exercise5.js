function checkDriverAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
	return"Sorry, you are too yound to drive this car. Powering off";
} 	else if (Number(age) > 18) {
	return"Powering On. Enjoy the ride!";
} 	else if (Number(age) === 18) {
	return"Congratulations on your first year of driving. Enjoy the ride!";
}
}

alert(checkDriverAge());


var checkDriverAge2 = function() { 
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
	return"Sorry, you are too yound to drive this car. Powering off";
} 	else if (Number(age) > 18) {
	return"Powering On. Enjoy the ride!";
} 	else if (Number(age) === 18) {
	return"Congratulations on your first year of driving. Enjoy the ride!";
}
}

alert(checkDriverAge2());

function checkDriverAge3(age) { 
	if (Number(age) < 18) {
	return"Sorry, you are too yound to drive this car. Powering off";
} 	else if (Number(age) > 18) {
	return"Powering On. Enjoy the ride!";
} 	else if (Number(age) === 18) {
	return"Congratulations on your first year of driving. Enjoy the ride!";
}
}

checkDriverAge3(18);
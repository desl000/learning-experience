// ES7

const pets = ['cat', 'dog', 'bat'];
pets.includes('dog')
// output: true

const square = (x) => x**2;
square(2)
// output: 4

const cube = (y) => y**3;
cube(3)
// output: 27


// ES8

.padStart()
.padEnd()
// add spacing before or after the input

const fun = (a,b,c,d,) => {
	console.log(a);
}

fun(1,2,3,4,)
// output: 1
// ending comma won't get an error

Object.values
Object.entries
Object.keys

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Grinch'
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
})






























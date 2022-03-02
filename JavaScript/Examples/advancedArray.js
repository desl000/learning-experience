var array = [1, 2, 10, 16]

// for (var i = Things.length - 1; i >= 0; i--) {
// 	Things[i]
// }

// forEach()

const double = []
const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log('forEach', double);

// map

// const mapArray = array.map((num) => {
// 	return num * 2;
// });

const mapArray = array.map(num => num * 2);

console.log('map', mapArray);

// filter

const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);

// reduce
reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num
}, 5);

console.log('reduce', reduceArray);
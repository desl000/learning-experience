// 1

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

// const sortArray = array.sort();

const groupBy = (x,f) => x.reduce((a,b)=>((a[f(b)]||=[]).push(b),a),{});
const groupArray = groupBy (array, v => v);
const newArray = Object.keys(groupArray).map(k => {return groupArray[k]} );

// console.log(sortArray);
console.log(newArray);


// 2

// const array = [1,2,3,4,5,7]
// const targetNumber = 7;

// function answer() {
// for (let i = 0; i < array.length; i++) {
// 	let num1 = array[i];
// 	let num2 = array[i+1];
// 	if (num1 + num2 == targetNumber) {
// 		return [num1,num2];
// 	}
// }
// }

// answer();


const array = [2,3,5,4,7,6,1]

function findNumbers(array, targetNumber) {
      let object = {}
      for(num of array) {
         if(object[num]){
         	let num1 = targetNumber - num;
         	let num2 = num;
            return [num1, num2]
               }
            object[targetNumber - num] = true;
         }
         	return false;
}

findNumbers(array, 7);










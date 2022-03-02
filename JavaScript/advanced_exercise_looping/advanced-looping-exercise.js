const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(array) {
  let maxNum = 0;
  array.forEach(item => {
    if (maxNum < item) {
      maxNum = item;
    }
  })
  console.log(`The biggest number is ${maxNum}`);
}
biggestNumberInArray(array)


function biggestNumberInArray2(array2) {
  let maxNum = 0;
  for (item of array2) {
    if (maxNum < item) {
      maxNum = item;
    }
    console.log(maxNum);
  }
  console.log(`The biggest number is ${maxNum}`);
}
biggestNumberInArray2(array2)


function biggestNumberInArray3(array3) {
  
}
biggestNumberInArray3(array3)


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

lookingFor = {
  glasses: 1, 
  wine: 1, 
  bottle: 1
}

function checkBasket(amazonBasket, lookingFor) {
  for (item in amazonBasket) {
    if (item === lookingFor) {
      return `${lookingFor} is in your basket`
    }
  }
  return `${lookingFor} isn't in your basket`
}

checkBasket(amazonBasket, lookingFor)

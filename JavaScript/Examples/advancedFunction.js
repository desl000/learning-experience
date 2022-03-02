const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newfunc = first(); 
newFun();

// Closure
// children always have access to the parent scope
// parents don't always have access to their children

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5); // make the (5) muliply by 5

// Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5) // 5+1+1=7


// Avoiding Side Effects, functional purity.
// Anything you put into the function it always returns to the same thing - deterministic
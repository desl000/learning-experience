typeof 1n
//output: bigint


// Optional Chaining Opertion ?.

let andrei_pokeman = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.8,
		weight: 30,
		power: 0
	}
}

let weight = andrei_pokeman?.pikachu?.weight
// check properties with ?.

console.log(weight)


// Nullish Coalescing Operation ??

let power = andrei_pokeman?.pikachu?.power || 'no power'
console.log(power)
// output: no power

let power = andrei_pokeman?.pikachu?.power ?? 'no power'
console.log(power)
// output: 0

// replace & replaceAll

const str = "Titan is the best of the best"

str.replaceAll('best', 'worst')
// output: Titan is the worst of of the worst

str.replace('best', 'worst')
// output: Titan is the worst of of the best




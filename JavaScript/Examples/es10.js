const array2 = [1,[2,3],[4,5]]
array2.flat()

// output:
// (5) [1, 2, 3, 4,5 ]
// no nested array

const array3 = [1,2,[3,4,[5]]]
array3.flat()

// output:
// (5) [1, 2, 3, 4, Array(1)]

const array3 = [1,2,[3,4,[5]]]
array3.flat(2)

// output:
// (5) [1, 2, 3, 4, 5]
// the flat() should specify how many layers to flat
// by default it only flats 1 layer
// to do the flat trick, you can pick a random number that is large enough

const jurassicPark = [['🦂', '🦟'], '🐢', ['🐍', '🦎'], [[[['🦖']]], '🦕'], ['🐙', '🦑']]
jurassicPark.flat(50)

// output:
// (9) ['🦂', '🦟', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑']

const entries = ['bob', 'sally',,,,,,'cindy']
entries.flat()

// output:
// (3) ['bob', 'sally', 'cindy']
// flat can clean up the data within the array

const jurassicParkChaos = jurassicPark.flatMap(creature => creature + '🦖')
jurassicParkChaos

// output:
// (5) ['🦂,🦟🦖', '🐢🦖', '🐍,🦎🦖', '🦖,🦕🦖', '🐙,🦑🦖']

const userEmail1 = '          eddytheeagle@gmail.com'
const userEmail2 = 'jonnydangerous@gmail.com          '
console.log(userEmail1.trimStart())
console.log(userEmail2.trimEnd())

// ------------------------

userProfiles = [['commmanderTom', 23], ['derekZlaner', 40], ['hansel', 18]]

Object.fromEntries(userProfiles)

// const obj = Object.fromEntries(userProfiles)
// Object.entries(obj)


try {
	true + 'hi'
} catch {
	console.log('You messed up')
}
// output: "truehi"

try {
	bob + 'hi'
} catch(error) {
	console.log('You messed up.' + ' ' + error)
}
// output: You messed up




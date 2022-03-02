// pass by value vs pass by referrence

let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;
obj2.password = 'easypeasy';

console.log(obj1);
console.log(obj2);
// output:
// {name: 'Yao', password: 'easypeasy'}
// {name: 'Yao', password: 'easypeasy'}
// object: pass by referrence will save the change to the memory


var c = [1,2,3,4,5];
var d = c;
d.push(18475089);
console.log(c);
// output: [1,2,3,4,5,18475089]
// object: pass by referrence will save the change to the memory
// array is simply object


var c = [1,2,3,4,5];
var d = [].concat(c);
d.push(18475089);
console.log(c);
// output: [1,2,3,4,5]
// c is not affected


let obj = {a:'b', b:'b', c:'c' };
let clone = Object.assign({}, obj);
let clone2 = {...obj}; 

obj.c = 5;
console.log(obj);
console.log(clone);
console.log(clone2);
// output: 
// {a:'b', b:'b', c: 5}
// {a:'b', b:'b', c:'c'}
// {a:'b', b:'b', c:'c'}
// object clone and clone2 are not affected


let obj = {
	a: 'b', 
	b: 'b', 
	c: {deep: 'try and copy me'}
};

let clone = Object.assign({}, obj);
let clone2 = {...obj}; 
let superClone = JSON.parse(JSON.stringify(obj));

obj.c = 5;
console.log(obj);
console.log(clone);
console.log(clone2);
// output: 
// {a: 'b', b: 'b', c: '5'}
// {a: 'b', b: 'b', c: {deep: 'try and copy me'}}
// {a: 'b', b: 'b', c: {deep: 'try and copy me'}}

obj.c.deep = 'oh no';
console.log(obj);
console.log(clone);
console.log(clone2);
// output:
// {a: 'b', b: 'b', c: {deep: 'oh no'}}
// {a: 'b', b: 'b', c: {deep: 'oh no'}}
// {a: 'b', b: 'b', c: {deep: 'oh no'}}
// the clone is a shallow clone, which only clones the first layer
// the sub-layers will pass by referrence

console.log(superClone);
// output: 
// {a: 'b', b: 'b', c: {deep: 'try and copy me'}}
// the superClone did a deep clone to the object, which will clone everything








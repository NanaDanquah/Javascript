/*
By using the rest operator, you can gather multiple elements into a single array or object. 
It's useful for handling remaining items in destructuring or collecting arguments in functions.
*/

const [first, ...rest] = [1,2,3,4];
console.log(first) // 1
console.log(rest)  // [2,3,4]

// it can be used in functions to collect arguments
function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1,2,3)) // 6


/*
The spread operator is used to "spread" or expand elements of an iterable 
(like an array or string) or properties of an object into individual elements or key-value pairs. 
It is the opposite of the rest operator, as it unpacks elements rather than collecting them.
it expands arrays, objects or strings into individual elements or properties
used for concatenation, copying or passing arguments.
*/

const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array ['apple', 'pear', 'plum', 'blueberry', 'strawberry'];


//add new members to arrays without using the push() method
let veggies = ['onion', 'parskey'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies); // [ 'onion', 'parskey', 'carrot', 'beetroot']

//convert a string to an array using the spread operator
const greeting = 'hello';
const arrayOfChars = [...greeting];
console.log(arrayOfChars); // ['H', 'e', 'l', 'l', 'o']


//copy either an object or an array into a separate one 
const car1 = {
    speed: 200,
    color: 'yellow'
}

const car2 = {...car1} //this makes a copy of car1
car1.speed = 201;
console.log(car1.speed, car2.speed); //201 and 200 respectively
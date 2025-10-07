/*
Array destructuring is a syntax that allows you to unpack values 
from an array into individual variables.
For example, consider an array with two elements:

const item = ["Laptop", 1000];
const [name, price] = item; // Destructures the array into variables
console.log(name); // Output: Laptop
console.log(price); // Output: 1000

*/


const products = [
    ["Laptop", 1000],
    ["Phone", 500],
    ["Tablet", 700]
];
// Destructure the second product's name and price from the array
const [, [secondProductName, secondProductPrice]] = products;



console.log(`Second product: ${secondProductName}`);
console.log(`Second product price: ${secondProductPrice}`);




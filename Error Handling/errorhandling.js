function addTwoNums (a,b) {
    console.log(a + b);
}

//passing a number and a string will resilt in '55'(string concatenation) due to JavaSccript type coercion
addTwoNums(5, "5");


//Update the addTwoNums function with try...catch block
try {
    console.log(a + b);
} catch(err) {
    console.log(err);
}


//if the passed-in arguments are not numbers, throw an error
function addTwoNums(a, b) {
    try {
        if (typeof(a) != 'number'){
            throw new ReferenceError('the first argument is not a number');
        } else if (typeof(b) != 'number'){
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error", err)
    }
}
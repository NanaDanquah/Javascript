// Using conditional statements


// if else conditional statements
var age = 10;
if (age > 10 || age == 65) {
    console.log("You get your income from pension.")
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary")
} else if (age < 18) {
    console.log("You get allowance")
} else {
    console.log("The value of the age variable is not numerical")
};


//using switch for mutiple conditional statements
var day = "Sunday";
switch(day) {
    case "Monday":
        console.log("Do something");
        break;

    case "Tuesday":
        console.log("Buy Bread");
            break;
            
    case "Wednesday":
        console.log("Buy a puppy");
        break;

    case "Thurday":
        console.log("Go gulfing at Achimota");
        break;
    
    case "Friday":
        console.log("go to the cinema with a friend");
        break;

    case "Saturday":
        console.log("learn german");
        break;

    case "Sunday":
        console.log("Please go to church");
        break;
    
    default:
        console.log("You did something extremely bad");

};
// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Declare a variable for the message
    // WRITE YOUR CODE HERE
    var message = "%c" + txt;
    
    
    // Declare a variable for the style
    // WRITE YOUR CODE HERE
    var style = `color: ${color};`;
    
    // Append background style to the style variable
    // WRITE YOUR CODE HERE
    style += `background: ${background};`;
    
    // Append font size style to the style variable
    // WRITE YOUR CODE HERE
    style += `font-size: ${fontSize};`;
    
    // Log the message with the applied style
    // WRITE YOUR CODE HERE
    console.log(message, style);
}




// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    // Declare a fontStyle variable with default styles
    // WRITE YOUR CODE HERE
    var fontStyle = "color: tomato; font-size: 50px";
    
    // Check if the reason is "birthday"
    // WRITE YOUR CODE HERE
    if (reason == "birthday") {
        console.log('%cHappy birthday', fontStyle);
    } else if (reason == "champions") {
        console.log('%cCongrats on the title!', fontStyle);
    } else {
        console.log(message, style);
    }
    
    // If reason is "champions", log a congrats message
    // WRITE YOUR CODE HERE
    
    // For any other reason, log a default message
    // WRITE YOUR CODE HERE
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
// Call the consoleStyler function with appropriate arguments
// WRITE YOUR CODE HERE
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');


// Call the celebrateStyler function with an appropriate argument
// WRITE YOUR CODE HERE
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    // Call consoleStyler with the first four arguments
    // WRITE YOUR CODE HERE
    consoleStyler(color, background, fontSize, txt);
    
    
    // Call celebrateStyler with the last argument
    // WRITE YOUR CODE HERE
    celebrateStyler(reason);
}

// Call styleAndCelebrate with appropriate arguments
// WRITE YOUR CODE HERE
styleAndCelebrate('#ef7c8e', '#fae8e0', '30px', 'You made it!', 'champions');





/*
Key Takeaways:

Use backticks (``) and ${} to dynamically create strings for console styling. This technique enables customizable and reusable code for styled console messages. 

The %c format in console.log allows you to apply styles directly to messages in the console, making it useful for debugging or creating visually distinct logs.

Functions like consoleStyler and celebrateStyler demonstrate how to encapsulate logic into reusable blocks.

Use if-else blocks to implement different behaviours based on the input. This helps in tailoring output for specific scenarios or user inputs.  

Combining functions, as demonstrated with styleAndCelebrate, illustrates how to create higher-level functionality by leveraging simpler, well-defined functions. 
*/
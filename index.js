// // Function that takes a callback function as an argument and calls it
// function receivesAFunction(callback) {
//     // Call the callback function
//     callback();
// }

// // Function that returns a named function
// function returnsANamedFunction() {
//     // Define a named function
//     function namedFunction() {
//         console.log("This is a named function");
//     }
//     // Return the named function
//     return namedFunction;
// }

// // Function that returns an anonymous function
// function returnsAnAnonymousFunction() {
//     // Return an anonymous function directly
//     return function() {
//         console.log("This is an anonymous function");
//     };
// }

// // Example usage:
// receivesAFunction(function() {
//     console.log("Callback function called");
// });

// const namedFunc = returnsANamedFunction();
// namedFunc(); // Output: This is a named function

// const anonymousFunc = returnsAnAnonymousFunction();
// anonymousFunc(); // Output: This is an anonymous function

// Function that takes a callback function as an argument and calls it
const receivesAFunction = (callback) => {
    // Call the callback function
    callback();
}

// Function that returns a named function
const returnsANamedFunction = () => {
    // Define a named function using arrow syntax
    const namedFunction = () => {
        console.log("This is a named function");
    };
    // Return the named function
    return namedFunction;
}

// Function that returns an anonymous function
const returnsAnAnonymousFunction = () => {
    // Return an anonymous function directly using arrow syntax
    return () => {
        console.log("This is an anonymous function");
    };
}


receivesAFunction(() => {
    console.log("Callback function called");
});

const namedFunc = returnsANamedFunction();
namedFunc(); // Output: This is a named function

const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc(); // anonimous


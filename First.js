//  Starting with the traditional and mandatory Hello World  program
console.log('Hello World !');

// Hoisting Example  
// myFunctionExpression(); // Output: TypeError: myFunctionExpression is not a function
// var myFunctionExpression = function() {
//   console.log("Hi!");
// };

// Passing arguments During runtime 

console.log ('This is the argument passed during runtime: '+ process.argv[2] )
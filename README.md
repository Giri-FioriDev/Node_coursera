
# Server-Side JavaScript with Node.js  

This repository is dedicated to learning **Server-Side JavaScript with Node.js**, as part of a Coursera course. It serves as a practice ground for all the exercises and core concepts covered in the course.  

Here, you'll find code examples, projects, and notes that reflect my journey in mastering Node.js, from foundational concepts to more advanced topics. 

# Module 1: JavaScript Fundamentals

Asynchronous Jobs run on worker threads.
## 1. Variables in JavaScript
- Variables are containers for storing data.
- They ensure **code reusability** by replacing the same value in multiple places.
- Three keywords to declare variables:
  - **`var`**:
    - Declares a variable in the current execution context.
    - Allows duplicate declarations without errors.
    - Example: `var name, age, salary;`
  - **`let`**:
    - Declares block-scoped variables.
    - Unlike `var`, it is limited to the block, statement, or expression where it is used.
    - Example: `let x = 10;`
  - **`const`**:
    - Declares a read-only reference to a value.
    - The variable identifier cannot be reassigned, but the value itself can be mutable.
    - Example: `const number1 = 5;`

---

## 2. Hoisting
- JavaScript hoisting moves **declarations** (not initializations) to the top of their scope.
- Variables can be used before they are declared due to hoisting.
- Example:
  ```javascript
  console.log(x); // undefined (hoisted)
  var x = 5;

## 3. Operators in JavaScript

* **Arithmetic Operators:** `+`, `-`, `*`, `/`, `%`

* **Assignment Operators:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`

* **Logical Operators:** `&&`, `||`, `!`

* **Relational Operators:** `<`, `>`, `<=`, `>=`, `in`, `instanceof`
    * `in`: Checks if an object has a property.
    * `instanceof`: Checks if an object is an instance of another object.

* **Unary Operators:**
    * `delete`: Deletes a property from an object.
    * `void`: Discards an expression's return value.
    * `typeof`: Returns the type of an object.

* **Equality Operators:**
    * `==` (equality), `!=` (inequality)
    * `===` (strict equality), `!==` (strict inequality)
## 4. Expressions

* An expression is any valid unit of code that resolves to a value.

* Examples:
    * `this`: Refers to the current execution context.
    * `function`: Defines a function expression.
    * `class`: Defines a class expression.
    * `new`: Creates an instance of a constructor.
    * `super`: Calls the parent constructor.
## 5. Process Object in Node.js

* The `process` object is a global object in Node.js.

* Provides information about the currently running process.

* `process.argv`:

    * An array containing command-line arguments passed to the program.
    * Arguments start from index 2.
## 6. Control Structures

* Control flow determines the order of code execution.

* **Conditional Statements:**
    * `if-else`: Executes code based on a condition.
    * `switch-case`: Executes code based on multiple conditions.

* **Loops:**
    * `for`: Repeats code a specified number of times.
    * `while`: Repeats code while a condition is true.
    * `do-while`: Executes code once, then repeats while a condition is true.
    * `for-in`: Iterates over object properties.
    * `for-of`: Iterates over iterable objects (e.g., arrays).

* **Loop Control Statements:**
    * `break`: Exits a loop.
    * `continue`: Skips the current iteration and moves to the next.

## 7. Key Differences Between var, let, and const

| Feature             | var                     | let                         | const                       |
|----------------------|--------------------------|------------------------------|-----------------------------|
| Scope               | Function or global       | Block-scoped                | Block-scoped               |
| Reassignment        | Allowed                  | Allowed                      | Not allowed                 |
| Hoisting            | Hoisted (undefined)      | Hoisted (not accessible before declaration) | Hoisted (not accessible before declaration) |
| Duplicate Declaration | Allowed                  | Not allowed                  | Not allowed                 |

##  Common Interview Questions

1. What is the difference between `var`, `let`, and `const`?

2. Explain hoisting in JavaScript.

3. What are the different types of operators in JavaScript?

4. How does the `process` object work in Node.js?

5. What are the different types of loops in JavaScript?

6. How do equality operators (`==` and `===`) differ?


# Module 2 : Modularization and invocations . 
# JavaScript Functions - Key Points

## Overview
- Functions are essential tools in JavaScript, acting like procedures to perform specific tasks.
- Functions consist of a series of statements executed when the function is called.
- JavaScript functions do not have return types or specified data types for arguments, unlike other OOP languages.
- Functions are **first-class citizens** in JavaScript, meaning they can be:
  - Assigned to variables.
  - Passed as parameters to other functions.
  - Returned from other functions.

---

## Declaring Functions
- Use the `function` keyword followed by:
  - Function name.
  - List of parameters (optional, separated by commas).
  - Function body (contains the logic).
- Example:
  ```javascript
  function functionName(param1, param2) {
    // Function body
  }

## Invoking Functions
- To call a function, use the function name followed by arguments in parentheses.
    ```javascript
    functionName(arg1, arg2);
- Function invocation executes the code inside the function body.

-By default, functions return undefined unless a return statement specifies a value.

Return Statement
----------------

*   javascriptCopyreturn value;
    

Anonymous Functions
-------------------

*   Functions without a name are called **anonymous functions**.
    
*   Declared using the function keyword without a name.
    
*   Commonly used as arguments for other functions.
    
*   javascriptCopyconst myFunction = function() { // Function body};
    

### Self-Executing Anonymous Functions

*   Anonymous functions can be invoked immediately after initialization.
    
*   Also known as **Immediately Invoked Function Expressions (IIFE)**.
    
*   javascriptCopy(function() { // Function body})();
    
*   Arguments can be passed into anonymous functions.
    

Arrow Functions
---------------

*   A compact alternative to traditional function expressions.
    
- ```javascript
      const myFunction = (param1, param2) => { 
        // Function body 
       };
    
*   Limitations:
    
    *   Cannot be used in all situations (e.g., as constructors or with this binding).

Arrays 
----------------

1.  **Arrays in JavaScript**:
    
    *   Arrays are sequential data storage structures.
        
    *   They can hold various data types, including strings, numbers, objects, and even other arrays.
        
    *   Arrays in JavaScript are dynamic; their length is not fixed and can change as elements are added or removed.
        
2.  **Creating Arrays**:
    
    -  ```javascript
          let arr = [1, 2, 3];
        
    -   ```javascript 
           let arr = new Array(1, 2, 3); // Creates an array with elements 1, 2, 3
           let arr = new Array(3); // Creates an array with length 3, but no elements
        
3.  **Dynamic Typing**:
    
    *   JavaScript arrays can be heterogeneous, meaning they can contain different data types.
        
    *   No type specification is needed when declaring an array.
        
4.  **Array Length**:
    
    *   The length of an array is dynamic and can grow or shrink.
        
    *   When using the new Array(int) constructor, it creates an array with the specified length but no elements.
        
5.  **Common Array Operations**:
    
    *   **Aggregation**: Sum, count, max, min, average, and grouping.
        
    *   **Traversal**: Iterating through array elements (e.g., using loops).
        
    *   **Modification**: Changing values within the array.
        
    *   **Removal**: Deleting elements from the array.
        
    *   **Insertion**: Adding new elements to the array.
        
    *   **Search**: Finding specific values within the array (e.g., using filter).
        
6.  **Method Chaining**:
    
    *   Array methods can be chained to perform multiple operations in a single statement.
        
    *   This makes the code more concise and readable.
        
    *   javascriptCopylet result = array.filter(...).map(...).reduce(...);
        
7.  **Differences from Other Languages**:
    
    *   Unlike some other languages (e.g., Java), JavaScript arrays are dynamically typed and can change in size.
        
    *   JavaScript arrays can be created empty and filled later, and their length is not fixed.
        
8.  **Output Analysis**:
    
    *   When using new Array("a", "b", "c"), the array length is 3.
        
    *   When using new Array(3), the array length is 3, but it contains empty slots (not actual elements).

9. **Adding Elements to an Array**

 - To add a new car make to the list, you can use one of the following methods:

  ### 1. **Using push()**

  * Adds an element to the **end** of the array.
        
     ```javascript 
        carMakes.push("BMW");
        console.log(carMakes);
        
    - OUTPUT :  ["Nissan", "Ford", "Tata", "BMW"]
        
  * The new element (BMW) is added at index 3.
        
  ### 2. **Using unshift()**

  * Adds an element to the **beginning** of the array.
        
     ````javascript
          carMakes.unshift("Audi");
          console.log(carMakes);
        
    - OUTPUT : ["Audi", "Nissan", "Ford", "Tata", "BMW"]
        
  * The new element (Audi) is added at index 0, and the rest of the elements are shifted by one position.
        

10. **Removing Elements from an Array**

  To remove elements from the array, you can use one of the following methods:

  ### 1. **Using pop()**

  * Removes the **last element** from the array.
      
    ````javascript
        carMakes.pop();
        console.log(carMakes);      

      - OUTPUT ["Audi", "Nissan", "Ford", "Tata"]
      
  * The last element (BMW) is removed.
      

  ### 2. **Using shift()**

  *   Removes the **first element** from the array.
      
  *  ````javascript
           carMakes.shift();console.log(carMakes);
      
          OUTPUT: ["Nissan", "Ford", "Tata"]
      
  *   The first element (Audi) is removed.
      

11. **Creating an Array of Arrays**

  You can also create an **array of arrays** to store more complex data, such as car details (make, model, and color).

  ### Example:

  1. ```javascript
      let make = "Eagle";
      let model = "Talon TSI";
      let color = "blue";
      ```
  
  2. ```javascript
      let car = [];
      car.push(make);
      car.push(model);
      car.push(color);
      ```
  
  3. ```javascript
      let cars = [];
      cars.push(car);
      ```
  
  4. ```javascript
      console.log(cars);
      ```
  
  5. ```
      [["Eagle", "Talon TSI", "blue"]]
      ```
  
  * The outer array contains one element, which is another array with three elements:
      * 0: "Eagle" (make)
      * 1: "Talon TSI" (model)
      * 2: "blue" (color)


Summary of Key Concepts
-----------------------

1.  **First-Class Citizens**: Functions can be assigned to variables, passed as arguments, and returned from other functions.
    
2.  **Function Declaration**: Use function keyword, name, parameters, and body.
    
3.  **Function Invocation**: Call using function name and arguments.
    
4.  **Return Values**: Use return to specify a value; defaults to undefined.
    
5.  **Anonymous Functions**: Nameless functions, often used as arguments or IIFE.
    
6.  **Arrow Functions**: Compact syntax for anonymous functions, with some limitations.

7.  Arrays in JavaScript are versatile, dynamic, and can hold multiple data types.
    
8.  They can be created using literals or constructors, with literals being the preferred method.
    
9.  Common operations include traversal, modification, insertion, removal, and search.
    
10. Method chaining allows for concise and efficient code.
    
11. JavaScript arrays differ from those in other languages due to their dynamic nature and lack of fixed length.

12. Arrays in JavaScript can be declared using **square brackets** or the **Array constructor**.
    
13. Elements can be added to an array using **push()** (end) or **unshift()** (beginning).

14. Elements can be removed using **pop()** (end) or **shift()** (beginning).
    
15. Arrays can store other arrays, allowing for the creation of **multi-dimensional arrays**.
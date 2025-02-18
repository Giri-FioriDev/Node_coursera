# Server-Side JavaScript with Node.js  

This repository is dedicated to learning **Server-Side JavaScript with Node.js**, as part of a Coursera course. It serves as a practice ground for all the exercises and core concepts covered in the course.  

Here, you'll find code examples, projects, and notes that reflect my journey in mastering Node.js, from foundational concepts to more advanced topics. 

# Module 1: JavaScript Fundamentals

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



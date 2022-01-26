# Learn JavaScript Basics with Mojnu 
## What is JavaScript
- JavaScript is used for describing behaviours of the content, it is used to create and update HTML Content and CSS dynamically in our website- anything that moves, refreshes, or otherwise changes on your screen without requiring you to manually reload a web page.
### How to run javaScript on visual studio code
- download node and install
- command `node filename.js`
**or**
- click the run and debug button
### What is variable and rules of declare a variable
- **A variable is a named reference to a location in memory for storing data and it could be vary.**
- can not have space in variable name
- can not use special charecter in variable name without $ and -
- variable name can not begin with number. Ex: 365day is not correct to declare a variable
- to create a variable you can simply type => `var varName = value;`
- javascript is untyped, it means that you don't need to declare it's type.
- follow camel case when you declare a variable
- give meaning full variable name
### typeof Variable in JavaScript
- number
- string
- boolean
### some js method and their work
- `parseFloat(number)`: used to convert string to number
- `''(emtry string) + number`: used to convert number to string
- `toFixed(number)`: used for how many number count after decimal
- `Math.abs(number)`: convert negative number to positive number
- `Math.round(number)`: 4.49 = 4; 4.5 = 5
- `Math.ceil(number)`: 5.00000000001 = 6
- `Math.floor(number)`: 5.999999 = 5
- `Math.random()`: return a random number 0.361235654
- `new Date()`: return today date and time
- `pop()`: remove item from the last index of an array
- `push()`: add item to the last index of an array
- `shift()`: remove item from the 1st index of the array
- `unshift()`: add item to the 1st index of the array
- `toString()`: convert all array items to string
- `slice()`: return newArray which is the part of the existing array
- `splice()`: can remove, add and replace item to the array.
- `reverse()`: reverse the array
- `sort()`: return the newArray by Alphabecelly order
- `spilt()`: convert string to array
- `reduce()`: reduce method use calculate total number of an array
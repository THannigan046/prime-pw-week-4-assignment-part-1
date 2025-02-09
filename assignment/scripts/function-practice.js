console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'



function helloName( name ) {
  return 'Hello ' + name + '!';
};
// Remember to call the function to test
console.log('test, should print hello Jim!', helloName('Jim')) ;

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  let result = firstNumber + secondNumber;
  return result;
}
console.log('testing addition with 2 + 3, should print 5', addNumbers(2, 3));


// 4. Function to multiply three numbers & return the result
function multiplyThree(numberOne, numberTwo, numberThree) {
  let result = numberOne * numberTwo * numberThree;
  return result;
}
console.log('testing multiplication with 2, 2, and 3.', multiplyThree(2, 2, 3));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'testing isPositive with 3 - should say true', isPositive(3) );
console.log( 'testing isPositive with 0 - should say false', isPositive(0) );
console.log( 'testing isPositive with -3 - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

let zorp = [1, 2, 3, 4, 10]
let zeep = [7, 12, 69]

function getLast(array) {
  let i = array.length - 1;
  let last = array[i];
  return last;
}
console.log('testing getArray, should be 10', getLast(zorp));
console.log('testing getArray again, should be 69', getLast(zeep));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
//function find( value, array ){



function find(value, array) {
  let t;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      t = true;
      return t;
    } else {
      t = false;
    }
  }
  return t;
}

console.log('testing find, should say true', find(2, zorp));

console.log('testing find, should say false', find(99, zorp));


/*function find(value, array){
for( let element of array ){
  if ( array[i] === value ){
    return true;
} else {
  return false;
}
}
}
console.log(find(3, zorp));*/
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

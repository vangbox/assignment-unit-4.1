console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  console.log('Hello World');
}

// Call the function to test
console.log('Test - should say "Hello World!"', hello());

hello();

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log('in helloName');
  let myName = name;
  return name;
}


// Remember to call the function to test
helloName();
console.log(helloName("Hello, Jake"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  console.log('in addNumbers');
  let totalSum = firstNumber + secondNumber;

  // return firstNumber + secondNumber;
  return totalSum;
 
} //end of addNumbers

addNumbers();
console.log('adding 3 and 4 =', addNumbers(3,4));
console.log('adding 8 and 9 =', addNumbers(8,9));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber ){
  console.log('in multiplyThree right now');
  let totalSum = firstNumber * secondNumber * thirdNumber;
  return totalSum;
}//end of multiplyThree

multiplyThree();
console.log('muliplying, 3, 6 and 7 =', multiplyThree(3, 6, 7));
console.log('muliplying, 14, 32 and 99 =', multiplyThree(14, 32, 99));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  
  return array[array.length -1]; 
  }
console.log(getLast([3,4,5,6]));
console.log(getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (let i = 0; i < array.length; i++) {
    if (value===array[i]) {
      return true;
    }
  }
  return false;
}

console.log(find(34, [3,4,5]));
console.log(find(6, [1,3,6,5,4,0]));


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

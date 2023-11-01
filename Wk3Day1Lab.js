// Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1; // or num2, since they are equal
  }
}
const result = maxOfTwoNumbers(5, 10);
console.log(result); 

// Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree = function(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
};
const num1 = 2;
const num2 = 5;
const num3 = 7;
const max = maxOfThree(num1, num2, num3);
console.log(`The largest number is: ${max}`);

// Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(char) {
  char = char.toLowerCase();
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }
}
console.log(isCharAVowel('o')); // true
console.log(isCharAVowel('a')); // true
console.log(isCharAVowel('n')); // false

// Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

const sumArray = function(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
const numbers = [2, 4, 5];
const result2 = sumArray(numbers);
console.log(result2); 

// Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
function multiplyArray(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input is not an array');
  }
  if (numbers.length === 0) {
    return 0; 
  }
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      throw new Error('Array contains a non-numeric value');
    }
    product *= numbers[i];
  }
  return product;
}
const result1 = multiplyArray([2, 4, 5]);
console.log(result1); 





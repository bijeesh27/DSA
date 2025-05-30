// Recursion is a programming concept where a function calls itself in order to solve a problem.

// Factorial using Recursion

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log("Factorial : " + factorial(5));

//Fibonacci Series

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci : " + fibonacci(6));

// Sum of Array Elements Recursively

function sumOfArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumOfArray(arr.slice(1));
}

console.log("Sum of Array : " + sumOfArray([1, 2, 3, 4, 5, 6, 7]));

//Reverse a String Recursively

function reverseString(str) {
  if (str.length === 0) return "";
  return reverseString(str.slice(1)) + str[0];
}

console.log("Reverse a String : " + reverseString("hello"));

//Array Reverse Recursively

function xyz(arr) {
  
  if (arr.length == 0) return [];
  return xyz(arr.slice(1)).concat(arr[0]);
}

console.log("Array Reverse : " + xyz([1, 3, 5, 7]));

// String is a Palindrome

function palindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return palindrome(str.slice(1, -1));
}

console.log("isPalindrome : " + palindrome("malayalam"));

// Flatten a Nested Array

function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

let complexNestedArray = [
  1,
  [2, 3],
  [4, [5, [6, 7], 8], [9, [10, [11, [12, 13]]]]],
  14,
  [[15, 16], 17, [[[[18]]]]],
  19,
];

console.log(flatten(complexNestedArray));

//Sum of Digits

function sumOfDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

console.log(sumOfDigits(1234));

//Count the Number of Times a Character Appears in a String

function countOfChar(str, char) {
  if (str.length === 0) return 0;
  let count = str[0] === char ? 1 : 0;
  return count + countOfChar(str.slice(1), char);
}

console.log(countOfChar("mississippi", "s"));

//Find Maximum Number in an Array

function maxNumber(arr, index = 0) {
  if (index === arr.length - 1) return arr[index];
  return Math.max(arr[index], maxNumber(arr, index + 1));
}

console.log(maxNumber([3, 6, 29, 6, 11, 24, 15]));

//Check if a Number is a Power of Two

function powerOfTwo(n) {
  if (n === 1) return true;
  if (n < 1 || n % 2 !== 0) return false;
  return powerOfTwo(n / 2);
}

console.log(powerOfTwo(16));

//Find the GCD (Greatest Common Divisor)

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}


console.log(gcd(48, 18));

let arr = [1, 2, 3, 4, 5, 6];
function arrayReverse(arr, start, end) {
    if (start >= end) {
        return arr
    }

    [arr[start], arr[end]] = [arr[end], arr[start]];

    return arrayReverse(arr, start + 1, end - 1);
}

console.log(arrayReverse(arr, 0, arr.length - 1));
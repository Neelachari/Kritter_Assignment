// Problem Statement

// Write a program that normalizes a given input string. Normalization includes the
// following steps:

// 1. Remove any extra spaces from the beginning and end of the string.
// 2. Remove any special characters and punctuation, leaving only
// alphanumeric characters and spaces.
// 3. Replace multiple spaces between words with a single space.
// 4. Convert the cleaned string to camel case (i.e., the first letter of each word
// is capitalized, and all other letters are in lowercase).


// Input
// A single string that may contain uppercase letters, extra spaces, and special
// characters.

// Output
// A single normalized string in camel case.


// Example
// Input:
// " Hello! World@ This is a Test!. ";

// Output:
// "Hello World This Is A Test"


function Solve(input) {

    let newInput = input.trim()
    
   
    let NumStr = newInput.replace(/[^a-zA-Z0-9 ]/g, '')
    
   
    let spaceStr = NumStr.replace(/\s+/g, ' ')
    
    
    let words = spaceStr.split(' ')

    let camelcase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
  
    return camelcase

  }
  
  let input = " Hello! World@ This is a Test!. ";
  let ans = Solve(input);
  console.log(ans);  // Output: "Hello World This Is A Test"
  
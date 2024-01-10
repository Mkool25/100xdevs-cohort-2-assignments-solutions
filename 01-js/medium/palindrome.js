/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let x = str.replace(/[^a-zA-Z]/g, "").toLowerCase()
  let l = x.split("").length;
  let y = x.split("");
  let z = []
  
  for (let i = 0; i<l; i++){
    z[i] = y.pop()
  }

  let w = z.join("");
  return (w==x);
}
module.exports = isPalindrome;

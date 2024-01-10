/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let vowels = ["a","e","i","o","u"]
    let newArr = str.toLowerCase().split("")

    let total = 0
    vowels.forEach(function(vowel){
      newArr.forEach(function(Arr){
        if(vowel===Arr){
          total +=1
        }
      })
    })
    return total;
}

module.exports = countVowels;
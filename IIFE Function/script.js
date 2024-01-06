// IIFE_FUNCTION 

// 1.a. Starts Here---->
// Print odd numbers in an array
const oddnum = (function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      console.log("odd=>", i);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// 1.a ends here ---->

// 1.b starts here =>
// Convert all the strings to title caps in a string array

const capitalized = function (arr4) {
  return arr4.map(function (str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
  });
};
console.log("capitalized", capitalized(["hello all this is yusrin"]));

// 1.b ends here---->


// 1.c starts here =>
//Sum of all numbers in an array
const sumof = function (arr2) {
  let sum = 0;
  for (let k = 0; k < arr2.length; k++) {
    sum += arr2[k]; //=>sum = sum + arr2[k]
  }
  return sum;
};
console.log("Total Sumof Value :", sumof([1, 5, 8, 10, 7, 5, 55]));
// 1.c ends here---



//Return all the prime numbers in an array
// 1.d starts here =>
const primecheck = (function () {
  let number = [];
  for (let limit = 2; limit <= 100; limit++) {
    let flag = true;
    for (let n = 2; n <= limit; n++) {
      if (limit % n == 0 && n != limit) {
        flag = false;
      }
    }
    if (flag == true) {
      number.push(limit);
    }
  }
  return number;
}); console.log("PrimeNumber:", primecheck());
// 1.d Ends Here----

// 1.e Starts here =>
// Return all the palindromes in an array
let isPalindrome = (function (){
    let myArr = ['yusrin','smooky' ,'racecar', 'malayalam']
    let palindromes = []
    let arr = myArr.filter(function(c, d) {
      let palindrome = c.split('').reverse().join('')
       if(c == palindrome){
         palindromes.push(myArr[d])
       }
     })
     console.log("palindromes=>",palindromes)
   })()

// 1.e ends here =>


// 1.f Starts here =>
// 1.f Return median of two sorted arrays of the same size

const returnMedian = (function (arr1, arr2) {
   let mergedArray = arr1.concat(arr2).sort(function (a, b) {
      return a - b;
    });
   let median;
    if (mergedArray.length % 2 === 0) {
      median =
        (mergedArray[mergedArray.length / 2 - 1] +
          mergedArray[mergedArray.length / 2]) /
        2;
    } else {
      median = mergedArray[Math.floor(mergedArray.length / 2)];
    }
    console.log("Median:", median);
   
    
  })([1, 3, 5, 7], [2, 4, 6, 8]);
  // 1.f ends here =>


  // 1.g Starts here =>
 // 1.g Remove duplicates from an array

const removeDuplicates = (function (arr) {
  let uniquevalue = [];
  for (let val of arr) {
    if (arr.indexOf(val) == arr.lastIndexOf(val)) {
      uniquevalue.push(val);
    }
  }
  console.log("UniqueArray:",uniquevalue);
  return uniquevalue;
  
})([1, 2, 3, 4, 5, 6, 7, 3, 2, 4, 5, 1, 58, 5, 8, 87, 9, 10, 11, 15])

// 1.g Ends here =>

// 1.h Starts here =>
//Rotate an array by k times
const RotateArray = (function (arr3, NumOfRotations) {
    for (let d = 0; d < NumOfRotations; d++) {
      arr3.push(arr3.shift());
    }
    console.log("Rotate", arr3);
  }) ([1, 2, 4, 5, 6, 7, 8, 9], 1)

// 1.h ends here =>
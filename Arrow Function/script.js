//Arrow Function---

// 1.a. ---->
//Print odd numbers in an array
const oddnum = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 != 0) {
        console.log("odd=>",i);
      }
    }
  };
  oddnum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // 1.a ends here ---->

  // 1.b starts here =>
 //Convert all the strings to title caps in a string array
const capitalized =  (arr4) =>{
    return arr4.map( (str) => {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
      });
    });
  };
  
  console.log("capitalized",capitalized(["hello all this is yusrin"]));
  // 1.b ends here---->

  // 1.c starts here =>
  //Sum of all numbers in an array
const sumof = (arr2) => {
    let sum = 0;
    for (let k = 0; k < arr2.length; k++) {
      sum += arr2[k]; //=>sum = sum + arr2[k]
    }
    return sum;
  };
  console.log("Total Sumof Value :",sumof([1, 5, 8, 10, 7, 5, 55]));
  // 1.c ends here---


  // 1.d starts here =>
//Return all the prime numbers in an array
const primecheck = () => {
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
  };
  console.log("PrimeNumber:",primecheck());
  // 1.d Ends Here----


  // 1.e Starts here =>
 //Return all the palindromes in an array
 let isPalindrome = () => {
   let myArr = ['yusrin','smooky' ,'racecar', 'malayalam']
   let palindromes = []
   let arr = myArr.filter((c, d) =>{
     let palindrome = c.split('').reverse().join('')
      if(c == palindrome){
        palindromes.push(myArr[d])
      }
    })
    console.log("palindromes=>",palindromes)
  }
  isPalindrome()
  
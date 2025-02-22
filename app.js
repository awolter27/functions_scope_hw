// 1.1. What is the difference between a parameter and an argument?

/*
A parameter is one of the variables within a function. They are basically placeholders for the function arguements. An arugement is the actual value you insert into a method's parameters.
*/

// 1.2. Within a function, what is the difference between return and console.log?

/*
Return will stop the execution of the function and return the specified value (not in the console), which will then allow you to use and manipulate that value in other parts of the program. console.log is a print statement and displays the input in the console.
*/

// 1.3. What are the implications of the ability of a function to return a value?

/*
Return will stop the execution of the function and return the specified value (not in the console), which will then allow you to use and manipulate that value in other parts of the program.
*/

// 2. calculateCube
function calculateCube(num) {
    return num * num * num;
}
console.log(calculateCube(2)); //I'm expecting 8
console.log(calculateCube(3)); //I'm expecting 27
console.log(calculateCube(5)); //I'm expecting 125

// 3. isAVowel
function isAVowel(letter) {
    if (letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u') {
        return true;
    } else {
        return false;
    }
}
console.log(isAVowel('A')); // I'm expecting true
console.log(isAVowel('i')); // I'm expecting true
console.log(isAVowel('d')); // I'm expecting false

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return [word1.length, word2.length];
  }
  console.log(getTwoLengths('array', 'object')); // I'm expecting [5, 6]
  console.log(getTwoLengths('JavaScript', 'Java')); // I'm expecting [10, 4]
  console.log(getTwoLengths('General', 'Assembly')); // I'm expecting [7, 8]

// 5. sumArray
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
    }
    return sum;
 }
 console.log(sumArray([1, 2, 3])); // I'm expecting 6
 console.log(sumArray([-10, 0, 4, 30])); // I'm expecting 24
 console.log(sumArray([1.2, 3.5])); // I'm expecting 4.7

// 6.1 checkPrime
function checkPrime(num) {
    if(num < 0) {
      return 'You must choose a positive number'
    } else if(num % 1 !== 0) {
      return 'You must choose an integer'
    } else if(num === 0 || num === 1) {
      return false;
    } else {
       for(let i = 2; i < num; i++) {
          if(num % i === 0) {
          return false;
      } 
    }
    return true;
   } 
  }
  console.log(checkPrime(-10)); // I'm expecting 'You must choose a positive number'
  console.log(checkPrime(1.5)); // I'm expecting 'You must choose an integer'
  console.log(checkPrime(1)); // I'm expecting false
  console.log(checkPrime(3)); // I'm expecting true
  console.log(checkPrime(25)); // I'm expecting false

// 6.2 printPrimes
function printPrimes(num) {
    let arrOfPrimes = [];
    for(let i = 2; i <= num; i++) {
      if(checkPrime(i)) {
        arrOfPrimes.push(i);
      }
    }
    return arrOfPrimes;
  }
  console.log(printPrimes(1)); // I'm expecting an empty array
  console.log(printPrimes(1.5)); // I'm expecting an empty array
  console.log(printPrimes(5)); // I'm expecting [2, 3, 5]
  console.log(printPrimes(90)); // I'm expecting [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89]

// 7. printLongestWord
function printLongestWord(arr) {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
      if(longestWord.length < arr[i].length) {
        longestWord = arr[i];
      }
    }
    return longestWord;
  }
  console.log(printLongestWord(['village', 'a', 'smoke', 'chin', 'catalogue'])); // I'm expecting catalogue
  console.log(printLongestWord(['style', 'truck', 'right', 'quiet'])); // I'm expecting style
  console.log(printLongestWord(['window', 'laser', 'helpless', 'see', 'it', 'army', 'onomatopoeia'])); // I'm expecting onomatopoeia

// BONUS!

// 8.1 eulerFibo

function eulerFibo(num) {
  if(num < 0) {
    return [];
  } else if(num % 1 !== 0) {
    return [];
  } else {
    let arrOfFibo = [0, 1];
    for(let i = 2; i < num; i++) {
        arrOfFibo.push(arrOfFibo[i-1]+arrOfFibo[i-2]);
    }  
    return arrOfFibo; 
  }
}
console.log(eulerFibo(-5)); // I'm expecting an empty array
console.log(eulerFibo(5.425)); // I'm expecting an empty array
console.log(eulerFibo(7)); // I'm expecting [0, 1, 1, 2, 3, 5, 8]
console.log(eulerFibo(15)); // I'm expecting [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

// 8.2 eulerFibo
// I couldn't figure out how to answer the rest of prompt 8 without repeating my code
function eulerFiboEven(num) {
  if(num <= 0) {
    return [];
  } else if(num % 1 !== 0) {
    return [];
  } else {
    let arrOfFibo = eulerFibo(num);
    let arrOfFiboEven = [];
    for (let i = 0; i < arrOfFibo.length; i++) {
      if(arrOfFibo[i] % 2 === 0 && arrOfFibo[i] !== 0) {
        arrOfFiboEven.push(arrOfFibo[i]);
      }
    }  
    return arrOfFiboEven; 
  }
}
console.log(eulerFiboEven(2)); // I'm expecting an empty array
console.log(eulerFiboEven(7)); // I'm expecting [2, 8]
console.log(eulerFiboEven(15)); // I'm expecting [2, 8, 34, 144]

/*
Atttempt #1: I used a for loop with a nested for loop with a nested if statement, which seemed to work when I tested it out. I then tried to clean it up.
function eulerFiboEven(num) {
  if(num < 0) {
    return 'You must choose a positive number'
  } else if(num % 1 !== 0) {
    return 'You must choose an integer'
  } else {
    let arrOfFibo = [0, 1]; 
    let arrOfFiboEven = [];
    for(let i = 2; i < num; i++) {
        arrOfFibo.push(arrOfFibo[i-1]+arrOfFibo[i-2]);
        for (let i = 0; i < arrOfFibo.length; i++);
          if(arrOfFibo[i] % 2 === 0) {
            arrOfFiboEven.push(arrOfFibo[i]);
        }
    }  
    return arrOfFiboEven; 
  }
}
console.log(eulerFiboEven(2)); // I'm expecting an empty array
console.log(eulerFiboEven(7)); // I'm expecting [2, 8]
console.log(eulerFiboEven(15)); // I'm expecting [2, 8, 34, 144]
*/

// 8.3 eulerFibo
// I couldn't figure out how to answer the rest of prompt 8 without repeating my code
function eulerFiboSum(num) {
  if(num <= 0) {
    return [];
  } else if(num % 1 !== 0) {
    return [];
  } else {
    let arrOfFiboEven = eulerFiboEven(num);
    let sumOfFiboEven = 0;
    for(let i = 0; i < arrOfFiboEven.length; i++) {
      sumOfFiboEven += arrOfFiboEven[i];
    }
    return sumOfFiboEven; 
  }  
}
console.log(eulerFiboSum(2)); // I'm expecting an empty array
console.log(eulerFiboSum(7)); // I'm expecting 0
console.log(eulerFiboSum(15)); // I'm expecting 188

// 8.4 eulerFibo
// I couldn't figure out how to answer the rest of prompt 8 without repeating my code
function eulerFiboSum4Mil(num) {
  if(num <= 0) {
    return [];
  } else if(num % 1 !== 0) {
    return [];
  } else {
    let sumOfFiboEven = eulerFiboSum(num);
    if(sumOfFiboEven <= 4000000) {
      return sumOfFiboEven;
      }
    return "You're number is greater than 4 million";
  }  
}
console.log(eulerFiboSum4Mil(2)); // I'm expecting an empty array
console.log(eulerFiboSum4Mil(7)); // I'm expecting 0
console.log(eulerFiboSum4Mil(15)); // I'm expecting 188
console.log(eulerFiboSum4Mil(150)); // I'm expecting an empty array

// 9. findNeedle
function findNeedle(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].toLowerCase() === 'needle') {
      return `I found the needle at position ${[i]}`;
    }
  }
  return 'You did not find the needle'
}
console.log(findNeedle(['pest', 'buy', 'sequence', 'chain', 'zero'])); // I'm expecting 'You did not find the needle'
console.log(findNeedle(['traction', 'hen', 'needle', 'acquaintance'])); // I'm expecting `I found the needle at position 2'
console.log(findNeedle(['reflex', 'equip', 'upset', 'mosaic', 'sample', 'loan', 'needle'])); // I'm expecting `I found the needle at position 6'

// 10. sumPositive
function sumPositive(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
}
console.log(sumPositive([1, 2, 3])); // I'm expecting 6
console.log(sumPositive([-10, 0, 4, 30])); // I'm expecting 34
console.log(sumPositive([-5, -3, -6, -2342])); // I'm expecting 0
//ALAB 308.3.1: Practical Loops

/*Part 1: Fizz Buzz
- Loop through all numbers from 1 to 100.
-If a number is divisible by 3, log “Fizz.”
-If a number is divisible by 5, log “Buzz.”
-If a number is divisible by both 3 and 5, log “Fizz Buzz.”
-If a number is not divisible by either 3 or 5, log the number.*/

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }


// Part 2: Prime Time
/*Write a script that accomplishes the following:
-Declare an arbitrary number, n.
-Create a loop that searches for the next prime number, starting at n and incrementing from there.
-As soon as you find the prime number, log that number and exit the loop.
-For example, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, 
 and if n is 9, it should log 11.*/

    
 let n = 14;
 let nextPrime = n;
 let foundPrime = false;
 let i = n + 1;
 let j = n + 1;

 for (i = n + 1; i < 100; i++) {
   for (j = 2; j < i; j++) {
     if (i % j === 0) {
       break;
     }
   }
   if (j === i) {
     nextPrime = i;
     foundPrime = true;
     break;
   }
 }
 if (foundPrime) {
   console.log(nextPrime);
 }
 
        

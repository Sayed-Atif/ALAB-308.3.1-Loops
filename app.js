

//ALAB 308.3.1: Practical Loops


/*Part 1: Fizz Buzz
- Loop through all numbers from 1 to 100.
-If a number is divisible by 3, log “Fizz.”
-If a number is divisible by 5, log “Buzz.”
-If a number is divisible by both 3 and 5, log “Fizz Buzz.”
-If a number is not divisible by either 3 or 5, log the number.*/


for (let k = 1; k <= 100; k++) {
  if (k % 3 === 0 && k % 5 === 0) {
    console.log("FizzBuzz");
  } else if (k % 3 === 0) {
    console.log("Fizz");
  } else if (k % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(k);
  }
}


// Part 2: Prime Time
/*Write a script that accomplishes the following:
-Declare an arbitrary number, n.
-Create a loop that searches for the next prime number, starting at n and incrementing from there.
-As soon as you find the prime number, log that number and exit the loop.
-For example, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, 
 and if n is 9, it should log 11.*/

    
 let n = 4;
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
   console.log("The next prime number after " + n + " is " + nextPrime);
 }
 
     
 
// Part 3: Feeling Loopy
/*The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:
ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26

Your task is to write a script that accomplishes the following:
-Loop through the characters of a given CSV string.
-Store each “cell” of data in a variable.
-When you encounter a comma, move to the next cell.
-When you encounter the “\r\n” sequence, move to the next “row.”
-Log each row of data.
*/

//Using for loop:
let csv = "ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry Cook,19\r\n63,Blaine,Quiz Master,58\r\n98,Bill,Doctor’s Assistant,26";
let rows = csv.split("\r\n");
for(let m = 0; m < rows.length; m++){
      let cells = rows[m].split(",");
      console.log(cells[0], cells[1], cells[2], cells[3]);
  }

//Using while loop
// let csv = "ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry Cook,19\r\n63,Blaine,Quiz Master,58\r\n98,Bill,Doctor’s Assistant,26";
// let rows = csv.split("\r\n");
// while (rows.length > 0) {
//   console.log(rows.shift());
// }


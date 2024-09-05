/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/


// for loop

// for(let i = 1; i <= 40; i++) {
//     if(i % 2 === 1) {
//         continue;
//     }
//     console.log(i);
// }


// while loop


// let num = 1;

// while (num <= 40) {
//     if (num % 2 !== 0) {
//         num++;  // Skip odd numbers
//         continue;
//     }
//      console.log(num);  // Print even numbers
//     num++;
// }






/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/


// for loop

// for(let i = 55; i <= 85; i++) {
//     if(i % 2 === 0 || i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }


// while loop


let num = 55;

while (num <= 85) {
    if (num % 2 === 0 || num % 5 === 0) {
        num++;
        continue;  // Skip even numbers and numbers divisible by 5
    }
    console.log(num);  // Print odd numbers not divisible by 5
    num++;
}
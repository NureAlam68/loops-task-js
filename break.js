/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

// for loop

// for(let i = 1; i <= 200; i++) {
//     console.log(i);
//     if(i >= 100) {
//         break;
//     }
// }


// while loop


// let i = 1;

// while(i <= 200) {
//     console.log(i);
//     if(i >= 100) {
//         break;
//     }
//     i++;
// }





/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/


// let i = 1;

// let sum = 0;

// while(i <= 100) {
//     if(sum >= 100){
//         break;
//     }
//     sum = sum + i;
//     console.log(i);
//     i++;
// }
// console.log('sum:', sum);

// or

// let sum = 0;
// let num = 1;

// while (true) {
//   sum += num;
//   if (sum >= 100) {
//     break;
//   }
//   num++;
// }

// console.log(`The final sum is: ${sum}`);
// console.log(`The last number added was: ${num}`);




/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/



// for (let num = 1; num <= 100; num++) {
//     if (Number.isInteger(Math.sqrt(num))) {  // Check if the number is a perfect square
//       console.log(`First square number encountered: ${num}`);
//       break;
//     }
//   }


// or 

for(let n = 1; n <= 100; n++) {
    if(n = n * n) {
        console.log('the first square number:', n);
        break;
    }
}
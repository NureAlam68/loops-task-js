/***

Implement a countdown timer that counts down from 81 to 65.

 */





let count = 82;
const timer = setInterval(function() {
    count--;
    console.log(count);
    if (count === 65) {
    clearInterval(timer);
    console.log("Time's up!");
    }
}, 1000);
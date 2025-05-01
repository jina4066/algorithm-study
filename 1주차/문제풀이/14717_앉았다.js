const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const [a, b] = input.split(" ").map(Number);

const total = 9 * 17;
let ans = 0;

if (a === b) {
  ans = total - (10 - a);
} else {
  const mypoint = (a + b) % 10;

  for (let i = 1; i <= 10; i++) {
    for (let j = i + 1; j <= 10; j++) {
      if (mypoint > (i + j) % 10) {
        if ((i === a && j === b) || (i === b && j === a)) {
          continue;
        } else if (i === a || j === a || i === b || j === b) {
          ans += 2;
        } else {
          ans += 4;
        }
      }
    }
  }
}

console.log((ans / total).toFixed(3));

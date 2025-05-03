const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [r, c] = input[0].split(" ").map((n) => Number(n));

let map = []; // [[1,0,0],[2,0,0]]

for (let i = 1; i <= input.length - 1; ++i) {
  let str = input[i];
  let arr = str.split("").map((n) => Number(n));
  map.push(arr);
}

let least = Math.min(r, c);
let answer = 1;

for (let i = least; i >= 2; --i) {
  for (let sc = 0; sc <= c - i; ++sc) {
    for (let sr = 0; sr <= r - i; ++sr) {
      let v = map[sr][sc];
      if (
        v === map[sr][sc + i - 1] &&
        v === map[sr + i - 1][sc] &&
        v === map[sr + i - 1][sc + i - 1]
      ) {
        answer = i * i;
        console.log(answer);
        return;
      }
    }
  }
}

console.log(answer);

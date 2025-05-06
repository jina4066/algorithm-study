const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
let cups = [1, 2, 3];

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  const xi = cups.indexOf(x);
  const yi = cups.indexOf(y);

  [cups[xi], cups[yi]] = [cups[yi], cups[xi]];
}

console.log(cups[0]);

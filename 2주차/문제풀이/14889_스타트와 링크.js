onst fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const ls = input.slice(1).map(line => line.split(" ").map(Number));

let visited = new Array(N).fill(false);
let ans = Number.MAX_SAFE_INTEGER;

function backtrack(depth, idx) {
    if (depth === N / 2) {
        let S_team = [], L_team = [];

        for (let i = 0; i < N; i++) {
            if (visited[i]) S_team.push(i);
            else L_team.push(i);
        }

        let S_score = 0, L_score = 0;

        for (let i of S_team) {
            for (let j of S_team) {
                S_score += ls[i][j];
            }
        }

        for (let i of L_team) {
            for (let j of L_team) {
                L_score += ls[i][j];
            }
        }

        ans = Math.min(ans, Math.abs(S_score - L_score));
        return;
    }

    for (let i = idx; i < N; i++) {
        visited[i] = true;
        backtrack(depth + 1, i + 1);
        visited[i] = false;
    }
}

backtrack(0, 0);

console.log(ans);
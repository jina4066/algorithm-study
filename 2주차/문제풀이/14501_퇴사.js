const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +input.shift();
const payChart = input.map((info) => info.split(" ").map((val) => +val));

const getMaxPay = () => {
  let max = -Infinity;

  const dfs = (idx, total) => {
    max = Math.max(max, total);

    for (let i = idx; i < N; i++) {
      const [time, pay] = payChart[i];
      const nextWorkDay = i + time;

      dfs(nextWorkDay, nextWorkDay > N ? total : total + pay);
    }

    return max;
  };

  return dfs(0, 0);
};

console.log(getMaxPay());

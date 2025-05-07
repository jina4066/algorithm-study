const fs = require("fs");
const inputFilePath =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(inputFilePath, "utf-8")
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const BOARD_SIZE = 5;

const board = input.slice(0, BOARD_SIZE);
const says = input.slice(BOARD_SIZE).flat();

const checkBingo = () => {
  let bingoCount = 0;

  for (let i = 0; i < BOARD_SIZE; i++) {
    let horizontal = 0,
      vertical = 0;
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (!board[i][j]) horizontal++;
      if (!board[j][i]) vertical++;
    }
    if (horizontal === BOARD_SIZE) bingoCount++;
    if (vertical === BOARD_SIZE) bingoCount++;
  }

  let rightDiagonal = 0,
    leftDiagonal = 0;
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (!board[i][i]) rightDiagonal++;
    if (!board[i][BOARD_SIZE - i - 1]) leftDiagonal++;
  }
  if (rightDiagonal === BOARD_SIZE) bingoCount++;
  if (leftDiagonal === BOARD_SIZE) bingoCount++;

  return bingoCount;
};

const markNumber = (number) => {
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (board[i][j] === number) {
        board[i][j] = 0;
        return;
      }
    }
  }
};

const findBingo = () => {
  let sayCount = 0;
  for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
    sayCount++;
    markNumber(says[i]);
    if (checkBingo() >= 3) {
      console.log(sayCount);
      return;
    }
  }
};

findBingo();

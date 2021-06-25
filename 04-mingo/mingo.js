// Mingo - The game of Mingo involves 100 x 100 board with unique positive whole number in the range of 1 to 1,000,000 randomly distributed in the cells. Unique numbers are "called" one at a time and the goal is to have a "Mingo" which is an entire row or column of cells with numbers that have been "called"; one might also form a diagonal from corner to corner with number that have been "called".

// Write a function that takes as parametrers a square array of 100 x 100 positive whole numbers and a list of "called" numbers. Your function will report whether a "mingo" occurs, and after how many called numbers to the first mingo occurs. You may assume a valid input.

let board = [];
let mingoList = [];

// Create and populate a board that is 'dim' rows and columns with a range
// of numbers from 1 - max
function generateBoard(dim, max) {
  let usedNum = {};
  for (let i = 0; i < dim; i++) {
    let row = [];
    for (let j = 0; j < dim; j++) {
      row.push(getRandomInt(max, usedNum));
    }
    board.push(row);
  }
  console.log(`This board has unique values in each cell: ${verifyBoard()}`);
}

// Generate a random unique number in the target list tracker
function getRandomInt(max, target) {
  let ranNum = Math.floor((Math.random() * max) + 1);
  while (target[ranNum]) {
    ranNum = Math.floor((Math.random() * max) + 1);
  }
  target[ranNum] = true;
  return ranNum
}

// Check that each entry on the board is unique
function verifyBoard() {
  let usedNum = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (usedNum[board[i][j]]) {
        return false
      } else {
        usedNum[board[i][j]] = true;
      }
    }
  }
  return true
}

function verifyList() {
  let usedNum = {};
  for (let i; i < mingoList.length; i++) {
    if (usedNum[mingoList[i]]) {
      return false
    } else {
      usedNum[mingoList[i]] = true;
    }
  }
  return true
}

function generateList(length, max) {
  let usedNum = {};
  for (let i = 0; i < length; i++) {
    mingoList.push(getRandomInt(max, usedNum));
  }
  console.log(`The list contains only unique values: ${verifyList()}`);
}

function playGame() {
  let win = false;
  let turns = 0;
  // Go until either mingoList.length or win
  while (win === false) {
    if (checkRowsColumns(turns)) {
      win = true;
    } else if (checkDiagonals()) {
      win = true;
    } else {
      turns++;
    }
  }
  if (win === true) {
    console.table(board);
    console.log(turns);
    console.log(mingoList);
  } else {
    console.log("Sorry, no winners here");
  }
}

function checkRowsColumns(turns) {
  let rowCount;
  let columnCount;
  for (let i = 0; i < 5; i++) {
    rowCount = 0;
    columnCount = 0;
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < turns; k++) {
        //check row conditions
        if (board[i][j] === mingoList[k]) {
          rowCount++;
          break;
          // check column conditions
        } else if (board[j][i] === mingoList[k]) {
          columnCount++;
          break;
        }
      }
      if (rowCount === 5) {
        console.log(`row victory`);
        return true
      } else if (columnCount === 5) {
        console.log(`row victory`);
        return true
      }
    }
  }
  return false
}

function checkDiagonals() {
}

generateBoard(5, 25);
generateList(25, 25)
playGame();


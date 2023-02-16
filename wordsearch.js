// transpose the array
const transpose = function (matrix) {
  const arr = [];
  let row = matrix.length;
  let col = matrix[0].length;

  for (let i = 0; i < col; i++) {
    arr[i] = Array(row);
  }

  for (let j = 0; j < row; j++) {
    for (let i = 0; i < col; i++) {
      arr[i][j] = matrix[j][i];
    }
  }
  return arr;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  // can implement vertical join
  const verticalJoin = transpose(horizontalJoin).map((ls) => ls.join(""));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

// vertical join for the loop of array
// loop through vertically, return true/false
// if neither are true return false

module.exports = wordSearch;
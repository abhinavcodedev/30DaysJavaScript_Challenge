

//Activity 1: Median of Two Sorted Arrays

function findMedianSortedArray(num1, num2) {
    const mergedArray = [];
    let p1 = 0; //* Pointer for num1
    let p2 = 0; //* Pointer for num2
  
    while (p1 < num1.length && p2 < num2.length) {
      if (num1[p1] <= num2[p2]) {
        mergedArray.push(num1[p1]);
        p1++;
      } else {
        mergedArray.push(num2[p2]);
        p2++;
      }
    }
  
    while (p1 < num1.length) {
      mergedArray.push(num1[p1]);
      p1++;
    }
    while (p2 < num2.length) {
      mergedArray.push(num2[p2]);
      p2++;
    }
  
    const length = mergedArray.length;
    const middle = Math.floor(length / 2);
    
    if (length % 2 === 0) {
      return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
    } else {
      return mergedArray[middle];
    }
  }
  
  const num1 = [1, 3];
  const num2 = [2, 4, 5];
  const median = findMedianSortedArray(num1, num2);
  console.log(median); //* Output: 3
  
  const n1 = [1,2,3]
  const n2 = [4,5,6]
  const findMedian = findMedianSortedArray(n1, n2)
  console.log(findMedian)//* Output: 3.5

  //Activity 2: Merge k sorted list

  class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeKSortedList(lists) {
    if (lists.length === 0) {
      return null;
    }
  
    for (let i = 1; i < lists.length; i++) {
      lists[0] = merge(lists[0], lists[i]);
    }
  
    return lists[0];
  }
  
  function merge(l1, l2) {
    if (l1 === null) {
      return l2;
    }
    if (l2 === null) {
      return l1;
    }
  
    if (l1.val < l2.val) {
      l1.next = merge(l1.next, l2);
      return l1;
    } else {
      l2.next = merge(l1, l2.next);
      return l2;
    }
  }
  
  function printList(node) {
    let result = [];
    while (node !== null) {
      result.push(node.val);
      node = node.next;
    }
    return result.join(" -> ");
  }
  
  const l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
  const lists = [l1];
  console.log(printList(mergeKSortedList(lists))); //* Output: 1->3->5

  //Activity 3: Trapping rain Water

  function trapRainWater(height) {
    if (height.length === 0) {
      return 0;
    }
  
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;
  
    while (left <= right) {
      if (height[left] <= height[right]) {
        if (height[left] >= leftMax) {
          leftMax = height[left];
        } else {
          waterTrapped += leftMax - height[left];
        }
        left++;
      } else {
        if (height[right] >= rightMax) {
          rightMax = height[right];
        } else {
          waterTrapped += rightMax - height[right];
        }
        right--;
      }
    }
  
    return waterTrapped;
  }

  const height = [2, 1, 0, 2, 2, 0, 2];
  console.log(trapRainWater(height)); //* Output: 5

  //Activity 4: N-Queens

  function solveNQueens(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
  
    function backtrack(row) {
      if (row === n) {
        solutions.push(board.map(r => r.join('')));
        return;
      }
      
      for (let col = 0; col < n; col++) {
        if (isSafe(row, col)) {
          board[row][col] = 'Q';
          backtrack(row + 1);
          board[row][col] = '.';
        }
      }
    }
  
    function isSafe(row, col) {
      //* Check column
      for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false;
      }
  
      //* Check upper-left diagonal
      for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
      }
  
      //* Check upper-right diagonal
      for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') return false;
      }
  
      return true;
    }
  
    backtrack(0);
    return solutions;
  }
  

  const n = 4;
  const result = solveNQueens(n);
  console.log(result);
  
//* Output:

//? [
//?     [".Q..", "...Q", "Q...", "..Q."],
//?     ["..Q.", "Q...", "...Q", ".Q.."]
//?   ]

//Activity 5: Word Ladder

function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0; 

    const wordSet = new Set(wordList);
    const queue = [[beginWord, 1]]; 
    const visited = new Set();
    visited.add(beginWord);

    while (queue.length > 0) {
        const [currentWord, level] = queue.shift();

        for (let i = 0; i < currentWord.length; i++) {
            for (let charCode = 'a'.charCodeAt(0); charCode <= 'z'.charCodeAt(0); charCode++) {
                const nextWord = currentWord.slice(0, i) + String.fromCharCode(charCode) + currentWord.slice(i + 1);

                if (nextWord === endWord) return level + 1;
                if (wordSet.has(nextWord) && !visited.has(nextWord)) {
                    visited.add(nextWord);
                    queue.push([nextWord, level + 1]);
                }
            }
        }
    }

    return 0;
}

const beginWord = "hot";
const endWord = "dog";
const wordList = ["hot", "dot", "dog", "lot", "log"];
console.log(ladderLength(beginWord, endWord, wordList)); //* Output: 3
  
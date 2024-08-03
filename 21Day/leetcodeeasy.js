

// Activity 1: Two Sum
// Task 1: Solve the "Two Sum" problem on LeetCode.
//Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
//Log the indices for a few test cases.

function twoSum(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numMap.has(complement)) {
        return [numMap.get(complement), i];
      }
      numMap.set(nums[i], i);
    }
    return null;
  }
  
  const testCases = [
    { nums: [2, 7, 11, 15], target: 9 },
    { nums: [3, 2, 4], target: 6 },
    { nums: [3, 3], target: 6 },
    { nums: [1, 5, 3, 7, 9], target: 12 },
    { nums: [1, 2, 3, 4, 5], target: 10 },
  ];
  
  testCases.forEach(({ nums, target }, index) => {
    const result = twoSum(nums, target);
    console.log(`Test Case ${index + 1}:`, result);
  });


// Activity 2: Reverse Integer
/**Task 2:  Solve the "Reverse Integer" problem on LeetCode.
Write a function that takes an integer and returns it with its digits reversed.
Handle edge cases like negative numbers and numbers ending in zero.
Log the reversed integers for a few test cases.**/

function reverseInteger(x) {
    const isNegative = x < 0;
    let reversedNumber = parseInt(
      Math.abs(x).toString().split("").reverse().join(""),
      10
    );
  
    if (reversedNumber > 2 ** 31 - 1) {
      return 0;
    }
  
    return isNegative ? -reversedNumber : reversedNumber;
  }
  
  const testCases2 = [123, -123, 120, 0, 1534236469, -2147483412];
  
  testCases2.forEach((num, index) => {
    const result = reverseInteger(num);
    console.log(`Test Case ${index + 1}: ${num} reversed is ${result}`);
  });



// Activity 3: Palindrome Number
/*// Task 3: Solve the "Palindrome Number" problem on LeetCode.
Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
Log the result for a few test cases, including edge cases like negative numbers.*/


function isPalindrome(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
      return false;
    }
  
    let reversed = 0;
    let original = x;
  
    while (x > 0) {
      reversed = reversed * 10 + (x % 10);
      x = Math.floor(x / 10);
    }
  
    return original === reversed;
  }
  
  const testCases3 = [121, -121, 10, 0, 12321];
  testCases3.forEach((num) => {
    console.log(`Number: ${num}, Is Palindrome: ${isPalindrome(num)}`);
  });



// Activity 4: Merge Two Sorted Lists
/*Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
Create a few test cases with linked lists and log the merged list.*/

class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeTwoLists(list1, list2) {
    const dummy = new ListNode();
    let current = dummy;
  
    while (list1 && list2) {
      if (list1.val < list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    current.next = list1 || list2;
  
    return dummy.next;
  }
  
  function createLinkedList(arr) {
    const dummy = new ListNode();
    let current = dummy;
    for (const val of arr) {
      current.next = new ListNode(val);
      current = current.next;
    }
    return dummy.next;
  }
  
  function printLinkedList(list) {
    const result = [];
    while (list) {
      result.push(list.val);
      list = list.next;
    }
    console.log(result.join(" -> "));
  }
  
  const list1 = createLinkedList([1, 2, 4]);
  const list2 = createLinkedList([1, 3, 4]);
  const mergedList = mergeTwoLists(list1, list2);
  
  console.log("Merged List:");
  printLinkedList(mergedList);
  
  

// Activity 5: Valid Parentheses
/* Task 5:  Solve the "Valid Parentheses" problem on LeetCode.
Write a function that takes a string containing just the characters (), [], {}, and determines if the input string is valid.
A string is valid if open brackets are closed in the correct order.
Log the result for a few test cases.*/

  function isValid(s) {
    const stack = [];
    const matchingBrackets = {
      ")": "(",
      "}": "{",
      "]": "[",
    };
  
    for (const char of s) {
      if (char in matchingBrackets) {
        if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
          return false;
        }
      } else {
        stack.push(char);
      }
    }
  
    return stack.length === 0;
  }
  
  const testCases5 = [
    { input: "()", expected: true },
    { input: "()[]{}", expected: true },
    { input: "(]", expected: false },
    { input: "([)]", expected: false },
    { input: "{[]}", expected: true },
  ];
  
  testCases5.forEach(({ input, expected }) => {
    const result = isValid(input);
    console.log(`Input: "${input}", Is Valid: ${result}, Expected: ${expected}`);
  });
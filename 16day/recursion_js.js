
// Activity 1: Basic Recursion

//Task 1: Write a recursive fun to calculate the factorial of a number. 
        //Log result for a few test cases

        function factorial(n) {
            if (n <= 1) {
                return 1;
            } else {
                return n * factorial(n - 1);
            }
        }
        
        // Test cases
        const testCases = [0, 1, 2, 3, 4, 5, 10];
        
        testCases.forEach(testCase => {
            console.log(`Factorial of ${testCase} is ${factorial(testCase)}`);
        });
        
        //Task 2: Write a recursive fun to calculate the nth Fibonacci number. 
                //Log result for a few test cases
        
        function fibonacci(n) {
            if (n <= 1) {
            return n;
            }
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
        testCases.forEach((n) => {
            console.log(`Fibonacci(${n}) = ${fibonacci(n)}`);
        });
        
        
        //Activity 2: Recursion with Array
        
        //Task 3: Write a recursive fun to find umof all elemenr=ts in an array . 
                //Log result for a few test cases
        
        function sumArray(arr) {
        //base case: if the array is empty, return 0
            if (arr.length === 0) {
                return 0;
            }
            return arr[0] + sumArray(arr.slice(1));
        }
        
        // Test cases
        const testcases = [
            { input: [1, 2, 3, 4, 5], expected: 15 },
            { input: [10, 20, 30], expected: 60 },
            { input: [-1, -2, -3, -4, -5], expected: -15 },
            { input: [100], expected: 100 },
            { input: [], expected: 0 }
        ];
        
        testcases.forEach(({ input, expected }, index) => {
            const result = sumArray(input);
            console.log(`Test Case ${index + 1}: Input: ${input}, Expected: ${expected}, Result: ${result}`);
        });
        
        //Task 4: Write a recursive fun to find maximum element in an array. 
                //Log result for a few test cases
        function findMax(arr, n) {
            // Base case: if there's only one element, it's the maximum
            if (n === 1) {
                return arr[0];
            }
            // Recursively find the maximum of the remaining array
            const maxOfRest = findMax(arr, n - 1);
            // Return the maximum of the last element and the maximum of the rest
            return Math.max(arr[n - 1], maxOfRest);
        }
                  
        // Helper function to initiate the recursion
        function getMax(arr) {
            return findMax(arr, arr.length);
            }
        
        // Test cases
        const testCase = [
            [1, 2, 3, 4, 5],
            [5, 4, 3, 2, 1],
            [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5],
            [-1, -2, -3, -4, -5],
            [100, 200, 300, 400, 500, 600]
          ];
          
          // Logging results for test cases
          testCase.forEach((testCase, index) => {
            console.log(`Test Case ${index + 1}: Array: [${testCase}] -> Max Element: ${getMax(testCase)}`);
          });
        
        
        //Activity 3: String Manipulation with Recursion
        
          //Task 5: Write a recursive fun to reverse a string. 
                    //Log result for a few test cases
        
        function reverseString(str) {
            if (str === "") {
                 return "";
            }              
             return str[str.length - 1] + reverseString(str.slice(0, -1));
        }
        
        // Test cases
        const testCasess = [
            "hello",
            "world",
            "JavaScript",
            "recursion",
            "abcd",
            ""
          ];
          
          // Logging results for test cases
          testCasess.forEach((testCase, index) => {
            console.log(`Test Case ${index + 1}: String: "${testCase}" -> Reversed: "${reverseString(testCase)}"`);
          });
        
          //Task 6: Write a recursive fun to check if a string is a palindrome. 
                    //Log result for a few test cases
        
        function isPalindrome(str, start, end) {
        // Base case: if the start index is greater than or equal to the end index
            if (start >= end) {
                return true;
            } 
        // If the characters at the start and end indices do not match
            if (str[start] !== str[end]) {
                 return false;
            }
            return isPalindrome(str, start + 1, end - 1);
        }
        
        // Helper function to initiate the recursion
        function checkPalindrome(str) {
            return isPalindrome(str, 0, str.length - 1);
        }
        // Test cases
        const testCasesss = [
            "racecar",
            "hello",
            "madam",
            "12321",
            "abccba",
            "notapalindrome"
          ];
        
        testCasesss.forEach((testCase, index) => {
            console.log(`Test Case ${index + 1}: String: "${testCase}" -> Is Palindrome: ${checkPalindrome(testCase)}`);
        });
        
        //Activity 4: Recursive Search
        
        //Task 7: Write a recursive fun to perform a binary search on a sorted array. 
                //Log result for a few test cases
        
        function binarySearch(arr, target, low, high) {
        // Base case: if the range is invalid
            if (low > high) {
                return -1; 
            }
        
           const mid = Math.floor((low + high) / 2);
            if (arr[mid] === target) {
                return mid;
            }
            
            if (arr[mid] > target) {
                return binarySearch(arr, target, low, mid - 1);
            }
            return binarySearch(arr, target, mid + 1, high);
        }
        // Helper function to initiate the recursion
        function performBinarySearch(arr, target) {
            return binarySearch(arr, target, 0, arr.length - 1);
        }
        
        // Test cases
        const testcasess = [
            { array: [1, 2, 3, 4, 5], target: 3 },
            { array: [10, 20, 30, 40, 50], target: 40 },
            { array: [100, 200, 300, 400, 500], target: 100 },
            { array: [5, 10, 15, 20, 25, 30], target: 35 },
            { array: [1, 3, 5, 7, 9], target: 4 }
          ];
        
        testcasess.forEach((testCase, index) => {
            const { array, target } = testCase;
            const result = performBinarySearch(array, target);
            console.log(`Test Case ${index + 1}: Array: [${array}], Target: ${target} -> Index: ${result}`);
          });
        
          
        //Task 8: Write a recursive fun to to cont the occurrences of a target element in an array. 
                //Log result for a few test cases
        
        function countOccurrences(arr, target, index) {
        // Base case: if the index reaches the end of the array
            if (index === arr.length) {
                 return 0;
            }
                  
            // Count the current element if it matches the target
             const count = arr[index] === target ? 1 : 0;
            // Recur for the remaining elements
            return count + countOccurrences(arr, target, index + 1);
        }
        
        // Helper function to initiate the recursion
        function getCount(arr, target) {
            return countOccurrences(arr, target, 0);
        }
        
        // Test cases
        const testcase = [
            { array: [1, 2, 3, 4, 5, 3, 3], target: 3 },
            { array: [5, 4, 3, 2, 1], target: 2 },
            { array: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], target: 5 },
            { array: [-1, -2, -3, -4, -5], target: -1 },
            { array: [100, 200, 300, 400, 500, 600], target: 1000 }
          ];
          
          testcase.forEach((testCase, index) => {
            const { array, target } = testCase;
            console.log(`Test Case ${index + 1}: Array: [${array}] -> Target: ${target} -> Count: ${getCount(array, target)}`);
          });
        
        //Activity 5: Tree Traversal (Optional)
        
        //Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
        
        //Task 10: Write a recursive funstion to calculate the depth of a binary of a binary tree. Log the result for a few test cases.
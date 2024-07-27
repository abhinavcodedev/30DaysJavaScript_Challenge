

// 3:  Closures in Loops

//Task 5: Write a loop that creates an array of functions. Each function should log its index when called. 
        //Use a closure to ensure each function logs the correct index.

        // function loopClosure() {
        //     const functions = [];
        //     for (let i = 0; i < 10; i++) {
        //       functions[i] = (function (index) {
        //         return function () {
        //           console.log(index);
        //         };
        //       })(i);
        //     }
        //     functions[0]();
        //     functions[1]();
        //     functions[2]();
        //   }
        //   loopClosure();

        const createFunctions = () => {
            const functions = []
        
            for (let i = 0; i < 5; i++) {
                functions.push(() => {
                    console.log(i)
                })
            }
        
            return functions
        }
        
        const functions = createFunctions()
        functions.forEach(func=>func())
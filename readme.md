                    TIME, TIDE AND JAVASCRIPT...WAITS FOR NONE...!

-> Execution context: Everything in JavaScript happens inside an execution context.

Two components of execution context
1. Memory Component or Variable Environment where all variables stored in a key value pair.
2. Code Component or Thread of Execution where all code execute like a thread one line at a time.

-> Call Stack maintains the order of execution of excution contexts.

-> Hoisting: It is a phenomenon by which we can access the function or variables before declaring or defining it. This is due to execution context.

-> If our JS file is empty, then also js engine creates global execution context with window and this object in the browser. It is created by js engine which is different for different browsers.
1. If we create any variable in global space then it is attached with the window object. Refer 'file1' :-)

-> Lexical Environment: It is a local memory plus lexical environment of its parent.

-> Scope Chaining: It is basically finding the element in the lexical environment. Means where the different execution contexts connected lexically.

-> let and const are defined in a different space before initialization(not in global space), so we cannot access these variables during temporal dead zone.

-> Block: It combines the multiple js statements in a group. We group the multiple statement so that we can use it where js expects only one statement.

-> Block Space: what variables and functions we can access inside a block is called block space.
Shadowing is if we have the same variable (with var) outside the block , then the variable inside the block will overwrite the value of outside variable and now the value of variable has changed. This is because they has pointed the same memory space i.e global. Refer 'file1'

-> Closure: A function bind together with its lexical environment or lexical scope. When we return a function from a function , then it returns the that whole function with its lexical environment.
USES OF CLOSURES:
1. Module design pattern
2. Currying
3. Functions like once
4. Maintaining state in async world
5. setTimeouts
6. Iterators


                        DIFFERENT TYPES OF FUNCTIONS

-> Function Statement: A normal function which we make. Refer 'file1'. 

-> Function Expression: function is assigned in a variable or function acts as a value. Refer 'file1'
"DIFFERENCE BETWEEN ABOVE TWO IS HOISTING"

-> Function Declaration: Function statement are known as function declaration.

-> Anonymous Function: A function without name is anonymous function. It does not have their own identity. It is used where function used as a value (function expression).

-> Named Function Expression: When we used name in 'function expression' instead of anonymous function.

-> First Class Function: The ability of functions to be used as a value or can be passed in a another function and can be return from another function. All together is called first class function.

-> Callback Functions: These are given as a arguments to some another function and are executed at a later time, often in response to future events or some asynchronous tasks.

-> Higher Order Function: If a function takes another function as a parameter and returns a function , then it is called higher order function.

-> Microtask Queue: This queue has higher priority than callback queue. All the functions come from promises go inside this queue.

-> JIT Compilation: JS can use interpreter as well as compiler so it makes it a Just In Time(JIT) compilation language.

-> map(): It takes transformation logic (or function) as an argument to convert every element of an array into a new element and return new array.

-> filter(): It also takes a function as an argument and returns the specific elements according to the function. See example in 'file1'.


-> Callback: Async code in javascript is written with callback functions.

                    DISADVANTAGES OF CALLBACK   
-> Callback Hell: When we have a large codebase and API depends on one after another, then we can have callback after callback. It is unmaintainable.

-> Inversion of Control: When we lose the control of our code during using callback. It means that we are blindly trusting on an API that it will give us the data and call our callback function after some time. But sometimes, this trust breaks...

-> Promise: It is an object representing the eventual completion or failure of an asynchronous operation.
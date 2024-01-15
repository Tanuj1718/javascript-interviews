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
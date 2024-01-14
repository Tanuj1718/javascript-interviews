Execution context: Everything in JavaScript happens inside an execution context.

-> Two components of execution context
1. Memory Component or Variable Environment where all variables stored in a key value pair.
2. Code Component or Thread of Execution where all code execute like a thread one line at a time.

Call Stack maintains the order of execution of excution contexts.

Hoisting: It is a phenomenon by which we can access the function or variables before declaring or defining it. This is due to execution context.

-> If our JS file is empty, then also js engine creates global execution context with window and this object in the browser. It is created by js engine which is different for different browsers.
1. If we create any variable in global space then it is attached with the window object. Refer 'file1' :-)
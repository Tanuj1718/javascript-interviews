// var a = 10;
// function b(){
//     var x = 9;
// }
// console.log(window.a);
// console.log(a) //by default it is taking a in a global space
// console.log(this.a) //it is also refering to the same variable of global space


//SHADOWING
// var a =98
// {
//     var a = 2
//     console.log(a) //will print 2
// }
// console.log(a) // will print 2

//setTimeout
// function x(){
//     let i = 3;
//     setTimeout(()=>{
//         return console.log(i)
//     },3000)
//     console.log("inside function")
// }
// x();
// console.log("outside function")

//FUNCTION STATEMENT
// function a(){
//     console.log("a called")
// }


//FUNCTION EXPRESSION
// var b = function (){
//     console.log("b called")
// }

//NAMED FUNCTION EXPRESSION
//  var b = function xyz(){
//     console.log("b called")
//  }
//  b(); //print b called.
//  xyz(); //it will give error

//FIRST CLASS FUNCTION
// var b = function (param1){
//     return function xyz(){

//     }
// }
// console.log(b());
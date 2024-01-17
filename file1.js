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


//FILTER
// const arr = [2,5,4,3,7,9]
// function isOdd(x){   //takes each element x 
//     return x%2
// }
// const Output = arr.filter(isOdd)
// console.log(Output) //print an array containing odd values


//CALLBACKS AND PROMISES
//  const cart = ["bat", "flowers", "frames"]
//  createOrder(cart, function(orderId){ //we have given callback function to the api, trusting that it will call our function. But it can cause inversion of control
//     proceedToPayment(orderId)
//  })

 //In the above code , we are passing callback function in another function but in the below code we are attaching callback function with the promise.

//  const promise = createOrder(cart);
//  promise.then(function (orderId){
//     proceedToPayment(orderId)
//  })

 const GITHUB_API = "https://api.github.com/users/Tanuj1718"
 const user = fetch(GITHUB_API)
 user.then(function(data){
    console.log(data)
 })
// var a = 10;
// function b(){
//     var x = 9;
// }
// console.log(window.a);
// console.log(a) //by default it is taking a in a global space
// console.log(this.a) //it is also refering to the same variable of global space


//SHADOWING
var a =98
{
    var a = 2
    console.log(a) //will print 2
}
console.log(a) // will print 2
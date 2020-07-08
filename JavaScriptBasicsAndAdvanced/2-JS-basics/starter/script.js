
/******** Begin **********
console.log('Hello World-1!');
var job;
console.log(job); //OP: Undefined

job = 'Teacher';
console.log(job);//OP: Teacher
alert('You are a ' + job);

var show = prompt('What is your profession?');
console.log(show);*/

//var and let 
/*scoping rules

function run() {
    var a = 'varA';
    let b = 'letB';
    console.log('var and let variables: ' + a, b);

    {
        var c = 'c';
        let d = 'd';
    }

    console.log('var type scoping: ' + c);
    console.log(d); //Reference error

}
run()*/


//Temporal Dead Zone 
/* Variable Hoisting
console.log(a);
var a = 5;
*/
/*Fucnton Hositing 
b();  
function b() {
    console.log('function defn can be hoisted');
}

boo();
const boo = function () {
    console.log('function expressions cannot be hoisted');;
}*/


//example : Temporal Dead Zone - let keyword
/*
function ra() {
    console.log(a); // ReferenceError : cannot access a before intialization 
    let a = 'let variables temporal dead zone';
    console.log(a); // no output
}
ra();
*/
//example-3 : Temporal Dead Zone 
/*
a = 2; //cannot access a before intialization 
console.log(a); //cannot access a before intialization 
let a = 5;
*/



//function statements and expressions
/*
example-1:
let a = function () {
 
    console.log('function expression');
}
console.log(a()); // TO DO: check y this prints both 'function expression' and 'undefined'

*/
/*
example-2:
var a = function (num) {
//console.log("a -> num", num)
 
    return 'function expression: '+num;
}
// a(7);
console.log(a(4));
*/

/*
Function Expression can have name too , which allows the self reference
example-3: 
const fact = function fa(num) {
    return num < 2 ? 1 : num * fa(num - 1);
}
console.log(fact(5));
*/
/*
//scope
console.log(sq(2));//cannot access before initialization
const sq = function(num) {
    return num * num;
}
*/
/*
// fucntion stack
function foo(num) {
    if (num < 0)
        return;
    console.log('begin'+num);
    foo(num - 1);
    console.log('end'+num);
}
foo(3);
*/

// Closures
var a = (function () {
    var myCode = 'dont show'; // restricts the modifications for this
    return function () {
        return myCode;
    }
})
   
console.log("a", a() );// dont show

//pt falls of Closures
//if inner and Outer scope variables of same name , then the outer scope variables will not be referenced
//The inner scope variable "overrides" the outer one, until the program exits the inner scope
/*var a = function (n) {
    return { setName: function (n) { 
        n = n } };
}
console.log(a(2).setName); //op: object of setName function
*/

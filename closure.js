// a closure is a function  having acces to the parent scope , even after the parent function has closed

//a closure is created when we define a function, not when a func is executed


//closure  --> a function bundled with its lexical environment is called closure, in innermost func , the func remembers ther reference of the variable.


// A closure gives access to all the variables of it's parent function even after the that parent function has returned or executed. The function keeps a refernce to it's outer scope which preserves the scope chain throughout the time
// function x(){
//     let bub = 1;

//     function y(){
//         console.log(bub);
//     }
//     return y;

// }

// var z = x()
// console.log(z)
// z()

//deep nested closure

// function z(){
//     let a = 100;
//     function y(){
//         let b = 50
//         return function x(){
//             console.log(a,b)
//         }
       
//     }
//     const yfunc = y();
//     yfunc()
// }
// z();

function outer(){
    let a = 100;
    return function inner(){
        console.log(a)
    }
}
const returnedfunc = outer()
returnedfunc();

//uses 
- modules Design pattern
- currying
-function like once
- memoize
- maintaining state in async world
- setTimeouts
- iterators
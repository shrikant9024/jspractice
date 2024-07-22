// let name = {
//     firstname: "sachin",
//     lastname :'tendulkar',

//     printFullName: function(){
//         console.log(this.firstname + " " + this.lastname)
//     }
// }

// name.printFullName()

// let name2 = {
//     firstname: 'Virat ',
//     lastname: "kohli"
// }
// name.printFullName.call(name2)
//call --> function borrowing, when we need to borrow a func from another object and execute for another object. 
// if you have a method in one object that you want to use with another object, '.call' lets u borrow that method and execute it int the context fo the other object
let name = {
    firstname: "sachin",
    lastname :'tendulkar',

   
}
let printFullName = function(){
    console.log(this.firstname + " " + this.lastname)
}

printFullName.call(name)
//first paramet for call is reference to this variable

let name2 = {
    firstname: 'Virat ',
    lastname: "kohli"
}
 printFullName.call(name2)
//better way than before 

//suppose we need to pass more argument in the func
let printNameTown = function(town,state,city){
    console.log(this.firstname + " " + this.lastname + " from " + town + " , " + state + " , " + city)
}
printNameTown.call(name2,"delhi")
//here second argument is the parameter passed 
//.call --> immediately invoked with context  call is used to immediately invoke a function with a specified this context and arguments.

// --------------------------------------------------------------------------------------------------------------------------------
//apply method  ==> the diff is way we pass argument
printNameTown.apply  (name2,["delhi", "UP","thane"])
//in apply we pass as second argument and rest as an array list whereas in call its normal way
//use cases - func borrow with array arguments, variable number of arguments

// ---------------------------------------------------------------------------------------------------------------------------------
//bind method
//same as call but diff is , bind give u the copy of the func and it can be invoked later rather than directly invoking it where we write the line of code like in apply
//use case - pre setting,  event handeler- Bind a function to a specific this context when passing it as a callback, ensuring it behaves as expected.


let info = printNameTown.bind(name2, "mumbai","dehi","thane")
console.log(info)
info()

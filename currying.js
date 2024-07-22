// let multiply = function(x,y){
//     console.log(x*y)
// }

// let multiplybytwo = multiply.bind(this,2)
// multiplybytwo(5)

//here this is the context for multiply, 2 is the first arg i.e x and in func call mutliplybytwo(5), y is 5, second argymument ,hence ans is 10

// let multiplybythree = multiplybytwo.bind(this,3)
// multiplybythree(4)
//in this this is context of multiply so in multiplybytwo it already had 2 as x arg so in this we have 3 as y arg and 4 is ignored so we have ans as 6

///------------------------------------------------------------------------------------------------------------------------------------

//using func closures

let mult = function(x){
    return function (y){
        console.log(x*y)
    }
}

let multiplybyfour = mult(4)
multiplybyfour(5)

//here x is 4 and 5 is y
//mutl is desigened to first accept one argument and then return func which accepts another arg and gives ans
//  mult is called and return a func in multiplybyfour and then multiplybyfour is called which gives value of another func y so ans is 20,  5 *6


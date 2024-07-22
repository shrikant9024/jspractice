function x(){
    let i =1;

    setTimeout(function(){
        console.log(i),3000
    }),
    console.log('Hello js')
}

x()

//hello
//js


function x(){
    for(var i =0;i<=5;i++){
        setTimeout(function(){
            console.log(i)
        },1000)
    }
    console.log('hello js')
}

x();

//var has func scope , so i is referring to same reference memory coz of func scope
//let has block scope so output would be 0,1,2,3,4,5,, it creates a new scope on every iteration .i.e on every iteration it has a new copy of i on every iteration
//applying same thing with var. we can use closure
function x(){
    for(var i =0;i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x)
            },1000)
        }
       close(i)
    }
    console.log('hello js')
}

x();




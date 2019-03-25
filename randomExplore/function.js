// javascript compile has gone through 2 times,
// before executing our code and finally 3rd times our code get's  executed




//NOTE :===>>> FUNCTION don't see which variable is passed in,instead it check that which value is passed in 

function print(x,y){
    let name = x ; 
    x = 'The Great Tawhid Abdullah'; 
}; 


var x = 'Tawhid ', y = 'Abdullah'; 
print(x,y); 
// console.log(x); // 1 ==>> because function seeing x as a value not a variable 



// write an outer function with an arguement which will return a function and that function will return 
// argument of outer function 


function outer (name) {
    return function (){
        return name; 
    }
}; 

// console.log(outer('Tawhid Abdullah')());  

// WRITE A FUNCTIN THAT RETURNS FROM 2 INVOCATION 
function f1(x){
    return function (y){
        return x + y
    }; 
}; 

// console.log(f1(2)(3)); 

// write a function that takes a binary function, and makes it callable with 2 invocations

function binaryFunction(x,y){
  return x + y
}

function randomfunction (binaryFunction){
    return function(x){
        return function (y){
          return  binaryFunction(x , y); 
        }
    };  
}; 

console.log(randomfunction(binaryFunction)(3)(4));



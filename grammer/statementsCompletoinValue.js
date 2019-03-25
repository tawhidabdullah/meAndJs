var b;

if (true) {
    b = 4 + 38;
}



// we can capture the implicit return of and block like below... this is not recommended 

var a, b; // declaretion statement

a = eval( "if (true) { b = 4 + 38; }" ); // asignment statement 
console.log(a); // 42
var x = "name: Tawhid Abdullah";
let y = "name: The great Tawhid Abdullah";

// the variable of let does not added with to global object

console.log(this.y);
console.log(this.x);

//////////////////////////////////////////////////////////////////////////////////////////////////

// also works in lexical scopes 

{
    let name = 'Tawhid'; 
    {
      console.log(name);
    }
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////

  function test(){
    var foo = 33;
    if (true) {
       let foo = (foo + 55); // ReferenceError in nonstrict mode and undefined in the strict mode 
       console.log(foo)
    }
 }
 test();
 
 
 let foo; 
 console.log(foo); 
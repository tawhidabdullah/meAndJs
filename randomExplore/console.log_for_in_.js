let object = [

   {
  name: 'hey',
  roll : 967021
},
   {
  name: 'hey there',
  roll : 967021
}
,
   {
  name: 'hey get a life',
  roll : 967021
}
]; 


object.forEach((e)=> {
  if(e.name === 'hey'){
    // console.log(e); 
  
  }
}); 



const outerFunction  = (obj) => {
  let greatObject = obj; 
   return () => {
      if (greatObject){
      console.log(greatObject); 
      }
    else {
     console.log(false); 
      }
   }


}


// outerFunction({name: 'Tawhid Abdullah'})(); 


// EXPLORE CONSOLE.LOG

var storage = (function () {
    var store = [];
    return {
        "add": function (item) {
            store.push(item);
        },
        "get": function () {
            return store;
        }
    };
    
}());

// console.log(storage); // a function will print or give that which was returned 
// from the function 

// storage.add('hi there'); 
// console.log(storage.get()); 
// console.log(storage, storage.get(), storage.add('hi there #2'));

// OUTPUT ==>> ["hi there", "hi there #2"]0: "hi there"1: "hi there #2"length: 2__proto__: Array(0) undefined




const settingTime = () => {
  let bucket = [];
  return {
    add: function(item){
     setTimeout(()=> bucket.push(item),3000); 
    },
    get: function(){
      return bucket; 
    }
  } 
}

let yy = settingTime(); 

// console.log(yy.add('get a life'), yy.get() , yy.add('get another life') ); 



// WE CAN DEFINE A FUNCTION WITH ($,_) ,, this is awesome 


function _454 (){
  console.log('get a life'); 
}; 

_454                    (); 



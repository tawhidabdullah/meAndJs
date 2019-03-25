// let's explore recursion ===>///////////>>>


// TASKS: print 'The Great Tawhid Abdullah' 101 times 

const printMyName101times = (number) =>{
  if(number === 102) return; 
  console.log('The Great Tawhid Abdullah' + ' ' + number); 
  printMyName101times(number + 1); 
}; 

// printMyName101times(0); 


const filterArray = [
 { name : 'tawhid Abdullah'},
 { roll : 967021},
 { age: 17}
]; 


filterArray.filter(c => 'tawhid Abdullah' === c.name); 


// filter returns the list's item of condition is true; 
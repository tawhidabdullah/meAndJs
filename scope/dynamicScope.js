// dynamic scope

// let name = 'Tawhid Abdullah';

function printName() {
  console.log(name);
}

function dynamicScope() {
  let name = "Tawhid Abdullah";
  printName();
}

dynamicScope();

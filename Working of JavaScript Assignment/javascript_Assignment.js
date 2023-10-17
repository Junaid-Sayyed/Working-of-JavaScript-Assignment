

// Function Declaration Hoisting:

const sum = addNumbers(5, 7);
console.log("The sum is: " + sum);

function addNumbers(a, b) {
  return a + b;
}





// Function Expression Hoisting:

const product = multiplyNumbers(4, 6);
console.log("The product is: " + product);

const multiplyNumbers = function (a, b) {
  return a * b;
};




// Variable Hoisting with var:

function demonstrateVariableHoisting() {
  console.log("Value before assignment: " + hoistedVar); // Outputs "Value before assignment: undefined"
  var hoistedVar = 42;
  console.log("Value after assignment: " + hoistedVar); // Outputs "Value after assignment: 42"
}

demonstrateVariableHoisting();





// Variable Declaration with Different Scopes:

function demonstrateVariableScopes() {

  let usingLet = "I'm using let";
  var usingVar = "I'm using var";
  const usingConst = "I'm using const";

  console.log(usingLet, usingVar, usingConst);

  {
    // Block scope
    let blockLet = "I'm block scoped";
    var blockVar = "I'm block scoped too";
    const blockConst = "I'm block scoped as well";
  }

  console.log(blockVar); // Outputs "I'm block scoped too"
  console.log(blockLet); // ReferenceError: blockLet is not defined
}

demonstrateVariableScopes();


// Temporal Dead Zone with let:

function demonstrateTemporalDeadZone() {
  console.log(blockLet); // ReferenceError: Cannot access 'blockLet' before initialization
  let blockLet = "I'm in the temporal dead zone";
}

demonstrateTemporalDeadZone();
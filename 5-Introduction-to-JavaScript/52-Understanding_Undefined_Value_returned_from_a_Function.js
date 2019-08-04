// A function that doesn't have a return statement, when you call it, will process the inner code but the returned value is undefined.

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(num) {
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();

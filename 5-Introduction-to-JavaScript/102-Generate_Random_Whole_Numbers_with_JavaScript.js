// Random whole numbers can be generated by calling Math.random(), multiplying the result by some value, then passing the value to Math.floor() function to round the value down to the nearest whole number.

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}

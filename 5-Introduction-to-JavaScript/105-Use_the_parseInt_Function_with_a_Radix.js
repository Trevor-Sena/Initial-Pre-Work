// The radix specifies the base of the number in the string. The radix can be an integer between 2 and 36.

function convertToInteger(str) {
  var convertToInteger = parseInt(str, 2);
  return convertToInteger;
}

convertToInteger("10011");

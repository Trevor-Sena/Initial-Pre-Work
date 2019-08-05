// A new keyword called let was introduced in ES6 to solve the potential overwriten issue with the var keyword. The new keyword will trhow an error.

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

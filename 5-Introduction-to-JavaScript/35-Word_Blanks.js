// You can assign variables to fill in missing parts of a senteces using the string concatenation operator +.

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
  result+= "Our " + "big " + "brown " + "dog " + "ran " + "very " + "quickly " + "towards " + "us."
  result+= "The " + "little " + "yellow " + "cat " + "slowly " + "hit " + "the " + "ground."
    // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
wordBlanks("cat", "little", "hit", "slowly");

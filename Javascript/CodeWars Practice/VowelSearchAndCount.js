import codewars from "https://esm.sh/codewars";

/////////////////////////////////  
////////  Challenge  ////////////
/////////////////////////////////

/*

Return the number of vowels in a given string. 
Consider a, e, i, o, u, but not y. 
The input string will consist only of lowercase 
letters and/or spaces.

*/

  
/////////////////////////////////  
////////////  Setup  ////////////
/////////////////////////////////

function getCount(str) {
  let vowelcount = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      vowelcount += 1;
    } else if (str[i] === "e") {
      vowelcount += 1;
    } else if (str[i] === "i") {
      vowelcount += 1;
    } else if (str[i] === "o") {
      vowelcount += 1;
    } else if (str[i] === "u") {
      vowelcount += 1;
    }
  } return vowelcount;
}
  
  
  
/////////////////////////////////  
////////////  Tests  ////////////
/////////////////////////////////

const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
  
  it("should return 4 for 'pear tree'",function(){
    assert.strictEqual(getCount("pear tree"), 4) ;
  });
  
  it("should return 5 for 'dude where's my car",function(){
    assert.strictEqual(getCount("dude where's my car"), 5) ;
  });
  
  it("should return 0 for 'my pyx",function(){
    assert.strictEqual(getCount("my pyx"), 0) ;
  });
});

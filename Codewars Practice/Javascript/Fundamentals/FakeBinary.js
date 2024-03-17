import codewars from "https://esm.sh/codewars";

///////////////////////////////////////////////////////////////  
////////////////////////  Challenge  //////////////////////////
///////////////////////////////////////////////////////////////

/*

Given a string of digits, replace any digit below 5 with '0' and 
any digit 5 and above with '1'. Return the resulting string.
  
*/
  
///////////////////////////////////////////////////////////////  
////////////////////////  Setup  //////////////////////////////
///////////////////////////////////////////////////////////////

function fakeBin(x) {
  
  let new_x = "";
  
  for (let i = 0; i < x.length; i++) {
    if (x.charAt(i) < 5) {
      new_x += "0";
    }
    else {
      new_x += "1";
    }
  }
  
  return new_x;
  
} 
  
  
  
///////////////////////////////////////////////////////////////  
////////////////////////  Tests  //////////////////////////////
///////////////////////////////////////////////////////////////

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
    assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
    assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
  })
});

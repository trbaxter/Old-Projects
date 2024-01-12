import codewars from "https://esm.sh/codewars";

/* 

  Challenge:

  Given an array of integers, return an array 
  where the first element is the count of positive
  numbers and the second element is the sum of 
  negative numbers. 

  If the input is an empty array or null, return an 
  empty array. 
  
*/

  
/////////////////////////////////  
////////////  Setup  ////////////
/////////////////////////////////

function countPositivesSumNegatives(input) {
  var pos_nums = 0
  var neg_sum = 0
  const final_array = new Array();
  
  if (input == undefined || input.length === 0) {
    return [];
  }
  
  for (i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      pos_nums += 1;
    } else if (input[i] < 0) {
      neg_sum += input[i];
    }
  }
  
  final_array.push(pos_nums);
  final_array.push(neg_sum);
  
  return final_array;
  
}
  
  
  
/////////////////////////////////  
////////////  Tests  ////////////
/////////////////////////////////

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
  it("Testing for fixed test 1", () => {
    let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let actual = countPositivesSumNegatives(testData);
    let expected = [10, -65];
    assert.deepEqual(actual, expected);
  })
    
  it("Testing for fixed test 2", () => {
    let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    let actual = countPositivesSumNegatives(testData);
    let expected = [8, -50];    
    assert.deepEqual(actual, expected);
  })
  
  it("Testing for fixed test 3", () => {
    let testData = [];
    let actual = countPositivesSumNegatives(testData);
    let expected = [];    
    assert.deepEqual(actual, expected);
  });
});

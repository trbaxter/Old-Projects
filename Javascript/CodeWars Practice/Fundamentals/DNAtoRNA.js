import codewars from "https://esm.sh/codewars";

///////////////////////////////////////////////////////////////
////////////////////////  Challenge  //////////////////////////
///////////////////////////////////////////////////////////////

/*

Deoxyribonucleic acid, DNA is the primary information storage
molecule in biological systems. It is composed of four nucleic
acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and
Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in
cells. RNA differs slightly from DNA its chemical structure
and contains no Thymine. In RNA Thymine is replaced by another
 nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

*/

///////////////////////////////////////////////////////////////
////////////////////////  Setup  //////////////////////////////
///////////////////////////////////////////////////////////////

function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}



///////////////////////////////////////////////////////////////
////////////////////////  Tests  //////////////////////////////
///////////////////////////////////////////////////////////////

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
    });
  })

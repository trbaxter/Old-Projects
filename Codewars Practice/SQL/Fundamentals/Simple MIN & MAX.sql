///////////////////////////////////////////////////////////////  
////////////////////////  Challenge  //////////////////////////
///////////////////////////////////////////////////////////////

/*

Create a simple MIN / MAX statement that will return the 
Minimum and Maximum ages out of all the people.

Schema of people table:
  - id
  - name
  - age

Schema of people table:
  - age_min (minimum of ages)
  - age_max (maximum of ages)
  
*/
  
///////////////////////////////////////////////////////////////  
////////////////////////  Setup  //////////////////////////////
///////////////////////////////////////////////////////////////

SELECT 
    MIN(age) AS age_min,
    MAX(age) AS age_max
FROM
    people
  
///////////////////////////////////////////////////////////////  
////////////////////////  Tests  //////////////////////////////
///////////////////////////////////////////////////////////////

results = run_sql

describe :items do
   it "should return 1 item" do
    expect(results.count).to eq 1
   end
end

import codewars_test as test
from solution import past

#///////////////////////////////////////////////////////////////  
#////////////////////////  Challenge  //////////////////////////
#///////////////////////////////////////////////////////////////



# Your clock shows h hours, m minutes, and s seconds after
# midnight. Your task is to write a function which returns the
# time elapsed since midnight in milliseconds.
  


#///////////////////////////////////////////////////////////////  
#////////////////////////  Setup  //////////////////////////////
#///////////////////////////////////////////////////////////////

def past(h, m, s):
    hrs_to_s = h * 60 * 60
    m_to_s = m * 60
    total_s = hrs_to_s + m_to_s + s
    milli_s = total_s * (10 ** 3)
    return milli_s
  
  
  
#///////////////////////////////////////////////////////////////  
#////////////////////////  Tests  //////////////////////////////
#///////////////////////////////////////////////////////////////

@test.describe("Fixed Tests")
def basic_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(past(0,1,1),61000)
        test.assert_equals(past(1,1,1),3661000)
        test.assert_equals(past(0,0,0),0)
        test.assert_equals(past(1,0,1),3601000)
        test.assert_equals(past(1,0,0),3600000)

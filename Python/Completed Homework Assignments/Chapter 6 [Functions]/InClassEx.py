# Chapter 6 - In-Class Exercise

print("This program computes the distance an object falls in meters under the influence of gravity.")
print("These results do not incorporate attenuation effects such as air resistance or drag.")

def fallingDistance(seconds):
    distance = 0.5 * 9.8 * (seconds ** 2)
    return distance

def main():
    print()
    print(" Time [s]   " + "      Distance fallen [m]")
    print("------------------------------------------")
    for i in range(1,11):
        print(format(i, ">6d"), end = '\t')
        print(format(fallingDistance(i), ">20.0f"))

main()

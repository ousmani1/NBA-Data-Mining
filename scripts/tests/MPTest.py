import time
import multiprocessing

def calc_square(numbers, test):
    for n in numbers:
        print('Square: ' + str(n*n))
        print(test)

def calc_cube(numbers, test):
    for n in numbers:
        print('Cube: ' + str(n*n*n))
        print(test)

arr = [2,3,8,9]
test = "Test"

if __name__ == "__main__":

    p1 = multiprocessing.Process(target=calc_square, args=(arr, test))
    p2 = multiprocessing.Process(target=calc_cube, args=(arr, test))
    
    p1.start()
    p2.start()

    p1.join()
    p2.join()


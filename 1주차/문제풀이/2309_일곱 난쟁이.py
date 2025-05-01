# 첫번째 코드
array = []

for i in range(9):
    array.append(int(input()))

array.sort()

for i in range(len(array)):
    for j in range(i + 1 , len(array)):
        if sum(array) - (array[i]+array[j]) == 100:
            for k in range(len(array)):
                if (k == i or k == j):
                    continue
                else:
                    print(array[k])
            exit()

# 두번째 코드
import itertools

array = [int(input()) for _ in range(9)]

for i in itertools.combinations(array, 7):  
    if sum(i) == 100:  
        for j in sorted(i): 
            print(j)
        break 
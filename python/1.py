def binary_search(target, p):
    count = 0
    left = 1
    right = p
    while left <= right:
        mid = (left + right)//2
        count += 1
        if mid > target:
            right = mid
        elif mid < target:
            left = mid
        else:
            return count

T = int(input())
for test_case in range(1, T + 1):
    P, PA, PB = map(int, input().split())
    countA = binary_search(PA, P)
    countB = binary_search(PB, P)
     
    if countA > countB:
        print(f"#{test_case} B")
    elif countB > countA:
        print(f"#{test_case} A")
    else:
        print(f"#{test_case} 0")
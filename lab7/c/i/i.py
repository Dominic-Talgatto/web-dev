a = int(input())
c = 0
for i in range(1, int(a / 2) + 1):
    if(a % i == 0):
        c += 1

print(c + 1)
import sys

for line in sys.stdin:
    a = line
    ret = convert(a)
    print int(ret)

def convert(input):
    ret = 0
    n = len(input)
    for i in range(n):
        ret += (int(input[n-i-1])) * (7**i)
    return ret
# convert('12')

# -*- coding:utf-8 -*-
class Solution:
    # array 二维列表
    def Find(self, target, array):
        i = 0;j = len(array[0]) - 1
        while i<len(array) and j>=0:
            if array[i][j] > target:
                j -= 1
            elif array[i][j] < target:
                i += 1
            else:
                print True
                return True
        print False
        return False

array = [
    [1,2,8,9],
    [2,4,9,12],
    [4,7,10,13],
    [6,8,11,15]
]
solution = Solution()
solution.Find(7,array)

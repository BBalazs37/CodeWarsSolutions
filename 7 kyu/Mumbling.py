#https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

#accum("abcd") -> "A-Bb-Ccc-Dddd"
#accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
#accum("cwAt") -> "C-Ww-Aaa-Tttt"

def accum(s):
    res = ""
    i = 1
    for letter in s:
        res = res + (letter * i).capitalize() + "-"
        i=i+1
    return res[:-1]
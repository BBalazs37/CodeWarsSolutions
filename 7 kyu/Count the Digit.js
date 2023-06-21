//https://www.codewars.com/kata/566fc12495810954b1000030/

/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
Square all numbers k (0 <= k <= n) between 0 and n.
Count the numbers of digits d used in the writing of all the k**2.
Implement the function taking n and d as parameters and returning this count.
*/

function nbDig(n, d) {
    let arr = new Array(n+1)
    let digitCount = (str, digit) => str.split('').filter(a => a === digit.toString()).length
    return arr.fill(0)
      .map((elem,ind) => (ind*ind).toString())
      .reduce((acc, elem) => acc + digitCount(elem, d), 0)
}
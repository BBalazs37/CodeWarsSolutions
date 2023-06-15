//https://www.codewars.com/kata/534ea96ebb17181947000ada/

//Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

//Explanation: You start with 1 piece of chocolate. By breaking an existing piece horizontally or vertically, you merely increase the total number of pieces by one.
function breakChocolate(n,m) {
  return Math.max(m * n - 1, 0);
}
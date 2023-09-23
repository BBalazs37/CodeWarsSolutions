//https://www.codewars.com/kata/590e03aef55cab099a0002e8/
/*

*/
function incrementer(nums) { 
  return nums.map((elem, ind) => (elem+ind+1) % 10)
}
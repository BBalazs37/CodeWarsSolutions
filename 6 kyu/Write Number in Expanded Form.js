//https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num) {
  let arr = num.toString().split('');
  for(i = 0; i < arr.length; i++){
    arr[i] = (arr[i] + '0'.repeat(arr.length-i-1))
  }
  return arr.filter(a => a.charAt(0) !== '0').join(' + ');
}
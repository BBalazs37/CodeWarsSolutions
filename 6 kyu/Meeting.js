//https://www.codewars.com/kata/59df2f8f08c6cec835000012/
/*
s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that
makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:
"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
*/
function meeting(s) {
  let arr = s.toUpperCase().split(';').map(elem => elem.split(":"))
  
  arr.sort((a,b) => {
    if(a[1] === b[1]){
       return a[0] > b[0] ? 1 : -1;
    }else{
      return a[1] > b[1] ? 1 : -1;
    }
  })
  
  return arr.map(elem => `(${elem[1]}, ${elem[0]})`).join('')
}

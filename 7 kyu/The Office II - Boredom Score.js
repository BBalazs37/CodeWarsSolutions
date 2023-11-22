//https://www.codewars.com/kata/57ed4cef7b45ef8774000014/
/*
You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.
Each department has a different boredom assessment score, as follows:
Depending on the cumulative score of the team, return the appropriate sentiment:
<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/

function boredom(staff){
    const boredomChart = {
      'accounts':1,
      'finance':2,
      'canteen':10,
      'regulation':3,
      'trading':6,
      'change':6,
      'IS':8,
      'retail':5,
      'cleaning':4,
      'pissing about':25
    }
    let score = Object.values(staff).map(a => boredomChart[a]).reduce((a,b) => a+b, 0);
    return score <= 80 ? 'kill me now' : 
          score < 100 ? 'i can handle this' : 'party time!!';
    
  }
  
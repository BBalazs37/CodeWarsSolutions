//https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
  let counts = {};
  
  for(let i = 0; i<string.length; i++){
    if(counts.hasOwnProperty(string[i])){
      counts[string[i]]++;
    } else { 
      counts[string[i]] = 1;
    }
  }
  
  return counts;
}
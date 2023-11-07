//https://www.codewars.com/kata/5828713ed04efde70e000346
/*
You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object which includes the count of each coding language represented at the meetup.
your function should return the following object:

{ C: 2, JavaScript: 1, Ruby: 1 }
*/
function countLanguages(list) {
  let counts = {};
  for(let i = 0; i<list.length; i++){
    let lang = list[i].language;
    if(counts.hasOwnProperty(lang)){
      counts[lang]++;
    } else {
      counts[lang] = 1;
    }
  }
  return counts;
}
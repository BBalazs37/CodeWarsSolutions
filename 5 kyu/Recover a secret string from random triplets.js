//https://www.codewars.com/kata/53f40dff5f9d31b813000774

var recoverSecret = function(triplets) {
  let pairs = convertTrisToPairs(triplets)
  let secret = ''
  let letter = ''
  
  while(pairs.length > 0){
    letter = findFirstLetter(pairs)
    secret += letter
    if(pairs.length === 1){
      secret += pairs[0][1];
    }
    console.log(pairs, secret)
    pairs = removeLetterFromPairs(pairs, letter)
  }
  return secret;
}

function convertTrisToPairs(triplets){
  let pairs = []
  for(let i = 0; i<triplets.length; i++){
    pairs.push([triplets[i][0], triplets[i][1]])
    pairs.push([triplets[i][0], triplets[i][2]])
    pairs.push([triplets[i][1], triplets[i][2]])
  }
  //remove dublicate pairs
  return pairs.filter((item, index) => {
    return index === pairs.findIndex(obj => {
    return JSON.stringify(obj) === JSON.stringify(item);
  });
  });
  return pairs;
}

function removeLetterFromPairs(pairs, letter){
  return pairs.filter(a => a[0] !== letter && a[1] !== letter)
}

//The letter that is never the second one in any pair
function findFirstLetter(pairs){
  let firstLetter = pairs[0][0]
  for(let i = 0; i<pairs.length; i++){
    if(pairs[i][1] === firstLetter){
      firstLetter = pairs[i][0]
      i = 0;
    }
  }
  return firstLetter
}
//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x){
  let maxScore = 0;
  let maxScoreWord = 'a'
  
  function wordScore(word){
    let score = 0;
    word.split('').forEach((element,index) => score += word.charCodeAt(index)-96)
    return score;
  }
  
   x.split(' ').forEach(x => {
    if(wordScore(x) > maxScore) {
      maxScore = wordScore(x)
      maxScoreWord = x;
    }
  })

  return maxScoreWord
}
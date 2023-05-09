//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  let oddArr = []
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
      oddArr.push(array[i])
    }
  }
  oddArr = oddArr.sort((a,b) => a-b)
  console.log(oddArr)
  let j = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
      array[i] = oddArr[j]
      j++;
    }
  }
  return array;
}
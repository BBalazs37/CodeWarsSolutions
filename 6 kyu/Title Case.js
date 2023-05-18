//https://www.codewars.com/kata/5202ef17a402dd033c000009

function titleCase(title, minorWords) {
  if(title === '') return ''
  let titleArr = title.toLowerCase().split(' ')
  if(minorWords === undefined){
    return titleArr.map(word =>  word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')
  }
    
  let minorWordsArr = minorWords.toLowerCase().split(' ')
  titleArr = titleArr.map((word,i) => {
    if(i === 0 || !minorWordsArr.includes(word)){
      return word[0].toUpperCase() + word.slice(1).toLowerCase()
    } else {
      return word.toLowerCase()
    }
  })
  return titleArr.join(' ')
}
//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/

function duplicateEncode(word){
    return word.toLowerCase().split('').map((elem, i, array) => {
      return array.filter(a => a === elem).length > 1 ? ')' : '('
    }).join('')
}

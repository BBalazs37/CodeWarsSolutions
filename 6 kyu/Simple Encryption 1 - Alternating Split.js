//https://www.codewars.com/kata/57814d79a56c88e3e0000786

function encrypt(text, n) {
  if(text === null) return null;
  let arr = text.split('')
  for(let i = 0; i < n; i++){
    let odds = arr.filter((elem, ind) => ind % 2 !== 0)
    let evens = arr.filter((elem, ind) => ind % 2 === 0)
    arr = odds.concat(evens)
  }
  
  return arr.join('')
}



function decrypt(encryptedText, n) {
  if(encryptedText === null) return null;
  let arr = encryptedText.split('')
  let decryptArr = new Array(encryptedText.length)
  for(let i = 0; i < n; i++){
    let odds = arr.slice(0, Math.ceil(arr.length/2))
    let evens = arr.slice(-Math.ceil(arr.length/2))
    arr = arr.map((elem, ind) => ind % 2 !== 0 ? odds.shift() : evens.shift())
  }
  
  return arr.join('')
}
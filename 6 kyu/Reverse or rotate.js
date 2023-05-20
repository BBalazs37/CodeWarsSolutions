//https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/

function revrot(str, sz) {
  if(sz <= 0 || sz > str.length) {return ""}
  let sumOfCubes = (str) => str.split('').reduce((a,b) => a + Math.pow(b,3),0)
  let reverseStr = (str) => str.split('').reverse().join('')

  function rotateLeft(str){
    let arr = str.split('')
    let lastElem = arr[0]
    arr.shift()
    arr.push(lastElem)
    return arr.join('')
  }

  let arr = [] 
  for(let i = 0; i<str.length; i += sz){
    arr.push(str.slice(i, i+sz))
  }

  let arr2 = arr.map((elem) => {
    return elem.length == sz ? 
      sumOfCubes(elem) % 2 == 0 ? reverseStr(elem) : rotateLeft(elem) :
      ""
  })
  return arr2.join('')
}


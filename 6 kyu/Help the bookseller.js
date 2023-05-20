//https://www.codewars.com/kata/54dc6f5a224c26032800005c

function stockList(listOfArt, listOfCat){
  let catCount = new Array(listOfCat.length)
  catCount.fill(0)
  listOfCat.forEach((elem, i) => {
    for(let j = 0; j < listOfArt.length; j++){
      if(listOfArt[j][0] === elem){
        catCount[i] += Number(listOfArt[j].split(' ')[1])
      }
    }
  })
  if(catCount.every(elem => elem === 0)) return ''
  let strArr = []
  for(let i = 0; i<catCount.length; i++){
    strArr.push(`(${listOfCat[i]} : ${catCount[i]})` )
  }
  return strArr.join(' - ')
  
}
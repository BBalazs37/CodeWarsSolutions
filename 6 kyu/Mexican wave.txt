//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
//"Hello", "hEllo", "heLlo", "helLo", "hellO"

function wave(str){
  let wave = []
  for(let i = 0; i<str.length; i++){
    let wavey = str.split('')
    wavey[i] = wavey[i].toUpperCase()
    if (wavey.join('') !== str) {wave.push(wavey.join(''))}
  }
  return wave;
}
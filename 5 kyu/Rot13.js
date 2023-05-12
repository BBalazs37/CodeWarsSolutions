//https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message){
  function encode(a){
    let cipher = ['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
                'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm']
    let pos = cipher[0].indexOf(a)
    return pos === -1 ? a : cipher[1].at(pos)
  }
  return message.split('').map(a => encode(a)).join('')
}
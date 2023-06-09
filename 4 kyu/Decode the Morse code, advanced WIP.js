//https://www.codewars.com/kata/54b72c16cd7f5154e9000457/
/*
For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may be received as follows:
HEY JUDE
···· · −·−−   ·−−− ··− −·· ·
1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011

*/
var decodeBits = function(bits){
    let TI = timeInterval(bits)
    console.log(TI)
    //return bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', ''); is this okay as a parser? 
}

//since the signal is perfect, we might reduce it so one character is one time interval, to make for easier parsing
//this will be a hard thing to achieve in the next challenge, where the signal is imperfect. but this way, the only thing that will be necessary for the next challenge is a module to remove the imperfections.
function reduceByTimeInterval(bits, TI){
	
}

//assumes the shortest series of 000 or 111 is the time interval, should be reasonable enough
//expects leading and trailing 0s to be removed
//TODO: trim 0s before this point!
function timeInterval(bits){
  let ZeroLengths = bits.split('1').map(a => a.length).filter(a => a !== 0)
  let OneLengths = bits.split('0').map(a => a.length).filter(a => a !== 0)
  let lengths = ZeroLengths.concat(OneLengths)
  return Math.min(...lengths)
}



function bitParser(bit){
	//if the bits match one of the patterns, return the .- pattern, else null
	//10: '.'
	//1110: '-'
	//1000: '. '
	//111000: '- '
	//100000000: '.   '
	//11100000000: '.   '
	
	//parser:
	//1 - dot, wait for dash
	//111 - dash, if not, its a mistake!
	//0 end of char, decodeMorse()
	
	//00 space, wait if its end of word
	//0000000 end of word
	
}

//find the time interval based on the entire code

var decodeMorse = function(morseCode){
  let words = morseCode.split('   ')
  let decodeWord = word => word.split(' ').map(a => MORSE_CODE[a]).join('')
  let result = words.map(a => decodeWord(a)).join(' ')
  result = result.trim()
  return result
}
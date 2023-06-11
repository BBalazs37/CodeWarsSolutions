//https://www.codewars.com/kata/54b72c16cd7f5154e9000457/
/*
For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may be received as follows:
HEY JUDE
···· · −·−−   ·−−− ··− −·· ·
1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011

*/
var decodeBits = function(bits){
	bits = trimZeroes(bits)
    let TI = detectTimeInterval(bits)
    bits = reduceByTimeInterval(bits, TI)
    return bitToDotsAndDashes(bits)
}

function trimZeroes(bits){
	while (bits.startsWith('0')){
		bits = bits.slice(1)
	}
	while (bits.endsWith('0')){
		bits = bits.slice(0,-1)
	}
	return bits
}

//assumes the shortest series of 000 or 111 is the time interval, should be reasonable enough
//expects leading and trailing 0s to be removed
function detectTimeInterval(bits){
	let ZeroLengths = bits.split('1').map(a => a.length).filter(a => a !== 0)
	let OneLengths = bits.split('0').map(a => a.length).filter(a => a !== 0)
	let lengths = ZeroLengths.concat(OneLengths)
	return Math.min(...lengths)
  }

//since the signal is perfectly spaced, we might reduce it so one character is one time interval, to make for easier parsing
//this will be a hard thing to achieve in the next challenge, where the signal is imperfect. but this way, the only thing that will be necessary for the next challenge is a module to remove the imperfections.
function reduceByTimeInterval(bits, TI){
	return bits.split('').filter((elem, ind) => ind % TI == 0).join('')
}

function bitToDotsAndDashes(bits){
	return bits = bits.replace(/0000000/g, '   ').replace(/111/g, '-').replace(/000/g, ' ').replace(/1/g, '.').replace(/0/g, '')
}

var decodeMorse = function(morseCode){
  let words = morseCode.split('   ')
  let decodeWord = word => word.split(' ').map(a => MORSE_CODE[a]).join('')
  let result = words.map(a => decodeWord(a)).join(' ')
  result = result.trim()
  return result
}
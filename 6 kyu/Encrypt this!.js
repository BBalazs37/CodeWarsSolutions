//https://www.codewars.com/kata/5848565e273af816fb000449/
/*
Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function(text) {
  return text.split(' ').map(a=>encryptWord(a)).join(' ');
  
  function encryptWord(text){
    let arr = text.split('');
    arr[0] = arr[0].charCodeAt(0);
    if(arr.length>=3){
      [arr[1], arr[arr.length-1]] = [arr[arr.length-1], arr[1]];
    }
    return arr.join('');
  }
}
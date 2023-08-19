//https://www.codewars.com/kata/580755730b5a77650500010c/
/*
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'
*/

function sortMyString(S) {
    return S.split('').filter((elem, i) => i % 2 == 0).join('') + 
      ' ' + 
      S.split('').filter((elem, i) => i % 2 == 1).join('')
}
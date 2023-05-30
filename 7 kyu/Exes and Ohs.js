//https://www.codewars.com/kata/55908aad6620c066bc00002a
//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    return [...str.matchAll(/x/gi)].length ==  [...str.matchAll(/o/gi)].length
}
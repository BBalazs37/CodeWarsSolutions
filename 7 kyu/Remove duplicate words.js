//https://www.codewars.com/kata/5b39e3772ae7545f650000fc/

/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta' => 'alpha beta gamma delta'
*/

function removeDuplicateWords (s) {
  return [...new Set(s.split(' '))].join(' ')
}
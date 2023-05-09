//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
  let mid = Math.floor(s.length / 2)
  return s.length % 2 == 0 ? s.slice( mid-1, mid+1) : s.slice(mid, mid+1);
}
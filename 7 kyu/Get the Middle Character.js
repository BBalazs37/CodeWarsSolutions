//https://www.codewars.com/kata/56747fd5cb988479af000028

// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

function getMiddle(s)
{
  let mid = Math.floor(s.length / 2)
  return s.length % 2 == 0 ? s.slice( mid-1, mid+1) : s.slice(mid, mid+1);
}
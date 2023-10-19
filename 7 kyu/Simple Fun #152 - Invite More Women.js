//https://www.codewars.com/kata/58acfe4ae0201e1708000075/
/*
To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. He gave you a list of integers of all the party goers.
Arthur needs you to return true if he needs to invite more women or false if he is all set.
Input/Output
An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.
*/
function inviteMoreWomen(L) {
  return L.reduce((a,b) => a+b,0) > 0
}
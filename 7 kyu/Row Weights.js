//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/

/*
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
*/

function rowWeights(array){
    let team1 = array.filter((elem,ind) => ind % 2 == 0)
    let team2 = array.filter((elem,ind) => ind % 2 == 1)
    return [team1.reduce((a, b) => a + b,0),  
            team2.reduce((a, b) => a + b,0)]
  }
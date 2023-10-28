//https://www.codewars.com/kata/58941fec8afa3618c9000184/
/*
Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

Example
For upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be 10.
*/

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let height = 0;
  let days = 0;
  let day = true;
  while(height < desiredHeight){
    if(day){
      height += upSpeed;
      days++;
    } else {
      height -=downSpeed;
    }
    day = !day;
  }
  return days;
}
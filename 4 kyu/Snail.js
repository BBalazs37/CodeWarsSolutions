//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/

snail = function(array) {
  if(array[0].length === 0){ return []}
  let seenCoords = []
  let result = []

  let snail = {
    x: 0,
    y: 0,
    direction: [0,1],
    nextX() {return this.x + this.direction[0]},
    nextY() {return this.y + this.direction[1]},
    //Turns snail 90 degrees right
    turn() {return this.direction = [this.direction[1], -this.direction[0]]}
  }
  
  for(let i = 0; i<array.length**2; i++){
    result.push(array[snail.x][snail.y])
    seenCoords.push(JSON.stringify([snail.x, snail.y]))
    
    //If snail seen the coordinates, or is out of bounds, turns right!
    if(array?.[snail.nextX()]?.[snail.nextY()] === undefined || 
        seenCoords.includes(JSON.stringify( [snail.nextX(), snail.nextY()] )))
    {
      snail.turn()
    }
    
    snail.x = snail.nextX()
    snail.y = snail.nextY()
  }
  
  return result;
}


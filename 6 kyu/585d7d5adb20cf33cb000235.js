function findUniq(arr) {
  arr.sort((a,b) => a-b) //the unique one either ends up at the beginning or end
  return arr[0] === arr[1] ? arr.pop() : arr[0];
}
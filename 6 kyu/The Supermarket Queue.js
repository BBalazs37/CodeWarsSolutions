//https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
  let time = 0;
  while(customers.length !== 0){
    for(let i = 0; i < Math.min(n, customers.length); i++){
      customers[i] -= 1;
    }
    time++;
    customers = customers.filter(x => x !== 0);
  }
  return time;
}